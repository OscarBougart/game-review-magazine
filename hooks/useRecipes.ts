import { useEffect } from 'react';
import { db } from '@/lib/db/client';
import { recipes } from '@/lib/db/schema';
import { useRecipeStore } from '@/store/recipeStore';

export function useRecipes(): void {
  const { setRecipes, setLoading } = useRecipeStore();

  useEffect(() => {
    let cancelled = false;

    const load = async (): Promise<void> => {
      setLoading(true);
      try {
        const rows = await db.select().from(recipes).orderBy(recipes.updatedAt);
        if (!cancelled) setRecipes(rows.reverse());
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    load();
    return () => { cancelled = true; };
  }, [setRecipes, setLoading]);
}
