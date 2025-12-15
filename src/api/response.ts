/**
 * @xivdyetools/types - API Response Types
 *
 * Generic API response wrappers and caching types.
 *
 * @module api/response
 */

/**
 * Generic API response wrapper
 *
 * Provides a consistent structure for all API responses.
 */
export interface APIResponse<T> {
  /** Whether the operation succeeded */
  success: boolean;

  /** Response data (if successful) */
  data?: T;

  /** Error message (if unsuccessful) */
  error?: string;

  /** Response timestamp (ms since epoch) */
  timestamp: number;
}

/**
 * Cached data wrapper with TTL and integrity checking
 *
 * Used for storing data with expiration and optional
 * integrity verification.
 */
export interface CachedData<T> {
  /** The cached data */
  data: T;

  /** When data was cached (ms since epoch) */
  timestamp: number;

  /** Time-to-live in milliseconds */
  ttl: number;

  /** Cache version for invalidation */
  version?: string;

  /** Optional checksum for corruption detection */
  checksum?: string;
}
