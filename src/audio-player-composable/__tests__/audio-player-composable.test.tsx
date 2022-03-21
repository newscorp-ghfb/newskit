/* eslint-disable no-console */
import React from 'react';
import {fireEvent, act} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {renderWithImplementation, renderWithTheme} from '../../test/test-utils';
import {AudioPlayerComposable} from '../audio-player-composable';
import {AudioPlayerPlayPauseButton} from '../components/play-pause-button/play-pause-button';
import {AudioPlayerSeekBar} from '../components/seek-bar/seek-bar';
import {AudioPlayerComposableProps} from '../types';
import {AudioPlayerTimeDisplay} from '../components/time-display/time-display';

import {formatFunction} from '../components/time-display/utils';
import {compileTheme, createTheme} from '../../theme';
import seekBarStylePresets from '../components/seek-bar/style-presets';

const version = '0.10.0';

const recordedAudioProps: AudioPlayerComposableProps = {
  src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  autoPlay: false,
  children: (
    <>
      <AudioPlayerSeekBar />
      <AudioPlayerPlayPauseButton
        onClick={() => {
          console.log('customer click function');
        }}
      />
    </>
  ),
};

const recordedAudioPropsAutoplay: AudioPlayerComposableProps = {
  src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  autoPlay: true,
  children: (
    <>
      <AudioPlayerSeekBar />
      <AudioPlayerPlayPauseButton
        onClick={() => {
          console.log('customer click function');
        }}
      />
    </>
  ),
};

const recordedTrackingOutputObject = {
  originator: 'audio-player-play-pause-button',
  trigger: 'click',
  context: {
    media_player: `newskit-audio-player-${version}`,
    media_duration: '00:00',
    media_type: 'audio',
    // TODO media_milestone should be "2" once implemented the control
    media_milestone: 'NaN',
    media_offset: '00:00',
    media_segment: 'MockMediaSegment',
  },
};

const recordedSeekBarOverrides: AudioPlayerComposableProps = {
  src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  autoPlay: false,
  children: (
    <>
      <AudioPlayerSeekBar
        overrides={{
          slider: {
            track: {
              stylePreset: 'customAudioPlayerSeekBarTrack',
              size: 'sizing030',
            },
            indicator: {
              stylePreset: 'customAudioPlayerSeekBarIndicator',
            },
            thumb: {
              stylePreset: 'customAudioPlayerThumb',
              size: 'sizing050',
            },
          },
          buffering: {
            stylePreset: 'customAudioPlayerSeekBarBuffering',
          },
        }}
      />
      <AudioPlayerPlayPauseButton
        onClick={() => {
          console.log('customer click function');
        }}
      />
      <AudioPlayerTimeDisplay
        format={({currentTime, duration}) =>
          formatFunction({currentTime, duration})
        }
      />
    </>
  ),
};

const recordedTimeDisplayOverrides: AudioPlayerComposableProps = {
  src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  autoPlay: true,
  children: (
    <>
      <AudioPlayerPlayPauseButton
        onClick={() => {
          console.log('customer click function');
        }}
      />
      <AudioPlayerTimeDisplay overrides={{stylePreset: 'myTimeDisplay'}} />
    </>
  ),
};
jest.mock('../../version-number.json', () => ({version: '0.10.0'}));

jest.mock('../utils', () => {
  const originalModule = jest.requireActual('../utils');
  return {
    ...originalModule,
    getMediaSegment: jest.fn(() => 'MockMediaSegment'),
  };
});

let mockGetTrackBackground: jest.Mock;
jest.mock('react-range', () => {
  mockGetTrackBackground = jest.fn().mockReturnValue('#ffff00');
  const actual = jest.requireActual('react-range');
  return {
    ...actual,
    getTrackBackground: mockGetTrackBackground,
  };
});

