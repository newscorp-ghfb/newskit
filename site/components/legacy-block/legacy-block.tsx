import React from 'react';
import {StyledComponent} from '@emotion/styled';
import {styled, Theme} from 'newskit';
import {build} from './style-builder';
import {LegacyBlockProps, StyledBlockProps} from './types';

const getStyleFromProps = (props: StyledBlockProps & {theme: Theme}) => {
  const {breakpoints, colors, typographyPresets, sizing} = props.theme;

  const getColor = (color: string) => colors[color] || color;

  const getSize = (size: string) => sizing[size] || size;

  return build(breakpoints)
    .apply({
      property: 'color',
      value: props.$color,
      transform: getColor,
    })
    .apply({
      property: 'backgroundColor',
      value: props.backgroundColor,
      transform: getColor,
    })
    .apply({
      property: 'fontFamily',
      value: props.font,
      transform: font =>
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        typographyPresets[font] && (typographyPresets[font] as any).fontFamily,
    })
    .apply({
      property: 'fontWeight',
      value: props.font,
      transform: font =>
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        typographyPresets[font] && (typographyPresets[font] as any).fontWeight,
    })
    .apply({
      property: 'fontSize',
      value: props.font,
      transform: font =>
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        typographyPresets[font] && (typographyPresets[font] as any).fontSize,
    })
    .apply({
      property: 'lineHeight',
      value: props.font,
      transform: font =>
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        typographyPresets[font] && (typographyPresets[font] as any).lineHeight,
    })
    .apply({
      property: 'border',
      value: props.border,
    })
    .apply({
      property: 'borderTop',
      value: props.borderTop,
    })
    .apply({
      property: 'borderRight',
      value: props.borderRight,
    })
    .apply({
      property: 'borderBottom',
      value: props.borderBottom,
    })
    .apply({
      property: 'borderLeft',
      value: props.borderLeft,
    })
    .apply({
      property: 'borderRadius',
      value: props.borderRadius,
    })
    .apply({
      property: 'borderStyle',
      value: props.borderStyle,
    })
    .apply({
      property: 'borderWidth',
      value: props.borderWidth,
      transform: getSize,
    })
    .apply({
      property: 'borderColor',
      value: props.borderColor,
      transform: getColor,
    })
    .apply({
      property: 'margin',
      value: props.margin,
      transform: getSize,
    })
    .apply({
      property: 'marginTop',
      value: props.marginTop,
      transform: getSize,
    })
    .apply({
      property: 'marginRight',
      value: props.marginRight,
      transform: getSize,
    })
    .apply({
      property: 'marginBottom',
      value: props.marginBottom,
      transform: getSize,
    })
    .apply({
      property: 'marginLeft',
      value: props.marginLeft,
      transform: getSize,
    })
    .apply({
      property: 'padding',
      value: props.padding,
      transform: getSize,
    })
    .apply({
      property: 'paddingTop',
      value: props.paddingTop,
      transform: getSize,
    })
    .apply({
      property: 'paddingRight',
      value: props.paddingRight,
      transform: getSize,
    })
    .apply({
      property: 'paddingBottom',
      value: props.paddingBottom,
      transform: getSize,
    })
    .apply({
      property: 'paddingLeft',
      value: props.paddingLeft,
      transform: getSize,
    })
    .apply({
      property: 'width',
      value: props.$width,
      transform: width => getSize(width),
    })
    .apply({
      property: 'height',
      value: props.$height,
      transform: height => getSize(height),
    })
    .apply({
      property: 'maxWidth',
      value: props.maxWidth,
      transform: maxWidth => getSize(maxWidth),
    })
    .apply({
      property: 'maxHeight',
      value: props.maxHeight,
      transform: maxHeight => getSize(maxHeight),
    })
    .apply({
      property: 'minWidth',
      value: props.minWidth,
      transform: minWidth => getSize(minWidth),
    })
    .apply({
      property: 'minHeight',
      value: props.minHeight,
      transform: minHeight => getSize(minHeight),
    })
    .apply({
      property: 'display',
      value: props.$display,
    })
    .apply({
      property: 'flexWrap',
      value: props.flexWrap,
      transform: flexWrap => (flexWrap ? 'wrap' : undefined),
    })
    .apply({
      property: 'flexDirection',
      value: props.flexDirection,
    })
    .apply({
      property: 'flexGrow',
      value: props.flexGrow,
    })
    .apply({
      property: 'justifyContent',
      value: props.justifyContent,
    })
    .apply({
      property: 'alignItems',
      value: props.alignItems,
    })
    .apply({
      property: 'alignSelf',
      value: props.alignSelf,
    })
    .apply({
      property: 'position',
      value: props.position,
    })
    .apply({
      property: 'top',
      value: props.top,
    })
    .apply({
      property: 'right',
      value: props.right,
    })
    .apply({
      property: 'bottom',
      value: props.bottom,
    })
    .apply({
      property: 'left',
      value: props.left,
    })
    .apply({
      property: 'overflow',
      value: props.$overflow,
      transform: overflow => {
        if (overflow !== 'scrollX' && overflow !== 'scrollY') {
          return overflow;
        }
        return undefined;
      },
    })
    .apply({
      property: 'overflowY',
      value: props.$overflowY,
    })
    .value();
};

const StyledBlock = (styled.div(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getStyleFromProps as any,
) as unknown) as StyledComponent<StyledBlockProps>;

export const LegacyBlock: React.FC<LegacyBlockProps> = ({
  height,
  color,
  overflow,
  width,
  display,
  overflowY,
  ...props
}) => (
  <StyledBlock
    {...props}
    $display={display}
    $height={height}
    $width={width}
    $color={color}
    $overflow={overflow}
    $overflowY={overflowY}
    tabindex="0"
  />
);
