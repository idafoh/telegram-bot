import type { User } from './user.js';

export interface ChatMemberOwner {
  /**
   * The member's status in the chat, always “creator”
   */
  status: 'creator';
  /**
   * Information about the user
   */
  user: User;
  /**
   * *True*, if the user's presence in the chat is hidden
   */
  is_anonymous: boolean;
  /**
   * Custom title for this user
   */
  custom_title?: string;
}
