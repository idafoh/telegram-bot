import type { User } from './user.js';

export interface ProximityAlertTriggered {
  /**
   * User that triggered the alert
   */
  traveler: User;
  /**
   * User that set the alert
   */
  watcher: User;
  /**
   * The distance between the users
   */
  distance: number;
}
