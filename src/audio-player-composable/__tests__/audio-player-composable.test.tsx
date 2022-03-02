/* eslint-disable no-console */
import React from 'react';
import {fireEvent, act} from '@testing-library/react';
import {renderWithImplementation, renderWithTheme} from '../../test/test-utils';
import {AudioPlayerComposable} from '../audio-player-composable';
import {PlayPauseButton} from '../components/play-pause-button';
import {AudioPlayerComposableProps} from '../types';

const version = '0.10.0';

jest.mock('../../version-number.json', () => ({version: '0.10.0'}));

jest.mock('../utils', () => {
  const originalModule = jest.requireActual('../utils');
  return {
    ...originalModule,
    getMediaSegment: jest.fn(() => 'MockMediaSegment'),
  };
});

const recordedTrackingOutputObject = {
  originator: 'audio-player-play-pause-button',
  trigger: 'click',
  context: {
    media_player: `newskit-audio-player-${version}`,
    media_duration: '00:00',
    media_type: 'audio',
    // TODO media_milestone should be "2" once implemented the seekbar
    media_milestone: 'NaN',
    media_offset: '00:00',
    media_segment: 'MockMediaSegment',
  },
};

const recordedAudioProps: AudioPlayerComposableProps = {
  src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  autoPlay: false,
  children: (
    <PlayPauseButton
      onClick={() => {
        console.log('customer click function');
      }}
    />
  ),
};

const recordedAudioPropsAutoplay: AudioPlayerComposableProps = {
  src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  autoPlay: true,
  children: (
    <PlayPauseButton
      onClick={() => {
        console.log('customer click function');
      }}
    />
  ),
};

describe('Audio Player Composable', () => {
  const mediaElement = (window as any).HTMLMediaElement.prototype;

  beforeEach(() => {
    ['load', 'play', 'pause'].forEach(k => {
      mediaElement[k] = jest.fn();
    });
    window.open = jest.fn();
    jest.useFakeTimers('legacy');
  });

  it('should render with no errors', () => {
    const {asFragment} = renderWithTheme(
      AudioPlayerComposable,
      recordedAudioProps,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly when in autoplay', () => {
    const {asFragment} = renderWithTheme(
      AudioPlayerComposable,
      recordedAudioPropsAutoplay,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should play and pause on playPause button click', () => {
    const {getByTestId} = renderWithTheme(
      AudioPlayerComposable,
      recordedAudioProps,
    );

    const audioElement = getByTestId('audio-element') as HTMLAudioElement;
    const playPauseButton = getByTestId('audio-player-play-pause-button');

    fireEvent.canPlay(getByTestId('audio-element'));
    fireEvent.click(playPauseButton);
    expect(audioElement.play).toHaveBeenCalled();
    fireEvent.click(playPauseButton);
    expect(audioElement.pause).toHaveBeenCalled();
  });

  it('should phasing playPause button loading state as expected', () => {
    const {getByTestId} = renderWithTheme(
      AudioPlayerComposable,
      recordedAudioProps,
    );
    const playPauseButton = getByTestId('audio-player-play-pause-button');
    const audioElement = getByTestId('audio-element') as HTMLAudioElement;

    // playButton should be in initial loading state
    expect(playPauseButton).toMatchSnapshot();

    fireEvent.canPlay(getByTestId('audio-element'));

    // playButton should be enabled
    expect(playPauseButton).toMatchSnapshot();

    fireEvent.waiting(audioElement);
    act(() => {
      jest.advanceTimersByTime(750);
    });
    // playButton should go back to loading state
    expect(playPauseButton).toMatchSnapshot();
  });

  it('should fire "end" event when the track has ended', () => {
    const fireEventSpy = jest.fn();
    const {getByTestId} = renderWithImplementation(
      AudioPlayerComposable,
      recordedAudioProps,
      fireEventSpy,
    );

    const expectedObject = {
      ...recordedTrackingOutputObject,
      originator: 'audio-complete',
      trigger: 'end',
    };

    const player = getByTestId('audio-element');
    fireEvent.ended(player);

    expect(fireEventSpy).toHaveBeenCalledWith(expectedObject);
  });
});