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

export interface PassportElementErrorTranslationFile {
  /**
   * Error source, must be *translation_file*
   */
  source: 'translation_file';
  /**
   * The section of the user's Telegram Passport which has the issue
   */
  type: Type;
  /**
   * Base64-encoded file hash
   */
  file_hash: string;
  /**
   * Error message
   */
  message: string;
}