describe('Audio Player Composable', () => {
  const mediaElement = (window as any).HTMLMediaElement.prototype;

  beforeAll(() => {
    ['duration', 'seekable', 'buffered', 'paused'].forEach(k => {
      Object.defineProperty(mediaElement, k, {
        writable: true,
      });
    });
  });

  beforeEach(() => {
    mediaElement.load = jest.fn(() => {
      mediaElement.duration = 100;
    });
    mediaElement.play = jest.fn(() => {
      console.log('mock play');
      mediaElement.paused = false;
    });
    mediaElement.pause = jest.fn(() => {
      console.log('mock pause');
      mediaElement.paused = true;
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
    expect(audioElement.paused).toBe(false);
    fireEvent.click(playPauseButton);
    expect(audioElement.pause).toHaveBeenCalled();
    expect(audioElement.paused).toBe(true);
  });

  it('should phasing playPause button loading state as expected', () => {
    const {getByTestId} = renderWithTheme(
      AudioPlayerComposable,
      recordedAudioProps,
    );
    const playPauseButton = getByTestId('audio-player-play-pause-button');
    const audioElement = getByTestId('audio-element') as HTMLAudioElement;

    fireEvent.click(playPauseButton);
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

  it('should preserve playing state when changing track', () => {
    const {getByTestId, rerender} = renderWithTheme(
      AudioPlayerComposable,
      recordedAudioProps,
    );

    let audioElement: any = getByTestId('audio-element');

    const resetAndReRender = (props: Partial<AudioPlayerComposableProps>) => {
      audioElement.play.mockReset();
      audioElement.pause.mockReset();

      rerender(<AudioPlayerComposable {...recordedAudioProps} {...props} />);
      audioElement = getByTestId('audio-element');
    };

    // Not playing, no auto play, new track should be paused
    resetAndReRender({src: 'newtrack-1'});
    expect(audioElement.play).not.toHaveBeenCalled();
    expect(audioElement.pause).toHaveBeenCalled();

    // Playing, no auto play, new track should be played
    fireEvent.canPlay(getByTestId('audio-element'));
    fireEvent.click(getByTestId('audio-player-play-pause-button'));
    resetAndReRender({src: 'newtrack-2'});
    expect(audioElement.play).toHaveBeenCalled();
    expect(audioElement.pause).not.toHaveBeenCalled();

    // Playing, with auto play, no need to call play/pause
    fireEvent.click(getByTestId('audio-player-play-pause-button'));
    resetAndReRender({src: 'newtrack-3', autoPlay: true});
    expect(audioElement.play).not.toHaveBeenCalled();
    expect(audioElement.pause).not.toHaveBeenCalled();

    fireEvent.click(getByTestId('audio-player-play-pause-button'));
    resetAndReRender({src: 'newtrack-4', autoPlay: true});
    expect(audioElement.play).not.toHaveBeenCalled();
    expect(audioElement.pause).not.toHaveBeenCalled();
  });

  it('should render correctly when in autoplay', () => {
    const {asFragment} = renderWithTheme(
      AudioPlayerComposable,
      recordedAudioPropsAutoplay,
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render default display time label', () => {
    const {asFragment} = renderWithTheme(
      AudioPlayerComposable,
      recordedAudioProps,
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('renders with TimeDisplay label overrides', () => {
    const myCustomTheme = createTheme({
      name: 'my-custom-seek-bar-theme',
      overrides: {
        stylePresets: {
          myTimeDisplay: {
            base: {
              backgroundColor: '{{colors.interactivePrimary030}}',
            },
          },
        },
      },
    });
    const {asFragment} = renderWithTheme(
      AudioPlayerComposable,
      recordedTimeDisplayOverrides,
      myCustomTheme,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  describe('seekBar should', () => {
    it('renders and behaves as expected', () => {
      const onPlay = jest.fn();
      const props = {
        ...recordedAudioProps,
        onPlay,
      };
      const {asFragment, getByTestId} = renderWithTheme(
        AudioPlayerComposable,
        props,
      );

      const audioElement = getByTestId('audio-element') as any;
      const playPauseButton = getByTestId('audio-player-play-pause-button');

      fireEvent.durationChange(audioElement, {
        target: {
          duration: 6610,
        },
      });
      // Play
      audioElement.play.mockReset();
      fireEvent.canPlay(audioElement);
      fireEvent.click(playPauseButton);
      expect(audioElement.play).toHaveBeenCalled();

      // Move forward 1 second
      fireEvent.keyDown(getByTestId('audio-slider-thumb'), {
        key: 'ArrowRight',
        code: 39,
      });
      expect(audioElement.currentTime).toEqual(1);

      // Pause
      audioElement.pause.mockReset();
      fireEvent.click(getByTestId('audio-player-play-pause-button'));
      expect(audioElement.pause).toHaveBeenCalled();

      // Move slider forward 10 seconds
      fireEvent.keyDown(getByTestId('audio-slider-thumb'), {
        key: 'PageUp',
        code: 33,
      });
      expect(audioElement.currentTime).toEqual(11);

      // Set track forward for track bg tests below
      audioElement.currentTime = 10;
      fireEvent.timeUpdate(audioElement);

      // Test track background is generated as expected
      // (we can't rely on the style in a snapshot as js-dom thinks gradients
      // are invalid background colours and strips the style tag out. So we mock
      // out the getTrackBackground util to return a working mock style)
      audioElement.buffered = {
        length: 3,
        start: jest.fn().mockImplementation(index => [1, 9, 20][index]),
        end: jest.fn().mockImplementation(index => [5, 14, 20][index]),
      };
      fireEvent.progress(audioElement);

      const audioPlayerTheme = createTheme({
        name: 'audio-player',
        overrides: {
          stylePresets: seekBarStylePresets,
        },
      });

      const compiledNKLightThemeStylePresets = compileTheme(audioPlayerTheme)
        .stylePresets;

      const {
        seekBarTrack,
        seekBarIndicator,
        seekBarBuffering,
      } = compiledNKLightThemeStylePresets;

      expect(mockGetTrackBackground).toHaveBeenCalledWith({
        colors: [
          `${seekBarIndicator.base!.backgroundColor}`, // indicator
          `${seekBarBuffering.base!.backgroundColor}`, // buffered
          `${seekBarTrack.base!.backgroundColor}`, // track background
          `${seekBarBuffering.base!.backgroundColor}`, // buffered
          `${seekBarTrack.base!.backgroundColor}`, // track background
        ],
        max: 6610,
        min: 0,
        values: [10, 14, 20, 20],
      });

      // Audio player snapshot last (so that buffering is included)
      expect(asFragment()).toMatchSnapshot();

      // Time should round to nearest second (so we don't update slider value needlessly)
      audioElement.currentTime = 35.45231;
      fireEvent.timeUpdate(audioElement);
      expect(getByTestId('audio-slider-thumb')).toMatchSnapshot();
    });

    it('renders with overrides', () => {
      const myCustomTheme = createTheme({
        name: 'my-custom-seek-bar-theme',
        overrides: {
          stylePresets: {
            customAudioPlayerThumb: {
              base: {
                backgroundColor: '#f6807e',
                borderRadius: '50%',
              },
            },
            customAudioPlayerSeekBarTrack: {
              base: {
                backgroundColor: '#243c46',
              },
            },
            customAudioPlayerSeekBarIndicator: {
              base: {
                backgroundColor: '#0c2731',
              },
            },
            customAudioPlayerSeekBarBuffering: {
              base: {
                backgroundColor: 'rgb(51, 51, 51)',
              },
            },
          },
        },
      });

      const {asFragment} = renderWithTheme(
        AudioPlayerComposable,
        recordedSeekBarOverrides,
        myCustomTheme,
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('Keyboard shortcuts', () => {
    it.only('should play and pause on press K key', () => {
      /*

      DO NOT TEST IMPLEMENTATION DETAILS
      DO NOT TEST IMPLEMENTATION DETAILS
      DO NOT TEST IMPLEMENTATION DETAILS
      DO NOT TEST IMPLEMENTATION DETAILS
      DO NOT TEST IMPLEMENTATION DETAILS
      DO NOT TEST IMPLEMENTATION DETAILS
      DO NOT TEST IMPLEMENTATION DETAILS
      DO NOT TEST IMPLEMENTATION DETAILS

      */

      // let ct = 0;
      // Object.defineProperty(mediaElement, 'currentTime', {
      //   get() {
      //     console.log('getter');
      //     return ct;
      //   },
      //   set(newValue) {
      //     console.log('setter', newValue);
      //     ct = newValue;
      //   },
      // });
      // Object.defineProperty(mediaElement, 'duration', {
      //   value: 6610,
      // });
      // mediaElement.onDurationChange = jest.fn(v => {
      //   console.log('onDurationChange', v);
      //   ct = v;
      // });

      const {getByTestId} = renderWithTheme(
        AudioPlayerComposable,
        recordedAudioProps,
      );

      const audioElement = getByTestId('audio-element') as HTMLAudioElement;
      const playPauseButton = getByTestId('audio-player-play-pause-button');
      playPauseButton.focus();
      fireEvent.canPlay(audioElement);
      userEvent.keyboard('k');
      expect(audioElement.paused).toBe(false);
      userEvent.keyboard('k');
      expect(audioElement.paused).toBe(true);

      userEvent.keyboard('1');
      // expect(audioElement.currentTime).toBe(6610);
      expect(audioElement.duration).toBe(6610);
    });
  });
});
