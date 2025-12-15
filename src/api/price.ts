/**
 * @xivdyetools/types - Price Types
 *
 * Market price data types (Universalis API).
 *
 * @module api/price
 */

/**
 * Universalis API response for item prices
 *
 * Contains market board pricing information for a dye item.
 */
export interface PriceData {
  /** FFXIV item ID */
  itemID: number;

  /** Average price from recent sales */
  currentAverage: number;

  /** Lowest current listing price */
  currentMinPrice: number;

  /** Highest current listing price */
  currentMaxPrice: number;

  /** Last update timestamp (ms since epoch) */
  lastUpdate: number;
}

/**
 * Rate limit result for API requests
 */
export interface RateLimitResult {
  /** True if request is allowed */
  allowed: boolean;

  /** Remaining requests in current window */
  remaining: number;

  /** When the rate limit window resets */
  resetAt: Date;

  /** True if rate limit check failed due to KV error */
  kvError?: boolean;
}
