import React from "react";

type Props = {
  data: any;
  setData: React.Dispatch<React.SetStateAction<any>>;
};

const PricingForm: React.FC<Props> = ({ data, setData }) => {
  const discountTypes = ["percentage", "none", "fixed"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const handleDiscountTypeChange = (type: string) => {
    setData(prev => ({ ...prev, discountType: type }));
  };

  return (
    <section className="bg-white section-spacing">
      <h2 className="font-lexendBold text-18 mb-7">Pricing</h2>

      <div className="mb-4">
        <label className="block mb-1">Base Price <span className="text-red">*</span></label>
        <input
          type="number"
          step="0.01"
          name="price"
          value={data.price || ""}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <p className="text-12 text-gray mt-2">Set the product price.</p>
      </div>

      <div className="mb-4">
        <label className="block mb-1">Description</label>
        <div className="flex gap-2 mt-2">
          {discountTypes.map(type => (
            <button
              key={type}
              type="button"
              onClick={() => handleDiscountTypeChange(type)}
              className={`px-4 py-2 rounded border ${
                data.discountType === type
                  ? "bg-blue-100 border-blue-500 text-blue-700"
                  : "border-gray-300"
              }`}
            >
              {type === "percentage" && "Percentage %"}
              {type === "none" && "No Discount"}
              {type === "fixed" && "Fixed Price"}
            </button>
          ))}
        </div>
      </div>

      {data.discountType !== "none" && (
        <div>
          <label className="block mb-1">
            {data.discountType === "percentage"
              ? "Discount amount (%) *"
              : "Discounted price *"}
          </label>
          <input
            type="number"
            step="0.01"
            name="discountPercentage"
            value={data.discountPercentage || ""}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <p className="text-12 text-gray mt-2">Set the product discount</p>
        </div>
      )}
    </section>
  );
};

export default PricingForm;
