import type { PassportElementError } from '../telegram-passport/passport-element-error.js';

export interface SetPassportDataErrorsParams {
  /**
   * User identifier
   */
  user_id: number;
  /**
   * An array describing the errors
   */
  errors: PassportElementError[];
}
