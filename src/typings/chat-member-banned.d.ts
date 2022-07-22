import type { User } from './user.js';

export interface ChatMemberBanned {
  /**
   * The member's status in the chat, always “kicked”
   */
  status: 'kicked';
  /**
   * Information about the user
   */
  user: User;
  /**
   * Date when restrictions will be lifted for this user; unix time. If 0, then the user is banned forever
   */
  until_date: number;
}
