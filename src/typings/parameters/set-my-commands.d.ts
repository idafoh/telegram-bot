import type { BotCommandScope } from '../bot-command-scope.js';
import type { BotCommand } from '../bot-command.js';

export interface SetMyCommandsParams {
  /**
   * A list of bot commands to be set as the list of the bot's commands. At most 100 commands can be specified.
   */
  commands: BotCommand[];
  /**
   * An object, describing scope of users for which the commands are relevant. Defaults to BotCommandScopeDefault.
   */
  scope?: BotCommandScope;
  /**
   * A two-letter ISO 639-1 language code.
   * If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands
   */
  language_code?: string;
}
