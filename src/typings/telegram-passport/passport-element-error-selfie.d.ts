type Type =
  | 'passport'
  | 'driver_license'
  | 'identity_card'
  | 'internal_passport';

export interface PassportElementErrorSelfie {
  /**
   * Error source, must be *selfie*
   */
  source: 'selfie';
  /**
   * The section of the user's Telegram Passport which has the issue
   */
  type: Type;
  /**
   * Base64-encoded hash of the file with the selfie
   */
  file_hash: string;
  /**
   * Error message
   */
  message: string;
}
