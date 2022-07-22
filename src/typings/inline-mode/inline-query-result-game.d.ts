import type { InlineKeyboardMarkup } from '../inline-keyboard-markup.js';

export interface InlineQueryResultGame {
  /**
   * Type of the result, must be *game*
   */
  type: 'game';
  /**
   * Unique identifier for this result, 1-64 Bytes
   */
  id: string;
  /**
   * Short name of the game
   */
  game_short_name: string;
  /**
   * Inline keyboard attached to the message
   *
   * @see https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating
   */
  reply_markup?: InlineKeyboardMarkup;
}
