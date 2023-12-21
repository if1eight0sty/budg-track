import { IBudgetData, IBudgetDataError, IUserData } from "./interface";

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
  checkErrors = (errors: IBudgetDataError) => {
    if (
      errors?.amount ||
      errors?.date ||
      errors?.name ||
      errors?.recurring ||
      errors?.type
    ) {
      return true;
    }
    return false;
  };
  addBudget = (
    data: IBudgetData,
    setError: (data: IBudgetDataError) => void,
    clearData: () => void,
    setBudgets: (data: IBudgetData[]) => void
  ) => {
    const errors = this.checkBudgetData(data);
    if (this.checkErrors(errors)) {
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
    setBudgets(budgets);
    clearData();
  };
  getBudgets = () => {
    const budgets: IBudgetData[] = localStorage.getItem("budgets")
      ? JSON.parse(localStorage.getItem("budgets")!)
      : [];
    const user: IUserData = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user")!)
      : null;
    return budgets.filter(
      (budget: IBudgetData) => budget.user.email === user.email
    );
  };
  deleteBudget = (id: string, setBudgets: (data: IBudgetData[]) => void) => {
    const budgets: IBudgetData[] = this.getBudgets();
    budgets.splice(
      budgets.findIndex((budget: IBudgetData) => budget.id === id),
      1
    );
    localStorage.setItem("budgets", JSON.stringify(budgets));
    setBudgets(budgets);
  };
  getBudgetById = (id: string) => {
    const budgets: IBudgetData[] = this.getBudgets();
    return budgets.find((budget: IBudgetData) => budget.id === id);
  };
  updateBudget = (
    data: IBudgetData,
    setBudgets: (data: IBudgetData[]) => void,
    setError: (data: IBudgetDataError) => void
  ) => {
    const errors = this.checkBudgetData(data);
    if (this.checkErrors(errors)) {
      setError(errors);
      return;
    }
    setError({} as IBudgetDataError);
    const id = data?.id;
    const budget = this.getBudgetById(id);
    if (!budget) return;
    const budgets: IBudgetData[] = this.getBudgets();
    budgets.splice(
      budgets.findIndex((budget: IBudgetData) => budget.id === id),
      1,
      { ...budget, ...data }
    );
    setBudgets(budgets);
    localStorage.setItem("budgets", JSON.stringify(budgets));
  };
  getSummaryStatistics = () => {
    const summary = {
      total: 0,
      income: 0,
      expense: 0,
      balance: 0,
    };
    const budgets: IBudgetData[] = this.getBudgets();
    budgets.forEach((budget: IBudgetData) => {
      summary.total += budget.amount;
      if (budget.type === "income") {
        summary.income += budget.amount;
      } else {
        summary.expense += budget.amount;
      }
    });
    summary.balance = summary.income - summary.expense;
    return summary;
  };
}
