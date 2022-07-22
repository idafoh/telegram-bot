import type { ReplyMarkup } from '../common/reply-markup.js';
import type { InputFile } from '../input-file.js';

export interface SendStickerParams {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
   */
  chat_id: string | number;
  /**
   * Sticker to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended),
   * pass an HTTP URL as a String for Telegram to get a .WEBP file from the Internet,
   * or upload a new one using multipart/form-data.
   */
  sticker: InputFile | string;
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
