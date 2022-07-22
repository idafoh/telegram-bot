import type { InlineKeyboardMarkup } from '../inline-keyboard-markup.js';
import type { InputMessageContent } from './input-message-content.js';

export interface InlineQueryResultCachedSticker {
  /**
   * Type of the result, must be *sticker*
   */
  type: 'sticker';
  /**
   * Unique identifier for this result, 1-64 Bytes
   */
  id: string;
  /**
   * A valid file identifier of the sticker
   */
  sticker_file_id: string;
  /**
   * Inline keyboard attached to the message
   *
   * @see https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating
   */
  reply_markup?: InlineKeyboardMarkup;
  /**
   * Content of the message to be sent instead of the sticker
   */
  input_message_content?: InputMessageContent;
}
