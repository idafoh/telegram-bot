import type { User } from './user.js';

export interface PollAnswer {
  /**
   * Unique poll identifier
   */
  poll_id: string;
  /**
   * The user, who changed the answer to the poll
   */
  user: User;
  /**
   * 0-based identifiers of answer options, chosen by the user.
   * May be empty if the user retracted their vote.
   */
  option_ids: number[];
}
