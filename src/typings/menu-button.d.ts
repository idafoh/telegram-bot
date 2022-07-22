import type { MenuButtonCommands } from './menu-button-commands.js';
import type { MenuButtonDefault } from './menu-button-default.js';
import type { MenuButtonWebApp } from './menu-button-web-app.js';

/**
 * This object describes the bot's menu button in a private chat. It should be one of
 * 
 * - MenuButtonCommands
 * - MenuButtonWebApp
 * - MenuButtonDefault
 * 
 * If a menu button other than MenuButtonDefault is set for a private chat, then it is applied in the chat.
 * Otherwise the default menu button is applied. By default, the menu button opens the list of bot commands.
 */
export type MenuButton =
  | MenuButtonCommands
  | MenuButtonWebApp
  | MenuButtonDefault;
