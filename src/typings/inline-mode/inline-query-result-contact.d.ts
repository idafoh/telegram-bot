import type { InlineKeyboardMarkup } from '../inline-keyboard-markup.js';
import type { InputMessageContent } from './input-message-content.js';

export interface InlineQueryResultContact {
  /**
   * Type of the result, must be *contact*
   */
  type: 'contact';
  /**
   * Unique identifier for this result, 1-64 Bytes
   */
  id: string;
  /**
   * Contact's phone number
   */
  phone_number: string;
  /**
   * Contact's first name
   */
  first_name: string;
  /**
   * Contact's last name
   */
  last_name?: string;
  /**
   * Additional data about the contact in the form of a vCard, 0-2048 bytes
   */
  vcard?: string;
  /**
   * Inline keyboard attached to the message
   *
   * @see https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating
   */
  reply_markup?: InlineKeyboardMarkup;
  /**
   * Content of the message to be sent instead of the contact
   */
  input_message_content?: InputMessageContent;
  /**
   * Url of the thumbnail for the result
   */
  thumb_url?: string;
  /**
   * Thumbnail width
   */
  thumb_width?: number;
  /**
   * Thumbnail height
   */
  thumb_height?: number;
}
