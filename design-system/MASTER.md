# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Game Review Magazine
**Generated:** 2026-05-17 13:08:50
**Updated:** 2026-05-17
**Category:** Dark Editorial Gaming Magazine

---

## Global Rules

### Color Palette

| Role | Hex | `COLORS.*` token | CSS Variable |
|------|-----|-----------------|--------------|
| Background | `#111111` | `BG_PRIMARY` | `--color-background` |
| Surface | `#1A1A1A` | `BG_CARD` | `--color-surface` |
| Elevated | `#222222` | `BG_ELEVATED` | `--color-elevated` |
| Border | `#2A2A2A` | `BORDER` | `--color-border` |
| Text primary | `#F0EBE0` | `TEXT_PRIMARY` | `--color-text` |
| Text secondary | `#888888` | `TEXT_SECONDARY` | `--color-text-secondary` |
| Text muted | `#444444` | `TEXT_MUTED` | `--color-text-muted` |
| Text article | `#C4BDB4` | `TEXT_ARTICLE` | `--color-text-article` |
| Accent / CTA | `#EF9F27` | `ACCENT` | `--color-cta` |
| Accent dim | `#2A1A00` | `ACCENT_DIM` | `--color-cta-dim` |
| Error | `#E24B4A` | `RED` | `--color-error` |
| Success | `#1D9E75` | `GREEN` | `--color-success` |

**Color Notes:** Dark-first editorial. Background always `COLORS.BG_PRIMARY` (`#111111`). Accent is amber/gold `#EF9F27` — used for scores, active states, one CTA per screen. Never hardcode hex strings; always use `COLORS.*` tokens from `constants/colors.ts`. Never pure white. Never a light background default.

### Typography

Three-font system:

| Role | Font | Usage |
|------|------|-------|
| Editorial headlines | **Libre Bodoni** | Article titles, cover headlines, review names |
| Score / UI chrome | **Russo One** | Score numbers, platform badges, nav logo |
| Body / metadata | **Public Sans** | Article body, news copy, captions, UI labels |

- **Mood:** magazine, editorial, publishing, cinematic, dark, journalism
- **Google Fonts:** [Libre Bodoni + Russo One + Public Sans](https://fonts.google.com/share?selection.family=Libre+Bodoni:ital,wght@0,400;0,700;1,400|Public+Sans:wght@300;400;500;600|Russo+One)

**CSS Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Libre+Bodoni:ital,wght@0,400;0,700;1,400&family=Public+Sans:wght@300;400;500;600&family=Russo+One&display=swap');
```

### Spacing Variables

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` / `0.25rem` | Tight gaps |
| `--space-sm` | `8px` / `0.5rem` | Icon gaps, inline spacing |
| `--space-md` | `16px` / `1rem` | Standard padding |
| `--space-lg` | `24px` / `1.5rem` | Section padding |
| `--space-xl` | `32px` / `2rem` | Large gaps |
| `--space-2xl` | `48px` / `3rem` | Section margins |
| `--space-3xl` | `64px` / `4rem` | Hero padding |

### Shadow Depths

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.1)` | Cards, buttons |
| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` | Modals, dropdowns |
| `--shadow-xl` | `0 20px 25px rgba(0,0,0,0.15)` | Hero images, featured cards |

---

## Component Specs

### Buttons

```css
/* Primary Button */
.btn-primary {
  background: #EF9F27;
  color: #FAFAFA;
  padding: 12px 24px;
  border-radius: 0; /* Brutalist */
  font-family: 'Public Sans', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  transition: opacity 200ms ease, transform 200ms ease;
  cursor: pointer;
  min-height: 44px;
}

.btn-primary:hover { opacity: 0.85; transform: translateY(-1px); }
.btn-primary:focus-visible { outline: 2px solid #EF9F27; outline-offset: 2px; }

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: #FAFAFA;
  border: 1px solid #3F3F46;
  padding: 12px 24px;
  border-radius: 0;
  font-family: 'Public Sans', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  transition: border-color 150ms ease;
  cursor: pointer;
  min-height: 44px;
}

.btn-secondary:hover { border-color: #EF9F27; }
.btn-secondary:focus-visible { outline: 2px solid #EF9F27; outline-offset: 2px; }
```

### Cards

