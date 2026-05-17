# DESIGN.md — Game Review Magazine

> Source of truth for all visual and UX decisions.
> When a page-level file exists at `design-system/game-review-magazine/pages/[page].md`, its rules override this document.

**Page overrides:**
- [Homepage](design-system/game-review-magazine/pages/homepage.md) — parallax hero, category filter bar, article grid, trending section

---

## Style direction

**Primary style:** Editorial Grid / Magazine
**Accent style:** Brutalism (scores, tags, callouts only)
**Cinematic layer:** Parallax Storytelling (hero sections only — with reduced-motion fallback)

**In one sentence:** A dark editorial magazine with the grid discipline of print journalism, brutalist score treatment, and cinematic parallax heroes — never an esports site.

---

## Color palette

> **Codebase note:** The existing `constants/colors.ts` tokens are the implementation source of truth.
> The hex values below are the design intent; the `COLORS.*` column is what to use in code.

| Role | Hex | `COLORS.*` token | Usage |
|------|-----|-----------------|-------|
| Background | `#111111` | `BG_PRIMARY` | Page background, never white |
| Surface | `#1A1A1A` | `BG_CARD` | Cards, nav, sidebars |
| Elevated | `#222222` | `BG_ELEVATED` | Modals, score badges, filter bar |
| Border | `#2A2A2A` | `BORDER` | Dividers, card borders |
| Text primary | `#F0EBE0` | `TEXT_PRIMARY` | Headlines, body copy |
| Text secondary | `#888888` | `TEXT_SECONDARY` | Metadata, bylines, captions |
| Text muted | `#444444` | `TEXT_MUTED` | Timestamps, labels, placeholders |
| Accent / CTA | `#EF9F27` | `ACCENT` | Score highlights, active filters, CTAs |
| Accent dim | `#2A1A00` | `ACCENT_DIM` | Active chip background tint |
| Error | `#E24B4A` | `RED` | Destructive actions, error states |
| Success | `#1D9E75` | `GREEN` | Confirmed states |

**Rules:**
- Background is always `COLORS.BG_PRIMARY` (`#111111`). Never a light value.
- `COLORS.ACCENT` (`#EF9F27`, amber/gold) is the primary accent — not pink. Use for scores, active states, one CTA per screen.
- Never hardcode hex strings. Always reference `COLORS.*` tokens.
- No pure white anywhere. `COLORS.TEXT_PRIMARY` (`#F0EBE0`) is the brightest text value.

---

## Typography

### Three-font system

| Role | Font | Weight | Usage |
|------|------|--------|-------|
| Editorial headlines | **Libre Bodoni** | 400–700 | Article titles, cover headlines, review names |
| Score / UI chrome | **Russo One** | 400 (display) | Score numbers, platform badges, nav logo |
| Body / metadata | **Public Sans** | 300–600 | Article body, news copy, captions, UI labels |

> **Codebase note:** Custom fonts must be loaded via `expo-font` in `app/_layout.tsx`.
> Until loaded, fall back to system serif / system sans. The existing `FONT_SIZE` and
> `FONT_WEIGHT` tokens in `constants/typography.ts` remain the sizing source of truth.

### Scale

> Existing `FONT_SIZE` tokens mapped to design roles:

| `FONT_SIZE.*` | Value | Design role |
|---------------|-------|-------------|
| — (inline) | `32px` | Hero game title |
| — (inline) | `48px` | Hero score |
| — (inline) | `18px` | Section headings ("Trending", "Latest") |
| `FONT_SIZE.XL` | `20px` | Screen-level titles |
| `FONT_SIZE.LG` | `16px` | Card titles, score badges on cards |
| `FONT_SIZE.MD` | `14px` | Body copy, trending card titles |
| `FONT_SIZE.SM` | `12px` | Metadata, platform, date, read-time |
| `FONT_SIZE.XS` | `10px` | Genre tags, filter chip labels (uppercase) |

**Rules:**
- Body line height: `1.7`. Display headings: `1.1`.
- Article body max-width: `68ch` — never full screen width.
- Drop caps on review openers: `::first-letter` at `4em`, Libre Bodoni, float left (web only).

---

## Spacing

> Existing `SPACE` tokens in `constants/spacing.ts` are the implementation source of truth.

| `SPACE.*` | Value | Design role |
|-----------|-------|-------------|
| `SPACE.XS` | `4px` | Icon gaps, tight inline spacing |
| `SPACE.SM` | `8px` | Tag gaps, filter chip vertical padding, card meta gaps |
| `SPACE.MD` | `12px` | Card internal padding, grid gap |
| `SPACE.LG` | `16px` | Page horizontal padding, filter chip horizontal padding |
| `SPACE.XL` | `24px` | Between card sections |
| `SPACE['2XL']` | `32px` | Section heading margin-top, hero content padding-bottom |

