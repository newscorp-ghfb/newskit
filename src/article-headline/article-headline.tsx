import React from 'react';
import {ColorKeys} from '../themes';
import {H1} from '../typography';
import {
  styled,
  getColorFromTheme,
  getTypePresetFromTheme,
} from '../utils/style';

const Heading = styled(H1)`
  display: inline;
  ${getTypePresetFromTheme({
    xs: 'headline100',
    md: 'headline200',
  })}
`;

interface KickerProps {
  color?: ColorKeys;
}

const StyledKicker = styled(Heading)<{$color?: ColorKeys}>`
  display: inline;
  color: ${getColorFromTheme('inkBrand010', '$color')};
  text-transform: uppercase;
`;

const Kicker: React.FC<KickerProps> = ({color, ...props}) => (
  <StyledKicker {...props} as="span" $color={color} />
);

const Headline = styled.div`
  display: block;
`;

export interface ArticleHeadline {
  kickerColor?: ColorKeys;
  kickerText?: React.ReactNode;
}

export const ArticleHeadline: React.FC<ArticleHeadline> = ({
  children,
  kickerColor,
  kickerText,
}) =>
  kickerText ? (
    <Headline>
      <Kicker color={kickerColor}>{kickerText} </Kicker>
      <Heading>{children}</Heading>
    </Headline>
  ) : (
    <Heading>{children}</Heading>
  );
