import { create } from 'zustand';
import type { Recipe, Ingredient, MethodStep, Tag } from '@/lib/db/schema';

export interface RecipeWithDetails extends Recipe {
  ingredients: Ingredient[];
  steps: MethodStep[];
  tags: Tag[];
}

interface RecipeState {
  recipes: Recipe[];
  activeRecipe: RecipeWithDetails | null;
  isLoading: boolean;

  setRecipes: (recipes: Recipe[]) => void;
  setActiveRecipe: (recipe: RecipeWithDetails | null) => void;
  setLoading: (loading: boolean) => void;
  upsertRecipe: (recipe: Recipe) => void;
  removeRecipe: (id: string) => void;
  toggleFavourite: (id: string) => void;
}

export const useRecipeStore = create<RecipeState>((set) => ({
  recipes: [],
  activeRecipe: null,
  isLoading: false,

  setRecipes: (recipes) => set({ recipes }),
  setActiveRecipe: (activeRecipe) => set({ activeRecipe }),
  setLoading: (isLoading) => set({ isLoading }),

  upsertRecipe: (recipe) =>
    set((state) => {
      const exists = state.recipes.some((r) => r.id === recipe.id);
      return {
        recipes: exists
          ? state.recipes.map((r) => (r.id === recipe.id ? recipe : r))
          : [recipe, ...state.recipes],
      };
    }),

  removeRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
      activeRecipe: state.activeRecipe?.id === id ? null : state.activeRecipe,
    })),

  toggleFavourite: (id) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === id ? { ...r, isFavourite: !r.isFavourite } : r,
      ),
    })),
}));
