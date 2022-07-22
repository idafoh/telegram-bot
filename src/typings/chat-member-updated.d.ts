import type { ChatInviteLink } from './chat-invite-link.js';
import type { ChatMember } from './chat-member.js';
import type { Chat } from './chat.js';
import type { User } from './user.js';

export interface ChatMemberUpdated {
  /**
   * Chat the user belongs to
   */
  chat: Chat;
  /**
   * Performer of the action, which resulted in the change
   */
  from: User;
  /**
   * Date the change was done in Unix time
   */
  date: number;
  /**
   * Previous information about the chat member
   */
  old_chat_member: ChatMember;
  /**
   * New information about the chat member
   */
  new_chat_member: ChatMember;
  /**
   * Chat invite link, which was used by the user to join the chat; for joining by invite link events only.
   */
  invite_link?: ChatInviteLink;
}
