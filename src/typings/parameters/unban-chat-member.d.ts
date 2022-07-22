export interface UnbanChatMemberParams {
  /**
   * Unique identifier for the target group or username of the target supergroup or channel (in the format `@channelusername`)
   */
  chat_id: number | string;
  /**
   * Unique identifier of the target user
   */
  user_id: number;
  /**
   * Do nothing if the user is not banned
   */
  only_if_banned?: boolean;
}