---

## Layout

> This is a React Native / Expo app. Layout uses `StyleSheet.create()` with `flexDirection`,
> not CSS Grid. The breakpoint system below applies to future web targets.

### Homepage layout (React Native)

```
ScrollView (root)
  stickyHeaderIndices={[1]}          ← sticks CategoryFilterBar
  showsVerticalScrollIndicator=false
  backgroundColor: COLORS.BG_PRIMARY

  [0] ParallaxHero                   ← Dimensions.get('window').height
  [1] CategoryFilterBar              ← sticky, borderBottom COLORS.BORDER
  [2] ArticleGrid                    ← flexWrap wrap, flexDirection row
  [3] TrendingSection                ← horizontal ScrollView
```

### Card grid (React Native)

```javascript
// Two-column grid calculation
const CARD_WIDTH = (Dimensions.get('window').width - SPACE.LG * 2 - SPACE.MD) / 2;

// Layout
{ flexDirection: 'row', flexWrap: 'wrap', gap: SPACE.MD, paddingHorizontal: SPACE.LG }
```

### Breakpoints (web / future)

| Name | Width | Behaviour |
|------|-------|-----------|
| Mobile | `375px` | Single column, stacked hero |
| Tablet | `768px` | 2-column card grid |
| Desktop | `1024px` | Asymmetric editorial grid (2fr / 1fr) |
| Wide | `1440px` | Max container width capped |

### Border radius override

The `RADIUS` tokens (`SM: 8`, `MD: 12`, `LG: 16`) must NOT be used on:
- Score badges → `borderRadius: 0`
- Filter chips → `borderRadius: 0`
- Article cards → `borderRadius: 0`
- Trending cards → `borderRadius: 0`

`RADIUS` tokens are reserved for: bottom sheets, modals, FABs only.

---

## Z-index scale

> React Native uses `zIndex` (not `z-index`). Elevation on Android is separate from zIndex.

| Layer | `zIndex` | `elevation` (Android) | Used for |
|-------|----------|-----------------------|---------|
| Base | `0` | `0` | Static content |
| Cards | `10` | `2` | Card press lift |
| Filter bar | `20` | `4` | Sticky category filter |
| Nav tabs | `40` | `8` | Bottom tab bar |
| Modal / overlay | `50` | `16` | Bottom sheets, dialogs |

---

## Key components

> All components use React Native `StyleSheet.create()`. CSS equivalents shown for reference only.

### ScoreBadge

```typescript
// Props: score: number (1–10)
// Usage: <ScoreBadge score={9} />

const styles = StyleSheet.create({
  badge: {
    backgroundColor: COLORS.BG_ELEVATED,
    borderWidth: 2,
    borderColor: COLORS.ACCENT,
    borderRadius: 0,            // brutalist
    paddingHorizontal: SPACE.LG,
    paddingVertical: SPACE.SM,
  },
  badgeGlow: {                  // applied when score >= 9
    shadowColor: COLORS.ACCENT,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.5,
    elevation: 4,
  },
  text: {
    color: COLORS.TEXT_PRIMARY,
    fontSize: FONT_SIZE.LG,     // 16px on cards; 48px inline on hero
    fontWeight: '700',
  },
});
```

### ArticleCard

```typescript
const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.BG_CARD,
    borderWidth: 1,
    borderColor: COLORS.BORDER,
    borderRadius: 0,            // brutalist override — never RADIUS.MD
    overflow: 'hidden',
  },
  cardPressed: {
    borderColor: COLORS.ACCENT,
    opacity: 0.9,
  },
  image: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
  content: {
    padding: SPACE.MD,
  },
  genre: {
    color: COLORS.ACCENT,
    fontSize: FONT_SIZE.XS,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
  title: {
    color: COLORS.TEXT_PRIMARY,
    fontSize: FONT_SIZE.LG,
    fontWeight: '600',
    marginTop: 4,
  },
  meta: {
    color: COLORS.TEXT_MUTED,
    fontSize: FONT_SIZE.SM,
    marginTop: SPACE.SM,
  },
  scoreBadge: {
    position: 'absolute',
    top: SPACE.SM,
    right: SPACE.SM,
  },
});
// accessibilityRole="button"
// accessibilityLabel="{title}, score {score} out of 10, {genre}"
```

### CategoryFilterChip

```typescript
const styles = StyleSheet.create({
  chip: {
    borderWidth: 1,
    borderColor: COLORS.BORDER,
    borderRadius: 0,            // brutalist
    backgroundColor: 'transparent',
    paddingHorizontal: SPACE.LG,
    paddingVertical: SPACE.SM,
    minHeight: 44,              // touch target
    minWidth: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chipActive: {
    borderColor: COLORS.ACCENT,
    backgroundColor: COLORS.ACCENT_DIM,
  },
  label: {
    color: COLORS.TEXT_SECONDARY,
    fontSize: FONT_SIZE.XS,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
  labelActive: {
    color: COLORS.ACCENT,
  },
});
// accessibilityRole="tab"
// accessibilityState={{ selected: isActive }}
```

