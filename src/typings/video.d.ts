import type { CommonFile } from './common/file.js';
import type { PhotoSize } from './photo-size.js';

export interface Video extends CommonFile {
  /**
   * Video width as defined by sender
   */
  width: number;
  /**
   * Video height as defined by sender
   */
  height: number;
  /**
   * Duration of the video in seconds as defined by sender
   */
  duration: number;
  /**
   * Video thumbnail
   */
  thumb?: PhotoSize;
  /**
   * Original filename as defined by sender
   */
  file_name?: string;
  /**
   * MIME type of the file as defined by sender
   */
  mime_type?: string;
}
