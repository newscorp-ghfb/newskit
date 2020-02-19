import React from 'react';
import {ButtonSize, Button} from '../../button';
import {Play, Pause} from '../../icons';

export interface PlayerButtonProps {
  isPlaying: boolean;
  onClick: () => void;
  $stylePreset?: string;
}

export const PlayerButton: React.FC<PlayerButtonProps> = React.memo(
  ({isPlaying, ...props}) => (
    <Button
      data-testid="audio-player-play-button"
      aria-pressed={isPlaying}
      icon={isPlaying ? PauseIcon : PlayIcon}
      $size={ButtonSize.Large}
      {...props}
    />
  ),
);
