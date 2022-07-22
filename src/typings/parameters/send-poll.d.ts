import type { ParseMode } from '../common/parse-mode.js';
import type { ReplyMarkup } from '../common/reply-markup.js';
import type { MessageEntity } from '../message-entity.js';

export interface SendPollParams {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
   */
  chat_id: number | string;
  /**
   * Poll question, 1-300 characters
   */
  question: string;
  /**
   * An array of answer options, 2-10 strings 1-100 characters each
   */
  options: string[];
  /**
   * True, if the poll needs to be anonymous, defaults to *True*
   */
  is_anonymous?: boolean;
  /**
   * Poll type, “quiz” or “regular”, defaults to “regular”
   */
  type?: 'quiz' | 'regular';
  /**
   * True, if the poll allows multiple answers, ignored for polls in quiz mode, defaults to *False*
   */
  allows_multiple_answers?: boolean;
  /**
   * 0-based identifier of the correct answer option, required for polls in quiz mode
   */
  correct_option_id?: number;
  /**
   * Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll,
   * 0-200 characters with at most 2 line feeds after entities parsing
   */
  explanation?: string;
  /**
   * Mode for parsing entities in the explanation. See formatting options for more details.
   *
   * @see https://core.telegram.org/bots/api#formatting-options
   */
  explanation_parse_mode?: ParseMode;
  /**
   * A list of special entities that appear in the poll explanation, which can be specified instead of parse_mode
   */
  explanation_entities?: MessageEntity[];
  /**
   * Amount of time in seconds the poll will be active after creation, 5-600.
   * Can't be used together with *close_date*.
   */
  open_period?: number;
  /**
   * Point in time (Unix timestamp) when the poll will be automatically closed.
   * Must be at least 5 and no more than 600 seconds in the future.
   * Can't be used together with *open_period*.
   */
  close_date?: number;
  /**
   * Pass *True*, if the poll needs to be immediately closed. This can be useful for poll preview.
   */
  is_closed?: boolean;
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
