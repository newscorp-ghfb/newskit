import * as React from 'react';
import {useEffect, useRef} from 'react';
import {
  arrow,
  autoUpdate,
  useFloating,
  useId,
  offset,
  shift,
  flip,
} from '@floating-ui/react-dom-interactions';
import composeRefs from '@seznam/compose-react-refs';
import {BaseFloatingElementProps} from './types';
import {StyledFloatingElement, StyledPanel, StyledPointer} from './styled';
import {useControlled} from '../utils/hooks';
import {useTheme} from '../theme';
import {showOverridePxWarnings, getOverridePxValue} from './utils';

export const BaseFloatingElement: React.FC<BaseFloatingElementProps> = ({
  children,
  content,
  placement = 'top',
  open: openProp,
  defaultOpen,
  overrides,
  hidePointer = false,
  role,
  useInteractions,
  buildContextAriaAttributes,
  buildFloatingElementAriaAttributes,
  path,
  onDismiss,
  restoreFocusTo,
  className,
  /* istanbul ignore next */
  fallbackBehaviour = ['flip', 'shift'],
  boundary,
}) => {
  const [open, setOpen] = useControlled({
    controlledValue: openProp,
    defaultValue: Boolean(defaultOpen),
  });

  const theme = useTheme();
  const distance = getOverridePxValue(
    path,
    {theme, overrides},
    'distance',
    'distance',
  );
  const pointerPadding = getOverridePxValue(
    `${path}.pointer`,
    {theme, overrides},
    'pointer.padding',
    'padding',
  );

  useEffect(() => {
    showOverridePxWarnings(distance, 'distance');
    showOverridePxWarnings(pointerPadding, 'pointer.padding');
  }, [distance, pointerPadding]);

  const pointerRef = useRef(null);
  const {
    x,
    y,
    reference,
    floating,
    strategy,
    context,
    middlewareData: {arrow: {x: pointerX, y: pointerY} = {}},
    placement: statefulPlacement,
    refs,
  } = useFloating<HTMLElement>({
    placement,
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      ...(!hidePointer && distance ? [offset(distance)] : []),
      ...(fallbackBehaviour.includes('flip')
        ? [flip({boundary})]
        : /* istanbul ignore next */ []),
      ...(fallbackBehaviour.includes('shift')
        ? [shift({boundary})]
        : /* istanbul ignore next */ []),
      ...(!hidePointer
        ? [arrow({element: pointerRef, padding: pointerPadding})]
        : []),
    ],
  });

  const id = useId();
  const ariaArgs = {floating: {id, open}};
  const contentIsString = typeof content === 'string';
  const {getReferenceProps, getFloatingProps} = useInteractions(context);

  // We need to handle changes to the value of 'open' in a useEffect because:
  // - We can't access context.refs in onOpenChange
  // - onOpenChange isn't called in the controlled case
  const isFirstRun = useRef(true);
  useEffect(() => {
    // Don't call onDismiss or update focus on the first render.
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    // We can't use floating-ui's FloatingFocusManager to update the focus state
    // because this does not allow tabbing past the floating element without closing it.
    if (path === 'popover') {
      if (open) {
        /* istanbul ignore next */
        refs.floating?.current?.focus();
      } else if (restoreFocusTo) {
        restoreFocusTo.focus();
      } else {
        /* istanbul ignore next */
        refs.reference?.current?.focus();
      }
    }

    if (!open && onDismiss) {
      onDismiss();
    }
  }, [onDismiss, open, path, refs.floating, refs.reference, restoreFocusTo]);

  if (!content) {
    return children;
  }

  return (
    <>
      {React.cloneElement(
        children,
        getReferenceProps({
          ref: composeRefs<Element>(reference, children.ref),
          ...buildContextAriaAttributes(ariaArgs),
        }),
      )}
      {open && (
        <StyledFloatingElement
          {...getFloatingProps({
            ref: floating,
            id,
            className,
          })}
          strategy={strategy}
          $x={x}
          $y={y}
          placement={statefulPlacement}
          overrides={overrides}
          hidePointer={hidePointer}
          role={role}
          {...buildFloatingElementAriaAttributes(ariaArgs)}
          path={path}
        >
          <StyledPanel
            as={contentIsString ? 'p' : 'div'}
            overrides={overrides}
            path={path}
          >
            {content}
          </StyledPanel>
          {!hidePointer && (
            <StyledPointer
              path={path}
              id={`${id}-pointer`}
              ref={pointerRef}
              placement={statefulPlacement}
              $x={pointerX}
              $y={pointerY}
              overrides={overrides}
            />
          )}
        </StyledFloatingElement>
      )}
    </>
  );
};
