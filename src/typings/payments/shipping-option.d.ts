import type { LabeledPrice } from './labeled-price.js';

export interface ShippingOption {
  /**
   * Shipping option identifier
   */
  id: string;
  /**
   * Option title
   */
  title: string;
  /**
   * List of price portions
   */
  prices: LabeledPrice[];
}
