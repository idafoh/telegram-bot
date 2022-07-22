import type { ParseMode } from '../common/parse-mode.js';
import type { MessageEntity } from '../message-entity.js';

export interface InputTextMessageContent {
  /**
   * Text of the message to be sent, 1-4096 characters
   */
  message_text: string;
  /**
   * Mode for parsing entities in the message text. See formatting options for more details.
   *
   * @see https://core.telegram.org/bots/api#formatting-options
   */
  parse_mode?: ParseMode;
  /**
   * List of special entities that appear in message text, which can be specified instead of *parse_mode*
   */
  entities?: MessageEntity[];
  /**
   * Disables link previews for links in the sent message
   */
  disable_web_page_preview?: boolean;
}
