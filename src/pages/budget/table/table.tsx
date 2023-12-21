import { Icon } from "@iconify/react";
import TableHeading from "./components/table-heading";
import TablePagination from "./components/table-pagination";
import { useCallback, useEffect, useMemo, useState } from "react";
import { BudgetHelper } from "../helper";
import { IBudgetData } from "../interface";
import { useSearchStore } from "../../home/search/store";
import DeleteModal from "./components/delete-modal";
import { useBudgetStore } from "../store";
import { useNavigate } from "react-router-dom";

const Table = () => {
  const navigate = useNavigate();
  // classes
  const budgetClass = useMemo(() => new BudgetHelper(), []);
  // stores
  const { budgets, setBudgets } = useBudgetStore();
  const { search, filters, dateRange } = useSearchStore();

  // states
  // filter states
  const [filteredData, setFilteredData] = useState(budgets);

  // pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // number of data shown in one page at a time
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // delete states
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<IBudgetData>({} as IBudgetData);

  // handlers
  // model handlers
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // delete handler
  // deletes the data from the budget store and open the model that actually deletes the entry
  const handleDeleteClick = (data: IBudgetData) => {
    setData(data);
    handleClickOpen();
  };
  // update handler
  // navigates to a form page to update the data
  const handleUpdateClick = async (id: string) => {
    navigate(`update-budget/${id}`);
  };
  // get budgets from the budget store
  const getBudgets = useCallback(() => {
    const data = budgetClass.getBudgets();
    setBudgets(data);
    return data;
  }, [budgetClass, setBudgets]);
  // searching data based on search -> name, type, recurring and amount
  useEffect(() => {
    if (!search) {
      setFilteredData(budgets);
      return;
    }
    setFilteredData(
      budgets?.filter(
        (item: IBudgetData) =>
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.type.toLowerCase().includes(search.toLowerCase()) ||
          item.recurring.toLowerCase().includes(search.toLowerCase()) ||
          item.amount.toString().includes(search)
      )
    );
  }, [search, budgets]);

  // filtering data based on filters i.e type and recurring
  useEffect(() => {
    if (!filters.type && !filters.recurring) {
      setFilteredData(budgets);
      return;
    }
    setFilteredData(
      budgets?.filter(
        (item: IBudgetData) =>
          item.type.toLowerCase().includes(filters?.type.toLowerCase()) &&
          item.recurring
            .toLowerCase()
            .includes(filters?.recurring.toLowerCase())
      )
    );
  }, [filters, budgets]);
  // filtering data based on date range
  useEffect(() => {
    if (!dateRange.from && !dateRange.to) {
      setFilteredData(budgets);
      return;
    }
    // filter start date is only given
    if (dateRange?.from && !dateRange?.to) {
      setFilteredData(
        budgets?.filter(
          (item: IBudgetData) =>
            new Date(item.date) >= new Date(dateRange?.from)
        )
      );
      return;
    }
    // filter end date is only given
    if (!dateRange?.from && dateRange?.to) {
      setFilteredData(
        budgets?.filter(
          (item: IBudgetData) => new Date(item.date) <= new Date(dateRange?.to)
        )
      );
      return;
    }
    // both filter dates are given
    setFilteredData(
      budgets?.filter(
        (item: IBudgetData) =>
          new Date(item.date) >= new Date(dateRange?.from) &&
          new Date(item.date) <= new Date(dateRange?.to)
      )
    );
  }, [dateRange, budgets]);
  useEffect(() => {
    getBudgets();
  }, [getBudgets]);
  return (
    <section className="px-3 py-2 mb-10 bg-white rounded">
      {/* Table heading */}
      <TableHeading />
      <table className="w-full text-center border">
        <thead className="text-[#2e2e2e]/80 font-semibold tracking-wide border">
          <tr>
            <th className="py-2">Name</th>
            <th>Date</th>
            <th>Type</th>
            <th>Recurring</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody className="text-[#2e2e2e]/70">
          {Array.isArray(filteredData) && filteredData?.length > 0 ? (
            // Render table rows for filtered data
            filteredData.slice(startIndex, endIndex).map((item) => (
              <tr key={item?.id}>
                <td className="py-1">{item.name}</td>
                <td>{item.date}</td>
                <td>{item.type}</td>
                <td className="">{item.recurring}</td>
                <td className="">{item.amount}</td>
                <td className="flex items-center justify-center py-2 gap-x-2">
                  {/* View details button */}
                  <button title={`View details of ${item.name}`}>
                    <Icon icon="mingcute:file-info-line" width={20} />
                  </button>

                  {/* Edit details button */}
                  <button
                    title={`Edit details of ${item.name}`}
                    onClick={() => handleUpdateClick(item.id)}
                  >
                    <Icon icon="pixelarticons:edit" width={20} />
                  </button>

                  {/* Delete button */}
                  <button
                    title={`Delete details of ${item.name}`}
                    onClick={() => handleDeleteClick(item)}
                  >
                    <Icon icon="pixelarticons:delete" width={20} />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            // Render "No data found" message
            <tr className="text-[#2e2e2e]/70">
              <td colSpan={5} className="py-2">
                No data found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Table pagination */}
      <TablePagination
        length={filteredData?.length || 0}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        setCurrentPage={setCurrentPage}
      />
      <DeleteModal data={data} handleClose={handleClose} open={open} />
    </section>
  );
};

export default Table;
