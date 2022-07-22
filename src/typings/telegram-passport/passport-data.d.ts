import type { EncryptedCredentials } from './encrypted-credentials.js';
import type { EncryptedPassportElement } from './encrypted-passport-element.js';

export interface PassportData {
  data: EncryptedPassportElement[];
  credentials: EncryptedCredentials;
}
