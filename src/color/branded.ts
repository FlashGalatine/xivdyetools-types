/**
 * @xivdyetools/types - Branded Color Types
 *
 * Branded types prevent accidental type confusion between similar types.
 * For example, a DyeId cannot be accidentally used where a plain number is expected.
 *
 * @module color/branded
 */

/**
 * Hexadecimal color string (branded type for type safety)
 *
 * Prevents accidental use of arbitrary strings as hex colors.
 * Use `createHexColor()` to create validated instances.
 *
 * @example "#FF0000"
 */
export type HexColor = string & { readonly __brand: 'HexColor' };

/**
 * Helper to create branded HexColor type with validation
 *
 * Validates hex format and normalizes to uppercase #RRGGBB format.
 *
 * @param hex - Input hex string (#RGB or #RRGGBB format)
 * @returns Normalized HexColor in #RRGGBB format
 * @throws {Error} If hex format is invalid
 *
 * @example
 * ```typescript
 * const red = createHexColor('#f00');      // Returns "#FF0000"
 * const blue = createHexColor('#0000ff');  // Returns "#0000FF"
 * createHexColor('invalid');               // Throws Error
 * ```
 */
export function createHexColor(hex: string): HexColor {
  // Validate format: must be #RGB or #RRGGBB
  if (!/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex)) {
    throw new Error(`Invalid hex color format: ${hex}. Expected #RRGGBB or #RGB format.`);
  }
  // Normalize short hex (#RGB) to long hex (#RRGGBB) and uppercase
  const normalized =
    hex.length === 4
      ? `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`.toUpperCase()
      : hex.toUpperCase();
  return normalized as HexColor;
}

/**
 * Dye ID (branded type for type safety)
 *
 * Prevents accidental mixing of dye IDs with other numeric values.
 * Valid dye IDs range from 1 to 200 in FFXIV.
 */
export type DyeId = number & { readonly __brand: 'DyeId' };

/**
 * Helper to create branded DyeId type with validation
 *
 * @param id - Numeric dye ID (must be 1-200)
 * @returns Branded DyeId or null if invalid
 *
 * @example
 * ```typescript
 * const dyeId = createDyeId(1);    // Returns 1 as DyeId
 * const invalid = createDyeId(0); // Returns null
 * const bad = createDyeId(999);   // Returns null
 * ```
 */
export function createDyeId(id: number): DyeId | null {
  if (!Number.isInteger(id) || id < 1 || id > 200) {
    return null;
  }
  return id as DyeId;
}

/**
 * Hue value (0-360 degrees, branded type)
 *
 * Prevents mixing with other angle or degree values.
 */
export type Hue = number & { readonly __brand: 'Hue' };

/**
 * Helper to create branded Hue type with normalization
 *
 * Normalizes hue to 0-360 range (wraps around).
 *
 * @param hue - Input hue value (any number, will be normalized)
 * @returns Normalized Hue in 0-360 range
 *
 * @example
 * ```typescript
 * createHue(45);    // Returns 45
 * createHue(400);   // Returns 40 (wrapped)
 * createHue(-30);   // Returns 330 (wrapped)
 * ```
 */
export function createHue(hue: number): Hue {
  // Normalize to 0-360 range
  const normalized = ((hue % 360) + 360) % 360;
  return normalized as Hue;
}

/**
 * Saturation value (0-100 percent, branded type)
 *
 * Prevents mixing with other percentage values.
 */
export type Saturation = number & { readonly __brand: 'Saturation' };

/**
 * Helper to create branded Saturation type with clamping
 *
 * Clamps saturation to 0-100 range.
 *
 * @param saturation - Input saturation value
 * @returns Clamped Saturation in 0-100 range
 *
 * @example
 * ```typescript
 * createSaturation(50);   // Returns 50
 * createSaturation(150);  // Returns 100 (clamped)
 * createSaturation(-10);  // Returns 0 (clamped)
 * ```
 */
export function createSaturation(saturation: number): Saturation {
  const clamped = Math.max(0, Math.min(100, saturation));
  return clamped as Saturation;
}
