import { Icon } from "@iconify/react";
import TableHeading from "./components/table-heading";
import TablePagination from "./components/table-pagination";
import { useEffect, useMemo, useState } from "react";
import { BudgetHelper } from "../helper";
import { useQuery } from "@tanstack/react-query";
import { IBudgetData } from "../interface";
import { useSearchStore } from "../../home/search/store";
const Table = () => {
  // classes
  const budgetClass = useMemo(() => new BudgetHelper(), []);
  // stores
  const {
    search,
    filters,
    //  dateRange
  } = useSearchStore();
  const { data: budgets } = useQuery({
    queryKey: ["get", "budgets"],
    queryFn: () => budgetClass.getBudgets(),
  });
  console.log("🚀 ~ file: table.tsx:22 ~ Table ~ budgets:", budgets);
  // states
  // filter states
  const [filteredData, setFilteredData] = useState(budgets);
  // pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // searching data based on search
  useEffect(() => {
    if (!search) {
      setFilteredData(budgets);
      return;
    }
    setFilteredData(
      budgets.filter(
        (item: IBudgetData) =>
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.type.toLowerCase().includes(search.toLowerCase()) ||
          item.recurring.toLowerCase().includes(search.toLowerCase())
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
      budgets.filter(
        (item: IBudgetData) =>
          item.type.toLowerCase().includes(filters?.type.toLowerCase()) &&
          item.recurring
            .toLowerCase()
            .includes(filters?.recurring.toLowerCase())
      )
    );
  }, [filters, budgets]);

  return (
    <section className="px-3 py-2 mb-10 bg-white rounded">
      <TableHeading />
      <table className="w-full text-center border">
        <thead className="text-[#2e2e2e]/80 font-semibold tracking-wide border">
          <tr>
            <th className="py-2">Name</th>
            <th>Date</th>
            <th>Type</th>
            <th>Recurring</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="text-[#2e2e2e]/70">
          {Array.isArray(filteredData) && filteredData?.length > 0 ? (
            filteredData.slice(startIndex, endIndex).map((item, index) => (
              <tr key={index}>
                <td className="py-1">{item.name}</td>
                <td>{item.date}</td>
                <td>{item.type}</td>
                <td className="">{item.recurring}</td>
                <td className="flex items-center justify-center py-2 gap-x-2">
                  <button title={`View details of ${item.name}`}>
                    <Icon icon="mingcute:file-info-line" width={20} />
                  </button>
                  <button title={`Edit details of ${item.name}`}>
                    <Icon icon="pixelarticons:edit" width={20} />
                  </button>
                  <button className="Delete <name>">
                    <Icon icon="pixelarticons:delete" width={20} />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr className="text-[#2e2e2e]/70">
              <td colSpan={5} className="py-2">
                No data found
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <TablePagination
        length={filteredData?.length || 0}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
};

export default Table;
