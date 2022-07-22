import type { InlineKeyboardMarkup } from '../inline-keyboard-markup.js';
import type { InputMessageContent } from './input-message-content.js';
import type { ParseMode } from '../common/parse-mode.js';
import type { MessageEntity } from '../message-entity.js';

export interface InlineQueryResultCachedGif {
  /**
   * Type of the result, must be *gif*
   */
  type: 'gif';
  /**
   * Unique identifier for this result, 1-64 Bytes
   */
  id: string;
  /**
   * A valid file identifier for the GIF file
   */
  gif_file_id: string;
  /**
   * Title of the result
   */
  title?: string;
  /**
   * Caption of the GIF file to be sent, 0-1024 characters after entities parsing
   */
  caption?: string;
  /**
   * Mode for parsing entities in the caption. See formatting options for more details.
   *
   * @see https://core.telegram.org/bots/api#formatting-options
   */
  parse_mode?: ParseMode;
  /**
   * List of special entities that appear in the caption, which can be specified instead of *parse_mode*
   */
  caption_entities?: MessageEntity[];
  /**
   * Inline keyboard attached to the message
   *
   * @see https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating
   */
  reply_markup?: InlineKeyboardMarkup;
  /**
   * Content of the message to be sent instead of the GIF animation
   */
  input_message_content?: InputMessageContent;
}
