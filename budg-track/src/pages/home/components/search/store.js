import { create } from "zustand";

export const useSearchStore = create((set) => ({
  search: "",
  setSearch: (search) => set({ search }),
  clearSearch: () => set({ search: "" }),
  filters: {
    type: "",
    recurring: "",
  },
  setFilters: (filters) =>
    set((state) => ({ filters: { ...state.filters, ...filters } })),
  clearFilters: () => set({ filters: { type: "", recurring: "" } }),
  dateRange: {
    from: "",
    to: "",
  },
  setDateRange: (dateRange) =>
    set((state) => ({ dateRange: { ...state.dateRange, ...dateRange } })),
}));
