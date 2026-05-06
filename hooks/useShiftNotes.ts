import { useEffect } from 'react';
import { db } from '@/lib/db/client';
import { shiftNotes } from '@/lib/db/schema';
import { useShiftStore } from '@/store/shiftStore';

export function useShiftNotes(): void {
  const { setNotes, setLoading } = useShiftStore();

  useEffect(() => {
    let cancelled = false;

    const load = async (): Promise<void> => {
      setLoading(true);
      try {
        const rows = await db.select().from(shiftNotes).orderBy(shiftNotes.createdAt);
        if (!cancelled) setNotes(rows.reverse());
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    load();
    return () => { cancelled = true; };
  }, [setNotes, setLoading]);
}
