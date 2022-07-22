export interface PinChatMessageParams {
  /**
   * Unique identifier for the target group or username of the target supergroup or channel (in the format `@channelusername`)
   */
  chat_id: number | string;
  /**
   * Identifier of a message to pin
   */
  message_id: number;
  /**
   * Pass True, if it is not necessary to send a notification to all chat members about the new pinned message.
   * Notifications are always disabled in channels and private chats.
   */
  disable_notification?: boolean;
}
