import {LabelProps} from './types';

import {
  getTypographyPreset,
  getStylePreset,
  getResponsiveSpacingStackHorizontal,
  getResponsiveSpacingInlineHorizontal,
  styled,
} from '../utils/style';
import {logicalProps} from '../utils/logical-properties';

export const StyledLabel = styled.label<LabelProps>`
  display: block;
  ${({size, state}) =>
    getStylePreset(`label.${size}`, '', {
      isInvalid: state === 'invalid',
      isDisabled: state === 'disabled',
      isValid: state === 'valid',
    })}
  ${({size}) =>
    getTypographyPreset(`label.${size}`, '', {
      withCrop: true,
    })};
  ${({size}) => getResponsiveSpacingStackHorizontal(`label.${size}`, '')};
  ${({size}) => getResponsiveSpacingInlineHorizontal(`label.${size}`, '')};
  ${({size}) => logicalProps(`label.${size}`)};
`;