### ParallaxHero

```typescript
// Uses react-native-reanimated for scroll-driven parallax
// Fallback: static image when AccessibilityInfo.isReduceMotionEnabled()

const HERO_HEIGHT = Dimensions.get('window').height;
const IMAGE_OVERFLOW = HERO_HEIGHT * 0.3;

const imageStyle = useAnimatedStyle(() => ({
  transform: [{ translateY: withClamp(scrollY.value * 0.3, 0, IMAGE_OVERFLOW) }],
}));

const styles = StyleSheet.create({
  hero: {
    height: HERO_HEIGHT,
    overflow: 'hidden',
  },
  image: {
    position: 'absolute',
    top: -IMAGE_OVERFLOW / 2,
    left: 0,
    right: 0,
    height: HERO_HEIGHT + IMAGE_OVERFLOW,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    // LinearGradient: transparent → BG_PRIMARY
    // expo-linear-gradient colors: ['transparent', COLORS.BG_PRIMARY]
    // locations: [0.4, 1.0]
  },
  content: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: SPACE.LG,
    paddingBottom: SPACE['2XL'],
  },
});
```

---

## Animation rules

| Type | Duration | Easing | Notes |
|------|----------|--------|-------|
| Micro (hover, focus) | `150ms` | `ease-out` | Cards, buttons, chips |
| Entrance (scroll reveal) | `300ms` | `ease-out` | Cards entering viewport |
| Exit | `200ms` | `ease-in` | Modals, dropdowns closing |
| Parallax | continuous | linear | JS-driven, skip on reduced-motion |

- Never `animate-bounce` or `animate-spin` decoratively
- Always wrap scroll animations in `prefers-reduced-motion: reduce` check
- Use `transform` and `opacity` only — never animate `width`, `height`, or `margin`

---

## Anti-patterns — DO NOT USE

| Pattern | Why |
|---------|-----|
| Any light background | Dark-first always — `COLORS.BG_PRIMARY` minimum |
| `RADIUS.MD` or `RADIUS.LG` on cards, badges, chips | Brutalist — `borderRadius: 0` on all editorial elements |
| `TouchableOpacity` | Use `Pressable` only — per project rules |
| Hardcoded hex strings | Always use `COLORS.*` tokens |
| Hardcoded spacing numbers | Always use `SPACE.*` tokens |
| Neon RGB / esports aesthetic | Wrong audience — magazine, not gaming peripheral |
| Emojis as icons | Use `@expo/vector-icons` Ionicons outline variants |
| Score decimals ("7.5") | Whole numbers 1–10 only |
| More than 5 filter chips without horizontal scroll | Never wrap chips to 2 rows |
| Missing `accessibilityLabel` on cards | Every card needs title + score in label |
| `accessibilityRole` omitted on filter chips | Must be `"tab"` with `accessibilityState` |
| Parallax without reduced-motion check | `AccessibilityInfo.isReduceMotionEnabled()` required |

---

## Pre-delivery checklist

### Tokens
- [ ] No hardcoded hex strings — `COLORS.*` only
- [ ] No hardcoded spacing values — `SPACE.*` only
- [ ] No hardcoded font sizes without `FONT_SIZE.*` token equivalent

### Brutalist enforcement
- [ ] Score badges: `borderRadius: 0`
- [ ] Filter chips: `borderRadius: 0`
- [ ] Article cards: `borderRadius: 0`
- [ ] Trending cards: `borderRadius: 0`

### Interaction
- [ ] All interactive elements use `Pressable`, not `TouchableOpacity`
- [ ] Pressed state changes `borderColor` to `COLORS.ACCENT`
- [ ] All `Pressable` elements have `accessibilityLabel`

### Accessibility
- [ ] Filter chips: `accessibilityRole="tab"`, `accessibilityState={{ selected }}`
- [ ] Cards: `accessibilityRole="button"`, label includes title + score + genre
- [ ] Parallax: `AccessibilityInfo.isReduceMotionEnabled()` checked, static fallback ready

### Layout
- [ ] Hero height: `Dimensions.get('window').height` (full screen)
- [ ] Filter bar sticky: `stickyHeaderIndices={[1]}` on root `ScrollView`
- [ ] Card grid: 2-column, gap `SPACE.MD`, padding `SPACE.LG`
- [ ] Touch targets: `minHeight: 44` on all filter chips and score badges
- [ ] Score: whole numbers only, no decimals
