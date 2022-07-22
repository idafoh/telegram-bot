import type { BotCommandScope } from '../bot-command-scope.js';

export interface GetMyCommandsParams {
  /**
   * An object, describing scope of users. Defaults to BotCommandScopeDefault.
   */
  scope?: BotCommandScope;
  /**
   * A two-letter ISO 639-1 language code or an empty string
   */
  language_code?: string;
}
