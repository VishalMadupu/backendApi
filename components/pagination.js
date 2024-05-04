import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array(totalPages).fill(0).map((_, index) => index + 1);

  return (
    <div>
      {pages.map((page) => (
        <button key={page} onClick={() => onPageChange(page)}>
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;