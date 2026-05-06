import { sqliteTable, text, real, integer } from 'drizzle-orm/sqlite-core';

export const recipes = sqliteTable('recipes', {
  id:          text('id').primaryKey(),
  name:        text('name').notNull(),
  category:    text('category'),     // 'classic' | 'signature' | 'seasonal' | 'mocktail'
  baseSpirit:  text('base_spirit'),  // 'gin' | 'rum' | 'whiskey' | 'vodka' | 'tequila' | 'other'
  method:      text('method'),       // 'shaken' | 'stirred' | 'built' | 'blended' | 'other'
  glass:       text('glass'),        // 'rocks' | 'coupe' | 'highball' | 'martini' | 'flute' | 'other'
  houseNote:   text('house_note'),
  isFavourite: integer('is_favourite', { mode: 'boolean' }).default(false),
  createdAt:   integer('created_at').notNull(),
  updatedAt:   integer('updated_at').notNull(),
});

export const ingredients = sqliteTable('ingredients', {
  id:         text('id').primaryKey(),
  recipeId:   text('recipe_id').notNull().references(() => recipes.id),
  name:       text('name').notNull(),
  amount:     real('amount'),
  unit:       text('unit'),     // 'ml' | 'oz' | 'dash' | 'barspoon' | 'garnish' | 'top'
  orderIndex: integer('order_index').notNull(),
});

export const methodSteps = sqliteTable('method_steps', {
  id:          text('id').primaryKey(),
  recipeId:    text('recipe_id').notNull().references(() => recipes.id),
  instruction: text('instruction').notNull(),
  orderIndex:  integer('order_index').notNull(),
});

export const tags = sqliteTable('tags', {
  id:       text('id').primaryKey(),
  recipeId: text('recipe_id').notNull().references(() => recipes.id),
  label:    text('label').notNull(),
});

export const shiftNotes = sqliteTable('shift_notes', {
  id:        text('id').primaryKey(),
  content:   text('content').notNull(),
  createdAt: integer('created_at').notNull(),
});

// ─── Inferred types ─────────────────────────────────────────────────────────
export type Recipe      = typeof recipes.$inferSelect;
export type NewRecipe   = typeof recipes.$inferInsert;
export type Ingredient  = typeof ingredients.$inferSelect;
export type NewIngredient = typeof ingredients.$inferInsert;
export type MethodStep  = typeof methodSteps.$inferSelect;
export type NewMethodStep = typeof methodSteps.$inferInsert;
export type Tag         = typeof tags.$inferSelect;
export type NewTag      = typeof tags.$inferInsert;
export type ShiftNote   = typeof shiftNotes.$inferSelect;
export type NewShiftNote = typeof shiftNotes.$inferInsert;
