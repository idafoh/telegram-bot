import type { ReplyMarkup } from '../common/reply-markup.js';

export interface SendContactParams {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
   */
  chat_id: number | string;
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
  last_name: string;
  /**
   * Additional data about the contact in the form of a vCard, 0-2048 bytes
   *
   * @see https://en.wikipedia.org/wiki/VCard
   */
  vcard?: string;
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
