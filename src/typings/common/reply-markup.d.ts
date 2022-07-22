import type { ForceReply } from '../force-reply.js';
import type { InlineKeyboardMarkup } from '../inline-keyboard-markup.js';
import type { ReplyKeyboardMarkup } from '../reply-keyboard-markup.js';
import type { ReplyKeyboardRemove } from '../reply-keyboard-remove.js';

export type ReplyMarkup =
  | InlineKeyboardMarkup
  | ReplyKeyboardMarkup
  | ReplyKeyboardRemove
  | ForceReply;