```css
.card {
  background: #18181B;
  border: 1px solid #3F3F46;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  transition: border-color 200ms ease, transform 200ms ease;
}

.card:hover {
  border-color: #EF9F27;
  transform: translateY(-2px);
}

.card:focus-visible {
  outline: 2px solid #EF9F27;
  outline-offset: 2px;
}
```

### Inputs

```css
.input {
  background: #18181B;
  color: #FAFAFA;
  padding: 12px 16px;
  border: 1px solid #3F3F46;
  border-radius: 0;
  font-family: 'Public Sans', sans-serif;
  font-size: 16px;
  transition: border-color 150ms ease;
  min-height: 44px;
}

.input::placeholder { color: #71717A; }

.input:focus {
  border-color: #EF9F27;
  outline: none;
  box-shadow: 0 0 0 3px rgba(239, 159, 39, 0.15);
}
```

### Modals

```css
.modal-overlay {
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(4px);
}

.modal {
  background: #18181B;
  border: 1px solid #3F3F46;
  border-radius: 4px;
  padding: 32px;
  box-shadow: var(--shadow-xl);
  max-width: 500px;
  width: 90%;
  color: #FAFAFA;
}
```

---

## Style Guidelines

**Primary style:** Editorial Grid / Magazine
**Accent style:** Brutalism (scores, tags, callouts only)
**Cinematic layer:** Parallax Storytelling (hero sections only — with reduced-motion fallback)

**Keywords:** Asymmetric grid, editorial typography, pull quotes, drop caps, high contrast, dark, cinematic, print-inspired, brutalist scores

**Best For:** Game reviews, editorial content, journalism, long-form articles

**Key Effects:**
- Parallax hero with `translateY` scroll offset — `prefers-reduced-motion` fallback required
- Brutalist score badge: `border-radius: 0`, pink border, Russo One
- Gold glow on scores 9–10: `box-shadow: 0 0 20px rgba(245, 158, 11, 0.4)`
- Drop caps on review openers: `::first-letter` at `4em`, Libre Bodoni, float left
- Scroll-reveal card entrances: `300ms ease-out`

### Page Pattern

**Pattern Name:** Editorial Review / Score-Led

- **Section order:** 1. Parallax hero (game art + title + score), 2. Review body (drop cap, long-form), 3. Score breakdown, 4. Related reviews
- **Score is the hero:** The 1–10 badge is the most prominent non-image element on a review page
- **No buy CTAs** — this is editorial, not e-commerce

---

## Anti-Patterns (Do NOT Use)

- ❌ **Light or white backgrounds** — Dark-first always. `#0A0A0A` minimum.
- ❌ **Border-radius > 4px on scores or filter chips** — Brutalist treatment is intentional
- ❌ **Neon RGB / esports aesthetic** — Magazine audience, not gaming peripheral brand
- ❌ **Emojis as icons** — Use Lucide or Heroicons SVG only
- ❌ **Missing cursor:pointer** — All clickable elements must have cursor:pointer
- ❌ **Layout-shifting hovers** — Use `translateY(-2px)` not `scale()`
- ❌ **Low contrast text** — 4.5:1 minimum; never use `--color-text-muted` for body copy
- ❌ **Instant state changes** — Always transition 150–300ms
- ❌ **Invisible focus states** — `outline: 2px solid #EF9F27` on all interactive elements
- ❌ **Parallax without reduced-motion fallback** — Required, not optional
- ❌ **Score inflation UI** — Design must not visually bias toward high scores

---

## Pre-Delivery Checklist

Before delivering any UI code, verify:

- [ ] Background is `#0A0A0A` — never light
- [ ] Score badge uses Russo One, `border-radius: 0` (brutalist)
- [ ] Parallax hero has `prefers-reduced-motion` fallback
- [ ] Filter chips have 44px minimum touch target
- [ ] No emojis — Lucide/Heroicons SVG only
- [ ] `cursor-pointer` on all interactive elements
- [ ] Focus states visible (`outline: 2px solid #EF9F27`)
- [ ] Hover transitions 150–300ms, `ease-out`
- [ ] Z-index follows scale: cards 10, filter 20, dropdown 30, nav 40, modal 50
- [ ] Article body max-width `68ch`
- [ ] Drop cap on review openers
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind fixed nav
- [ ] No horizontal scroll on mobile
