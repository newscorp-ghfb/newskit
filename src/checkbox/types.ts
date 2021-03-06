import {
  BaseSwitchIconProps,
  BaseSwitchProps,
  BaseSwitchSize,
  BaseSwitchState,
  BaseSwitchOverrides,
} from '../base-switch/types';
import {LogicalProps} from '../utils/logical-properties';

export type CheckboxIconProps = BaseSwitchIconProps;

export type CheckboxOverrides = {
  spaceStack?: BaseSwitchOverrides['spaceStack'];
  input?: Pick<
    NonNullable<BaseSwitchOverrides['input']>,
    'size' | 'stylePreset' | 'spaceInline' | 'transitionPreset'
  >;
  feedback?: Pick<
    NonNullable<BaseSwitchOverrides['feedback']>,
    'size' | 'stylePreset'
  >;
  label?: BaseSwitchOverrides['label'];
  icon?: BaseSwitchOverrides['icon'];
} & LogicalProps;

export type CheckboxProps = Omit<
  BaseSwitchProps,
  | 'path'
  | 'defaultSwitchSelectorComponent'
  | 'type'
  | 'overrides'
  | 'hideFeedback'
> & {overrides?: CheckboxOverrides};

export type CheckboxSize = BaseSwitchSize;

export type CheckboxState = BaseSwitchState;
