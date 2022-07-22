import type { User } from './user.js';

export interface ChatMemberMember {
  /**
   * The member's status in the chat, always “member”
   */
  status: 'member';
  /**
   * Information about the user
   */
  user: User;
}
