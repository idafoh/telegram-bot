import { InlineKeyboardMarkup } from '../inline-keyboard-markup.js';

export interface SendGameParams {
  /**
   * Unique identifier for the target chat
   */
  chat_id: number;
  /**
   * Short name of the game, serves as the unique identifier for the game.
   * Set up your games via [@BotFather](https://t.me/botfather)
   */
  game_short_name: string;
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
   * Pass *True*, if the message should be sent even if the specified replied-to message is not found
   */
  allow_sending_without_reply?: boolean;
  /**
   * If empty, one `"Play game_title"` button will be shown.
   * If not empty, the first button must launch the game.
   */
  reply_markup?: InlineKeyboardMarkup;
}
