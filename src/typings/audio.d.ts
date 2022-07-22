import type { CommonFile } from './common/file.js';
import type { PhotoSize } from './photo-size.js';

export interface Audio extends CommonFile {
  /**
   * Duration of the audio in seconds as defined by sender
   */
  duration: number;
  /**
   * Performer of the audio as defined by sender or by audio tags
   */
  performer?: string;
  /**
   * Title of the audio as defined by sender or by audio tags
   */
  title?: string;
  /**
   * Original filename as defined by sender
   */
  file_name?: string;
  /**
   * MIME type of the file as defined by sender
   */
  mime_type?: string;
  /**
   * Thumbnail of the album cover to which the music file belongs
   */
  thumb?: PhotoSize;
}
