import { IBudgetData, IBudgetDataError } from "./interface";

export class BudgetHelper {
  checkBudgetData = (data: IBudgetData) => {
    const errors: IBudgetDataError = {} as IBudgetDataError;
    errors.name = data.name ? "" : "Name is required";
    errors.amount = data.amount ? "" : "Amount is required";
    errors.date = data.date ? "" : "Date is required";
    errors.type = data.type ? "" : "Type is required";
    errors.recurring = data.recurring ? "" : "Recurring is required";
    return errors;
  };
  addBudget = (
    data: IBudgetData,
    setError: (data: IBudgetDataError) => void,
    clearData: () => void
  ) => {
    const errors = this.checkBudgetData(data);
    if (
      errors?.amount ||
      errors?.date ||
      errors?.name ||
      errors?.recurring ||
      errors?.type
    ) {
      setError(errors);
      return;
    }
    setError({} as IBudgetDataError);
    const budgets = localStorage.getItem("budgets")
      ? JSON.parse(localStorage.getItem("budgets")!)
      : [];
    budgets.push({
      ...data,
      user: localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user")!)
        : null,
    });
    localStorage.setItem("budgets", JSON.stringify(budgets));
    clearData();
  };
  getBudgets = () => {
    return localStorage.getItem("budgets")
      ? JSON.parse(localStorage.getItem("budgets")!)
      : [];
  };
}
