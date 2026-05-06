import { useState, useMemo, useCallback } from 'react';
import { createRecipeSearch, searchRecipes } from '@/lib/search';
import { useRecipeStore } from '@/store/recipeStore';
import type { Recipe } from '@/lib/db/schema';

interface UseSearchResult {
  query: string;
  results: Recipe[];
  setQuery: (q: string) => void;
  clearQuery: () => void;
  isSearching: boolean;
}

export function useSearch(): UseSearchResult {
  const [query, setQueryState] = useState('');
  const allRecipes = useRecipeStore((s) => s.recipes);

  const fuse = useMemo(() => createRecipeSearch(allRecipes), [allRecipes]);

  const results = useMemo(
    () => (query.trim() ? searchRecipes(fuse, query) : allRecipes),
    [fuse, query, allRecipes],
  );

  const setQuery = useCallback((q: string) => setQueryState(q), []);
  const clearQuery = useCallback(() => setQueryState(''), []);

  return { query, results, setQuery, clearQuery, isSearching: query.trim().length > 0 };
}
