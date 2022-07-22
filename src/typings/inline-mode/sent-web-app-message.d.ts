export interface SentWebAppMessage {
  /**
   * Identifier of the sent inline message.
   * Available only if there is an inline keyboard attached to the message.
   */
  inline_message_id?: string;
}
