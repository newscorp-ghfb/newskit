import {
  styled,
  css,
  getTypePresetFromTheme,
  CSSObject,
  getColorFromTheme,
} from '../utils/style';
import {ColorKeys} from '../theme';

export interface ParagraphProps {
  bold?: boolean;
  dropCap?: boolean;
  dropCapColor?: ColorKeys;
}

export const Paragraph = styled.p<ParagraphProps>`
  ${({theme}) => {
    const typePreset = getTypePresetFromTheme('body030')({theme}) as CSSObject;

    return {
      ...typePreset,
      marginBottom: typePreset.fontSize,
    };
  }}
  font-weight: ${({theme, bold}) => (bold ? theme.fonts.fontWeight030 : null)};
  color: ${getColorFromTheme('inkBase')};

  ${({dropCap, dropCapColor, theme}) =>
    dropCap &&
    css`
      &:first-letter {
        float: left;
        padding-right: 0.15em;
        ${getTypePresetFromTheme('dropCap')({theme})}
        color: ${dropCapColor ? theme.colors[dropCapColor] : null};
      }
    `}
`;
Paragraph.displayName = 'Paragraph';
export const P = Paragraph;

export const Subscript = styled.sub`
  font-size: 80%;
`;
Subscript.displayName = 'Subscript';
export const Sub = Subscript;

export const Superscript = styled.sup`
  font-size: 80%;
`;
Superscript.displayName = 'Superscript';
export const Sup = Superscript;
