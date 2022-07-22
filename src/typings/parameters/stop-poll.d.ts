import type { InlineKeyboardMarkup } from '../inline-keyboard-markup.js';

export interface StopPollParams {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
   */
  chat_id: number | string;
  /**
   * Identifier of the original message with the poll
   */
  message_id: number;
  reply_markup?: InlineKeyboardMarkup;
}
