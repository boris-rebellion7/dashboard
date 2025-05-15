import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import DetailHeader from "./DetailHeader";
import Breadcrumb from "../app/Breadcrumb";
import ProductDescription from "./ProductDescription";
import ReviewsTable from "./ReviewsTable";

interface Product {
    id: number;
    title: string;
    price: number;
    discountPercentage: number;
    rating: number;
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
        <>
            <Breadcrumb />
            <DetailHeader {...product} />
            <ProductDescription
                description={product.description}
                category={product.category}
                brand={product.brand}
            />
            <ReviewsTable
                reviews={[
                    {
                        id: "1",
                        rating: 4,
                        customer: "Sunil Joshi",
                        comment: "I like this design",
                        email: "john.doe@example.com",
                        date: "1 day ago",
                    },
                    {
                        id: "2",
                        rating: 5,
                        customer: "Mark Richard",
                        comment: "Awesome quality with great materials used, but could be more comfortable",
                        email: "sara.connor@samplemail.com",
                        date: "11:20 PM",
                    },
                ]}
            />
        </>
    );
};

export default ProductDetail;