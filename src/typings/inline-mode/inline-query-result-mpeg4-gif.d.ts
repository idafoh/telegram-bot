import type { InlineKeyboardMarkup } from '../inline-keyboard-markup.js';
import type { InputMessageContent } from './input-message-content.js';
import type { ParseMode } from '../common/parse-mode.js';
import type { MessageEntity } from '../message-entity.js';

export interface InlineQueryResultMpeg4Gif {
  /**
   * Type of the result, must be *mpeg4_gif*
   */
  type: 'mpeg4_gif';
  /**
   * Unique identifier for this result, 1-64 Bytes
   */
  id: string;
  /**
   * A valid URL for the MPEG4 file. File size must not exceed 1MB
   */
  mpeg4_url: string;
  /**
   * Video width
   */
  mpeg4_width?: number;
  /**
   * Video height
   */
  mpeg4_height?: number;
  /**
   * Video duration in seconds
   */
  mpeg4_duration?: number;
  /**
   * URL of the static (JPEG or GIF) or animated (MPEG4) thumbnail for the result
   */
  thumb_url: string;
  /**
   * MIME type of the thumbnail, must be one of “image/jpeg”, “image/gif”, or “video/mp4”.
   * Defaults to “image/jpeg”
   */
  thumb_mime_type?: 'image/jpeg' | 'image/gif' | 'video/mp4';
  /**
   * Title of the result
   */
  title?: string;
  /**
   * Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing
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
   * Content of the message to be sent instead of the video animation
   */
  input_message_content?: InputMessageContent;
}
