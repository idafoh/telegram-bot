import type { LabeledPrice } from '../payments/labeled-price.js';

export interface InputInvoiceMessageContent {
  /**
   * Product name, 1-32 characters
   */
  title: string;
  /**
   * Product description, 1-255 characters
   */
  description: string;
  /**
   * Bot-defined invoice payload, 1-128 bytes.
   * This will not be displayed to the user, use for your internal processes.
   */
  payload: string;
  /**
   * Payment provider token, obtained via [@BotFather](https://t.me/botfather)
   */
  provider_token: string;
  /**
   * Three-letter ISO 4217 currency code
   *
   * @see https://core.telegram.org/bots/payments#supported-currencies
   */
  currency: string;
  /**
   * Price breakdown, a list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.)
   */
  prices: LabeledPrice[];
  /**
   * The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double).
   * For example, for a maximum tip of `US$ 1.45` pass `max_tip_amount = 145`.
   * See the exp parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json),
   * it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).
   * Defaults to 0
   *
   * @see https://core.telegram.org/bots/payments/currencies.json
   */
  max_tip_amount?: number;
  /**
   * An array of suggested amounts of tip in the smallest units of the currency (integer, not float/double).
   * At most 4 suggested tip amounts can be specified.
   * The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed *max_tip_amount*.
   */
  suggested_tip_amounts?: number[];
  /**
   * A JSON-serialized object for data about the invoice, which will be shared with the payment provider.
   * A detailed description of the required fields should be provided by the payment provider.
   */
  provider_data?: string;
  /**
   * URL of the product photo for the invoice.
   * Can be a photo of the goods or a marketing image for a service.
   */
  photo_url?: string;
  /**
   * Photo size in bytes
   */
  photo_size?: number;
  /**
   * Photo width
   */
  photo_width?: number;
  /**
   * Photo height
   */
  photo_height?: number;
  /**
   * Pass *True*, if you require the user's full name to complete the order
   */
  need_name?: boolean;
  /**
   * Pass *True*, if you require the user's phone number to complete the order
   */
  need_phone_number?: boolean;
  /**
   * Pass *True*, if you require the user's email address to complete the order
   */
  need_email?: boolean;
  /**
   * Pass *True*, if you require the user's shipping address to complete the order
   */
  need_shipping_address?: boolean;
  /**
   * Pass *True*, if the user's phone number should be sent to provider
   */
  send_phone_number_to_provider?: boolean;
  /**
   * Pass *True*, if the user's email address should be sent to provider
   */
  send_email_to_provider?: boolean;
  /**
   * Pass *True*, if the final price depends on the shipping method
   */
  is_flexible?: boolean;
}
