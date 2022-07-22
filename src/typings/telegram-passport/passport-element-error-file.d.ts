type Type =
  | 'utility_bill'
  | 'bank_statement'
  | 'rental_agreement'
  | 'passport_registration'
  | 'temporary_registration';

export interface PassportElementErrorFile {
  /**
   * Error source, must be *file*
   */
  source: 'file';
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
