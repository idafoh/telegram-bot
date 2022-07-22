import type { ChatPermissions } from '../chat-permissions.js';

export interface RestrictChatMemberParams {
  /**
   * Unique identifier for the target group or username of the target supergroup or channel (in the format `@supergroupusername`)
   */
  chat_id: number | string;
  /**
   * Unique identifier of the target user
   */
  user_id: number;
  /**
   * An object for new user permissions
   */
  permissions: ChatPermissions;
  /**
   * Date when restrictions will be lifted for the user, unix time.
   * If user is restricted for more than 366 days or less than 30 seconds from the current time,
   * they are considered to be restricted forever
   */
  until_date?: number;
}
