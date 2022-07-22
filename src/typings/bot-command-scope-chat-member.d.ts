export interface BotCommandScopeChatMember {
  /**
   * Scope type, must be *chat_member*
   */
  type: 'chat_member';
  /**
   * Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`)
   */
  chat_id: string | number;
  /**
   * Unique identifier of the target user
   */
  user_id: number;
}
