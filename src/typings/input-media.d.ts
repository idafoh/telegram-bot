import type { InputMediaAnimation } from './input-media-animation.js';
import type { InputMediaAudio } from './input-media-audio.js';
import type { InputMediaDocument } from './input-media-document.js';
import type { InputMediaPhoto } from './input-media-photo.js';
import type { InputMediaVideo } from './input-media-video.js';

/**
 * This object represents the content of a media message to be sent. It should be one of
 * 
 * - InputMediaAnimation
 * - InputMediaDocument
 * - InputMediaAudio
 * - InputMediaPhoto
 * - InputMediaVideo
 */
export type InputMedia =
  | InputMediaAnimation
  | InputMediaAudio
  | InputMediaDocument
  | InputMediaPhoto
  | InputMediaVideo;
