import { Icon } from "@iconify/react";
import TableHeading from "./components/table-heading";
const Table = () => {
  return (
    <section className="mt-3 bg-white py-2 px-3 mb-10 rounded">
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
          <tr>
            <td className="py-1">Salary</td>
            <td>2021-08-01</td>
            <td>Income</td>
            <td className="">Monthly</td>
            <td className="flex gap-x-2 justify-center items-center py-2">
              <button title="View details of <name>">
                <Icon icon="mingcute:file-info-line" width={20} />
              </button>
              <button title="Edit details of <name>">
                <Icon icon="pixelarticons:edit" width={20} />
              </button>
              <button className="Delete <name>">
                <Icon icon="pixelarticons:delete" width={20} />
              </button>
            </td>
          </tr>
          <tr>
            <td className="py-1">Salary</td>
            <td>2021-08-01</td>
            <td>Income</td>
            <td className="">Monthly</td>
            <td className="flex gap-x-2 justify-center items-center py-2">
              <button title="View details of <name>">
                <Icon icon="mingcute:file-info-line" width={20} />
              </button>
              <button title="Edit details of <name>">
                <Icon icon="pixelarticons:edit" width={20} />
              </button>
              <button className="Delete <name>">
                <Icon icon="pixelarticons:delete" width={20} />
              </button>
            </td>
          </tr>
          <tr>
            <td className="py-1">Salary</td>
            <td>2021-08-01</td>
            <td>Income</td>
            <td className="">Monthly</td>
            <td className="flex gap-x-2 justify-center items-center py-2">
              <button title="View details of <name>">
                <Icon icon="mingcute:file-info-line" width={20} />
              </button>
              <button title="Edit details of <name>">
                <Icon icon="pixelarticons:edit" width={20} />
              </button>
              <button className="Delete <name>">
                <Icon icon="pixelarticons:delete" width={20} />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Table;
