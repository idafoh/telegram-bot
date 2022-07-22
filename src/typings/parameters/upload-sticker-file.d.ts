import { InputFile } from '../input-file.js';

export interface UploadStickerFileParams {
  /**
   * User identifier of sticker file owner
   */
  user_id: number;
  /**
   * PNG image with the sticker, must be up to 512 kilobytes in size, dimensions must not exceed 512px, and either width or height must be exactly 512px.
   */
  png_sticker: InputFile;
}
