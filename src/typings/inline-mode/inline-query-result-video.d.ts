import type { InlineKeyboardMarkup } from '../inline-keyboard-markup.js';
import type { InputMessageContent } from './input-message-content.js';
import type { ParseMode } from '../common/parse-mode.js';
import type { MessageEntity } from '../message-entity.js';

/**
 * #### If message contains an embedded video (e.g., YouTube), you must replace its content using *input_message_content*.
 */
export interface InlineQueryResultVideo {
  /**
   * Type of the result, must be *video*
   */
  type: 'video';
  /**
   * Unique identifier for this result, 1-64 Bytes
   */
  id: string;
  /**
   * A valid URL for the embedded video player or video file
   */
  video_url: string;
  /**
   * MIME type of the content of the video URL, “text/html” or “video/mp4”
   */
  mime_type: string;
  /**
   * URL of the thumbnail (JPEG only) for the video
   */
  thumb_url: string;
  /**
   * Title of the result
   */
  title: string;
  /**
   * Short description of the result
   */
  description?: string;
  /**
   * Caption of the video to be sent, 0-1024 characters after entities parsing
   */
  caption?: string;
  /**
   * Mode for parsing entities in the caption. See formatting options for more details.
   *
   * @see https://core.telegram.org/bots/api#formatting-options
   */
  parse_mode?: ParseMode;
  /**
   * List of special entities that appear in the caption, which can be specified instead of *parse_mode*
   */
  caption_entities?: MessageEntity[];
  /**
   * Inline keyboard attached to the message
   *
   * @see https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating
   */
  reply_markup?: InlineKeyboardMarkup;
  /**
   * Content of the message to be sent instead of the video.
   * This field is required if InlineQueryResultVideo is used to send an HTML-page as a result (e.g., a YouTube video).
   */
  input_message_content?: InputMessageContent;
  /**
   * Video width
   */
  video_width?: number;
  /**
   * Video height
   */
  video_height?: number;
  /**
   * Video duration in seconds
   */
  video_duration?: number;
}
