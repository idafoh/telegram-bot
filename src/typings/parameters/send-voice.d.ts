import type { ParseMode } from '../common/parse-mode.js';
import type { ReplyMarkup } from '../common/reply-markup.js';
import type { InputFile } from '../input-file.js';
import type { MessageEntity } from '../message-entity.js';

export interface SendVoiceParams {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
   */
  chat_id: number | string;
  /**
   * Audio file to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended),
   * pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data.
   *
   * @see https://core.telegram.org/bots/api#sending-files
   */
  voice: InputFile;
  /**
   * Voice message caption, 0-1024 characters after entities parsing
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
   * Duration of the voice message in seconds
   */
  duration?: number;
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
