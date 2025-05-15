import React from "react";

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
  //   @todo fix the color change on the buttons when the page is on beginning or end

  return (
    <div className="flex justify-end items-center my-4 px-7 grow">
      <div className="text-12 mr-4 flex items-center gap-2">
        Items per page:{" "}
        <select
          value={limit}
          onChange={(e) => {
            setLimit(Number(e.target.value));
            setPage(1);
          }}
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
        <button className="mx-2" onClick={() => setPage(1)} disabled={page === 1}>
          <img src="/icons/full-left.svg" alt="First Page" />
        </button>

        <button
          className="mx-2"
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
        >
          <img src="/icons/left.svg" alt="Previous Page" />
        </button>

        <button
          className="mx-2"
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
        >
          <img src="/icons/right.svg" alt="Next Page" />
        </button>

        <button
          className="mx-2"
          onClick={() => setPage(totalPages)}
          disabled={page === totalPages}
        >
          <img src="/icons/full-right.svg" alt="Last Page" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
