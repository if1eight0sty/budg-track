// Importing the 'create' function from the 'zustand' library
import { create } from "zustand";
import { IUseBudgetStore } from "./interface";

// Creating a custom hook called 'useBudgetStore' using the 'create' function
export const useBudgetStore = create<IUseBudgetStore>((set) => ({
  // Initial state for budgetData
  budgetData: {
    name: "",
    amount: 0,
    date: "",
    type: "",
    recurring: "",
  },

  // Function to update the budgetData state
  setBudgetData: (data) =>
    set((state) => ({
      budgetData: { ...state.budgetData, ...data },
    })),

  // Function to clear the budgetData state
  clearBudgetData: () =>
    set((state) => ({
      budgetData: {
        ...state.budgetData,
        name: "",
        amount: 0,
        date: "",
        type: "",
        recurring: "",
      },
    })),

  // Initial state for budgetDataError
  budgetDataError: {
    name: "",
    amount: "",
    date: "",
    type: "",
    recurring: "",
  },

  // Function to update the budgetDataError state
  setBudgetDataError: (data) =>
    set((state) => ({
      budgetDataError: { ...state.budgetDataError, ...data },
    })),

  // Function to clear the budgetDataError state
  clearBudgetDataError: () =>
    set((state) => ({
      budgetDataError: {
        ...state.budgetDataError,
        name: "",
        amount: "",
        date: "",
        type: "",
        recurring: "",
      },
    })),
}));
