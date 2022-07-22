import type { InputFile } from '../input-file.js';
import type { MaskPosition } from '../stickers/mask-position.js';

export interface CreateNewStickerSetParams {
  /**
   * User identifier of created sticker set owner
   */
  user_id: number;
  /**
   * Short name of sticker set, to be used in `t.me/addstickers/` URLs (e.g., animals).
   * Can contain only English letters, digits and underscores.
   * Must begin with a letter, can't contain consecutive underscores and must end in `"_by_<bot_username>"`. `<bot_username>` is case insensitive.
   * 1-64 characters.
   */
  name: string;
  /**
   * Sticker set title, 1-64 characters
   */
  title: string;
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
