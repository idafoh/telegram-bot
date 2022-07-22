import type { OrderInfo } from './order-info.js';

export interface SuccessfulPayment {
  /**
   * Three-letter ISO 4217 currency code
   *
   * @see https://core.telegram.org/bots/payments#supported-currencies
   */
  currency: string;
  /**
   * Total price in the *smallest units* of the currency (integer, **not** float/double).
   * For example, for a price of `US$ 1.45` pass `amount = 145`.
   * See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).
   *
   * @see https://core.telegram.org/bots/payments/currencies.json
   */
  total_amount: number;
  /**
   * Bot specified invoice payload
   */
  invoice_payload: string;
  /**
   * Identifier of the shipping option chosen by the user
   */
  shipping_option_id?: string;
  /**
   * Order information provided by the user
   */
  order_info?: OrderInfo;
  /**
   * Telegram payment identifier
   */
  telegram_payment_charge_id: string;
  /**
   * Provider payment identifier
   */
  provider_payment_charge_id: string;
}
