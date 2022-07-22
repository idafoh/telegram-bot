import type { InputContactMessageContent } from './input-contact-message-content.js';
import type { InputInvoiceMessageContent } from './input-invoice-message-content.js';
import type { InputLocationMessageContent } from './input-location-message-content.js';
import type { InputTextMessageContent } from './input-text-message-content.js';
import type { InputVenueMessageContent } from './input-venue-message-content.js';

/**
 * This object represents the content of a message to be sent as a result of an inline query.
 * Telegram clients currently support the following 5 types:
 *
 * - InputTextMessageContent
 * - InputLocationMessageContent
 * - InputVenueMessageContent
 * - InputContactMessageContent
 * - InputInvoiceMessageContent
 */
export type InputMessageContent =
  | InputTextMessageContent
  | InputLocationMessageContent
  | InputVenueMessageContent
  | InputContactMessageContent
  | InputInvoiceMessageContent;
