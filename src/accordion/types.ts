import React from 'react';
import {MQ} from '../utils';
import {LogicalPaddingProps} from '../utils/logical-properties';

export interface AccordionHeaderOverrides extends LogicalPaddingProps {
  minWidth?: MQ<string>;
  minHeight?: MQ<string>;
  stylePreset?: MQ<string>;
  typographyPreset?: MQ<string>;
  spaceInline?: MQ<string>;
  indicatorIcon?: {
    stylePreset: MQ<string>;
  };
  indicatorLabel?: {
    stylePreset?: MQ<string>;
    typographyPreset?: MQ<string>;
  };
  startEnhancer?: {
    stylePreset?: MQ<string>;
  };
}

export type AccordionPropsOverrides = {
  divider?: {
    stylePreset?: MQ<string>;
  };
  header?: AccordionHeaderOverrides;
  panel?: {
    stylePreset?: MQ<string>;
  };
};

export interface AccordionProps {
  children?: Exclude<React.ReactNode, 'undefined'>;
  disabled?: boolean;
  header?: Exclude<React.ReactNode, 'undefined'>;
  headingAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  label?: string;
  startEnhancer?: React.ReactNode;
  indicatorIcon?: React.ReactNode;
  ariaControls?: string;
  id?: string;
  expanded?: boolean;
  applyDivider?: boolean;
  overrides?: AccordionPropsOverrides;
}