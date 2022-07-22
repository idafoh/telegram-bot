type Type =
  | 'passport'
  | 'driver_license'
  | 'identity_card'
  | 'internal_passport'
  | 'utility_bill'
  | 'bank_statement'
  | 'rental_agreement'
  | 'passport_registration'
  | 'temporary_registration';

export interface PassportElementErrorTranslationFiles {
  /**
   * Error source, must be *translation_files*
   */
  source: 'translation_files';
  /**
   * The section of the user's Telegram Passport which has the issue
   */
  type: Type;
  /**
   * List of base64-encoded file hashes
   */
  file_hashes: string[];
  /**
   * Error message
   */
  message: string;
}
