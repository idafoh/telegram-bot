import type { CommonFile } from './common/file.js';
import type { PhotoSize } from './photo-size.js';

export interface Document extends CommonFile {
  /**
   * Document thumbnail as defined by sender
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
