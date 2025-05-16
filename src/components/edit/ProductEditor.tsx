import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import GeneralForm from "./GeneralForm";
import MediaForm from "./MediaForm";
import PricingForm from "./PricingForm";
import axios from "axios";
import ThumbnailUploader from "./ThumbnailUploader";
import ProductStatus from "./ProductStatus";
import ProductDetails from "./ProductDetails";
import Breadcrumb from "../app/Breadcrumb";
import Button from "../app/Button";

const ProductEditor: React.FC = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const [productData, setProductData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        const fetchProduct = async () => {
            if (!id) return;
            try {
                const response = await axios.get(`https://dummyjson.com/products/${id}`);
                setProductData(response.data);
            } catch (err) {
                console.error(err);
                setMessage("Failed to load product.");
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    const handleSave = async () => {
        if (!id) return; // Guard clause for missing ID
        setSaving(true);
        try {
            const response = await axios.put(`https://dummyjson.com/products/${id}`, productData);
            setMessage("Product updated successfully.");
            console.log(response.data);
        } catch (err) {
            console.error(err);
            if (axios.isAxiosError(err) && err.response?.status === 404) {
                setMessage(`Product with ID ${id} not found.`);
            } else {
                setMessage("Failed to update product.");
            }
        } finally {
            setSaving(false);
        }
    };

    const handleCancel = () => {
        window.history.back();
    };

    if (loading) return <div>Loading...</div>;
    if (!productData) return <div>Product not found.</div>;

    console.log("Product:::", productData)

    return (
        <div className="section-spacing">
            <Breadcrumb />

            <div className="flex gap-8">
                <div className="w-[76%]">
                    <GeneralForm data={productData} setData={setProductData} />
                    <MediaForm data={productData} setData={setProductData} />
                    <PricingForm data={productData} setData={setProductData} />
                </div>

                <div className="w-[24%]">
                    <ThumbnailUploader data={productData} setData={setProductData} />
                    <ProductStatus data={productData} setData={setProductData} />
                    <ProductDetails data={productData} setData={setProductData} />
                </div>
            </div>

            <div className="flex gap-4 mt-4">
                <Button
                    onClick={() => handleSave()}
                    text="Save Changes"
                    theme="purple" />

                <Button
                    onClick={() => handleCancel()}
                    text="Cancel"
                    theme="red" />
            </div>

            {message && (
                <p className={`text-sm mt-2 ${message.includes('Failed') ? 'text-red-600' : 'text-green-600'}`}>
                    {message}
                </p>
            )}
        </div>
    );
};

export default ProductEditor;
