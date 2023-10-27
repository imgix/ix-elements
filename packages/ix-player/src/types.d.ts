import type IxVideoElement, { MediaError } from '@imgix/ix-video';
import type { AttributeTokenList } from './helpers';

export type IxVideoProps = Partial<IxVideoElement> & {
  nohotkeys?: boolean;
  hotkeys?: AttributeTokenList;
  preferPlayback?: 'mse' | 'native' | undefined;
  storyboard?: string;
};

export type IxTemplateProps = Partial<IxVideoProps> & {
  hasSrc: boolean;
  audio: boolean;
  theme?: string;
  playerSize: string;
  showLoading: boolean;
  thumbnailTime: number;
  primaryColor: string;
  secondaryColor: string;
  forwardSeekOffset: number;
  backwardSeekOffset: number;
  isDialogOpen: boolean;
  defaultHiddenCaptions: boolean;
  playbackRates: string;
  defaultShowRemainingTime: boolean;
  onCloseErrorDialog: (evt: CustomEvent) => void;
  onInitFocusDialog: (evt: CustomEvent) => void;
  dialog: DialogOptions;
  inLiveWindow: boolean;
  onSeekToLive: (_evt: Event) => void;
  tokens: {
    playback?: string;
    thumbnail?: string;
    storyboard?: string;
  };
  noHotKeys: boolean;
  placeholder: string;
  hotKeys: AttributeTokenList;
  title: string;
};

export type DialogOptions = {
  title?: string;
  message?: string;
  linkText?: string;
  linkUrl?: string;
};

export type DevlogOptions = {
  message?: string;
  file?: string;
};

export type ErrorEvent = {
  player_error?: MediaError;
  player_error_code?: number;
  player_error_message?: string;
};
