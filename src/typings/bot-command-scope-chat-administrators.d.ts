export interface BotCommandScopeChatAdministrators {
  /**
   * Scope type, must be *chat_administrators*
   */
  type: 'chat_administrators';
  /**
   * Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`)
   */
  chat_id: string | number;
}
