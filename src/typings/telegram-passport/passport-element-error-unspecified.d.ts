import type { EncryptedPassportElementType } from './encrypted-passport-element.js';

export interface PassportElementErrorUnspecified {
  /**
   * Error source, must be *unspecified*
   */
  source: 'unspecified';
  /**
   * Type of element of the user's Telegram Passport which has the issue
   */
  type: EncryptedPassportElementType;
  /**
   * Base64-encoded element hash
   */
  element_hash: string;
  /**
   * Error message
   */
  message: string;
}
