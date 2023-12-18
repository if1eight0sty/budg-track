export interface IBudgetData {
  name: string;
  date: string;
  type: string;
  recurring: string;
  amount: number;
}
export interface IBudgetDataError {
  name: string;
  date: string;
  type: string;
  recurring: string;
  amount: string;
}
export interface IUseBudgetStore {
  budgetData: IBudgetData;
  setBudgetData: (data: IBudgetData) => void;
  clearBudgetData: () => void;
  budgetDataError: IBudgetDataError;
  setBudgetDataError: (data: IBudgetDataError) => void;
  clearBudgetDataError: () => void;
}
