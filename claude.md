# CLAUDE.md — Dram App

This file is the source of truth for Claude Code. Read it fully before making
any changes. Never deviate from these conventions without being explicitly asked.

---

## Project overview

**App name:** Dram  
**Tagline:** The bartender's recipe notebook  
**Platform:** iOS + Android (React Native + Expo)  
**Purpose:** A fast, dark-first mobile app for professional bartenders to write,
organise, and instantly find cocktail recipes during a live shift.

---

## Core design principles

1. **Speed above all** — every interaction must feel instant. No loading
   spinners for local data. Open app → ready in one tap.
2. **Dark first** — the default theme is dark. Never render a white screen.
   White is an opt-in light mode, not the default.
3. **Color encodes meaning** — amber (#EF9F27) = active/accent, red (#E24B4A)
   = allergy/alert, green (#1D9E75) = complete/safe. Never use these
   decoratively.
4. **Large tap targets** — minimum 48×48pt for all interactive elements.
   Bartenders have wet hands.
5. **One-handed use** — primary actions always bottom-aligned. No reaching to
   top corners mid-service.

---

## Design tokens

### Colors
```
BG_PRIMARY:    #111111   ← main background
BG_CARD:       #1A1A1A   ← card / surface
BG_ELEVATED:   #222222   ← modals, sheets
AMBER:         #EF9F27   ← primary accent, amounts, active state
AMBER_DIM:     #2A1A00   ← amber badge background
TEXT_PRIMARY:  #F0EBE0   ← main readable text
TEXT_SECONDARY:#888888   ← muted / metadata
TEXT_MUTED:    #444444   ← placeholder, disabled
RED:           #E24B4A   ← allergy, urgent, delete
RED_DIM:       #2A0A0A   ← red badge background
GREEN:         #1D9E75   ← done, safe, confirmed
GREEN_DIM:     #0A1F10   ← green badge background
BORDER:        #2A2A2A   ← card borders, dividers
```

### Typography
```
FONT_SIZE_XL:  20px   ← screen titles
FONT_SIZE_LG:  16px   ← card titles, drink names
FONT_SIZE_MD:  14px   ← body, ingredients
FONT_SIZE_SM:  12px   ← metadata, timestamps, tags
FONT_SIZE_XS:  10px   ← labels, category pills
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
| Framework | Expo SDK (latest) | Managed workflow |
| Navigation | Expo Router (file-based) | Use app/ directory |
| State management | Zustand | Simple, no boilerplate |
| Local database | expo-sqlite + drizzle-orm | Offline-first, fast |
| Styling | StyleSheet (RN native) | No external CSS-in-JS |
| Icons | @expo/vector-icons (Ionicons) | Already in Expo |
| Haptics | expo-haptics | On every key action |
| Search | Fuse.js | Fuzzy search recipes |
| Animations | react-native-reanimated | Already in Expo |

**Never introduce a new library without asking first.**

---

## Folder structure
```
dram/
├── app/                        ← Expo Router screens
│   ├── (tabs)/
│   │   ├── index.tsx           ← Recipes tab (home)
│   │   ├── notes.tsx           ← Shift notes tab
│   │   └── settings.tsx        ← Settings tab
│   ├── recipe/
│   │   ├── [id].tsx            ← Recipe detail screen
│   │   └── new.tsx             ← New recipe screen
│   └── _layout.tsx             ← Root layout
│
├── components/
│   ├── ui/                     ← Generic reusable components
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── FAB.tsx
│   │   ├── Input.tsx
│   │   ├── BottomSheet.tsx
│   │   └── EmptyState.tsx
│   ├── recipe/                 ← Recipe-specific components
│   │   ├── RecipeCard.tsx
│   │   ├── IngredientRow.tsx
│   │   ├── MethodStep.tsx
│   │   └── HouseNote.tsx
│   └── shift/                  ← Shift notes components
│       └── ShiftNoteCard.tsx
│
├── store/
│   ├── recipeStore.ts          ← Zustand store for recipes
│   └── shiftStore.ts           ← Zustand store for shift notes
│
├── lib/
│   ├── db/
│   │   ├── schema.ts           ← Drizzle schema (recipes, ingredients, tags)
│   │   ├── migrations/         ← Auto-generated migrations
│   │   └── client.ts           ← SQLite client instance
│   ├── search.ts               ← Fuse.js search setup
│   └── haptics.ts              ← Haptic feedback helpers
│
├── constants/
│   ├── colors.ts               ← All color tokens from above
│   ├── typography.ts           ← Font sizes and weights
│   └── spacing.ts              ← Spacing scale
│
├── hooks/
│   ├── useRecipes.ts
│   ├── useSearch.ts
│   └── useShiftNotes.ts
│
├── assets/
│   ├── fonts/
│   └── images/
│
├── docs/
│   ├── PRD.md                  ← Product requirements
│   └── STACK.md                ← Stack decisions log
│
└── CLAUDE.md                   ← This file
```

---

## Database schema (Drizzle + SQLite)
```typescript
// Three core tables

recipes {
  id          TEXT PRIMARY KEY   // uuid
  name        TEXT NOT NULL
  category    TEXT               // 'classic' | 'signature' | 'seasonal' | 'mocktail'
  base_spirit TEXT               // 'gin' | 'rum' | 'whiskey' | 'vodka' | 'tequila' | 'other'
  method      TEXT               // 'shaken' | 'stirred' | 'built' | 'blended' | 'other'
  glass       TEXT               // 'rocks' | 'coupe' | 'highball' | 'martini' | 'flute' | 'other'
  house_note  TEXT               // bartender's personal note / house spec
  is_favourite BOOLEAN DEFAULT false
  created_at  INTEGER            // timestamp
  updated_at  INTEGER            // timestamp
}

ingredients {
  id          TEXT PRIMARY KEY
  recipe_id   TEXT REFERENCES recipes(id) ON DELETE CASCADE
  name        TEXT NOT NULL
  amount      REAL
  unit        TEXT               // 'ml' | 'oz' | 'dash' | 'barspoon' | 'garnish' | 'top'
  order_index INTEGER            // display order
}

method_steps {
  id          TEXT PRIMARY KEY
  recipe_id   TEXT REFERENCES recipes(id) ON DELETE CASCADE
  instruction TEXT NOT NULL
  order_index INTEGER
}

tags {
  id        TEXT PRIMARY KEY
  recipe_id TEXT REFERENCES recipes(id) ON DELETE CASCADE
  label     TEXT NOT NULL       // e.g. 'bitter' | 'citrus' | 'vegan' | 'house special'
}

shift_notes {
  id         TEXT PRIMARY KEY
  content    TEXT NOT NULL
  created_at INTEGER
}
```

---

## Component rules

- Every component file exports ONE default component.
- Props must be typed with TypeScript interfaces, never `any`.
- All colors come from `constants/colors.ts` — never hardcode hex strings.
- All spacing comes from `constants/spacing.ts`.
- Use `StyleSheet.create()` — no inline style objects except for dynamic values.
- Every touchable element uses `Pressable`, never `TouchableOpacity`.
- Haptic feedback on: save, delete, favourite toggle, tab press.

---

## Naming conventions

| Thing | Convention | Example |
|---|---|---|
| Components | PascalCase | `RecipeCard.tsx` |
| Hooks | camelCase with `use` prefix | `useRecipes.ts` |
| Stores | camelCase with `Store` suffix | `recipeStore.ts` |
| Constants | SCREAMING_SNAKE_CASE | `BG_PRIMARY` |
| DB tables | snake_case | `method_steps` |
| Screen files | lowercase with hyphens | `new-recipe.tsx` |

---

## Feature list (build in this order)

### Phase 1 — Core (MVP)
- [ ] Recipe list screen with search
- [ ] Recipe detail screen (ingredients + method + house note)
- [ ] Create new recipe form
- [ ] Edit existing recipe
- [ ] Delete recipe (swipe gesture)
- [ ] Favourite / unfavourite recipe
- [ ] Tag system (add/remove tags per recipe)
- [ ] Filter by base spirit
- [ ] Filter by cocktail name
- [ ] Filter by method (shaken/stirred/built)

### Phase 2 — Shift tools
- [ ] Shift notes tab (quick text capture)
- [ ] "Tonight's specials" pinned section
- [ ] Batch scaling (double/triple/times 10 a recipe's amounts)

### Phase 3 — Polish
- [ ] Haptic feedback throughout
- [ ] Smooth list animations (entering/leaving)
- [ ] Empty state illustrations
- [ ] Onboarding flow (3 screens max)
- [ ] Export recipe as PDF
- [ ] Light mode toggle (settings)
- [ ] iCloud / Google Drive backup

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