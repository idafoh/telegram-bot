export interface BotCommandScopeChat {
  /**
   * Scope type, must be *chat*
   */
  type: 'chat';
  /**
   * Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`)
   */
  chat_id: string | number;
}
