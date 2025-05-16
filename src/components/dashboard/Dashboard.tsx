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
  const [, { page, limit, sortBy, order }] = queryKey as [
    string, 
    { page: number; limit: number; sortBy?: string; order?: string }
  ];
  const skip = (page - 1) * limit;
  const sortParams = sortBy ? `&sortBy=${sortBy}&order=${order}` : '';
  const { data } = await axios.get(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}${sortParams}`
  );
  return data;
};

const ProductList = () => {
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [currentSort, setCurrentSort] = useState({ field: '', order: 'asc' });

  const { data, isLoading, isError } = useQuery<ProductsResponse>({
    queryKey: ["products", { 
      page, 
      limit, 
      sortBy: currentSort.field, 
      order: currentSort.order 
    }],
    queryFn: fetchProducts,
    placeholderData: keepPreviousData,
  });

  const handleSort = (field: string, order: string) => {
    setCurrentSort({ field, order });
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError || !data) return <p>Error loading products</p>;

  return (
    <div className="dashboard grow flex flex-col p-8">
      <div className="flex justify-between items-center px-6 py-4 bg-lightBlue rounded-t-2xl">
        <h1 className="text-18 font-bold font-manrope">My Products</h1>
        <Button text={"Add New Item"} theme="blue" />
      </div>

      <div className="bg-white rounded-b-2xl grow flex flex-col">
        <table className="min-w-full table-fixed border-collapse">
          <DashboardHeader 
            onSort={handleSort}
            currentSort={currentSort}
          />

          <tbody>
            {data?.products.map((product) => (
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
            total={data.total}
            setPage={setPage}
            setLimit={setLimit}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductList;