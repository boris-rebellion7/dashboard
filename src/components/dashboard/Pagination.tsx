import React from "react";
import { getLenis } from "../helper/Lenis";
// @todo color of the prev and next butons when on first and last tab

interface PaginationProps {
  page: number;
  limit: number;
  total: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({ page, limit, total, setPage, setLimit }) => {
  const totalPages = Math.ceil(total / limit);
  const start = limit * (page - 1) + 1;
  const end = Math.min(limit * page, total);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(0, { immediate: false });
    }
  };

  const handleLimitChange = (newLimit: number) => {
    setLimit(newLimit);
    setPage(1);
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(0, { immediate: false });
    }
  };

  return (
    <div className="flex justify-end items-center my-4 px-7 grow">
      <div className="text-12 mr-4 flex items-center gap-2">
        <span className="whitespace-nowrap">Items per page:</span>

        <select
          value={limit}
          onChange={(e) => handleLimitChange(Number(e.target.value))}
          className="border border-gray/25 rounded px-3 py-2 text-12 bg-white"
        >
          {[5, 10, 25].map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      <div className="text-12 mx-4">
        {start}-{end} of {total}
      </div>

      <div className="flex gap-2">
        <button 
          className="mx-2" 
          onClick={() => handlePageChange(1)} 
          disabled={page === 1}
        >
          <img src="/icons/full-left.svg" alt="First Page" />
        </button>

        <button
          className="mx-2"
          onClick={() => handlePageChange(Math.max(page - 1, 1))}
          disabled={page === 1}
        >
          <img src="/icons/left.svg" alt="Previous Page" />
        </button>

        <button
          className="mx-2"
          onClick={() => handlePageChange(Math.min(page + 1, totalPages))}
          disabled={page === totalPages}
        >
          <img src="/icons/right.svg" alt="Next Page" />
        </button>

        <button
          className="mx-2"
          onClick={() => handlePageChange(totalPages)}
          disabled={page === totalPages}
        >
          <img src="/icons/full-right.svg" alt="Last Page" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;