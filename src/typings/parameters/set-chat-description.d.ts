export interface SetChatDescriptionParams {
  /**
   * Unique identifier for the target group or username of the target supergroup or channel (in the format `@channelusername`)
   */
  chat_id: number | string;
  /**
   * New chat description, 0-255 characters
   */
  description: string;
}
