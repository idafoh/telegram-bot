import type { ChatAdministratorRights } from '../chat-administrator-rights.js';

export interface SetMyDefaultAdministratorRightsParams {
  /**
   * An object describing new default administrator rights.
   * If not specified, the default administrator rights will be cleared.
   */
  rights?: ChatAdministratorRights;
  /**
   * Pass True to change the default administrator rights of the bot in channels.
   * Otherwise, the default administrator rights of the bot for groups and supergroups will be changed.
   */
  for_channels?: boolean;
}
