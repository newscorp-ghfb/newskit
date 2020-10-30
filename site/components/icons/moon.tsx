import React from 'react';
import {Svg, SvgProps, toNewsKitIcon, withDefaultProps} from 'newskit';

const Moon: React.FC<SvgProps> = props => (
  <Svg {...props} viewBox="0 0 24 24">
    <path
      fill="#358CDE"
      fillRule="nonzero"
      d="M10 2c-1.82 0-3.53.5-5 1.35C7.99 5.08 10 8.3 10 12s-2.01 6.92-5 8.65C6.47 21.5 8.18 22 10 22c5.52 0 10-4.48 10-10S15.52 2 10 2z"
    />
  </Svg>
);

Moon.displayName = 'MoonIcon';

export const MoonIcon = withDefaultProps(toNewsKitIcon(Moon), {
  title: 'Moon icon',
  overrides: {size: 'iconSize020'},
});
