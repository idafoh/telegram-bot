import type { InlineKeyboardMarkup } from '../inline-keyboard-markup.js';

export interface EditMessageLiveLocationParams {
  /**
   * Required if *inline_message_id* is not specified.
   * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
   */
  chat_id?: number | string;
  /**
   * Required if *inline_message_id* is not specified. Identifier of the message to edit
   */
  message_id?: number;
  /**
   * Required if *chat_id* and *message_id* are not specified. Identifier of the inline message
   */
  inline_message_id?: string;
  /**
   * Latitude of new location
   */
  latitude: number;
  /**
   * Longitude of new location
   */
  longitude: number;
  /**
   * The radius of uncertainty for the location, measured in meters; 0-1500
   */
  horizontal_accuracy?: number;
  /**
   * Direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.
   */
  heading?: number;
  /**
   * The maximum distance for proximity alerts about approaching another chat member, in meters.
   * Must be between 1 and 100000 if specified.
   */
  proximity_alert_radius?: number;
  reply_markup?: InlineKeyboardMarkup;
}
