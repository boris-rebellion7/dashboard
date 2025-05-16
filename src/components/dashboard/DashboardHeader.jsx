// @todo fix the sorting for price

const DashboardHeader = () => {
  return (
    <thead className="text-blueGray text-left">
      <tr className="border-b border-blueGray/20">
        <th className="py-5 px-6 font-lexendBold leading-5">Product name</th>
        <th className="py-5 px-6 font-lexendBold leading-5 flex items-center gap-1">
          Price <span>
            <img
              src="/icons/arrow-up.svg"
              alt="Sort"
              width={10}
              height={10}
              className="ml-0-5 w-4"
            />
          </span>
        </th>
        <th className="py-5 px-6 font-lexendBold leading-5">Rating</th>
        <th className="py-5 px-6 font-lexendBold leading-5">Stock</th>
        <th className="py-5 px-6 font-lexendBold leading-5">Discount</th>
        <th className="py-5 px-6 font-lexendBold leading-5">Actions</th>
      </tr>
    </thead>
  );
};

export default DashboardHeader;
