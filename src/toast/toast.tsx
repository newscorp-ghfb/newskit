import React from 'react';
import {ToastProps} from './types';
import {Divider, DividerProps} from '../divider';
import {renderIfReactComponent} from '../utils/component';
import {
  StyledToastContainer,
  StyledContentContainer,
  StyledMessageContainer,
  StyledIconContainer,
  StyledDividerContainer,
  StyledActionsContainer,
  StyledTitleContainer,
  StyledToastInnerContainer,
} from './styled';
import {useTheme} from '../theme';
import {filterOutFalsyProperties} from '../utils/filter-object';
import {splitAriaProps} from '../utils/a11y';

export const Toast: React.FC<ToastProps> = ({
  overrides,
  children,
  icon,
  actions,
  title,
  ariaLive = 'polite',
  role = 'status',
  ...restProps
}) => {
  const theme = useTheme();
  const dividerOverrides: DividerProps['overrides'] = {
    ...theme.componentDefaults.toast.divider,
    ...filterOutFalsyProperties(overrides?.divider),
  };

  const {aria, rest} = splitAriaProps(restProps);

  return (
    <StyledToastContainer
      data-testid="toast-container"
      overrides={overrides}
      {...rest}
    >
      <StyledToastInnerContainer>
        {icon && (
          <StyledIconContainer aria-hidden="true" overrides={overrides}>
            {icon}
          </StyledIconContainer>
        )}
        <StyledContentContainer
          role={role}
          aria-live={ariaLive}
          {...aria}
          overrides={overrides}
          actions={actions}
        >
          {title && (
            <StyledTitleContainer overrides={overrides}>
              {title}
            </StyledTitleContainer>
          )}
          <StyledMessageContainer
            overrides={overrides}
            as={
              typeof children === 'string' ||
              (Array.isArray(children) &&
                children.some(child => typeof child === 'string'))
                ? 'p'
                : 'div'
            }
          >
            {children}
          </StyledMessageContainer>
        </StyledContentContainer>
      </StyledToastInnerContainer>
      {actions && (
        <StyledDividerContainer overrides={overrides}>
          <Divider vertical overrides={dividerOverrides} />
        </StyledDividerContainer>
      )}
      {actions && (
        <StyledActionsContainer>
          {renderIfReactComponent(actions)}
        </StyledActionsContainer>
      )}
    </StyledToastContainer>
  );
};
