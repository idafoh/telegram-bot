import type { User } from './user.js';

export interface VideoChatParticipantsInvited {
  /**
   * New members that were invited to the video chat
   */
  users: User[];
}
