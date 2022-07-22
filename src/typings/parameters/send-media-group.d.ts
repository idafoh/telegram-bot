import type { InputMediaAudio } from '../input-media-audio.js';
import type { InputMediaDocument } from '../input-media-document.js';
import type { InputMediaPhoto } from '../input-media-photo.js';
import type { InputMediaVideo } from '../input-media-video.js';

type Media =
  | InputMediaAudio
  | InputMediaDocument
  | InputMediaPhoto
  | InputMediaVideo;

export interface SendMediaGroupParams {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
   */
  chat_id: number | string;
  /**
   * An array describing messages to be sent, must include 2-10 items
   */
  media: Media[];
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
}
