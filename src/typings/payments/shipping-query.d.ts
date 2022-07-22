import type { User } from '../user.js';
import type { ShippingAddress } from './shipping-address.js';

export interface ShippingQuery {
  /**
   * Unique query identifier
   */
  id: string;
  /**
   * User who sent the query
   */
  from: User;
  /**
   * Bot specified invoice payload
   */
  invoice_payload: string;
  /**
   * User specified shipping address
   */
  shipping_address: ShippingAddress;
}
