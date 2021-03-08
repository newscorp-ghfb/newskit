import {MQ} from '../utils/style';

export enum TextInputSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: TextInputSize;
  disabled?: boolean;
  label: string;
  hideLabel?: boolean;
  assistiveText?: string;
  ariaLabel?: string;
  rules?: Record<string, string | object>;
  dataTestId?: string;
  overrides?: {
    width?: string;
    input?: {
      stylePreset?: MQ<string>;
      spaceInset?: MQ<string>;
      minHeight?: string;
      typographyPreset?: MQ<string>;
      spaceStack?: MQ<string>;
      spaceInline?: MQ<string>;
    };
    label?: {
      stylePreset?: MQ<string>;
      typographyPreset?: MQ<string>;
      spaceStack?: MQ<string>;
      spaceInline?: MQ<string>;
    };
    assistiveText?: {
      stylePreset?: MQ<string>;
      typographyPreset?: MQ<string>;
    };
  };
}