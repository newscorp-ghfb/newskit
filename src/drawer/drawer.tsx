import React, {useRef, useEffect} from 'react';
import {CSSTransition} from 'react-transition-group';
import {DrawerProps} from './types';
import {StyledDrawer} from './styled';
import {BaseDialogFunction} from '../dialog';
import {Overlay} from '../overlay/overlay';
import {BreakpointKeys, useTheme} from '../theme';
import {deepMerge} from '../utils/deep-merge';
import {filterOutFalsyProperties} from '../utils/filter-object';
import {mergeBreakpointObject} from '../utils/merge-breakpoint-object';
import {setCorrectClassName, setDrawerElementFocusability} from './utils';
import {getTransitionDuration} from '../utils/get-transition-duration';
import defaults from './defaults';
import stylePresets from './style-presets';
import {withOwnTheme} from '../utils/with-own-theme';

const ThemelessDrawer: React.FC<DrawerProps> = ({
  children,
  /* istanbul ignore next */
  open = false,
  onDismiss,
  placement = 'left',
  closePosition = placement === 'left' ? 'left' : 'right',
  restoreFocusTo,
  overrides,
  hideOverlay,
  disableFocusTrap,
  inline,
  ...props
}) => {
  const theme = useTheme();
  const drawerRef = useRef<HTMLDivElement>(null);
  const drawerPath = inline ? 'inlineDrawer' : 'drawer';

  const overlayOverrides = {
    ...deepMerge(
      mergeBreakpointObject(Object.keys(theme.breakpoints) as BreakpointKeys[]),
      theme.componentDefaults[drawerPath].overlay,
      filterOutFalsyProperties(overrides && overrides.overlay),
    ),
  };

  useEffect(() => {
    setDrawerElementFocusability(open, drawerRef);
  }, [open, drawerRef]);

  return (
    <BaseDialogFunction
      open={open}
      restoreFocusTo={restoreFocusTo}
      onDismiss={onDismiss}
      hideOverlay={hideOverlay}
      disableFocusTrap={disableFocusTrap}
      renderOverlay={handleOverlayClick => (
        <Overlay
          open={open}
          onClick={handleOverlayClick}
          overrides={overlayOverrides}
        />
      )}
    >
      {handleCloseButtonClick => (
        <CSSTransition
          in={open}
          timeout={getTransitionDuration(
            `${drawerPath}.panel.${placement}`,
            '',
          )({theme, overrides})}
          classNames="nk-drawer"
          appear
        >
          {state => (
            <StyledDrawer
              aria-hidden={!open}
              className={setCorrectClassName('nk-drawer', state)}
              open={open}
              disableFocusTrap={disableFocusTrap}
              handleCloseButtonClick={handleCloseButtonClick}
              path={drawerPath}
              data-testid={drawerPath}
              placement={placement}
              closePosition={closePosition}
              overrides={overrides}
              ref={drawerRef}
              inline={inline}
              {...props}
            >
              {children}
            </StyledDrawer>
          )}
        </CSSTransition>
      )}
    </BaseDialogFunction>
  );
};

export const Drawer = withOwnTheme(ThemelessDrawer)({
  defaults,
  stylePresets,
});
