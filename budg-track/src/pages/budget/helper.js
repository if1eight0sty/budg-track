export class BudgetHelper {
  checkBudgetData = (data) => {
    let errors = {};
    errors.name = data.name ? "" : "Name is required";
    errors.amount = data.amount ? "" : "Amount is required";
    errors.date = data.date ? "" : "Date is required";
    errors.type = data.type ? "" : "Type is required";
    errors.recurring = data.recurring ? "" : "Recurring is required";
    return errors;
  };
  addBudget = (data, setError, clearData) => {
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
    setError({});
    const budgets = JSON.parse(localStorage.getItem("budgets")) || [];
    budgets.push(data);
    localStorage.setItem("budgets", JSON.stringify(budgets));
    clearData();
  };
  getBudgets = () => {
    return JSON.parse(localStorage.getItem("budgets")) || [];
  };
}
