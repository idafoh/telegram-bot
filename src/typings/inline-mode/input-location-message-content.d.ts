export interface InputLocationMessageContent {
  /**
   * Latitude of the location in degrees
   */
  latitude: number;
  /**
   * Longitude of the location in degrees
   */
  longitude: number;
  /**
   * The radius of uncertainty for the location, measured in meters; 0-1500
   */
  horizontal_accuracy?: number;
  /**
   * Period in seconds for which the location can be updated, should be between 60 and 86400.
   */
  live_period?: number;
  /**
   * For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.
   */
  heading?: number;
  /**
   * For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters.
   * Must be between 1 and 100000 if specified.
   */
  proximity_alert_radius?: number;
}
