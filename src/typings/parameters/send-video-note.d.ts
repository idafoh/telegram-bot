import type { ParseMode } from '../common/parse-mode.js';
import type { ReplyMarkup } from '../common/reply-markup.js';
import type { InputFile } from '../input-file.js';

export interface SendVideoNoteParams {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
   */
  chat_id: number | string;
  /**
   * Video note to send. Pass a file_id as String to send a video note that exists on the Telegram servers (recommended) or
   * upload a new video using multipart/form-data.
   *
   * **Sending video notes by a URL is currently unsupported**
   *
   * @see https://core.telegram.org/bots/api#sending-files
   */
  video_note: InputFile;
  /**
   * Mode for parsing entities in the message text. See formatting options for more details.
   *
   * @see https://core.telegram.org/bots/api#formatting-options
   */
  parse_mode?: ParseMode;
  /**
   * Duration of sent video in seconds
   */
  duration?: number;
  /**
   * Video width and height, i.e. diameter of the video message
   */
  length?: number;
  /**
   * Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side.
   * The thumbnail should be in JPEG format and less than 200 kB in size.
   * A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data.
   * Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>”
   * if the thumbnail was uploaded using multipart/form-data under <file_attach_name>.
   */
  thumb?: InputFile['blob'] | string;
  /**
   * Sends the message silently. Users will receive a notification with no sound.
   *
   * @see https://telegram.org/blog/channels-2-0#silent-messages
   */
  disable_notification?: boolean;
  /**
   * Protects the contents of the sent message from forwarding and saving
   */
  protect_content?: boolean;
  /**
   * If the message is a reply, ID of the original message
   */
  reply_to_message_id?: number;
  /**
   * Pass True, if the message should be sent even if the specified replied-to message is not found
   */
  allow_sending_without_reply?: boolean;
  reply_markup?: ReplyMarkup;
}
