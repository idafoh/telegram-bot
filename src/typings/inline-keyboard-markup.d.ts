import { InlineKeyboardButton } from './inline-keyboard-button.js';

export interface InlineKeyboardMarkup {
  /**
   * Array of button rows, each represented by an Array of InlineKeyboardButton objects
   */
  inline_keyboard: InlineKeyboardButton[][];
}
