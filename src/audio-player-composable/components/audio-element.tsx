/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import {useAudioPlayerContext} from '../context';

export const AudioElement = () => {
  const {src, audioRef, audioEvents, autoPlay} = useAudioPlayerContext();
  const {
    onCanPlay,
    onDurationChange,
    onTimeUpdate,
    onWaiting,
    onEnded,
  } = audioEvents!;

  return (
    <audio
      ref={audioRef}
      autoPlay={autoPlay}
      src={src}
      onCanPlay={onCanPlay}
      onDurationChange={onDurationChange}
      onWaiting={onWaiting}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      data-testid="audio-element"
    />
  );
};
