import React from "react";

type Props = {
  data: any;
  setData: React.Dispatch<React.SetStateAction<any>>;
};

const ProductStatus: React.FC<Props> = ({ data, setData }) => {
  const statuses = ["Draft", "Published", "Archived"];

  return (
    <section className="bg-white section-spacing">
      <h2 className="font-lexendBold text-18 mb-7">Status</h2>

      <select
        className="w-full border rounded p-2"
        value={data.status || "Draft"}
        onChange={e => setData(prev => ({ ...prev, status: e.target.value }))}
      >
        {statuses.map(status => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
      <p className="text-12 text-gray mt-2">Set the product status.</p>
    </section>
  );
};

export default ProductStatus;
