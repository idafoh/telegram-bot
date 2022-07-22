type Type =
  | 'passport'
  | 'driver_license'
  | 'identity_card'
  | 'internal_passport';

export interface PassportElementErrorFrontSide {
  /**
   * Error source, must be *front_side*
   */
  source: 'front_side';
  /**
   * The section of the user's Telegram Passport which has the error
   */
  type: Type;
  /**
   * Base64-encoded hash of the file with the front side of the document
   */
  file_hash: string;
  /**
   * Error message
   */
  message: string;
}
