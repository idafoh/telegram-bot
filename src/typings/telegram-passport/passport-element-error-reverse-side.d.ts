type Type = 'driver_license' | 'identity_card';

export interface PassportElementErrorReverseSide {
  /**
   * Error source, must be *reverse_side*
   */
  source: 'reverse_side';
  /**
   * The section of the user's Telegram Passport which has the error
   */
  type: Type;
  /**
   * Base64-encoded hash of the file with the reverse side of the document
   */
  file_hash: string;
  /**
   * Error message
   */
  message: string;
}
