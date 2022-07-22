import type { MenuButton } from '../menu-button.js';

export interface SetChatMenuButtonParams {
  /**
   * Unique identifier for the target private chat. If not specified, default bot's menu button will be changed
   */
  chat_id?: number;
  /**
   * An object for the bot's new menu button. Defaults to MenuButtonDefault
   */
  menu_button?: MenuButton;
}
