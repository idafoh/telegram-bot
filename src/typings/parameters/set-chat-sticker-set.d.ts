export interface SetChatStickerSetParams {
  /**
   * Unique identifier for the target group or username of the target supergroup or channel (in the format `@supergroupusername`)
   */
  chat_id: number | string;
  /**
   * Name of the sticker set to be set as the group sticker set
   */
  sticker_set_name: string;
}
