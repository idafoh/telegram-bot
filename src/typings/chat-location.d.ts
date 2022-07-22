import type { Location } from './location.js';

type NotLiveLocation = Omit<
  Omit<Omit<Location, 'live_period'>, 'proximity_alert_radius'>,
  'heading'
>;

export interface ChatLocation {
  /**
   * The location to which the supergroup is connected. Can't be a live location.
   */
  location: NotLiveLocation;
  /**
   * Location address; 1-64 characters, as defined by the chat owner
   */
  address: string;
}
