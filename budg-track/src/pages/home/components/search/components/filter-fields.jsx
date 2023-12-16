import { useSearchStore } from "../store";

const FilterFields = () => {
  // stores
  const { filters, setFilters, dateRange, setDateRange } = useSearchStore();
  // handlers
  // handles on change event of select field
  const handleOnChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };
  // handles on change event of date field
  const handleOnDateChange = (e) => {
    setDateRange({ ...dateRange, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="mt-5 mb-3 grid gap-3 md:grid-cols-3">
        <div className="bg-white text-[#2e2e2e]/70 p-2  rounded">
          <p htmlFor="from" className="font-semibold">
            Date Range
          </p>
          <div className="flex gap-x-2 mt-2">
            <input
              type="date"
              name="from"
              value={dateRange.from}
              onChange={handleOnDateChange}
              className="border py-[.3rem] px-[.4rem] rounded border-[#2e2e2e]/50 w-full  min-w-[8em]"
            />
            <input
              type="date"
              name="to"
              value={dateRange.to}
              onChange={handleOnDateChange}
              className="border py-[.3rem] px-[.4rem] rounded border-[#2e2e2e]/50  w-full min-w-[8em]"
            />
          </div>
        </div>
        <div className="bg-white text-[#2e2e2e]/70 p-2 rounded">
          <p htmlFor="type" className="font-semibold">
            Type
          </p>
          <div className="flex gap-x-2 mt-2">
            <select
              name="type"
              value={filters.type}
              onChange={handleOnChange}
              className="border py-[.3rem] px-[.4rem] rounded border-[#2e2e2e]/50 outline-none w-full"
            >
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>
        </div>
        <div className="bg-white text-[#2e2e2e]/70 p-2 rounded">
          <p htmlFor="recurring" className="font-semibold">
            Recurring
          </p>
          <div className="flex gap-x-2 mt-2">
            <select
              name="recurring"
              value={filters.recurring}
              onChange={handleOnChange}
              className="border py-[.3rem] px-[.4rem] rounded border-[#2e2e2e]/50 outline-none w-full"
            >
              <option value="monthly">Monthly</option>
              <option value="one time">One Time</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterFields;
