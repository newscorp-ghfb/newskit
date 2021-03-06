import {getStylePreset, getTypographyPreset, styled} from '../utils/style';
import {logicalProps} from '../utils/logical-properties';
import {createCssGrid} from '../dialog/styled';
import {PopoverProps} from './types';

export const StyledPopoverInnerPanel = styled.div<
  Pick<PopoverProps, 'closePosition'>
>`
  ${({closePosition}) => createCssGrid({closePosition})}
`;

export const StyledPopoverHeader = styled.div<Pick<PopoverProps, 'overrides'>>`
  display: flex;
  grid-area: header;
  align-items: center;
  box-sizing: border-box;
  ${getStylePreset('popover.header', 'header')}
  ${getTypographyPreset('popover.header', 'header')}
  ${logicalProps('popover.header', 'header')}
`;

export const StyledPopoverContent = styled.div<Pick<PopoverProps, 'overrides'>>`
  grid-area: content;
  ${getStylePreset('popover.content', 'content')}
  ${getTypographyPreset('popover.content', 'content')}
  ${logicalProps('popover.content', 'content')}
`;

export const StyledPopoverCloseButtonContainer = styled.div<
  Pick<PopoverProps, 'closePosition' | 'overrides'>
>`
  grid-area: close;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: 100%;
  ${getStylePreset('popover.closeButtonContainer', 'closeButtonContainer')}
  ${logicalProps('popover.closeButtonContainer', 'closeButtonContainer')}
  ${({closePosition}) =>
    closePosition === 'left' ? `padding-right: 0;` : `padding-left: 0;`}
`;
