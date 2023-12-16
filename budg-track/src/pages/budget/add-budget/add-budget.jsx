import { useMemo } from "react";
import InputFieldNoIcon from "../../../components/input-fields/input-field-no-icon";
import SelectField from "../../../components/input-fields/select-field";
import { useBudgetStore } from "../store";
import { BudgetHelper } from "../helper";

const AddBudget = () => {
  // classes
  const budgetClass = useMemo(() => new BudgetHelper(), []);
  // stores
  const {
    budgetData: data,
    setBudgetData: setData,
    clearBudgetData: clearData,
    budgetDataError: error,
    setBudgetDataError: setError,
  } = useBudgetStore();
  // handlers
  const handleOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  // handlers for form submit event
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    budgetClass.addBudget(data, setError, clearData);
  };
  return (
    <>
      <div className="px-2 @[30em]:px-6 @[50em]:px-10 @[1300px]:px-16 mb-10">
        <div className="flex items-center justify-center w-full bg-white mt-5 py-10 rounded">
          <section className="relative flex-1 ">
            <form className="flex items-center justify-center w-full">
              <div className="flex flex-col items-center px-4 py-4 w-[20em] min-[500px]:w-[25em] min-[650px]:w-[27em]">
                <h1 className="mb-8 text-2xl font-bold text-gray-600">Add</h1>
                <div className="flex flex-col w-full gap-y-4">
                  <InputFieldNoIcon
                    label="name"
                    type="name"
                    name="name"
                    id="name"
                    value={data.name}
                    onChange={handleOnChange}
                    placeholder="Type your name here..."
                  />
                  {error.name && (
                    <p className="text-rose-500 text-[.8rem] -mt-3">
                      {error.name}
                    </p>
                  )}
                  <InputFieldNoIcon
                    label="Amount"
                    type="number"
                    name="amount"
                    id="amount"
                    value={data.amount || ""}
                    onChange={handleOnChange}
                    placeholder="Type amount"
                  />
                  {error.amount && (
                    <p className="text-rose-500 text-[.8rem] -mt-3">
                      {error.amount}
                    </p>
                  )}
                  <InputFieldNoIcon
                    label="Date"
                    type="date"
                    name="date"
                    id="date"
                    value={data.date}
                    onChange={handleOnChange}
                    placeholder="Enter date"
                  />
                  {error.date && (
                    <p className="text-rose-500 text-[.8rem] -mt-3">
                      {error.date}
                    </p>
                  )}
                  <SelectField
                    id="type"
                    label="Type"
                    name="type"
                    value={data.type}
                    onChange={handleOnChange}
                    options={[
                      { value: "income", label: "Income" },
                      { value: "expense", label: "Expense" },
                    ]}
                  />
                  {error.type && (
                    <p className="text-rose-500 text-[.8rem] -mt-3">
                      {error.type}
                    </p>
                  )}
                  <SelectField
                    id="recurring"
                    label="Recurring"
                    name="recurring"
                    value={data.recurring}
                    onChange={handleOnChange}
                    options={[
                      { value: "monthly", label: "Monthly" },
                      { value: "one time", label: "One time" },
                    ]}
                  />
                  {error.recurring && (
                    <p className="text-rose-500 text-[.8rem] -mt-3">
                      {error.recurring}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 mt-8 text-lg font-semibold text-white rounded bg-[#2e2e2e] hover:shadow-lg"
                  onClick={handleOnSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </>
  );
};

export default AddBudget;