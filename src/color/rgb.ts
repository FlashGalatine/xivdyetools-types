/**
 * @xivdyetools/types - Color Types
 *
 * Core color representation types used throughout the xivdyetools ecosystem.
 *
 * @module color/rgb
 */

/**
 * RGB color representation
 * @example { r: 255, g: 0, b: 0 } // Red
 */
export interface RGB {
  /** Red channel (0-255) */
  r: number;
  /** Green channel (0-255) */
  g: number;
  /** Blue channel (0-255) */
  b: number;
}

/**
 * HSV color representation (Hue, Saturation, Value)
 * @example { h: 0, s: 100, v: 100 } // Bright red
 */
export interface HSV {
  /** Hue (0-360 degrees) */
  h: number;
  /** Saturation (0-100 percent) */
  s: number;
  /** Value/Brightness (0-100 percent) */
  v: number;
}
