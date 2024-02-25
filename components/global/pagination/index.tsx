import React from "react";

type Props = {
  variant?: "single" | "double";
  style?: "default" | "icons" | "oneWay" | "OneWayIcon";
  totalPage: number;
  currentPage: number;
  perPage: number;
  pageOption?: number[];
  onPageChange: (page: number) => void; // Added for handling page change
  onPerPageChange?: (perPage: number) => void; // Optional, if you want to allow changing items per page
};

const Pagination: React.FC<Props> = ({
  variant = "single",
  style = "default",
  totalPage,
  currentPage,
  perPage,
  pageOption = [5, 10, 20, 30],
  onPageChange,
  onPerPageChange,
}) => {
  // Render page numbers
  const renderPageNumbers = () => {
    const pages = [];
    for (let page = 1; page <= totalPage; page++) {
      pages.push(
        <li
          key={page}
          className={`page-item ${currentPage === page ? "active" : ""}`}
          onClick={() => onPageChange(page)}
        >
          <a href="#" onClick={(e) => e.preventDefault()} className="page-link">
            {page}
          </a>
        </li>,
      );
    }
    return pages;
  };

  // Render per page options
  const renderPerPageOptions = () => (
    <select
      className="form-select"
      value={perPage}
      onChange={(e) =>
        onPerPageChange && onPerPageChange(parseInt(e.target.value, 10))
      }
    >
      {pageOption.map((option) => (
        <option key={option} value={option}>
          {option} per page
        </option>
      ))}
    </select>
  );

  return (
    <div>
      <ul className="pagination">{renderPageNumbers()}</ul>
      {onPerPageChange && renderPerPageOptions()}
    </div>
  );
};

export default Pagination;
