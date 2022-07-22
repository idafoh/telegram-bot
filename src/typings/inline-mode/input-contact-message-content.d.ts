export interface InputContactMessageContent {
  /**
   * Contact's phone number
   */
  phone_number: string;
  /**
   * Contact's first name
   */
  first_name: string;
  /**
   * Contact's last name
   */
  last_name?: string;
  /**
   * Additional data about the contact in the form of a vCard, 0-2048 bytes
   *
   * @see https://en.wikipedia.org/wiki/VCard
   */
  vcard?: string;
}
