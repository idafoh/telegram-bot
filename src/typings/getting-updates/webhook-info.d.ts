export interface WebhookInfo {
  /**
   * Webhook URL, may be empty if webhook is not set up
   */
  url: string;
  /**
   * *True*, if a custom certificate was provided for webhook certificate checks
   */
  has_custom_certificate: boolean;
  /**
   * Number of updates awaiting delivery
   */
  pending_update_count: number;
  /**
   * Currently used webhook IP address
   */
  ip_address?: string;
  /**
   * Unix time for the most recent error that happened when trying to deliver an update via webhook
   */
  last_error_date?: number;
  /**
   * Error message in human-readable format for the most recent error that happened when trying to deliver an update via webhook
   */
  last_error_message?: string;
  /**
   * Unix time of the most recent error that happened when trying to synchronize available updates with Telegram datacenters
   */
  last_synchronization_error_date?: number;
  /**
   * The maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery
   */
  max_connections?: number;
  /**
   * A list of update types the bot is subscribed to. Defaults to all update types except *chat_member*
   */
  allowed_updates?: string[];
}
