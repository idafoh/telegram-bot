import type { ReplyMarkup } from '../common/reply-markup.js';

export interface SendLocationParams {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
   */
  chat_id: number | string;
  /**
   * Latitude of the location
   */
  latitude: number;
  /**
   * Longitude of the location
   */
  longitude: number;
  /**
   * The radius of uncertainty for the location, measured in meters; 0-1500
   */
  horizontal_accuracy?: number;
  /**
   * Period in seconds for which the location will be updated should be between 60 and 86400.
   *
   * @see https://telegram.org/blog/live-locations
   */
  live_period?: number;
  /**
   * For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.
   */
  heading?: number;
  /**
   * For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters.
   * Must be between 1 and 100000 if specified.
   */
  proximity_alert_radius?: number;
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
