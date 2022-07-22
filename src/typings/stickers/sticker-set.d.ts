import type { PhotoSize } from '../photo-size.js';
import type { Sticker } from './sticker.js';

export interface StickerSet {
  /**
   * Sticker set name
   */
  name: string;
  /**
   * Sticker set title
   */
  title: string;
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
   * True, if the sticker set contains masks
   */
  contains_masks: boolean;
  /**
   * List of all set stickers
   */
  stickers: Sticker[];
  /**
   * Sticker set thumbnail in the .WEBP, .TGS, or .WEBM format
   */
  thumb?: PhotoSize;
}
