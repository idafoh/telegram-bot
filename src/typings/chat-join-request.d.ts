import type { ChatInviteLink } from './chat-invite-link.js';
import type { Chat } from './chat.js';
import type { User } from './user.js';

export interface ChatJoinRequest {
  /**
   * Chat to which the request was sent
   */
  chat: Chat;
  /**
   * User that sent the join request
   */
  from: User;
  /**
   * Date the request was sent in Unix time
   */
  date: number;
  /**
   * Bio of the user.
   */
  bio?: string;
  /**
   * Chat invite link that was used by the user to send the join request
   */
  invite_link?: ChatInviteLink;
}
