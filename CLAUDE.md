# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Shared TypeScript type definitions for the xivdyetools ecosystem (FFXIV dye tools). This package consolidates types from xivdyetools-core, xivdyetools-web-app, xivdyetools-discord-worker, xivdyetools-presets-api, and xivdyetools-oauth.

## Commands

```bash
npm run build          # Compile TypeScript to dist/
npm run type-check     # Type check without emitting
npm test               # Run tests once
npm run test:watch     # Run tests in watch mode
npm run test:coverage  # Run tests with coverage (80% threshold)
npm run clean          # Remove dist/
```

### Pre-commit Checklist
```bash
npm run test -- --run && npm run build
```

## Architecture

### Module Structure

The package uses subpath exports for tree-shaking. Each module has its own entry point:

- `@xivdyetools/types` - All types (barrel export)
- `@xivdyetools/types/color` - RGB, HSV, HexColor, branded types, colorblind matrices
- `@xivdyetools/types/dye` - Dye, LocalizedDye, DyeWithDistance, DyeDatabase
- `@xivdyetools/types/preset` - Community presets, submissions, filters, responses
- `@xivdyetools/types/auth` - OAuth, JWT, Discord, XIVAuth types
- `@xivdyetools/types/api` - APIResponse, CachedData, moderation, rate limiting
- `@xivdyetools/types/error` - AppError class, ErrorCode enum
- `@xivdyetools/types/localization` - LocaleCode, LocaleData, translation keys

### Branded Types Pattern

The codebase uses TypeScript branded types for type safety (see [src/color/branded.ts](src/color/branded.ts)):

```typescript
type HexColor = string & { readonly __brand: 'HexColor' };
type DyeId = number & { readonly __brand: 'DyeId' };
```

Create branded types via factory functions: `createHexColor()`, `createDyeId()`, `createHue()`, `createSaturation()`.

### Result Type Pattern

Uses discriminated union for error handling (see [src/utility/index.ts](src/utility/index.ts)):

```typescript
type Result<T> = { ok: true; value: T } | { ok: false; error: AppError };
```

Type guards `isOk()` and `isErr()` narrow the result type.

## Testing

Tests use Vitest with globals enabled. Test files are colocated with source files using `.test.ts` suffix. Coverage excludes index re-export files.

## Related Projects

**Dependents (all ecosystem projects):**
- `@xivdyetools/core` - Core algorithms
- `@xivdyetools/logger` - Logging library
- `@xivdyetools/test-utils` - Test utilities
- xivdyetools-web-app - Web application
- xivdyetools-discord-worker - Discord bot
- xivdyetools-presets-api - Presets REST API
- xivdyetools-oauth - OAuth worker
- xivdyetools-moderation-worker - Moderation bot

Changes to types require npm publish before dependents can use them.
