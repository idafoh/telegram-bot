export interface UnbanChatSenderChatParams {
  /**
   * Unique identifier for the target group or username of the target supergroup or channel (in the format `@channelusername`)
   */
  chat_id: number | string;
  /**
   * Unique identifier of the target user
   */
  sender_chat_id: number;
}
