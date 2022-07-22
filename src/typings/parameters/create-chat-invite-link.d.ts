export interface CreateChatInviteLinkParams {
  /**
   * Unique identifier for the target group or username of the target supergroup or channel (in the format `@channelusername`)
   */
  chat_id: number | string;
  /**
   * Invite link name; 0-32 characters
   */
  name?: string;
  /**
   * Point in time (Unix timestamp) when the link will expire
   */
  expire_date?: number;
  /**
   * The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999
   */
  member_limit?: number;
  /**
   * True, if users joining the chat via the link need to be approved by chat administrators.
   * If *True*, member_limit can't be specified
   */
  creates_join_request?: boolean;
}
