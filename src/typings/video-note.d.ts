import type { CommonFile } from './common/file.js';
import type { PhotoSize } from './photo-size.js';

export interface VideoNote extends CommonFile {
  /**
   * Video width and height (diameter of the video message) as defined by sender
   */
  length: number;
  /**
   * Duration of the video in seconds as defined by sender
   */
  duration: number;
  /**
   * Video thumbnail
   */
  thumb?: PhotoSize;
}
