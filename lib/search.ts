import Fuse from 'fuse.js';
import type { Recipe } from '@/lib/db/schema';

const FUSE_OPTIONS: Fuse.IFuseOptions<Recipe> = {
  keys: [
    { name: 'name',       weight: 0.6 },
    { name: 'baseSpirit', weight: 0.2 },
    { name: 'category',   weight: 0.1 },
    { name: 'method',     weight: 0.1 },
  ],
  threshold: 0.35,  // 0 = exact, 1 = match anything
  ignoreLocation: true,
  minMatchCharLength: 1,
};

export function createRecipeSearch(recipes: Recipe[]): Fuse<Recipe> {
  return new Fuse(recipes, FUSE_OPTIONS);
}

export function searchRecipes(fuse: Fuse<Recipe>, query: string): Recipe[] {
  if (!query.trim()) return [];
  return fuse.search(query).map((result) => result.item);
}
