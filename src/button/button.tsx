import React from 'react';
import {ButtonProps} from './types';
import {BaseButton} from './baseButton';

export const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps
> = ({children, ...restOfProps}) => (
  <BaseButton {...restOfProps}>{children}</BaseButton>
);
