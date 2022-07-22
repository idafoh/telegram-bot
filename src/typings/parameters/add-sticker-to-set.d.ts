import type { InputFile } from '../input-file.js';
import type { MaskPosition } from '../stickers/mask-position.js';

export interface AddStickerToSetParams {
  /**
   * User identifier of created sticker set owner
   */
  user_id: number;
  /**
   * Sticker set name
   */
  name: string;
  /**
   * **PNG** image with the sticker, must be up to 512 kilobytes in size, dimensions must not exceed 512px,
   * and either width or height must be exactly 512px.
   * Pass a file_id as a String to send a file that already exists on the Telegram servers,
   * pass an HTTP URL as a String for Telegram to get a file from the Internet,
   * or upload a new one using multipart/form-data.
   */
  png_sticker?: InputFile | string;
  /**
   * **TGS** animation with the sticker, uploaded using multipart/form-data.
   *
   * @see https://core.telegram.org/stickers#animated-sticker-requirements for technical requirements
   */
  tgs_sticker?: InputFile;
  /**
   * **WEBM** video with the sticker, uploaded using multipart/form-data.
   *
   * @see https://core.telegram.org/stickers#video-sticker-requirements for technical requirements
   */
  webm_sticker?: InputFile;
  /**
   * One or more emoji corresponding to the sticker
   */
  emojis: string;
  /**
   * Pass *True*, if a set of mask stickers should be created
   */
  contains_masks?: boolean;
  /**
   * An object for position where the mask should be placed on faces
   */
  mask_position: MaskPosition;
}
