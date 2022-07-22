import type { ParseMode } from '../common/parse-mode.js';
import type { InlineKeyboardMarkup } from '../inline-keyboard-markup.js';
import type { MessageEntity } from '../message-entity.js';

export interface EditMessageTextParams {
  /**
   * Required if *inline_message_id* is not specified.
   * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
   */
  chat_id?: number | string;
  /**
   * Required if *inline_message_id* is not specified. Identifier of the message to edit
   */
  message_id?: number;
  /**
   * Required if *chat_id* and *message_id* are not specified. Identifier of the inline message
   */
  inline_message_id?: string;
  /**
   * New text of the message, 1-4096 characters after entities parsing
   */
  text: string;
  /**
   * Mode for parsing entities in the message text. See formatting options for more details.
   *
   * @see https://core.telegram.org/bots/api#formatting-options
   */
  parse_mode?: ParseMode;
  /**
   * A list of special entities that appear in the new caption, which can be specified instead of *parse_mode*
   */
  entities?: MessageEntity[];
  /**
   * Disables link previews for links in this message
   */
  disable_web_page_preview?: boolean;
  reply_markup?: InlineKeyboardMarkup;
}
