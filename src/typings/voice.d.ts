import type { CommonFile } from './common/file.js';
import type { PhotoSize } from './photo-size.js';

export interface Voice extends CommonFile {
  /**
   * Duration of the audio in seconds as defined by sender
   */
  duration: number;
  /**
   * MIME type of the file as defined by sender
   */
  mime_type?: string;
}
