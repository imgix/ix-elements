import React, { useEffect } from 'react';
import type { CSSProperties } from 'react';
import type { CmcdTypes, PlaybackTypes, StreamTypes } from '@mux/playback-core';
import { MediaError } from '@imgix/ix-player';
import type IxPlayerElement from '@imgix/ix-player';
import type { Tokens } from '@imgix/ix-player';
import { toNativeProps } from './common/utils';
import { useRef } from 'react';
import { useCombinedRefs } from './useCombinedRefs';
import useObjectPropEffect, { defaultHasChanged } from './useObjectPropEffect';
import { getPlayerVersion } from './env';

export { MediaError };

type ValueOf<T> = T[keyof T];
interface GenericEventListener<T extends Event = CustomEvent> {
  (evt: T): void;
}

export type IxPlayerRefAttributes = IxPlayerElement;
type VideoApiAttributes = {
  currentTime: number;
  volume: number;
  paused: boolean;
  src: string | null;
  poster: string;
  playbackRate: number;
  playsInline: boolean;
  preload: string;
  crossOrigin: string;
  autoPlay: boolean | string;
  loop: boolean;
  muted: boolean;
  style: CSSProperties;
  type: string;
};

type MuxMediaPropTypes = {
  audio: boolean;
  // envKey: Options["data"]["env_key"];
  envKey: string;
  // debug: Options["debug"] & Hls["config"]["debug"];
  debug: boolean;
  disableCookies: boolean;
  // metadata: Partial<Options["data"]>;
  metadata: { [k: string]: any };
  beaconCollectionDomain: string;
  customDomain: string;
  playbackId: string;
  preferPlayback: ValueOf<PlaybackTypes> | undefined;
  streamType: ValueOf<StreamTypes> | 'vod';
  startTime: number;
  preferCmcd: ValueOf<CmcdTypes> | undefined;
  children: never[];
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IxPlayerElementEventMap extends HTMLVideoElementEventMap {}

export type IxPlayerProps = {
  className?: string;
  hotkeys?: string;
  nohotkeys?: boolean;
  defaultHiddenCaptions?: boolean;
  playerSoftwareVersion?: string;
  playerSoftwareName?: string;
  forwardSeekOffset?: number;
  backwardSeekOffset?: number;
  metadataVideoId?: string;
  metadataVideoTitle?: string;
  metadataViewerUserId?: string;
  primaryColor?: string;
  secondaryColor?: string;
  placeholder?: string;
  playbackRates?: number[];
  defaultShowRemainingTime?: boolean;
  thumbnailTime?: number;
  title?: string;
  gifPreview?: boolean;
  posterParams?: string;
  tokens?: Tokens;
  onAbort?: GenericEventListener<IxPlayerElementEventMap['abort']>;
  onCanPlay?: GenericEventListener<IxPlayerElementEventMap['canplay']>;
  onCanPlayThrough?: GenericEventListener<IxPlayerElementEventMap['canplaythrough']>;
  onEmptied?: GenericEventListener<IxPlayerElementEventMap['emptied']>;
  onLoadStart?: GenericEventListener<IxPlayerElementEventMap['loadstart']>;
  onLoadedData?: GenericEventListener<IxPlayerElementEventMap['loadeddata']>;
  onLoadedMetadata?: GenericEventListener<IxPlayerElementEventMap['loadedmetadata']>;
  onProgress?: GenericEventListener<IxPlayerElementEventMap['progress']>;
  onDurationChange?: GenericEventListener<IxPlayerElementEventMap['durationchange']>;
  onVolumeChange?: GenericEventListener<IxPlayerElementEventMap['volumechange']>;
  onRateChange?: GenericEventListener<IxPlayerElementEventMap['ratechange']>;
  onResize?: GenericEventListener<IxPlayerElementEventMap['resize']>;
  onWaiting?: GenericEventListener<IxPlayerElementEventMap['waiting']>;
  onPlay?: GenericEventListener<IxPlayerElementEventMap['play']>;
  onPlaying?: GenericEventListener<IxPlayerElementEventMap['playing']>;
  onTimeUpdate?: GenericEventListener<IxPlayerElementEventMap['timeupdate']>;
  onPause?: GenericEventListener<IxPlayerElementEventMap['pause']>;
  onSeeking?: GenericEventListener<IxPlayerElementEventMap['seeking']>;
  onSeeked?: GenericEventListener<IxPlayerElementEventMap['seeked']>;
  onStalled?: GenericEventListener<IxPlayerElementEventMap['stalled']>;
  onSuspend?: GenericEventListener<IxPlayerElementEventMap['suspend']>;
  onEnded?: GenericEventListener<IxPlayerElementEventMap['ended']>;
  onError?: GenericEventListener<IxPlayerElementEventMap['error']>;
  // onPlayerReady?: EventListener;
} & Partial<MuxMediaPropTypes> &
  Partial<VideoApiAttributes>;

const IxPlayerInternal = React.forwardRef<IxPlayerRefAttributes, IxPlayerProps>(({ children, ...props }, ref) => {
  return React.createElement('ix-player', toNativeProps({ ...props, ref }), children);
});

const useEventCallbackEffect = <K extends keyof IxPlayerElementEventMap>(
  type: K,
  ref: // | ((instance: EventTarget | null) => void)
  React.MutableRefObject<IxPlayerElement | null> | null | undefined,
  callback: GenericEventListener<IxPlayerElementEventMap[K]> | undefined
) => {
  return useEffect(() => {
    const eventTarget = ref?.current;
    if (!eventTarget || !callback) return;
    eventTarget.addEventListener(type, callback);
    return () => {
      eventTarget.removeEventListener(type, callback);
    };
  }, [ref?.current, callback]);
};

const usePlayer = (
  ref: // | ((instance: EventTarget | null) => void)
  React.MutableRefObject<IxPlayerElement | null> | null | undefined,
  props: IxPlayerProps
) => {
  const {
    onAbort,
    onCanPlay,
    onCanPlayThrough,
    onEmptied,
    onLoadStart,
    onLoadedData,
    onLoadedMetadata,
    onProgress,
    onDurationChange,
    onVolumeChange,
    onRateChange,
    onResize,
    onWaiting,
    onPlay,
    onPlaying,
    onTimeUpdate,
    onPause,
    onSeeking,
    onSeeked,
    onStalled,
    onSuspend,
    onEnded,
    onError,
    // onPlayerReady,
    metadata,
    tokens,
    paused,
    playbackId,
    playbackRates,
    currentTime,
    ...remainingProps
  } = props;
  useObjectPropEffect('playbackRates', playbackRates, ref);
  useObjectPropEffect('metadata', metadata, ref);
  useObjectPropEffect('tokens', tokens, ref);
  useObjectPropEffect('playbackId', playbackId, ref);
  useObjectPropEffect(
    'paused',
    paused,
    ref,
    (playerEl: HTMLMediaElement, pausedVal?: boolean) => {
      if (pausedVal == null) return;
      if (pausedVal) {
        playerEl.pause();
      } else {
        playerEl.play();
      }
    },
    (playerEl, value, propName) => {
      if (playerEl.hasAttribute('autoplay') && !playerEl.hasPlayed) {
        return false;
      }
      return defaultHasChanged(playerEl, value, propName);
    }
  );
  // NOTE: Somewhere in the codebase, `currentTime` is getting cast to a number, resulting in `NaN` + an error.
  // This is a bandaid solution for now. (CJP)
  useObjectPropEffect('currentTime', currentTime ?? 0, ref);
  useEventCallbackEffect('abort', ref, onAbort);
  useEventCallbackEffect('canplay', ref, onCanPlay);
  useEventCallbackEffect('canplaythrough', ref, onCanPlayThrough);
  useEventCallbackEffect('emptied', ref, onEmptied);
  useEventCallbackEffect('loadstart', ref, onLoadStart);
  useEventCallbackEffect('loadeddata', ref, onLoadedData);
  useEventCallbackEffect('loadedmetadata', ref, onLoadedMetadata);
  useEventCallbackEffect('progress', ref, onProgress);
  useEventCallbackEffect('durationchange', ref, onDurationChange);
  useEventCallbackEffect('volumechange', ref, onVolumeChange);
  useEventCallbackEffect('ratechange', ref, onRateChange);
  useEventCallbackEffect('resize', ref, onResize);
  useEventCallbackEffect('waiting', ref, onWaiting);
  useEventCallbackEffect('play', ref, onPlay);
  useEventCallbackEffect('playing', ref, onPlaying);
  useEventCallbackEffect('timeupdate', ref, onTimeUpdate);
  useEventCallbackEffect('pause', ref, onPause);
  useEventCallbackEffect('seeking', ref, onSeeking);
  useEventCallbackEffect('seeked', ref, onSeeked);
  useEventCallbackEffect('stalled', ref, onStalled);
  useEventCallbackEffect('suspend', ref, onSuspend);
  useEventCallbackEffect('ended', ref, onEnded);
  useEventCallbackEffect('error', ref, onError);
  // useEventCallbackEffect('playerready', ref, onPlayerReady);
  return [remainingProps];
};

const playerSoftwareVersion = getPlayerVersion();
const playerSoftwareName = 'ix-player-react';

const IxPlayer = React.forwardRef<
  IxPlayerRefAttributes,
  Omit<IxPlayerProps, 'playerSoftwareVersion' | 'playerSoftwareName'>
>((props, ref) => {
  const innerPlayerRef = useRef<IxPlayerElement>(null);
  const playerRef = useCombinedRefs(innerPlayerRef, ref);
  const [remainingProps] = usePlayer(innerPlayerRef, props);

  return (
    <IxPlayerInternal
      /** @TODO Fix types relationships (CJP) */
      ref={playerRef as typeof innerPlayerRef}
      playerSoftwareName={playerSoftwareName}
      playerSoftwareVersion={playerSoftwareVersion}
      {...remainingProps}
    />
  );
});

export default IxPlayer;
