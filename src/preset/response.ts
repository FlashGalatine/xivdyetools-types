/**
 * @xivdyetools/types - Preset Response Types
 *
 * Types for preset API responses.
 *
 * @module preset/response
 */

import type { CategoryMeta } from './core.js';
import type { CommunityPreset } from './community.js';

/**
 * Response when listing presets
 */
export interface PresetListResponse {
  /** Array of presets */
  presets: CommunityPreset[];

  /** Total count (for pagination) */
  total: number;

  /** Current page number */
  page: number;

  /** Results per page */
  limit: number;

  /** True if more pages available */
  has_more: boolean;
}

/**
 * Response when submitting a preset
 */
export interface PresetSubmitResponse {
  /** Whether the operation succeeded */
  success: boolean;

  /** The created preset (if new) */
  preset?: CommunityPreset;

  /** The existing preset (if duplicate found) */
  duplicate?: CommunityPreset;

  /** Whether a vote was added to duplicate */
  vote_added?: boolean;

  /** Moderation result */
  moderation_status?: 'approved' | 'pending';

  /** Error message (if success is false) */
  error?: string;
}

/**
 * Response from preset edit endpoint
 */
export interface PresetEditResponse {
  /** Whether the operation succeeded */
  success: boolean;

  /** The updated preset */
  preset?: CommunityPreset;

  /** Moderation result (if content needed review) */
  moderation_status?: 'approved' | 'pending';

  /** Duplicate info (if edit would create duplicate) */
  duplicate?: {
    id: string;
    name: string;
    author_name: string | null;
  };

  /** Error message (if success is false) */
  error?: string;
}

/**
 * Response when voting on a preset
 */
export interface VoteResponse {
  /** Whether the operation succeeded */
  success: boolean;

  /** Updated vote count */
  new_vote_count: number;

  /** True if user already voted */
  already_voted?: boolean;

  /** Error message (if success is false) */
  error?: string;
}

/**
 * Response from moderation actions
 */
export interface ModerationResponse {
  /** Whether the operation succeeded */
  success: boolean;

  /** The updated preset */
  preset?: CommunityPreset;

  /** Error message (if success is false) */
  error?: string;
}

/**
 * Response when listing categories
 */
export interface CategoryListResponse {
  /** Array of category metadata */
  categories: CategoryMeta[];
}
