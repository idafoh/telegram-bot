export interface RevokeChatInviteLinkParams {
  /**
   * Unique identifier for the target group or username of the target supergroup or channel (in the format `@channelusername`)
   */
  chat_id: number | string;
  /**
   * The invite link to revoke
   */
  invite_link: string;
}
