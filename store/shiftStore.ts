import { create } from 'zustand';
import type { ShiftNote } from '@/lib/db/schema';

interface ShiftState {
  notes: ShiftNote[];
  isLoading: boolean;

  setNotes: (notes: ShiftNote[]) => void;
  setLoading: (loading: boolean) => void;
  addNote: (note: ShiftNote) => void;
  removeNote: (id: string) => void;
}

export const useShiftStore = create<ShiftState>((set) => ({
  notes: [],
  isLoading: false,

  setNotes: (notes) => set({ notes }),
  setLoading: (isLoading) => set({ isLoading }),

  addNote: (note) =>
    set((state) => ({ notes: [note, ...state.notes] })),

  removeNote: (id) =>
    set((state) => ({ notes: state.notes.filter((n) => n.id !== id) })),
}));
