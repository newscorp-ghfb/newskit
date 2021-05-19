import {NewsKitIconProps} from '../icons';
import {MQ} from '../utils';

export type ToastID = string;

export type ToastPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

export type ToastProviderProps = {
  autoHideDuration?: number;
  horizontalOffset?: MQ<string>;
  verticalOffset?: MQ<string>;
  position?: ToastPosition;
};

export type ToastOptions = Pick<ToastProviderProps, 'autoHideDuration'>;

export type ToastAsFunction = (props: {
  onClose: Function;
  id: ToastID;
}) => React.ReactNode;

export interface ToastProps extends React.AriaAttributes {
  role?: 'status' | 'alert';
  ariaLive?: 'assertive' | 'off' | 'polite';
  children: Exclude<React.ReactNode, 'undefined'>;
  icon?: React.ReactElement<NewsKitIconProps>;
  overrides?: {
    stylePreset?: MQ<string>;
    spaceInset?: MQ<string>;
    minHeight?: MQ<string>;
    maxWidth?: MQ<string>;
    minWidth?: MQ<string>;
    width?: MQ<string>;
    icon?: {
      spaceInline?: MQ<string>;
    };
    content?: {
      /*
      NOTE: this might come in the future
      spaceInline?: MQ<string>;
      title?: {
        stylePreset?: MQ<string>;
        typographyPreset?: MQ<string>;
      };
      */
      message?: {
        stylePreset?: MQ<string>;
        typographyPreset?: MQ<string>;
      };
    };
  };
}
