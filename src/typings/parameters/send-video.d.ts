import type { ParseMode } from '../common/parse-mode.js';
import type { ReplyMarkup } from '../common/reply-markup.js';
import type { InputFile } from '../input-file.js';
import type { MessageEntity } from '../message-entity.js';

export interface SendVideoParams {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
   */
  chat_id: number | string;
  /**
   * Video to send. Pass a file_id as String to send a video that exists on the Telegram servers (recommended),
   * pass an HTTP URL as a String for Telegram to get a video from the Internet, or upload a new video using multipart/form-data.
   *
   * @see https://core.telegram.org/bots/api#sending-files
   */
  video: InputFile;
  /**
   * Video caption (may also be used when resending videos by file_id), 0-1024 characters after entities parsing
   */
  caption?: string;
  /**
   * Mode for parsing entities in the message text. See formatting options for more details.
   *
   * @see https://core.telegram.org/bots/api#formatting-options
   */
  parse_mode?: ParseMode;
  /**
   * A list of special entities that appear in the new caption, which can be specified instead of *parse_mode*
   */
  caption_entities?: MessageEntity[];
  /**
   * Duration of sent video in seconds
   */
  duration?: number;
  /**
   * Video width
   */
  width?: number;
  /**
   * Video height
   */
  height?: number;
  /**
   * Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side.
   * The thumbnail should be in JPEG format and less than 200 kB in size.
   * A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data.
   * Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>”
   * if the thumbnail was uploaded using multipart/form-data under <file_attach_name>.
   */
  thumb?: InputFile['blob'] | string;
  /**
   * Pass True, if the uploaded video is suitable for streaming
   */
  supports_streaming?: boolean;
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
