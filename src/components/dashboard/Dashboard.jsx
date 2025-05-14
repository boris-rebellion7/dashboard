// ProductList.jsx
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchProducts = async () => {
  const { data } = await axios.get("https://dummyjson.com/products");
  return data.products;
};

const ProductList = () => {
  const { data: products, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products</p>;

  return (
    <div className="dashboard p-8">
      <div className="flex justify-between items-center p-6 bg-lightBlue rounded-t-2xl">
        <h1 className="text-18 font-bold font-manrope">My Products</h1>
        button
      </div>

      <div className="grid grid-rows-1 gap-2 bg-white shadow-md divide-y divide-gray/25 rounded-b-2xl">
        {products.map((product) => (
          <div key={product.id} className="flex justify-between items-center px-6 py-2">
            <h2 className="mt-2 text-lg font-semibold">{product.title}</h2>
            <p className="mt-1 font-bold">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
