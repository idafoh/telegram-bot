export interface ForwardMessageParams {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
   */
  chat_id: number | string;
  /**
   * Unique identifier for the chat where the original message was sent (or channel username in the format `@channelusername`)
   */
  from_chat_id: number | string;
  /**
   * Sends the message silently. Users will receive a notification with no sound.
   *
   * @see https://telegram.org/blog/channels-2-0#silent-messages
   */
  disable_notification?: boolean;
  /**
   * Protects the contents of the forwarded message from forwarding and saving
   */
  protect_content?: boolean;
  /**
   * Message identifier in the chat specified in from_chat_id
   */
  message_id: number;
}
