import type { ChatMemberAdministrator } from './chat-member-administrator.js';
import type { ChatMemberBanned } from './chat-member-banned.js';
import type { ChatMemberLeft } from './chat-member-left.js';
import type { ChatMemberMember } from './chat-member-member.js';
import type { ChatMemberOwner } from './chat-member-owner.js';
import type { ChatMemberRestricted } from './chat-member-restricted.js';

/**
 * This object contains information about one member of a chat.
 * Currently, the following 6 types of chat members are supported:
 *
 * - ChatMemberOwner
 * - ChatMemberAdministrator
 * - ChatMemberMember
 * - ChatMemberRestricted
 * - ChatMemberLeft
 * - ChatMemberBanned
 */
export type ChatMember =
  | ChatMemberOwner
  | ChatMemberAdministrator
  | ChatMemberMember
  | ChatMemberRestricted
  | ChatMemberLeft
  | ChatMemberBanned;
