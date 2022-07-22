export interface DeleteMessageParams {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
   */
  chat_id: number | string;
  /**
   * Identifier of the message to delete
   */
  message_id: number;
}
