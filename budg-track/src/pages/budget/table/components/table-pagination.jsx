import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
const TablePagination = ({
  length,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  const totalPages = Math.ceil(length / itemsPerPage);
  const handleClick = (page) => {
    setCurrentPage(page);
  };
  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`cursor-pointer px-2 rounded-sm border ${
            i === currentPage
              ? "bg-[#2e2e2e] text-white border-[#2e2e2e]"
              : "bg-slate-50"
          }`}
          onClick={() => handleClick(i)}
          disabled={i === currentPage}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };
  return (
    <>
      <div className="flex justify-center my-5 gap-x-1">
        {currentPage > 1 && (
          <button
            className={`cursor-pointer px-2 rounded border bg-slate-50`}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <Icon icon="pixelarticons:prev" />
          </button>
        )}
        {renderPageNumbers()}
        {currentPage < totalPages && (
          <button
            className={`cursor-pointer px-2 rounded border bg-slate-50`}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <Icon icon="pixelarticons:next" />
          </button>
        )}
      </div>
    </>
  );
};

TablePagination.propTypes = {
  length: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default TablePagination;
