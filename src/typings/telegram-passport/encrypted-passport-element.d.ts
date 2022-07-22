import type { PassportFile } from './passport-file.js';

export type EncryptedPassportElementType =
  | 'personal_details'
  | 'passport'
  | 'driver_license'
  | 'identity_card'
  | 'internal_passport'
  | 'address'
  | 'utility_bill'
  | 'bank_statement'
  | 'rental_agreement'
  | 'passport_registration'
  | 'temporary_registration'
  | 'phone_number'
  | 'email';

export interface EncryptedPassportElement {
  /**
   * Element type.
   */
  type: EncryptedPassportElementType;
  /**
   * Base64-encoded encrypted Telegram Passport element data provided by the user,
   * available for “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport” and “address” types.
   * Can be decrypted and verified using the accompanying EncryptedCredentials.
   */
  data?: string;
  /**
   * User's verified phone number, available only for “phone_number” type
   */
  phone_number?: string;
  /**
   * User's verified email address, available only for “email” type
   */
  email?: string;
  /**
   * Array of encrypted files with documents provided by the user,
   * available for “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration” and “temporary_registration” types.
   * Files can be decrypted and verified using the accompanying EncryptedCredentials.
   */
  files?: PassportFile[];
  /**
   * Encrypted file with the front side of the document, provided by the user.
   * Available for “passport”, “driver_license”, “identity_card” and “internal_passport”.
   * The file can be decrypted and verified using the accompanying EncryptedCredentials.
   */
  front_side?: PassportFile;
  /**
   * Encrypted file with the reverse side of the document, provided by the user.
   * Available for “driver_license” and “identity_card”.
   * The file can be decrypted and verified using the accompanying EncryptedCredentials.
   */
  reverse_side?: PassportFile;
  /**
   * Encrypted file with the selfie of the user holding a document, provided by the user;
   * available for “passport”, “driver_license”, “identity_card” and “internal_passport”.
   * The file can be decrypted and verified using the accompanying EncryptedCredentials.
   */
  selfie?: PassportFile;
  /**
   * Array of encrypted files with translated versions of documents provided by the user.
   * Available if requested for “passport”, “driver_license”, “identity_card”, “internal_passport”,
   * “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration” and “temporary_registration” types.
   * Files can be decrypted and verified using the accompanying EncryptedCredentials.
   */
  translation?: PassportFile[];
  /**
   * Base64-encoded element hash for using in PassportElementErrorUnspecified
   */
  hash: string;
}
