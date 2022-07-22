import type * as Types from './typings/index.js';
import { METHODS } from './enums/methods.js';

interface ApiError {
  ok: false;
  error_code: number;
  description: string;
  parameters?: Types.ResponseParameters;
}

interface ApiSuccess<T> {
  ok: true;
  result: T;
}

type ApiResponse<T> = ApiError | ApiSuccess<T>;

interface ErrorData {
  code: ApiError['error_code'];
  message: ApiError['description'];
  parameters: ApiError['parameters'];
}

type ReturnType<T> = [T, null] | [null, ErrorData];

import { $fetch, Data } from './fetch.js';
import { FormData } from 'node-fetch';

const DEFAULT_TELEGRAM_API_URL = 'https://api.telegram.org';

export class Bot {
  private endpointUrl: string;

  constructor(token: string, apiUrl = DEFAULT_TELEGRAM_API_URL) {
    this.endpointUrl = `${apiUrl}/bot${token}`;
  }

  /**
   * Use this method to receive incoming updates using long polling
   *
   * @see https://en.wikipedia.org/wiki/Push_technology#Long_polling
   *
   * @param {Types.GetUpdatesParams} options
   */
  getUpdates(options?: Types.GetUpdatesParams) {
    return this.sendApiRequest<Types.Update[]>(METHODS.getUpdates, options);
  }

  /**
   * Use this method to specify a URL and receive incoming updates via an outgoing webhook.
   * Whenever there is an update for the bot, we will send an HTTPS POST request to the specified URL, containing an Update.
   * In case of an unsuccessful request, we will give up after a reasonable amount of attempts.
   *
   * If you'd like to make sure that the webhook was set by you, you can specify secret data in the parameter secret_token.
   * If specified, the request will contain a header “X-Telegram-Bot-Api-Secret-Token” with the secret token as content.
   *
   * @param {Types.SetWebhookParams} options
   */
  setWebhook(options: Types.SetWebhookParams) {
    return this.sendApiRequest<true>(METHODS.setWebhook, options);
  }

  /**
   * Use this method to remove webhook integration if you decide to switch back to getUpdates
   *
   * @param {Types.DeleteWebhookParams} options
   */
  deleteWebhook(options?: Types.DeleteWebhookParams) {
    return this.sendApiRequest<true>(METHODS.deleteWebhook, options);
  }

  /**
   * Use this method to get current webhook status.
   *
   * If the bot is using getUpdates, will return an object with the url field empty.
   */
  getWebhookInfo() {
    return this.sendApiRequest<Types.WebhookInfo>(METHODS.getWebhookInfo);
  }

  /**
   * A simple method for testing your bot's authentication token.
   * Returns basic information about the bot.
   */
  getMe() {
    return this.sendApiRequest<Types.User>(METHODS.getMe);
  }

  /**
   * Use this method to log out from the cloud Bot API server before launching the bot locally.
   * You must log out the bot before running it locally, otherwise there is no guarantee that the bot will receive updates.
   * After a successful call, you can immediately log in on a local server, but will not be able to log in back to the cloud Bot API server for 10 minutes.
   */
  logOut() {
    return this.sendApiRequest<boolean>(METHODS.logOut);
  }

  /**
   * Use this method to close the bot instance before moving it from one local server to another.
   * You need to delete the webhook before calling this method to ensure that the bot isn't launched again after server restart.
   * The method will return error 429 in the first 10 minutes after the bot is launched.
   */
  close() {
    return this.sendApiRequest<boolean>(METHODS.close);
  }

  /**
   * Use this method to send text messages.
   *
   * @param {Types.SendMessageParams} options
   */
  sendMessage(options: Types.SendMessageParams) {
    return this.sendApiRequest<Types.Message>(METHODS.sendMessage, options);
  }

  /**
   * Use this method to forward messages of any kind. Service messages can't be forwarded.
   *
   * @param {Types.ForwardMessageParams} options
   */
  forwardMessage(options: Types.ForwardMessageParams) {
    return this.sendApiRequest<Types.Message>(METHODS.forwardMessage, options);
  }

  /**
   * Use this method to copy messages of any kind.
   * Service messages and invoice messages can't be copied.
   * The method is analogous to the method forwardMessage, but the copied message doesn't have a link to the original message.
   *
   * @param {Types.CopyMessageParams} options
   */
  copyMessage(options: Types.CopyMessageParams) {
    return this.sendApiRequest<Types.MessageId>(METHODS.copyMessage, options);
  }

  /**
   * Use this method to send photos.
   *
   * @param {Types.SendPhotoParams} options
   */
  sendPhoto(options: Types.SendPhotoParams) {
    return this.sendApiWithFormData<Types.Message>(METHODS.sendPhoto, options);
  }

  /**
   * Use this method to send audio files, if you want Telegram clients to display them in the music player.
   * Your audio must be in the .MP3 or .M4A format.
   * Bots can currently send audio files of up to 50 MB in size, this limit may be changed in the future.
   *
   * For sending voice messages, use the *sendVoice* method instead.
   * @param {Types.SendAudioParams} options
   */
  sendAudio(options: Types.SendAudioParams) {
    return this.sendApiWithFormData<Types.Message>(METHODS.sendAudio, options);
  }

  /**
   * Use this method to send general files.
   * Bots can currently send files of any type of up to 50 MB in size, this limit may be changed in the future.
   * @param {Types.SendDocumentParams} options
   */
  sendDocument(options: Types.SendDocumentParams) {
    return this.sendApiWithFormData<Types.Message>(
      METHODS.sendDocument,
      options
    );
  }

  /**
   * Use this method to send video files, Telegram clients support MPEG4 videos (other formats may be sent as Document).
   * Bots can currently send video files of up to 50 MB in size, this limit may be changed in the future.
   *
   * @param {Types.SendVideoParams} options
   */
  sendVideo(options: Types.SendVideoParams) {
    return this.sendApiWithFormData<Types.Message>(METHODS.sendVideo, options);
  }

  /**
   * Use this method to send animation files (GIF or H.264/MPEG-4 AVC video without sound).
   * Bots can currently send animation files of up to 50 MB in size, this limit may be changed in the future.
   *
   * @param {Types.SendAnimationParams} options
   */
  sendAnimation(options: Types.SendAnimationParams) {
    return this.sendApiWithFormData<Types.Message>(
      METHODS.sendAnimation,
      options
    );
  }

  /**
   * Use this method to send audio files, if you want Telegram clients to display the file as a playable voice message.
   * For this to work, your audio must be in an .OGG file encoded with OPUS (other formats may be sent as Audio or Document).
   * Bots can currently send voice messages of up to 50 MB in size, this limit may be changed in the future.
   *
   * @param {Types.SendVoiceParams} options
   */
  sendVoice(options: Types.SendVoiceParams) {
    return this.sendApiWithFormData<Types.Message>(METHODS.sendVoice, options);
  }

  /**
   * As of [v.4.0](https://telegram.org/blog/video-messages-and-telescope), Telegram clients support rounded square MPEG4 videos of up to 1 minute long.
   * Use this method to send video messages.
   *
   * @param {Types.SendVideoNoteParams} options
   */
  sendVideoNote(options: Types.SendVideoNoteParams) {
    return this.sendApiWithFormData<Types.Message>(
      METHODS.sendVideoNote,
      options
    );
  }

  /**
   * Use this method to send a group of photos, videos, documents or audios as an album.
   * Documents and audio files can be only grouped in an album with messages of the same type.
   *
   * @param {Types.SendMediaGroupParams} options
   */
  sendMediaGroup(options: Types.SendMediaGroupParams) {
    return this.sendApiWithFormData<Types.Message[]>(
      METHODS.sendMediaGroup,
      options
    );
  }

  /**
   * Use this method to send point on the map.
   *
   * @param {Types.SendLocationParams} options
   */
  sendLocation(options: Types.SendLocationParams) {
    return this.sendApiRequest<Types.Message>(METHODS.sendLocation, options);
  }

  /**
   * Use this method to edit live location messages.
   * A location can be edited until its *live_period* expires or editing is explicitly disabled by a call to *stopMessageLiveLocation*.
   *
   * @param {Types.EditMessageLiveLocationParams} options
   */
  editMessageLiveLocation(options: Types.EditMessageLiveLocationParams) {
    return this.sendApiRequest<Types.Message | true>(
      METHODS.editMessageLiveLocation,
      options
    );
  }

  /**
   * Use this method to stop updating a live location message before *live_period* expires.
   *
   * @param {Types.StopMessageLiveLocationParams} options
   */
  stopMessageLiveLocation(options: Types.StopMessageLiveLocationParams) {
    return this.sendApiRequest<Types.Message | true>(
      METHODS.stopMessageLiveLocation,
      options
    );
  }

  /**
   * Use this method to send information about a venue.
   *
   * @param {Types.SendVenueParams} options
   */
  sendVenue(options: Types.SendVenueParams) {
    return this.sendApiRequest<Types.Message>(METHODS.sendVenue, options);
  }

  /**
   * Use this method to send phone contacts
   *
   * @param {Types.SendContactParams} options
   */
  sendContact(options: Types.SendContactParams) {
    return this.sendApiRequest<Types.Message>(METHODS.sendContact, options);
  }

  /**
   * Use this method to send a native poll.
   *
   * @param {Types.SendPollParams} options
   */
  sendPoll(options: Types.SendPollParams) {
    return this.sendApiRequest<Types.Message>(METHODS.sendPoll, options);
  }

  /**
   * Use this method to send an animated emoji that will display a random value.
   *
   * @param {Types.SendDiceParams} options
   */
  sendDice(options: Types.SendDiceParams) {
    return this.sendApiRequest<Types.Message>(METHODS.sendDice, options);
  }

  /**
   * Use this method when you need to tell the user that something is happening on the bot's side.
   * The status is set for 5 seconds or less (when a message arrives from your bot, Telegram clients clear its typing status).
   *
   * We only recommend using this method when a response from the bot will take a noticeable amount of time to arrive.
   *
   * @param {Types.SendChatActionParams} options
   */
  sendChatAction(options: Types.SendChatActionParams) {
    return this.sendApiRequest<boolean>(METHODS.sendChatAction, options);
  }

  /**
   * Use this method to get a list of profile pictures for a user.
   *
   * @param {Types.GetUserProfilePhotosParams} options
   */
  getUserProfilePhotos(options: Types.GetUserProfilePhotosParams) {
    return this.sendApiRequest<Types.UserProfilePhotos>(
      METHODS.getUserProfilePhotos,
      options
    );
  }

  /**
   * Use this method to get basic information about a file and prepare it for downloading.
   * For the moment, bots can download files of up to 20MB in size.
   * The file can then be downloaded via the link https://api.telegram.org/file/bot<token\>/\<file_path\>, where \<file_path\> is taken from the response.
   * It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile again.
   *
   * #### Note: This function may not preserve the original file name and MIME type. You should save the file's MIME type and name (if available) when the File object is received.
   *
   * @param {Types.GetFileParams} options
   */
  getFile(options: Types.GetFileParams) {
    return this.sendApiRequest<Types.File>(METHODS.getFile, options);
  }

  /**
   * Use this method to ban a user in a group, a supergroup or a channel.
   * In the case of supergroups and channels, the user will not be able to return to the chat on their own using invite links, etc.,
   * unless unbanned first. The bot must be an administrator in the chat for this to work and must
   * have the appropriate administrator rights.
   *
   * @param {Types.BanChatMemberParams} options
   */
  banChatMember(options: Types.BanChatMemberParams) {
    return this.sendApiRequest<true>(METHODS.banChatMember, options);
  }

  /**
   * Use this method to unban a previously banned user in a supergroup or channel.
   * The user will not return to the group or channel automatically, but will be able to join via link, etc.
   * The bot must be an administrator for this to work.
   * By default, this method guarantees that after the call the user is not a member of the chat,
   * but will be able to join it. So if the user is a member of the chat they will also be removed from the chat.
   * If you don't want this, use the parameter only_if_banned.
   *
   * @param {Types.UnbanChatMemberParams} options
   */
  unbanChatMember(options: Types.UnbanChatMemberParams) {
    return this.sendApiRequest<true>(METHODS.unbanChatMember, options);
  }

  /**
   * Use this method to restrict a user in a supergroup. The bot must be an administrator in the supergroup for this to work and must have the appropriate administrator rights.
   * Pass True for all permissions to lift restrictions from a user.
   *
   * @param {Types.RestrictChatMemberParams} options
   */
  restrictChatMember(options: Types.RestrictChatMemberParams) {
    return this.sendApiRequest<true>(METHODS.restrictChatMember, options);
  }

  /**
   * Use this method to promote or demote a user in a supergroup or a channel.
   * The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights.
   * Pass False for all boolean parameters to demote a user.
   *
   * @param {Types.PromoteChatMemberParams} options
   */
  promoteChatMember(options: Types.PromoteChatMemberParams) {
    return this.sendApiRequest<true>(METHODS.promoteChatMember, options);
  }

  /**
   * Use this method to set a custom title for an administrator in a supergroup promoted by the bot.
   *
   * @param {Types.SetChatAdministratorCustomTitleParams} options
   */
  setChatAdministratorCustomTitle(
    options: Types.SetChatAdministratorCustomTitleParams
  ) {
    return this.sendApiRequest<true>(
      METHODS.setChatAdministratorCustomTitle,
      options
    );
  }

  /**
   * Use this method to ban a channel chat in a supergroup or a channel.
   * Until the chat is unbanned, the owner of the banned chat won't be able to send messages on behalf of any of their channels.
   * The bot must be an administrator in the supergroup or channel for this to work and must have the appropriate administrator rights.
   *
   * @param {Types.BanChatSenderChatParams} options
   */
  banChatSenderChat(options: Types.BanChatSenderChatParams) {
    return this.sendApiRequest<true>(METHODS.banChatSenderChat, options);
  }

  /**
   * Use this method to unban a previously banned channel chat in a supergroup or channel.
   * The bot must be an administrator for this to work and must have the appropriate administrator rights.
   *
   * @param {Types.UnbanChatSenderChatParams} options
   */
  unbanChatSenderChat(options: Types.UnbanChatSenderChatParams) {
    return this.sendApiRequest<true>(METHODS.unbanChatSenderChat, options);
  }

  /**
   * Use this method to set default chat permissions for all members.
   * The bot must be an administrator in the group or a supergroup for this to work and must have the *can_restrict_members* administrator rights.
   *
   * @param {Types.SetChatPermissionsParams} options
   */
  setChatPermissions(options: Types.SetChatPermissionsParams) {
    return this.sendApiRequest<true>(METHODS.setChatPermissions, options);
  }

  /**
   * Use this method to generate a new primary invite link for a chat; any previously generated primary link is revoked.
   * The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights.
   * Returns the new invite link on success.
   *
   *
   * #### Note: Each administrator in a chat generates their own invite links.
   * #### Bots can't use invite links generated by other administrators.
   * #### If you want your bot to work with invite links, it will need to generate its own link using exportChatInviteLink or by calling the getChat method.
   * #### If your bot needs to generate a new primary invite link replacing its previous one, use exportChatInviteLink again.
   *
   * @param {Types.ExportChatInviteLinkParams} options
   */
  exportChatInviteLink(options: Types.ExportChatInviteLinkParams) {
    return this.sendApiRequest<string>(METHODS.exportChatInviteLink, options);
  }

  /**
   * Use this method to create an additional invite link for a chat.
   * The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights.
   * The link can be revoked using the method revokeChatInviteLink.
   *
   * @param {Types.CreateChatInviteLinkParams} options
   */
  createChatInviteLink(options: Types.CreateChatInviteLinkParams) {
    return this.sendApiRequest<Types.ChatInviteLink>(
      METHODS.createChatInviteLink,
      options
    );
  }

  /**
   * Use this method to edit a non-primary invite link created by the bot.
   * The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights.
   *
   * @param {Types.EditChatInviteLinkParams} options
   */
  editChatInviteLink(options: Types.EditChatInviteLinkParams) {
    return this.sendApiRequest<Types.ChatInviteLink>(
      METHODS.editChatInviteLink,
      options
    );
  }

  /**
   * Use this method to revoke an invite link created by the bot.
   * If the primary link is revoked, a new link is automatically generated.
   * The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights.
   *
   * @param {Types.RevokeChatInviteLinkParams} options
   */
  revokeChatInviteLink(options: Types.RevokeChatInviteLinkParams) {
    return this.sendApiRequest<Types.ChatInviteLink>(
      METHODS.revokeChatInviteLink,
      options
    );
  }

  /**
   * Use this method to approve a chat join request.
   * The bot must be an administrator in the chat for this to work and must have the *can_invite_users* administrator right.
   *
   * @param {Types.ApproveChatJoinRequestParams} options
   */
  approveChatJoinRequest(options: Types.ApproveChatJoinRequestParams) {
    return this.sendApiRequest<true>(METHODS.approveChatJoinRequest, options);
  }

  /**
   * Use this method to decline a chat join request.
   * The bot must be an administrator in the chat for this to work and must have the *can_invite_users* administrator right.
   *
   * @param {Types.DeclineChatJoinRequestParams} options
   */
  declineChatJoinRequest(options: Types.DeclineChatJoinRequestParams) {
    return this.sendApiRequest<true>(METHODS.declineChatJoinRequest, options);
  }

  /**
   * Use this method to set a new profile photo for the chat. Photos can't be changed for private chats.
   * The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights.
   *
   * @param {Types.SetChatPhotoParams} options
   */
  setChatPhoto(options: Types.SetChatPhotoParams) {
    return this.sendApiWithFormData<true>(METHODS.setChatPhoto, options);
  }

  /**
   * Use this method to delete a chat photo. Photos can't be changed for private chats.
   * The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights.
   *
   * @param {Types.DeleteChatPhotoParams} options
   */
  deleteChatPhoto(options: Types.DeleteChatPhotoParams) {
    return this.sendApiRequest<true>(METHODS.deleteChatPhoto, options);
  }

  /**
   * Use this method to change the title of a chat. Titles can't be changed for private chats.
   * The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights.
   *
   * @param {Types.SetChatTitleParams} options
   */
  setChatTitle(options: Types.SetChatTitleParams) {
    return this.sendApiRequest<true>(METHODS.setChatTitle, options);
  }

  /**
   * Use this method to change the description of a group, a supergroup or a channel.
   * The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights.
   *
   * @param {Types.SetChatDescriptionParams} options
   */
  setChatDescription(options: Types.SetChatDescriptionParams) {
    return this.sendApiRequest<true>(METHODS.setChatDescription, options);
  }

  /**
   * Use this method to add a message to the list of pinned messages in a chat.
   * If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must
   * have the 'can_pin_messages' administrator right in a supergroup or 'can_edit_messages' administrator right in a channel.
   *
   * @param {Types.PinChatMessageParams} options
   */
  pinChatMessage(options: Types.PinChatMessageParams) {
    return this.sendApiRequest<true>(METHODS.pinChatMessage, options);
  }

  /**
   * Use this method to remove a message from the list of pinned messages in a chat.
   * If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must
   * have the 'can_pin_messages' administrator right in a supergroup or 'can_edit_messages' administrator right in a channel.
   *
   * @param {Types.UnpinChatMessageParams} options
   */
  unpinChatMessage(options: Types.UnpinChatMessageParams) {
    return this.sendApiRequest<true>(METHODS.unpinChatMessage, options);
  }

  /**
   * Use this method to remove a message from the list of pinned messages in a chat.
   * If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must
   * have the 'can_pin_messages' administrator right in a supergroup or 'can_edit_messages' administrator right in a channel.
   *
   * @param {Types.UnpinAllChatMessagesParams} options
   */
  unpinAllChatMessages(options: Types.UnpinAllChatMessagesParams) {
    return this.sendApiRequest<true>(METHODS.unpinAllChatMessages, options);
  }

  /**
   * Use this method for your bot to leave a group, supergroup or channel.
   *
   * @param {Types.LeaveChatParams} options
   */
  leaveChat(options: Types.LeaveChatParams) {
    return this.sendApiRequest<true>(METHODS.leaveChat, options);
  }

  /**
   * Use this method to get up to date information about the chat
   * (current name of the user for one-on-one conversations, current username of a user, group or channel, etc.).
   *
   * @param {Types.GetChatParams} options
   */
  getChat(options: Types.GetChatParams) {
    return this.sendApiRequest<Types.Chat>(METHODS.getChat, options);
  }

  /**
   * Use this method to get a list of administrators in a chat.
   * On success, returns an Array of ChatMember objects that contains information about all chat administrators except other bots.
   * If the chat is a group or a supergroup and no administrators were appointed, only the creator will be returned.
   *
   * @param {Types.GetChatAdministratorsParams} options
   */
  getChatAdministrators(options: Types.GetChatAdministratorsParams) {
    return this.sendApiRequest<Types.ChatMember[]>(
      METHODS.getChatAdministrators,
      options
    );
  }

  /**
   * Use this method to get the number of members in a chat.
   *
   * @param {Types.GetChatMemberCountParams} options
   */
  getChatMemberCount(options: Types.GetChatMemberCountParams) {
    return this.sendApiRequest<number>(METHODS.getChatMemberCount, options);
  }

  /**
   * Use this method to get information about a member of a chat.
   *
   * @param {Types.GetChatMemberParams} options
   */
  getChatMember(options: Types.GetChatMemberParams) {
    return this.sendApiRequest<Types.ChatMember>(
      METHODS.getChatMember,
      options
    );
  }

  /**
   * Use this method to set a new group sticker set for a supergroup.
   * The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights.
   * Use the field can_set_sticker_set optionally returned in *getChat* requests to check if the bot can use this method.
   *
   * @param {Types.SetChatStickerSetParams} options
   */
  setChatStickerSet(options: Types.SetChatStickerSetParams) {
    return this.sendApiRequest<true>(METHODS.setChatStickerSet, options);
  }

  /**
   * Use this method to delete a group sticker set from a supergroup.
   * The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights.
   * Use the field can_set_sticker_set optionally returned in *getChat* requests to check if the bot can use this method.
   *
   * @param {Types.DeleteChatStickerSetParams} options
   */
  deleteChatStickerSet(options: Types.DeleteChatStickerSetParams) {
    return this.sendApiRequest<true>(METHODS.deleteChatStickerSet, options);
  }

  /**
   * Use this method to send answers to callback queries sent from [inline keyboards](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating).
   * The answer will be displayed to the user as a notification at the top of the chat screen or as an alert.
   *
   * #### Alternatively, the user can be redirected to the specified Game URL.
   * #### For this option to work, you must first create a game for your bot via [@BotFather](https://t.me/botfather) and accept the terms.
   * #### Otherwise, you may use links like `t.me/your_bot?start=XXXX` that open your bot with a parameter.
   *
   * @param {Types.AnswerCallbackQueryParams} options
   */
  answerCallbackQuery(options: Types.AnswerCallbackQueryParams) {
    return this.sendApiRequest<true>(METHODS.answerCallbackQuery, options);
  }

  /**
   * Use this method to change the list of the bot's commands.
   *
   * @see https://core.telegram.org/bots#commands
   *
   * @param {Types.SetMyCommandsParams} options
   */
  setMyCommands(options: Types.SetMyCommandsParams) {
    return this.sendApiRequest<true>(METHODS.setMyCommands, options);
  }

  /**
   * Use this method to delete the list of the bot's commands for the given scope and user language.
   * After deletion, higher level commands will be shown to affected users.
   *
   * @param {Types.DeleteMyCommandsParams} options
   */
  deleteMyCommands(options: Types.DeleteMyCommandsParams) {
    return this.sendApiRequest<true>(METHODS.deleteMyCommands, options);
  }

  /**
   * Use this method to get the current list of the bot's commands for the given scope and user language.
   * If commands aren't set, an empty array is returned.
   *
   * @param {Types.GetMyCommandsParams} options
   */
  getMyCommands(options: Types.GetMyCommandsParams) {
    return this.sendApiRequest<Types.BotCommand[]>(
      METHODS.getMyCommands,
      options
    );
  }

  /**
   * Use this method to change the bot's menu button in a private chat, or the default menu button.
   *
   * @param {Types.SetChatMenuButtonParams} options
   */
  setChatMenuButton(options: Types.SetChatMenuButtonParams) {
    return this.sendApiRequest<true>(METHODS.setChatMenuButton, options);
  }

  /**
   * Use this method to get the current value of the bot's menu button in a private chat, or the default menu button.
   *
   * @param {Types.GetChatMenuButtonParams} options
   */
  getChatMenuButton(options: Types.GetChatMenuButtonParams) {
    return this.sendApiRequest<Types.MenuButton>(
      METHODS.getChatMenuButton,
      options
    );
  }

  /**
   * Use this method to change the default administrator rights requested by the bot when it's added as an administrator to groups or channels.
   * These rights will be suggested to users, but they are are free to modify the list before adding the bot.
   *
   * @param {Types.SetMyDefaultAdministratorRightsParams} options
   */
  setMyDefaultAdministratorRights(
    options: Types.SetMyDefaultAdministratorRightsParams
  ) {
    return this.sendApiRequest<true>(
      METHODS.setMyDefaultAdministratorRights,
      options
    );
  }

  /**
   * Use this method to get the current default administrator rights of the bot.
   *
   * @param {Types.GetMyDefaultAdministratorRightsParams} options
   */
  getMyDefaultAdministratorRights(
    options: Types.GetMyDefaultAdministratorRightsParams
  ) {
    return this.sendApiRequest<true>(
      METHODS.getMyDefaultAdministratorRights,
      options
    );
  }

  // Updating messages

  /**
   * Use this method to edit text and game messages.
   *
   * @param {Types.EditMessageTextParams} options
   */
  editMessageText(options: Types.EditMessageTextParams) {
    return this.sendApiRequest<Types.Message | true>(
      METHODS.editMessageText,
      options
    );
  }

  /**
   * Use this method to edit captions of messages.
   *
   * @param {Types.EditMessageCaptionParams} options
   */
  editMessageCaption(options: Types.EditMessageCaptionParams) {
    return this.sendApiRequest<Types.Message | true>(
      METHODS.editMessageCaption,
      options
    );
  }

  /**
   * Use this method to edit animation, audio, document, photo, or video messages.
   * If a message is part of a message album, then it can be edited only to an audio for audio albums,
   * only to a document for document albums and to a photo or a video otherwise.
   * When an inline message is edited, a new file can't be uploaded;
   * use a previously uploaded file via its *file_id* or specify a URL.
   *
   * @param {Types.EditMessageMediaParams} options
   */
  editMessageMedia(options: Types.EditMessageMediaParams) {
    return this.sendApiRequest<Types.Message | true>(
      METHODS.editMessageMedia,
      options
    );
  }

  /**
   * Use this method to edit only the reply markup of messages.
   *
   * @param {Types.EditMessageReplyMarkupParams} options
   */
  editMessageReplyMarkup(options: Types.EditMessageReplyMarkupParams) {
    return this.sendApiRequest<Types.Message | true>(
      METHODS.editMessageReplyMarkup,
      options
    );
  }

  /**
   * Use this method to stop a poll which was sent by the bot.
   *
   * @param {Types.StopPollParams} options
   */
  stopPoll(options: Types.StopPollParams) {
    return this.sendApiRequest<Types.Poll>(METHODS.stopPoll, options);
  }

  /**
   * Use this method to delete a message, including service messages, with the following limitations:
   *
   * - A message can only be deleted if it was sent less than 48 hours ago.
   * - A dice message in a private chat can only be deleted if it was sent more than 24 hours ago.
   * - Bots can delete outgoing messages in private chats, groups, and supergroups.
   * - Bots can delete incoming messages in private chats.
   * - Bots granted can_post_messages permissions can delete outgoing messages in channels.
   * - If the bot is an administrator of a group, it can delete any message there.
   * - If the bot has can_delete_messages permission in a supergroup or a channel, it can delete any message there.
   *
   * @param {Types.DeleteMessageParams} options
   */
  deleteMessage(options: Types.DeleteMessageParams) {
    return this.sendApiRequest<true>(METHODS.deleteMessage, options);
  }

  // Stickers

  /**
   * Use this method to send static .WEBP, animated .TGS, or video .WEBM stickers.
   *
   * @param {Types.SendStickerParams} options
   */
  sendSticker(options: Types.SendStickerParams) {
    return this.sendApiWithFormData<Types.Message>(
      METHODS.sendSticker,
      options
    );
  }

  /**
   * Use this method to get a sticker set.
   *
   * @param {Types.GetStickerSetParams} options
   */
  getStickerSet(options: Types.GetStickerSetParams) {
    return this.sendApiRequest<Types.StickerSet>(
      METHODS.getStickerSet,
      options
    );
  }

  /**
   * Use this method to upload a .PNG file with a sticker for later use in createNewStickerSet and setStickerPositionInSet methods (can be used multiple times).
   *
   * @param {Types.UploadStickerFileParams} options
   */
  uploadStickerFile(options: Types.UploadStickerFileParams) {
    return this.sendApiWithFormData<Types.File>(
      METHODS.uploadStickerFile,
      options
    );
  }

  /**
   * Use this method to create a new sticker set owned by a user.
   * The bot will be able to edit the sticker set thus created.
   * You **must** use exactly one of the fields *png_sticker*, *tgs_sticker*, or *webm_sticker*.
   *
   * @param {Types.CreateNewStickerSetParams} options
   */
  createNewStickerSet(options: Types.CreateNewStickerSetParams) {
    return this.sendApiWithFormData<true>(METHODS.createNewStickerSet, options);
  }

  /**
   * Use this method to add a new sticker to a set created by the bot.
   * You **must** use exactly one of the fields *png_sticker*, *tgs_sticker*, or *webm_sticker*.
   * Animated stickers can be added to animated sticker sets and only to them.
   * Animated sticker sets can have up to **50** stickers.
   * Static sticker sets can have up to **120** stickers.
   *
   * @param {Types.AddStickerToSetParams} options
   */
  addStickerToSet(options: Types.AddStickerToSetParams) {
    return this.sendApiWithFormData<true>(METHODS.addStickerToSet, options);
  }

  /**
   * Use this method to move a sticker in a set created by the bot to a specific position.
   *
   * @param {Types.SetStickerPositionInSetParams} options
   */
  setStickerPositionInSet(options: Types.SetStickerPositionInSetParams) {
    return this.sendApiRequest<true>(METHODS.setStickerPositionInSet, options);
  }

  /**
   * Use this method to delete a sticker from a set created by the bot.
   *
   * @param {Types.DeleteStickerFromSetParams} options
   */
  deleteStickerFromSet(options: Types.DeleteStickerFromSetParams) {
    return this.sendApiRequest<true>(METHODS.deleteStickerFromSet, options);
  }

  /**
   * Use this method to set the thumbnail of a sticker set.
   * Animated thumbnails can be set for animated sticker sets only.
   * Video thumbnails can be set only for video sticker sets only.
   *
   * @param {Types.SetStickerSetThumbParams} options
   */
  setStickerSetThumb(options: Types.SetStickerSetThumbParams) {
    return this.sendApiWithFormData<true>(METHODS.setStickerSetThumb, options);
  }

  // Inline mode

  /**
   * Use this method to send answers to an inline query.\
   * No more than **50** results per query are allowed.
   *
   * @param {Types.AnswerInlineQueryParams} options
   */
  answerInlineQuery(options: Types.AnswerInlineQueryParams) {
    return this.sendApiRequest<true>(METHODS.answerInlineQuery, options);
  }

  /**
   * Use this method to set the result of an interaction with a Web App and send a corresponding message on behalf of the user
   * to the chat from which the query originated.
   *
   * @param {Types.AnswerWebAppQueryParams} options
   */
  answerWebAppQuery(options: Types.AnswerWebAppQueryParams) {
    return this.sendApiRequest<Types.SentWebAppMessage>(
      METHODS.answerWebAppQuery,
      options
    );
  }

  // Payments

  /**
   * Use this method to send invoices.
   *
   * @param {Types.SendInvoiceParams} options
   */
  sendInvoice(options: Types.SendInvoiceParams) {
    return this.sendApiRequest<Types.Message>(METHODS.sendInvoice, options);
  }

  /**
   * Use this method to create a link for an invoice.
   *
   * @param {Types.CreateInvoiceLinkParams} options
   */
  createInvoiceLink(options: Types.CreateInvoiceLinkParams) {
    return this.sendApiRequest<string>(METHODS.createInvoiceLink, options);
  }

  /**
   * If you sent an invoice requesting a shipping address and the parameter *is_flexible* was specified,
   * the Bot API will send an Update with a *shipping_query* field to the bot.
   * Use this method to reply to shipping queries.
   *
   * @param {Types.AnswerShippingQueryParams} options
   */
  answerShippingQuery(options: Types.AnswerShippingQueryParams) {
    return this.sendApiRequest<true>(METHODS.answerShippingQuery, options);
  }

  /**
   * Once the user has confirmed their payment and shipping details,
   * the Bot API sends the final confirmation in the form of an Update with the field *pre_checkout_query*.
   * Use this method to respond to such pre-checkout queries.
   *
   * #### Note: The Bot API must receive an answer within 10 seconds after the pre-checkout query was sent.
   *
   * @param {Types.AnswerPreCheckoutQueryParams} options
   */
  answerPreCheckoutQuery(options: Types.AnswerPreCheckoutQueryParams) {
    return this.sendApiRequest<true>(METHODS.answerPreCheckoutQuery, options);
  }

  // Telegram Passport

  /**
   * Informs a user that some of the Telegram Passport elements they provided contains errors.
   * The user will not be able to re-submit their Passport to you until the errors are fixed
   * (the contents of the field for which you returned the error must change).
   *
   * @param {Types.SetPassportDataErrorsParams} options
   */
  setPassportDataErrors(options: Types.SetPassportDataErrorsParams) {
    return this.sendApiRequest<true>(METHODS.setPassportDataErrors, options);
  }

  // Games

  /**
   * Use this method to send a game.
   *
   * @param {Types.SendGameParams} options
   */
  sendGame(options: Types.SendGameParams) {
    return this.sendApiRequest<Types.Message>(METHODS.sendGame, options);
  }

  /**
   * Use this method to set the score of the specified user in a game message.
   * On success, if the message is not an inline message, the Message is returned, otherwise True is returned.
   * Returns an error, if the new score is not greater than the user's current score in the chat and force is False.
   *
   * @param {Types.SetGameScoreParams} options
   */
  setGameScore(options: Types.SetGameScoreParams) {
    return this.sendApiRequest<Types.Message | true>(
      METHODS.setGameScore,
      options
    );
  }

  /**
   * Use this method to get data for high score tables.
   * Will return the score of the specified user and several of their neighbors in a game.
   *
   * This method will currently return scores for the target user, plus two of their closest neighbors on each side.
   * Will also return the top three users if the user and their neighbors are not among them.
   * Please note that this behavior is subject to change.
   *
   * @param {Types.GetGameHighScoresParams} options
   */
  getGameHighScores(options: Types.GetGameHighScoresParams) {
    return this.sendApiRequest<Types.GameHighScore[]>(
      METHODS.getGameHighScores,
      options
    );
  }

  // Basic polling logic
  async startPolling({
    fn,
    options = {
      limit: 1,
      offset: -1,
      timeout: 50,
    },
    interval = 1000,
  }: {
    fn(update: Types.Update): void;
    options: Types.GetUpdatesParams;
    interval: number;
  }) {
    let offset = -1;
    const [updates, err] = await this.getUpdates(options);

    if (err) return;

    for (const upd of updates) {
      offset = upd.update_id;
    }

    const executePoll = async (resolve: any, reject: any) => {
      if (offset === -1) return;

      const [updates, error] = await this.getUpdates(options);

      if (updates && updates.length > 0) {
        fn(updates[0]);
        options.offset = updates[updates.length - 1].update_id + 1;
        options.limit = 1;
      }

      if (error) {
        return reject(error);
      } else {
        setTimeout(executePoll, interval, resolve, reject);
      }
    };

    return new Promise(executePoll);
  }

  // -------------------------------------
  //            PRIVATE METHODS
  // -------------------------------------

  private async sendApiRequest<T>(
    method: string,
    params?: Data
  ): Promise<ReturnType<T>> {
    const url = `${this.endpointUrl}/${method}`;
    let res: ApiResponse<T>;

    if (!params) {
      res = await $fetch.get(url);
    } else {
      res = await $fetch.post(url, params);
    }

    return this.returnResult<T>(res);
  }

  private async sendApiWithFormData<T>(
    method: string,
    options: Data
  ): Promise<ApiResponse<T>> {
    const url = `${this.endpointUrl}/${method}`;
    const formData = new FormData();

    for (const key in options) {
      if (!options.hasOwnProperty(key)) continue;
      const value = options[key];

      if (value instanceof Blob) {
        formData.append(key, value, 'filename');
      } else {
        formData.append(key, value);
      }
    }

    return $fetch.postFormData(url, formData);
  }

  private returnResult<T>(response: ApiResponse<T>): ReturnType<T> {
    if (response.ok) {
      return [response.result, null];
    }

    const error = {
      code: response.error_code,
      message: response.description,
      parameters: response.parameters,
    };

    return [null, error];
  }
}
