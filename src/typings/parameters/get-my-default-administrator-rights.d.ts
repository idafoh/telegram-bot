export interface GetMyDefaultAdministratorRightsParams {
  /**
   * Pass True to get default administrator rights of the bot in channels.
   * Otherwise, default administrator rights of the bot for groups and supergroups will be returned.
   */
  for_channels?: boolean;
}
