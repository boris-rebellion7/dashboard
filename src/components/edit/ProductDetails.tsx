import React, { useState } from "react";
import Button from "../app/Button";

interface Props {
  data: {
    category?: string;
    tags?: string[];
  };
  setData: React.Dispatch<React.SetStateAction<any>>;
}

const ProductDetails: React.FC<Props> = ({ data, setData }) => {
  const [newCategory, setNewCategory] = useState("");
  const [newTag, setNewTag] = useState("");

  const handleAddCategory = () => {
    if (newCategory.trim()) {
      setData(prev => ({
        ...prev,
        category: newCategory.trim()
      }));
      setNewCategory("");
    }
  };

  const handleAddTag = () => {
    if (newTag.trim()) {
      setData(prev => ({
        ...prev,
        tags: [...(prev.tags || []), newTag.trim()]
      }));
      setNewTag("");
    }
  };

  return (
    <section className="bg-white section-spacing">
      <h2 className="text-18 font-lexendBold mb-7">Product Details</h2>

      {/* Categories */}
      <div className="mb-7">
        <label className="block text-16 text-black mb-2">Categories</label>
        <select
          className="w-full border border-gray/20 p-3 rounded-lg text-14 text-black mb-2"
          value={data.category || ""}
          onChange={e => setData(prev => ({ ...prev, category: e.target.value }))}
        >
          <option value="">Select category</option>
          <option value="Sweets">Sweets</option>
          <option value="Snacks">Snacks</option>
          <option value="Desserts">Desserts</option>
        </select>
        <p className="text-12 text-gray mb-4">Add product to a category.</p>
        
        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="New category"
            value={newCategory}
            onChange={e => setNewCategory(e.target.value)}
            className="flex-1 border border-gray/20 p-3 rounded-lg text-14"
          />
          <Button
            onClick={handleAddCategory}
            text="Create New Category"
            theme="lavander"
            icon="/icons/plus.svg"
            smallIcon={true}
          />
        </div>
      </div>

      {/* Tags */}
      <div>
        <label className="block text-16 text-black mb-2">Tags</label>
        <div className="flex flex-wrap gap-2 mb-2 min-h-[42px] border border-gray/20 p-2 rounded-lg">
          {(data.tags || []).map((tag, index) => (
            <span
              key={index}
              className="bg-lightGray px-3 py-1 rounded-md text-14"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-14 text-gray mb-4">Add tags to a product.</p>

        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="New tag"
            value={newTag}
            onChange={e => setNewTag(e.target.value)}
            className="border border-gray/20 p-3 rounded-lg text-14"
          />

          <Button
            onClick={handleAddTag}
            text="Create New Tag"
            theme="lavander"
            icon="/icons/plus.svg"
            smallIcon={true}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
