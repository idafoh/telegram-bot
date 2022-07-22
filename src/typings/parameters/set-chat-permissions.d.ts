import type { ChatPermissions } from '../chat-permissions.js';

export interface SetChatPermissionsParams {
  /**
   * Unique identifier for the target group or username of the target supergroup or channel (in the format `@supergroupusername`)
   */
  chat_id: number | string;
  /**
   * An object for new default chat permissions
   */
  permissions: ChatPermissions;
}
