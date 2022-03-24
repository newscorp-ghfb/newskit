import React, {useEffect} from 'react';
import {CSSTransitionProps} from 'react-transition-group/CSSTransition';

// https://jestjs.io/docs/manual-mocks
// If the module you are mocking is a Node module (e.g.: lodash), the mock should be placed in the __mocks__ directory adjacent to node_modules (unless you configured roots to point to a folder other than the project root) and will be automatically mocked. There's no need to explicitly call jest.mock('module_name').

const rtg = jest.requireActual('react-transition-group');
rtg.config.disabled = true;

const {CSSTransition} = rtg;

// http://reactcommunity.org/react-transition-group/testing
// https://github.com/reactjs/react-transition-group/issues/787
// It looks like when transitions are disabled (actually disabling only the waiting time, not the transitions themselves)
// only onEntered() and onExited() callbacks are being called
// The following function is a hack-ish way to call the rest of the transition lifecycle methods.
const InterceptedCSSTransition = ({children, ...rest}: CSSTransitionProps) => {
  const callIfExist = (props: CSSTransitionProps, method: string) =>
    method in props && props[method]();

  const onEnter = React.useCallback(() => callIfExist(rest, 'onEnter'), [rest]);
  const onEntering = React.useCallback(() => callIfExist(rest, 'onEntering'), [
    rest,
  ]);
  const onExit = React.useCallback(() => callIfExist(rest, 'onExit'), [rest]);
  const onExiting = React.useCallback(() => callIfExist(rest, 'onExiting'), [
    rest,
  ]);

  useEffect(() => {
    if (rest.in) {
      onEnter();
      onEntering();
    } else {
      onExit();
      onExiting();
    }
  }, [rest.in, onEnter, onEntering, onExit, onExiting]);

  return <CSSTransition {...rest}>{children}</CSSTransition>;
};

rtg.CSSTransition = InterceptedCSSTransition;

module.exports = rtg;