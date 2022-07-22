import type { User } from './user.js';

export interface ChatMemberLeft {
  /**
   * The member's status in the chat, always “left”
   */
  status: 'left';
  /**
   * Information about the user
   */
  user: User;
}
