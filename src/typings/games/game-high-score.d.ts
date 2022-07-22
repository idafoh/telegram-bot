import type { User } from '../user.js';

export interface GameHighScore {
  /**
   * Position in high score table for the game
   */
  position: number;
  /**
   * User
   */
  user: User;
  /**
   * Score
   */
  score: number;
}
