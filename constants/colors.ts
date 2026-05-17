/**
 * Design tokens — colors
 *
 * Single source of truth for every color in Dram.
 * Import from here; never hardcode hex strings elsewhere.
 *
 * Usage:
 *   import { COLORS } from '@/constants/colors';
 *   backgroundColor: COLORS.BG_PRIMARY
 */

export const COLORS = {
  // ─── Backgrounds ───────────────────────────────────────────────────────────
  BG_PRIMARY:  '#111111', // main background
  BG_CARD:     '#1A1A1A', // card / surface
  BG_ELEVATED: '#222222', // modals, bottom sheets

  // ─── Accent — amber ────────────────────────────────────────────────────────
  // Use for: amounts, active state, primary CTA, highlights
  // Never use decoratively — amber = active/accent only
  AMBER:     '#0ead69',
  AMBER_DIM: '#0ead69', // amber badge background

  // ─── Semantic — red ────────────────────────────────────────────────────────
  // Use for: allergy warnings, urgent alerts, destructive actions
  RED:     '#E24B4A',
  RED_DIM: '#2A0A0A', // red badge background

  // ─── Semantic — green ──────────────────────────────────────────────────────
  // Use for: done, safe, confirmed, non-alcoholic
  GREEN:     '#1D9E75',
  GREEN_DIM: '#0A1F10', // green badge background

  // ─── Text ──────────────────────────────────────────────────────────────────
  TEXT_PRIMARY:   '#F0EBE0', // main readable text
  TEXT_SECONDARY: '#888888', // muted / metadata
  TEXT_MUTED:     '#444444', // placeholder, disabled

  // ─── Borders & dividers ────────────────────────────────────────────────────
  BORDER: '#2A2A2A',
} as const;

export type ColorKey = keyof typeof COLORS;
