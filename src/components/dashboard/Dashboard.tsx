// ProductList.tsx
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import axios from "axios";
import DashboardHeader from "./DashboardHeader";
import DashboardItem from "./DashboardItem";
import Button from "../app/Button";
import Pagination from "./Pagination";

// Define types for a single product and API response
interface Product {
  id: number;
  title: string;
  price: number;
  rating: number;
  stock: number;
  discountPercentage: number;
}

interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

// Fetch function with typed response
const fetchProducts = async ({ queryKey }) => {
  const [, { page, limit }] = queryKey as [string, { page: number; limit: number }];
  const skip = (page - 1) * limit;
  const { data } = await axios.get(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
  );
  return data;
};

const ProductList = () => {
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);

  const { data, isLoading, isError } = useQuery<ProductsResponse>({
    queryKey: ["products", { page, limit }],
    queryFn: fetchProducts,
    placeholderData: keepPreviousData,
  });

  // Add this line to help TypeScript:
  const productsData = data as ProductsResponse;

  if (isLoading) return <p>Loading...</p>;
  if (isError || !productsData) return <p>Error loading products</p>;

  return (
    <div className="dashboard grow flex flex-col p-8">
      <div className="flex justify-between items-center px-6 py-4 bg-lightBlue rounded-t-2xl">
        <h1 className="text-18 font-bold font-manrope">My Products</h1>
        <Button text={"Add New Item"} active={true} />
      </div>

      <div className="bg-white rounded-b-2xl grow flex flex-col">
        <table className="min-w-full table-fixed border-collapse">
          <DashboardHeader />

          <tbody>
            {productsData.products.map((product) => (
              <DashboardItem
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                rating={product.rating}
                stock={product.stock}
                discountPercentage={product.discountPercentage}
              />
            ))}
          </tbody>
        </table>

        <div className="flex justify-end items-end grow">
          <Pagination
            page={page}
            limit={limit}
            total={productsData.total}
            setPage={setPage}
            setLimit={setLimit}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductList;