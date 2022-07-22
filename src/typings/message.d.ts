import type { Animation } from './animation.js';
import type { Audio } from './audio.js';
import type { Chat } from './chat.js';
import type { Contact } from './contact.js';
import type { Dice } from './dice.js';
import type { Document } from './document.js';
import type { Game } from './games/game.js';
import type { InlineKeyboardMarkup } from './inline-keyboard-markup.js';
import type { Invoice } from './invoice.js';
import type { Location } from './location.js';
import type { MessageAutoDeleteTimerChanged } from './message-auto-delete-timer-changed.js';
import type { MessageEntity } from './message-entity.js';
import type { PassportData } from './passport-data.js';
import type { PhotoSize } from './photo-size.js';
import type { Poll } from './poll.js';
import type { ProximityAlertTriggered } from './proximity-alert-triggered.js';
import type { Sticker } from './stickers/sticker.js';
import type { SuccessfulPayment } from './successful-payment.js';
import type { User } from './user.js';
import type { Venue } from './venue.js';
import type { VideoChatEnded } from './video-chat-ended.js';
import type { VideoChatParticipantsInvited } from './video-chat-participants-invited.js';
import type { VideoChatScheduled } from './video-chat-scheduled.js';
import type { VideoChatStarted } from './video-chat-started.js';
import type { VideoNote } from './video-note.js';
import type { Video } from './video.js';
import type { Voice } from './voice.js';
import type { WebAppData } from './web-app-data.js';

export interface Message {
  /**
   * Unique message identifier inside this chat
   */
  message_id: number;
  /**
   * Sender of the message; empty for messages sent to channels.
   * For backward compatibility, the field contains a fake sender user in non-channel chats,
   * if the message was sent on behalf of a chat.
   */
  from: User;
  /**
   * Sender of the message, sent on behalf of a chat.
   * For example, the channel itself for channel posts,
   * the supergroup itself for messages from anonymous group administrators,
   * the linked channel for messages automatically forwarded to the discussion group.
   * For backward compatibility, the field from contains a fake sender user in non-channel chats,
   * if the message was sent on behalf of a chat.
   */
  sender_chat: Chat;
  /**
   * Date the message was sent in Unix time
   */
  date: number;
  /**
   * Conversation the message belongs to
   */
  chat: Chat;
  /**
   * For forwarded messages, sender of the original message
   */
  forward_from?: User;
  /**
   * For messages forwarded from channels or from anonymous administrators,
   * information about the original sender chat
   */
  forward_from_chat?: Chat;
  /**
   * For messages forwarded from channels, identifier of the original message in the channel
   */
  forward_from_message_id?: number;
  /**
   * For forwarded messages that were originally sent in channels or by an anonymous chat administrator,
   * signature of the message sender if present
   */
  forward_signature?: string;
  /**
   * Sender's name for messages forwarded from users who disallow adding a link to their account in forwarded messages
   */
  forward_sender_name?: string;
  /**
   * For forwarded messages, date the original message was sent in Unix time
   */
  forward_date?: number;
  /**
   * *True*, if the message is a channel post that was automatically forwarded to the connected discussion group
   */
  is_automatic_forward?: boolean;
  /**
   * For replies, the original message.
   * Note that the Message object in this field will not contain further *reply_to_message* fields even if it itself is a reply.
   */
  reply_to_message?: Message;
  /**
   * Bot through which the message was sent
   */
  via_bot?: User;
  /**
   * Date the message was last edited in Unix time
   */
  edit_date?: number;
  /**
   * *True*, if the message can't be forwarded
   */
  has_protected_content?: boolean;
  /**
   * The unique identifier of a media message group this message belongs to
   */
  media_group_id?: string;
  /**
   * Signature of the post author for messages in channels, or the custom title of an anonymous group administrator
   */
  author_signature?: string;
  /**
   * For text messages, the actual UTF-8 text of the message
   */
  text?: string;
  /**
   * For text messages, special entities like usernames, URLs, bot commands, etc. that appear in the text
   */
  entities?: MessageEntity[];
  /**
   * Message is an animation, information about the animation.
   * For backward compatibility, when this field is set, the document field will also be set
   */
  animation?: Animation;
  /**
   * Message is an audio file, information about the file
   */
  audio?: Audio;
  /**
   * Message is a general file, information about the file
   */
  document?: Document;
  /**
   * Message is a photo, available sizes of the photo
   */
  photo?: PhotoSize[];
  /**
   * Message is a sticker, information about the sticker
   */
  sticker?: Sticker;
  /**
   * Message is a video, information about the video
   */
  video?: Video;
  /**
   * Message is a [video note](https://telegram.org/blog/video-messages-and-telescope),
   * information about the video message
   */
  video_note?: VideoNote;
  /**
   * Message is a voice message, information about the file
   */
  voice?: Voice;
  /**
   * Caption for the animation, audio, document, photo, video or voice
   */
  caption?: string;
  /**
   * For messages with a caption, special entities like usernames, URLs, bot commands, etc. that appear in the caption
   */
  caption_entities?: MessageEntity[];
  /**
   * Message is a shared contact, information about the contact
   */
  contact?: Contact;
  /**
   * Message is a dice with random value
   */
  dice?: Dice;
  /**
   * Message is a game, information about the game.
   */
  game?: Game;
  /**
   * Message is a native poll, information about the poll
   */
  poll?: Poll;
  /**
   * Message is a venue, information about the venue.
   * For backward compatibility, when this field is set, the *location* field will also be set
   */
  venue?: Venue;
  /**
   * Message is a shared location, information about the location
   */
  location?: Location;
  /**
   * New members that were added to the group or supergroup and information about them
   * (the bot itself may be one of these members)
   */
  new_chat_members?: User[];
  /**
   * A member was removed from the group, information about them
   * (this member may be the bot itself)
   */
  left_chat_member?: User;
  /**
   * A chat title was changed to this value
   */
  new_chat_title?: string;
  /**
   * A chat photo was change to this value
   */
  new_chat_photo?: PhotoSize[];
  /**
   * Service message: the chat photo was deleted
   */
  delete_chat_photo?: boolean;
  /**
   * Service message: the group has been created
   */
  group_chat_created?: boolean;
  /**
   * Service message: the supergroup has been created.
   * This field can't be received in a message coming through updates,
   * because bot can't be a member of a supergroup when it is created.
   * It can only be found in *reply_to_message* if someone replies to a very first message in a directly created supergroup.
   */
  supergroup_chat_created?: boolean;
  /**
   * Service message: the channel has been created.
   * This field can't be received in a message coming through updates,
   * because bot can't be a member of a channel when it is created.
   * It can only be found in *reply_to_message* if someone replies to a very first message in a channel.
   */
  channel_chat_created?: boolean;
  /**
   * Service message: auto-delete timer settings changed in the chat
   */
  message_auto_delete_timer_changed?: MessageAutoDeleteTimerChanged;
  /**
   * The group has been migrated to a supergroup with the specified identifier.
   * This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it.
   * But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.
   */
  migrate_to_chat_id?: number;
  /**
   * The supergroup has been migrated from a group with the specified identifier.
   * This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it.
   * But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.
   */
  migrate_from_chat_id?: number;
  /**
   * Specified message was pinned.
   * Note that the Message object in this field will not contain further *reply_to_message* fields even if it is itself a reply.
   */
  pinned_message?: Message;
  /**
   * Message is an invoice for a payment, information about the invoice.
   */
  invoice?: Invoice;
  /**
   * Message is a service message about a successful payment, information about the payment.
   */
  successful_payment?: SuccessfulPayment;
  /**
   * The domain name of the website on which the user has logged in.
   */
  connected_website?: string;
  /**
   * Telegram Passport data
   */
  passport_data?: PassportData;
  /**
   * Service message. A user in the chat triggered another user's proximity alert while sharing Live Location.
   */
  proximity_alert_triggered?: ProximityAlertTriggered;
  /**
   * Service message: video chat scheduled
   */
  video_chat_scheduled?: VideoChatScheduled;
  /**
   * Service message: video chat started
   */
  video_chat_started?: VideoChatStarted;
  /**
   * Service message: video chat ended
   */
  video_chat_ended?: VideoChatEnded;
  /**
   * Service message: new participants invited to a video chat
   */
  video_chat_participants_invited?: VideoChatParticipantsInvited;
  /**
   * Service message: data sent by a Web App
   */
  web_app_data?: WebAppData;
  /**
   * Inline keyboard attached to the message.
   * `login_url` buttons are represented as ordinary `url` buttons.
   */
  reply_markup?: InlineKeyboardMarkup;
}
