export type Action =
  | 'typing'
  | 'upload_photo'
  | 'record_video'
  | 'upload_video'
  | 'record_voice'
  | 'upload_voice'
  | 'upload_document'
  | 'choose_sticker'
  | 'find_location'
  | 'record_video_note'
  | 'upload_video_note';

export interface SendChatActionParams {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
   */
  chat_id: number | string;
  /**
   * Type of action to broadcast.
   * Choose one, depending on what the user is about to receive:
   * *typing* for [text messages](https://core.telegram.org/bots/api#sendmessage),
   * *upload_photo* for [photos](https://core.telegram.org/bots/api#sendphoto),
   * *record_video* or *upload_video* for [videos](https://core.telegram.org/bots/api#sendvideo),
   * *record_voice* or *upload_voice* for [voice notes](https://core.telegram.org/bots/api#sendvoice),
   * *upload_document* for [general files](https://core.telegram.org/bots/api#senddocument),
   * *choose_sticker* for [stickers](https://core.telegram.org/bots/api#sendsticker),
   * *find_location* for [location data](https://core.telegram.org/bots/api#sendlocation),
   * *record_video_note* or *upload_video_note* for [video notes](https://core.telegram.org/bots/api#sendvideonote).
   */
  action: Action;
}
