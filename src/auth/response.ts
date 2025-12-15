/**
 * @xivdyetools/types - Auth Response Types
 *
 * API response types for authentication endpoints.
 *
 * @module auth/response
 */

import type { AuthProvider } from './provider.js';
import type { PrimaryCharacter } from './jwt.js';

/**
 * User info included in auth responses
 */
export interface AuthUser {
  /** Internal user ID */
  id: string;

  /** Display username */
  username: string;

  /** Discord global display name */
  global_name: string | null;

  /** Avatar hash */
  avatar: string | null;

  /** Full avatar URL */
  avatar_url: string | null;

  /** Which provider was used to authenticate */
  auth_provider?: AuthProvider;

  /** Primary FFXIV character (if XIVAuth user) */
  primary_character?: PrimaryCharacter;
}

/**
 * Response from authentication endpoints
 */
export interface AuthResponse {
  /** Whether authentication succeeded */
  success: boolean;

  /** JWT token (if successful) */
  token?: string;

  /** User information (if successful) */
  user?: AuthUser;

  /** Token expiration timestamp (ms since epoch) */
  expires_at?: number;

  /** Error message (if unsuccessful) */
  error?: string;
}

/**
 * Response from token refresh endpoint
 */
export interface RefreshResponse {
  /** Whether refresh succeeded */
  success: boolean;

  /** New JWT token (if successful) */
  token?: string;

  /** New token expiration timestamp */
  expires_at?: number;

  /** Error message (if unsuccessful) */
  error?: string;
}

/**
 * Response from user info endpoint
 */
export interface UserInfoResponse {
  /** Whether request succeeded */
  success: boolean;

  /** User information (if successful) */
  user?: {
    id: string;
    username: string;
    global_name: string | null;
    avatar: string | null;
    avatar_url: string | null;
  };

  /** Error message (if unsuccessful) */
  error?: string;
}
