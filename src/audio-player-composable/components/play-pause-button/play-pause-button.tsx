import React, {useCallback} from 'react';
import {IconButton} from '../../../icon-button';
import {ButtonSize} from '../../../button/types';
import {useAudioPlayerContext} from '../../context';
import defaults from './defaults';
import {withOwnTheme} from '../../../utils/with-own-theme';
import {useButtonOverrides, useKeyboardShortcutsOnButton} from '../../utils';
import {AudioPlayerIconButtonWithShortcuts} from '../../types';

const defaultKeyboardShortcuts = ['k', ' '];

const ThemelessAudioPlayerPlayPauseButton: React.FC<AudioPlayerIconButtonWithShortcuts> = React.memo(
  props => {
    const {getPlayPauseButtonProps, togglePlay} = useAudioPlayerContext();

    const propsFromContext =
      getPlayPauseButtonProps! && getPlayPauseButtonProps(props);

    const overrides = useButtonOverrides(props, 'audioPlayerPlayPauseButton');

    const toggleAction = useCallback(
      ({target, key}: KeyboardEvent) => {
        const {tagName} = target as HTMLElement;
        const actionKeys = [' ', 'Enter'];
        const actionElements = ['BUTTON', 'INPUT', 'A'];
        const isActionKey = actionKeys.includes(key);
        const isActionElement = target && actionElements.includes(tagName);

        if (
          typeof togglePlay === 'function' &&
          (!isActionKey ||
            // pressing Space or Enter when the focused element is a Button, A or Input will not trigger the toggle
            (isActionKey && !isActionElement))
        ) {
          togglePlay();
        }
      },
      [togglePlay],
    );

    useKeyboardShortcutsOnButton({
      props: propsFromContext as AudioPlayerIconButtonWithShortcuts,
      defaults: defaultKeyboardShortcuts,
      action: toggleAction,
    });

    console.log('rendering play payse button');

    return (
      <IconButton
        data-testid="audio-player-play-pause-button"
        size={ButtonSize.Large}
        overrides={overrides}
        {...propsFromContext}
      />
    );
  },
);

export const AudioPlayerPlayPauseButton = withOwnTheme(
  ThemelessAudioPlayerPlayPauseButton,
)({defaults});
