import { createContext, createElement, useContext, useMemo, useState, type ReactNode } from 'react';
import type { CollectionId, MoodId } from '../types';

export type ExploreFilter =
  | { type: 'collection'; id: CollectionId }
  | { type: 'mood'; id: MoodId }
  | null;

interface ExploreFilterContextValue {
  filter: ExploreFilter;
  setCollectionFilter: (id: CollectionId) => void;
  setMoodFilter: (id: MoodId) => void;
  clearFilter: () => void;
}

const ExploreFilterContext = createContext<ExploreFilterContextValue | null>(null);

export function ExploreFilterProvider({ children }: { children: ReactNode }) {
  const [filter, setFilter] = useState<ExploreFilter>(null);

  const value = useMemo<ExploreFilterContextValue>(
    () => ({
      filter,
      setCollectionFilter: (id) => setFilter({ type: 'collection', id }),
      setMoodFilter: (id) => setFilter({ type: 'mood', id }),
      clearFilter: () => setFilter(null),
    }),
    [filter],
  );

  return createElement(ExploreFilterContext.Provider, { value }, children);
}

export function useExploreFilter() {
  const ctx = useContext(ExploreFilterContext);
  if (!ctx) {
    throw new Error('useExploreFilter must be used within an ExploreFilterProvider');
  }
  return ctx;
}
