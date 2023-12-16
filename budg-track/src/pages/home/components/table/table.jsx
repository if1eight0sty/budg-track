import { Icon } from "@iconify/react";
import TableHeading from "./components/table-heading";
import TablePagination from "./components/table-pagination";
import { useState } from "react";
const Table = () => {
  const data = [
    {
      name: "Salary",
      date: "2021-08-01",
      type: "Income",
      recurring: "Monthly",
    },
    {
      name: "Books selling",
      date: "2021-08-01",
      type: "Income",
      recurring: "Monthly",
    },
    {
      name: "Pokemon cards selling",
      date: "2021-08-01",
      type: "Income",
      recurring: "one time",
    },
    {
      name: "Found",
      date: "2021-08-01",
      type: "Income",
      recurring: "one time",
    },
    {
      name: "Rent",
      date: "2021-08-01",
      type: "expense",
      recurring: "Monthly",
    },
    {
      name: "Shopping",
      date: "2021-08-01",
      type: "Expense",
      recurring: "one time",
    },
    {
      name: "Salary",
      date: "2021-08-01",
      type: "Income",
      recurring: "Monthly",
    },
  ];
  // pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return (
    <section className="bg-white py-2 px-3 mb-10 rounded">
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
          {data.slice(startIndex, endIndex).map((item, index) => (
            <tr key={index}>
              <td className="py-1">{item.name}</td>
              <td>{item.date}</td>
              <td>{item.type}</td>
              <td className="">{item.recurring}</td>
              <td className="flex gap-x-2 justify-center items-center py-2">
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
          ))}
        </tbody>
      </table>
      <TablePagination
        length={data?.length}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
};

export default Table;
