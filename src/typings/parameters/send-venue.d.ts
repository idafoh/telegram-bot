import type { ReplyMarkup } from '../common/reply-markup.js';

export interface SendVenueParams {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
   */
  chat_id: number | string;
  /**
   * Latitude of the venue
   */
  latitude: number;
  /**
   * Longitude of the venue
   */
  longitude: number;
  /**
   * Name of the venue
   */
  title: string;
  /**
   * Address of the venue
   */
  address: string;
  /**
   * Foursquare identifier of the venue
   */
  foursquare_id?: string;
  /**
   * Foursquare type of the venue, if known.
   *
   * For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.
   */
  foursquare_type?: string;
  /**
   * Google Places identifier of the venue
   */
  google_place_id?: string;
  /**
   * Google Places type of the venue.
   *
   * @see https://developers.google.com/places/web-service/supported_types
   */
  google_place_type?: string;
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
