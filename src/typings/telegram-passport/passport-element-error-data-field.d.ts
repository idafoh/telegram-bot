type Type =
  | 'personal_details'
  | 'passport'
  | 'driver_license'
  | 'identity_card'
  | 'internal_passport'
  | 'address';

export interface PassportElementErrorDataField {
  /**
   * Error source, must be *data*
   */
  source: 'data';
  /**
   * The section of the user's Telegram Passport which has the error
   */
  type: Type;
  /**
   * Name of the data field which has the error
   */
  field_name: string;
  /**
   * Base64-encoded data hash
   */
  data_hash: string;
  /**
   * Error message
   */
  message: string;
}
