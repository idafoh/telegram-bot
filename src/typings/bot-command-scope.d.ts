import type { BotCommandScopeAllChatAdministrators } from './bot-command-scope-all-chat-administrators.js';
import type { BotCommandScopeAllGroupChats } from './bot-command-scope-all-group-chats.js';
import type { BotCommandScopeAllPrivateChats } from './bot-command-scope-all-private-chats.js';
import type { BotCommandScopeChatAdministrators } from './bot-command-scope-chat-administrators.js';
import type { BotCommandScopeChatMember } from './bot-command-scope-chat-member.js';
import type { BotCommandScopeChat } from './bot-command-scope-chat.js';
import type { BotCommandScopeDefault } from './bot-command-scope-default.js';

/**
 * This object represents the scope to which bot commands are applied. Currently, the following 7 scopes are supported:
 *
 * - BotCommandScopeDefault
 * - BotCommandScopeAllPrivateChats
 * - BotCommandScopeAllGroupChats
 * - BotCommandScopeAllChatAdministrators
 * - BotCommandScopeChat
 * - BotCommandScopeChatAdministrators
 * - BotCommandScopeChatMember
 */
export type BotCommandScope =
  | BotCommandScopeDefault
  | BotCommandScopeAllPrivateChats
  | BotCommandScopeAllGroupChats
  | BotCommandScopeAllChatAdministrators
  | BotCommandScopeChat
  | BotCommandScopeChatAdministrators
  | BotCommandScopeChatMember;
