import React from 'react';
import {createPortal} from 'react-dom';
import {useIsomorphicLayoutEffect} from '../utils/hooks';
import {LayerContextProvider, useLayerOrganizer, useLayer} from './context';

interface LayerProps {
  appendToRef?: React.RefObject<HTMLElement | null>;
  children?: React.ReactNode;
  className?: string;
}

const LAYER_CLASSNAME = 'nk-layer';

export const Layer: React.FC<LayerProps> = ({
  children,
  appendToRef,
  className,
}) => {
  const {host: layerOrganizerHost} = useLayerOrganizer();

  const parentLayer = useLayer(); // Needed for nesting

  const container = React.useMemo(
    () => typeof document !== 'undefined' && document.createElement('div'),
    [],
  );

  useIsomorphicLayoutEffect(() => {
    // SSR only
    /* istanbul ignore next */
    if (!container || typeof document === 'undefined') return;

    let target = layerOrganizerHost || document.body;
    if (appendToRef && appendToRef.current && appendToRef.current.appendChild) {
      target = appendToRef.current;
    } else if (parentLayer) {
      target = parentLayer;
    }

    /* istanbul ignore next */
    if (!target) return;

    const classList = [LAYER_CLASSNAME];
    if (className) className.split(' ').forEach(item => classList.push(item));
    classList.forEach(item => container.classList.add(item));

    target.appendChild(container);
    // eslint-disable-next-line consistent-return
    return () => {
      if (target) {
        target.removeChild(container);
      }
    };
  }, [container, parentLayer, layerOrganizerHost, appendToRef, className]);

  return typeof document === 'undefined' || !container ? (
    /* istanbul ignore next */
    <>{children}</>
  ) : (
    createPortal(
      <LayerContextProvider value={container}>{children}</LayerContextProvider>,
      container,
    )
  );
};