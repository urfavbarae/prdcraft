import { create } from 'zustand';
import { Product } from '../types';

interface SearchStore {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredProducts: Product[];
  setFilteredProducts: (products: Product[]) => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
  filteredProducts: [],
  setFilteredProducts: (products) => set({ filteredProducts: products }),
}));