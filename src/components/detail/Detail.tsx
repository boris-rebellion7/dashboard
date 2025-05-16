import pick from 'lodash/pick';
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import DetailHeader from "./DetailHeader";
import Breadcrumb from "../app/Breadcrumb";
import ProductDescription from "./ProductDescription";
import ReviewsTable from "./ReviewsTable";

interface Review {
  rating: number;
  reviewerName: string;
  comment: string;
  reviewerEmail: string;
  date: string;
}

interface Product {
    id: number;
    title: string;
    price: number;
    discountPercentage: number;
    rating: number;
    reviews: Review[];
    stock: number;
    brand: string;
    category: string;
    description: string;
    thumbnail: string;
    images: string[];
}

const ProductDetail: React.FC = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;
        setLoading(true);
        axios
            .get(`https://dummyjson.com/products/${id}`)
            .then((res) => {
                setProduct(res.data);
            })
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (!product) return <div>Product not found.</div>;

    return (
        <div className="rounded-2xl p-8">
            <Breadcrumb />

            <DetailHeader {...pick(product, ['id', 'title', 'price', 'discountPercentage', 'rating', 'reviews', 'stock', 'brand', 'category', 'thumbnail', 'images'])} />

            <ProductDescription
                // @important i found that i can use pick to take only what i needed on this line that is why i didn't use it on all the places there could have been used
                {...pick(product, ['description', 'category', 'brand', 'dimensions', 'shippingInformation', 'tags', 'warrantyInformation'])} />

            <ReviewsTable
                reviews={product.reviews}
            />
        </div>
    );
};

export default ProductDetail;