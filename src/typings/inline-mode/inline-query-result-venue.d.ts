import type { InlineKeyboardMarkup } from '../inline-keyboard-markup.js';
import type { InputMessageContent } from './input-message-content.js';

export interface InlineQueryResultVenue {
  /**
   * Type of the result, must be *venue*
   */
  type: 'venue';
  /**
   * Unique identifier for this result, 1-64 Bytes
   */
  id: string;
  /**
   * Latitude of the venue location in degrees
   */
  latitude: number;
  /**
   * Longitude of the venue location in degrees
   */
  longitude: number;
  /**
   * Title of the venue
   */
  title: string;
  /**
   * Address of the venue
   */
  address: string;
  /**
   * Foursquare identifier of the venue if known
   */
  foursquare_id: string;
  /**
   * Foursquare type of the venue, if known.
   * (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.)
   */
  foursquare_type: string;
  /**
   * Google Places identifier of the venue
   */
  google_place_id: string;
  /**
   * Google Places type of the venue
   *
   * @see https://developers.google.com/places/web-service/supported_types
   */
  google_place_type: string;
  /**
   * Inline keyboard attached to the message
   *
   * @see https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating
   */
  reply_markup?: InlineKeyboardMarkup;
  /**
   * Content of the message to be sent instead of the venue
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
