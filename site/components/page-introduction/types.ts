import {ImageProps} from 'newskit';

export interface PageIntroductionProps {
  type?: string;
  name: string;
  introduction: React.ReactNode;
  hero?:
    | {
        illustration: string;
      }
    | ImageProps;
  showSeparator?: boolean;
}
