export interface AudioFunctionDependencies {
  onPreviousTrack: () => void;
  onNextTrack: () => void;
  autoPlay: boolean;
  disablePreviousTrack: boolean;
  src: string;
  live: NonNullable<boolean>;

  loading: boolean;
  duration: number;
  playing: boolean;

  showLoaderTimeoutRef: React.MutableRefObject<number>;
  currentTimeRef: React.MutableRefObject<number>;
  audioRef: React.RefObject<HTMLAudioElement>;

  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
  setPlayState: React.Dispatch<React.SetStateAction<boolean>>;
  // setVolume: React.Dispatch<React.SetStateAction<number>>;
  setDuration: React.Dispatch<React.SetStateAction<number>>;
  setDisplayDuration: React.Dispatch<React.SetStateAction<number>>;
  setBuffered: React.Dispatch<React.SetStateAction<TimeRanges | undefined>>;
  setIsPrevTrackBtnDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface TrackControlProps {
  onNextTrack?: () => void;
  disableNextTrack?: boolean;
  onPreviousTrack?: () => void;
  disablePreviousTrack?: boolean;
}

export interface AudioPlayerComposableProps {
  children: React.ReactNode;
  src: string;
  autoPlay?: boolean;
  live?: boolean;
  ariaLandmark?: string;
}

export enum AudioEvents {
  Play = 'onPlay',
  Pause = 'onPause',
  Waiting = 'onWaiting',
  CanPlay = 'onCanPlay',
  Ended = 'onEnded',
  VolumeChange = 'onVolumeChange',
  DurationChange = 'onDurationChange',
  TimeUpdate = 'onTimeUpdate',
  Progress = 'onProgress',
}
