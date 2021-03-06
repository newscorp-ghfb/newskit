/* eslint-disable no-param-reassign */
import {useCallback, SyntheticEvent, useEffect} from 'react';
import {EventTrigger, useInstrumentation} from '../instrumentation';
import {AudioPlayerProps, AudioEvents} from './types';
import {formatTrackTime, getMediaSegment} from './utils';
import calculateStringPercentage from '../utils/calculate-string-percentage';
import {getValueInRange} from '../utils/value-in-range';

import versionNumber from '../version-number.json';

export interface AudioFunctionDependencies {
  onPreviousTrack: AudioPlayerProps['onPreviousTrack'];
  onNextTrack: AudioPlayerProps['onNextTrack'];
  autoPlay: AudioPlayerProps['autoPlay'];
  disablePreviousTrack: AudioPlayerProps['disablePreviousTrack'];
  src: AudioPlayerProps['src'];
  live: NonNullable<AudioPlayerProps['live']>;

  loading: boolean;
  duration: number;
  playing: boolean;

  showLoaderTimeoutRef: React.MutableRefObject<number>;
  trackPositionRef: React.MutableRefObject<number>;
  audioRef: React.RefObject<HTMLAudioElement>;

  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setTrackPosition: React.Dispatch<React.SetStateAction<number[]>>;
  setPlayState: React.Dispatch<React.SetStateAction<boolean>>;
  setVolume: React.Dispatch<React.SetStateAction<number>>;
  setDuration: React.Dispatch<React.SetStateAction<number>>;
  setDisplayDuration: React.Dispatch<React.SetStateAction<number>>;
  setBuffered: React.Dispatch<React.SetStateAction<TimeRanges | undefined>>;
  setIsPrevTrackBtnDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useAudioFunctions = ({
  onPreviousTrack,
  onNextTrack,
  autoPlay,
  disablePreviousTrack,
  src,
  live,
  duration,
  loading,
  playing,
  showLoaderTimeoutRef,
  trackPositionRef,
  audioRef,
  setLoading,
  setTrackPosition,
  setPlayState,
  setVolume,
  setDuration,
  setDisplayDuration,
  setBuffered,
  setIsPrevTrackBtnDisabled,
}: AudioFunctionDependencies) => {
  const {fireEvent} = useInstrumentation();

  const ifPlayer = useCallback(
    (fn: (p: HTMLAudioElement) => void) => {
      const player = audioRef.current;
      // No need to test the else, player should always be defined, if not we just ignore.
      /* istanbul ignore else */
      if (player) {
        fn(player);
      }
    },
    [audioRef],
  );

  const buildMediaData = useCallback(() => {
    const playerData = {
      media_player: `newskit-audio-player-${versionNumber.version}`,
      media_type: 'audio',
    };
    return live
      ? playerData
      : {
          ...playerData,
          media_duration: formatTrackTime(duration),
          media_milestone: calculateStringPercentage(
            trackPositionRef.current,
            duration,
          ),
          media_segment: getMediaSegment(duration, trackPositionRef.current),
          media_offset: formatTrackTime(trackPositionRef.current),
        };
  }, [duration, live, trackPositionRef]);

  const getTrackingInformation = useCallback(
    (
      originator: string,
      eventTrigger: EventTrigger,
      eventSpecificInfo?: object,
    ) => {
      const context = {
        ...buildMediaData(),
        ...eventSpecificInfo,
      };
      const trackingInformation = {
        originator,
        trigger: eventTrigger,
        context,
      };

      return trackingInformation;
    },
    [buildMediaData],
  );

  const onWaiting = useCallback(() => {
    clearTimeout(showLoaderTimeoutRef.current);
    // We are giving some extra time before setting loading state
    // to avoid flickering of the play/loading button when
    // skipping back to already buffered time.
    showLoaderTimeoutRef.current = window.setTimeout(
      () => setLoading(true),
      700,
    );
  }, [setLoading, showLoaderTimeoutRef]);

  const onCanPlay = useCallback(() => {
    clearTimeout(showLoaderTimeoutRef.current);
    setLoading(false);
  }, [setLoading, showLoaderTimeoutRef]);

  const updateAudioTime = useCallback(
    (playerTime: number) => {
      const newPlayerTime = getValueInRange(playerTime, [0, duration]);
      setTrackPosition([newPlayerTime]);

      ifPlayer(player => {
        player.currentTime = newPlayerTime;
      });
    },
    [duration, setTrackPosition, ifPlayer],
  );

  const updateAudioVolume = useCallback(
    (vol: number) => {
      window.localStorage.setItem('newskit-audioplayer-volume', vol.toString());
      setVolume(vol);

      ifPlayer(player => {
        player.volume = vol;
      });
    },
    [ifPlayer, setVolume],
  );

  const onClickPrevious = useCallback(() => {
    if (trackPositionRef.current > 5) {
      updateAudioTime(0);
      return;
    }

    // If no function is passed, the button is disabled, check is just to be sure; the else can't be tested.
    /* istanbul ignore else */
    if (onPreviousTrack) {
      onPreviousTrack();
    }
  }, [trackPositionRef, onPreviousTrack, updateAudioTime]);

  const onClickNext = useCallback(() => {
    // If no function is passed, the button is disabled, check is just to be sure; the else can't be tested.
    /* istanbul ignore else */
    if (onNextTrack) {
      onNextTrack();
    }
  }, [onNextTrack]);

  const onClickBackward = useCallback(() => {
    updateAudioTime(trackPositionRef.current - 10);
    const trackingInformation = getTrackingInformation(
      'audio-player-skip-backward',
      EventTrigger.Click,
      {event_navigation_name: 'backward skip'},
    );
    fireEvent(trackingInformation);
  }, [fireEvent, getTrackingInformation, updateAudioTime, trackPositionRef]);

  const onClickForward = useCallback(() => {
    updateAudioTime(trackPositionRef.current + 10);

    const trackingInformation = getTrackingInformation(
      'audio-player-skip-forward',
      EventTrigger.Click,
      {event_navigation_name: 'forward skip'},
    );
    fireEvent(trackingInformation);
  }, [fireEvent, getTrackingInformation, updateAudioTime, trackPositionRef]);

  const onDurationChange = useCallback(
    ({target}: SyntheticEvent<HTMLAudioElement, Event>) => {
      const tgt = target as HTMLAudioElement;
      setDuration(tgt.duration);
      setDisplayDuration(tgt.duration);
      setBuffered(tgt.buffered);
    },
    [setBuffered, setDuration, setDisplayDuration],
  );

  const play = useCallback(() => {
    ifPlayer(player => {
      setPlayState(true);
      player.play();
    });
  }, [ifPlayer, setPlayState]);

  const onPlay = useCallback(() => {
    if (autoPlay) {
      fireEvent(
        getTrackingInformation('audio-player-audio', EventTrigger.Start),
      );
    }

    if (!playing) {
      play();

      fireEvent(
        getTrackingInformation('audio-player-play-button', EventTrigger.Click),
      );
    }
  }, [autoPlay, fireEvent, playing, getTrackingInformation, play]);

  const pause = useCallback(() => {
    ifPlayer(player => {
      setPlayState(false);
      player.pause();
    });
  }, [ifPlayer, setPlayState]);

  const onPause = useCallback(() => {
    if (playing) {
      pause();

      fireEvent(
        getTrackingInformation(
          live ? 'audio-player-stop-button' : 'audio-player-pause-button',
          EventTrigger.Click,
        ),
      );
    }
  }, [playing, pause, fireEvent, live, getTrackingInformation]);

  const onPopoutClick = () => {
    pause();

    fireEvent(
      getTrackingInformation('audio-player-popout', EventTrigger.Click),
    );
  };

  const togglePlay = useCallback(() => {
    if (loading) {
      return;
    }

    if (playing) {
      onPause();
    } else {
      onPlay();
    }
  }, [loading, playing, onPause, onPlay]);

  const onProgress = ({target}: SyntheticEvent<HTMLAudioElement, Event>) => {
    setBuffered((target as HTMLAudioElement).buffered);
  };

  const onTimeUpdate = ({target}: SyntheticEvent<HTMLAudioElement, Event>) => {
    const eventTime = Math.floor((target as HTMLAudioElement).currentTime);
    if (trackPositionRef.current !== eventTime) {
      setTrackPosition([eventTime]);

      const trackingInformation = getTrackingInformation(
        'audio-player-audio',
        EventTrigger.Pulse,
      );
      fireEvent(trackingInformation);
    }
    if (trackPositionRef.current > 5) {
      setIsPrevTrackBtnDisabled(false);
    } else {
      setIsPrevTrackBtnDisabled(Boolean(disablePreviousTrack));
    }
  };

  const onVolumeChange = useCallback(
    ({target}: SyntheticEvent<HTMLAudioElement, Event>) => {
      updateAudioVolume((target as HTMLAudioElement).volume);
    },
    [updateAudioVolume],
  );

  const onChangeSlider = useCallback(
    ([value]: number[]) => {
      updateAudioTime(value);
    },
    [updateAudioTime],
  );

  const onChangeVolumeSlider = useCallback(
    (value: number) => {
      updateAudioVolume(value);
    },
    [updateAudioVolume],
  );

  const onEnded = useCallback(() => {
    const trackingInformation = getTrackingInformation(
      'audio-complete',
      EventTrigger.End,
    );
    fireEvent(trackingInformation);
  }, [getTrackingInformation, fireEvent]);

  useEffect(() => {
    ifPlayer(player => {
      player.load();
      onWaiting();
      if (!autoPlay) {
        if (playing) {
          player.play();
        } else {
          player.pause();
        }
      }
    });

    return () => {
      clearTimeout(showLoaderTimeoutRef.current);
    };
  }, [src]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const storedVolume = parseFloat(
      (typeof window !== 'undefined' &&
        window.localStorage.getItem('newskit-audioplayer-volume')) ||
        '',
    );
    updateAudioVolume(Number.isNaN(storedVolume) ? 0.7 : storedVolume);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    audioEvents: {
      [AudioEvents.Play]: onPlay,
      [AudioEvents.Pause]: onPause,
      [AudioEvents.Waiting]: onWaiting,
      [AudioEvents.CanPlay]: onCanPlay,
      [AudioEvents.Ended]: onEnded,
      [AudioEvents.VolumeChange]: onVolumeChange,
      [AudioEvents.DurationChange]: onDurationChange,
      [AudioEvents.TimeUpdate]: onTimeUpdate,
      [AudioEvents.Progress]: onProgress,
    },
    onClickPrevious,
    onClickNext,
    onClickBackward,
    onClickForward,
    onPopoutClick,
    togglePlay,
    onChangeSlider,
    onChangeVolumeSlider,
  };
};
