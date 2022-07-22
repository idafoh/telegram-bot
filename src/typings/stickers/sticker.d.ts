import type { File } from '../file.js';
import type { MaskPosition } from './mask-position.js';
import type { PhotoSize } from '../photo-size.js';

export interface Sticker {
  /**
   * Identifier for this file, which can be used to download or reuse the file
   */
  file_id: string;
  /**
   * Unique identifier for this file, which is supposed to be the same over time and for different bots.
   * Can't be used to download or reuse the file.
   */
  file_unique_id: string;
  /**
   * Sticker width
   */
  width: number;
  /**
   * Sticker height
   */
  height: number;
  /**
   * *True*, if the sticker is animated
   *
   * @see https://telegram.org/blog/animated-stickers
   */
  is_animated: boolean;
  /**
   * *True*, if the sticker is a video sticker
   *
   * @see https://telegram.org/blog/video-stickers-better-reactions
   */
  is_video: boolean;
  /**
   * Sticker thumbnail in the .WEBP or .JPG format
   */
  thumb?: PhotoSize;
  /**
   * Emoji associated with the sticker
   */
  emoji?: string;
  /**
   * Name of the sticker set to which the sticker belongs
   */
  set_name?: string;
  /**
   * Premium animation for the sticker, if the sticker is premium
   */
  premium_animation?: File;
  /**
   * For mask stickers, the position where the mask should be placed
   */
  mask_position?: MaskPosition;
  /**
   * File size in bytes
   */
  file_size?: number;
}
