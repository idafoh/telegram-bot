import type { Message } from './message.js';
import type { User } from './user.js';

export interface CallbackQuery {
  /**
   * Unique identifier for this query
   */
  id: string;
  /**
   * Sender
   */
  from: User;
  /**
   * Message with the callback button that originated the query.
   * Note that message content and message date will not be available if the message is too old
   */
  message?: Message;
  /**
   * Identifier of the message sent via the bot in inline mode, that originated the query.
   */
  inline_message_id?: string;
  /**
   * Global identifier, uniquely corresponding to the chat to which the message with the callback button was sent.
   * Useful for high scores in games.
   */
  chat_instance: string;
  /**
   * Data associated with the callback button.
   * Be aware that the message originated the query can contain no callback buttons with this data.
   */
  data?: string;
  /**
   * Short name of a Game to be returned, serves as the unique identifier for the game
   */
  game_short_name?: string;
}
