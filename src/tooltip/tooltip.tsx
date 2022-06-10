import * as React from 'react';
import {AriaAttributes} from 'react';
import {
  FloatingContext,
  useDismiss,
  useFocus,
  useHover,
  useInteractions as floatingUiUseInteractions,
} from '@floating-ui/react-dom-interactions';
import {TooltipProps} from './types';
import {withOwnTheme} from '../utils/with-own-theme';
import defaults from './defaults';
import stylePresets from './style-presets';
import {BaseFloatingElement} from '../base-floating-element/base-floating-element';
import {BuildAriaAttributesFn} from '../base-floating-element';

const ThemelessTooltip: React.FC<TooltipProps> = ({
  children,
  content,
  trigger = ['hover', 'focus'],
  asLabel,
  ...props
}) => {
  const useInteractions = (context: FloatingContext<HTMLElement>) =>
    floatingUiUseInteractions([
      useHover(context, {
        enabled: trigger.includes('hover'),
      }),
      useFocus(context, {enabled: trigger.includes('focus')}),
      useDismiss(context),
    ]);

  const contentIsString = typeof content === 'string';

  const buildContextAriaAttributes: BuildAriaAttributesFn = ({
    floating: {id, open},
  }) => {
    const attrs: AriaAttributes = {};

    // If tooltip is used as a label, add aria-label or aria-labelledby to childrenProps and id to StyledTooltip;
    // aria-label is used when content is string; aria-labelledby is used when it's not a string;
    // Because of above, 'aria-describedby' has different id for reference and floating, hence manually set below as well;
    if (asLabel) {
      attrs['aria-label'] = contentIsString ? content : undefined;
      attrs['aria-labelledby'] = open && !contentIsString ? id : undefined;
    } else {
      attrs['aria-describedby'] = open ? id : undefined;
    }

    return attrs;
  };

  const buildFloatingElementAriaAttributes: BuildAriaAttributesFn = () => ({
    'aria-hidden': true,
  });

  return (
    <BaseFloatingElement
      path="tooltip"
      className="Tooltip"
      content={content}
      buildContextAriaAttributes={buildContextAriaAttributes}
      buildFloatingElementAriaAttributes={buildFloatingElementAriaAttributes}
      useInteractions={useInteractions}
      role={!asLabel ? 'tooltip' : undefined}
      {...props}
    >
      {children}
    </BaseFloatingElement>
  );
};

export const Tooltip = withOwnTheme(ThemelessTooltip)({
  defaults,
  stylePresets,
});
