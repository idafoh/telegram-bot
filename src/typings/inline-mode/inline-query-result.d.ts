import type { InlineQueryResultArticle } from './inline-query-result-article.js';
import type { InlineQueryResultAudio } from './inline-query-result-audio.js';
import type { InlineQueryResultCachedAudio } from './inline-query-result-cached-audio.js';
import type { InlineQueryResultCachedDocument } from './inline-query-result-cached-document.js';
import type { InlineQueryResultCachedGif } from './inline-query-result-cached-gif.js';
import type { InlineQueryResultCachedMpeg4Gif } from './inline-query-result-cached-mpeg4-gif.js';
import type { InlineQueryResultCachedPhoto } from './inline-query-result-cached-photo.js';
import type { InlineQueryResultCachedSticker } from './inline-query-result-cached-sticker.js';
import type { InlineQueryResultCachedVideo } from './inline-query-result-cached-video.js';
import type { InlineQueryResultCachedVoice } from './inline-query-result-cached-voice.js';
import type { InlineQueryResultContact } from './inline-query-result-contact.js';
import type { InlineQueryResultDocument } from './inline-query-result-document.js';
import type { InlineQueryResultGame } from './inline-query-result-game.js';
import type { InlineQueryResultGif } from './inline-query-result-gif.js';
import type { InlineQueryResultLocation } from './inline-query-result-location.js';
import type { InlineQueryResultMpeg4Gif } from './inline-query-result-mpeg4-gif.js';
import type { InlineQueryResultPhoto } from './inline-query-result-photo.js';
import type { InlineQueryResultVenue } from './inline-query-result-venue.js';
import type { InlineQueryResultVideo } from './inline-query-result-video.js';
import type { InlineQueryResultVoice } from './inline-query-result-voice.js';

/**
 * This object represents one result of an inline query.
 * Telegram clients currently support results of the following 20 types:
 *
 * - InlineQueryResultCachedAudio
 * - InlineQueryResultCachedDocument
 * - InlineQueryResultCachedGif
 * - InlineQueryResultCachedMpeg4Gif
 * - InlineQueryResultCachedPhoto
 * - InlineQueryResultCachedSticker
 * - InlineQueryResultCachedVideo
 * - InlineQueryResultCachedVoice
 * - InlineQueryResultArticle
 * - InlineQueryResultAudio
 * - InlineQueryResultContact
 * - InlineQueryResultGame
 * - InlineQueryResultDocument
 * - InlineQueryResultGif
 * - InlineQueryResultLocation
 * - InlineQueryResultMpeg4Gif
 * - InlineQueryResultPhoto
 * - InlineQueryResultVenue
 * - InlineQueryResultVideo
 * - InlineQueryResultVoice
 *
 * #### Note: All URLs passed in inline query results will be available to end users and therefore must be assumed to be public.
 */
export type InlineQueryResult =
  | InlineQueryResultCachedAudio
  | InlineQueryResultCachedDocument
  | InlineQueryResultCachedGif
  | InlineQueryResultCachedMpeg4Gif
  | InlineQueryResultCachedPhoto
  | InlineQueryResultCachedSticker
  | InlineQueryResultCachedVideo
  | InlineQueryResultCachedVoice
  | InlineQueryResultArticle
  | InlineQueryResultAudio
  | InlineQueryResultContact
  | InlineQueryResultGame
  | InlineQueryResultDocument
  | InlineQueryResultGif
  | InlineQueryResultLocation
  | InlineQueryResultMpeg4Gif
  | InlineQueryResultPhoto
  | InlineQueryResultVenue
  | InlineQueryResultVideo
  | InlineQueryResultVoice;
