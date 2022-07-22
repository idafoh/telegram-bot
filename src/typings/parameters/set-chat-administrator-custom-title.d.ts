export interface SetChatAdministratorCustomTitleParams {
  /**
   * Unique identifier for the target group or username of the target supergroup or channel (in the format `@supergroupusername`)
   */
  chat_id: number | string;
  /**
   * Unique identifier of the target user
   */
  user_id: number;
  /**
   * New custom title for the administrator; 0-16 characters, emoji are not allowed
   */
  custom_title: string;
}
