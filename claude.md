# CLAUDE.md — App Factory Template

This is a reusable Expo starter. Read this file fully before making any changes.
Never deviate from these conventions without being explicitly asked.

---

## Project overview

**Template name:** App Factory Template
**Platform:** iOS + Android (React Native + Expo)
**Purpose:** A pre-configured Expo starter with dark-first design, SQLite,
Zustand, Supabase stub, and Fuse.js search — ready to rename and build on.

---

## Core design principles

1. **Speed above all** — every interaction must feel instant. No loading
   spinners for local data.
2. **Dark first** — the default theme is dark. Never render a white screen.
3. **Color encodes meaning** — amber = active/accent, red = error/delete,
   green = success/safe. Never use these decoratively.
4. **Large tap targets** — minimum 48×48pt for all interactive elements.
5. **One-handed use** — primary actions always bottom-aligned.

---

## Design tokens

### Colors
```
BG_PRIMARY:    #111111   ← main background
BG_CARD:       #1A1A1A   ← card / surface
BG_ELEVATED:   #222222   ← modals, sheets
AMBER:         #EF9F27   ← primary accent, active state
AMBER_DIM:     #2A1A00   ← amber badge background
TEXT_PRIMARY:  #F0EBE0   ← main readable text
TEXT_SECONDARY:#888888   ← muted / metadata
TEXT_MUTED:    #444444   ← placeholder, disabled
RED:           #E24B4A   ← error, urgent, delete
RED_DIM:       #2A0A0A   ← red badge background
GREEN:         #1D9E75   ← success, safe, confirmed
GREEN_DIM:     #0A1F10   ← green badge background
BORDER:        #2A2A2A   ← card borders, dividers
```

### Typography
```
FONT_SIZE_XL:  20px   ← screen titles
FONT_SIZE_LG:  16px   ← card titles
FONT_SIZE_MD:  14px   ← body
FONT_SIZE_SM:  12px   ← metadata, timestamps, tags
FONT_SIZE_XS:  10px   ← labels, pills
FONT_WEIGHT_BOLD:   500
FONT_WEIGHT_NORMAL: 400
```

### Spacing
```
SPACE_XS:  4px
SPACE_SM:  8px
SPACE_MD:  12px
SPACE_LG:  16px
SPACE_XL:  24px
SPACE_2XL: 32px
```

### Border radius
```
RADIUS_SM:  8px   ← pills, badges
RADIUS_MD:  12px  ← cards
RADIUS_LG:  16px  ← bottom sheets, modals
RADIUS_FAB: 16px  ← floating action button
```

---

## Tech stack

| Concern | Library | Notes |
|---|---|---|
| Framework | Expo SDK 54 | Managed workflow |
| Navigation | Expo Router v6 (file-based) | Use app/ directory |
| State management | Zustand | Simple, no boilerplate |
| Local database | expo-sqlite + drizzle-orm | Offline-first, fast |
| Remote backend | Supabase (stub in lib/supabase.ts) | Wire up as needed |
| Styling | StyleSheet (RN native) | No external CSS-in-JS |
| Icons | @expo/vector-icons (Ionicons) | Already in Expo |
| Haptics | expo-haptics | On every key action |
| Search | Fuse.js | Fuzzy search |
| Animations | react-native-reanimated | Already in Expo |

**Never introduce a new library without asking first.**

---

## Folder structure
```
app/                        ← Expo Router screens
├── (tabs)/
│   ├── index.tsx           ← Home tab
│   ├── settings.tsx        ← Settings tab
│   └── _layout.tsx         ← Tab bar config
└── _layout.tsx             ← Root layout (providers, splash)

components/
└── ui/                     ← Generic reusable components
    ├── Card.tsx
    ├── Badge.tsx
    ├── FAB.tsx
    ├── Input.tsx
    ├── BottomSheet.tsx
    └── EmptyState.tsx

store/
└── exampleStore.ts         ← Generic Zustand store (rename/copy per feature)

lib/
├── db/
│   ├── schema.ts           ← Drizzle schema (generic items table — replace)
│   └── client.ts           ← SQLite client instance
├── supabase.ts             ← Supabase client stub
├── search.ts               ← Fuse.js search setup
└── haptics.ts              ← Haptic feedback helpers

constants/
├── colors.ts               ← All color tokens
├── typography.ts           ← Font sizes and weights
└── spacing.ts              ← Spacing scale

hooks/                      ← Custom React hooks (add per feature)
utils/                      ← Helper functions, constants
assets/
├── fonts/
├── images/
└── sounds/
```

---

## Database schema

`lib/db/schema.ts` ships with a generic `items` table as a starting point.
**Replace it with your app's actual data model before building features.**

---

## Component rules

- Every component file exports ONE default component.
- Props must be typed with TypeScript interfaces, never `any`.
- All colors come from `constants/colors.ts` — never hardcode hex strings.
- All spacing comes from `constants/spacing.ts`.
- Use `StyleSheet.create()` — no inline style objects except for dynamic values.
- Every touchable element uses `Pressable`, never `TouchableOpacity`.
- Haptic feedback on: save, delete, key state changes, tab press.

---

## Naming conventions

| Thing | Convention | Example |
|---|---|---|
| Components | PascalCase | `ItemCard.tsx` |
| Hooks | camelCase with `use` prefix | `useItems.ts` |
| Stores | camelCase with `Store` suffix | `itemStore.ts` |
| Constants | SCREAMING_SNAKE_CASE | `BG_PRIMARY` |
| DB tables | snake_case | `item_tags` |
| Screen files | lowercase with hyphens | `item-detail.tsx` |

---

## Supabase setup

1. Copy `.env.example` to `.env` and fill in your project URL and anon key.
2. Wire the env vars via `app.config.ts` → `extra.supabaseUrl` / `extra.supabaseAnonKey`.
3. `lib/supabase.ts` reads those values — no other changes needed to start using it.

---

## What Claude Code should never do

- Never use `any` type in TypeScript.
- Never hardcode colors — always use `constants/colors.ts`.
- Never install a new npm package without asking first.
- Never use `TouchableOpacity` — use `Pressable`.
- Never create a file outside the folder structure above without asking.
- Never write inline styles for static values — use `StyleSheet.create()`.
- Never remove existing features when adding new ones.
- Never skip TypeScript types on function parameters or return values.
