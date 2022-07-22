import type { InlineKeyboardMarkup } from '../inline-keyboard-markup.js';
import type { InputMessageContent } from './input-message-content.js';

export interface InlineQueryResultLocation {
  /**
   * Type of the result, must be *location*
   */
  type: 'location';
  /**
   * Unique identifier for this result, 1-64 Bytes
   */
  id: string;
  /**
   * Location latitude in degrees
   */
  latitude: number;
  /**
   * Location longitude in degrees
   */
  longitude: number;
  /**
   * Location title
   */
  title: string;
  /**
   * The radius of uncertainty for the location, measured in meters; 0-1500
   */
  horizontal_accuracy?: number;
  /**
   * Period in seconds for which the location can be updated, should be between 60 and 86400.
   */
  live_period?: number;
  /**
   * For live locations, a direction in which the user is moving, in degrees.
   * Must be between 1 and 360 if specified.
   */
  heading?: number;
  /**
   * For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters.
   * Must be between 1 and 100000 if specified.
   */
  proximity_alert_radius?: number;
  /**
   * Inline keyboard attached to the message
   *
   * @see https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating
   */
  reply_markup?: InlineKeyboardMarkup;
  /**
   * Content of the message to be sent instead of the location
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
