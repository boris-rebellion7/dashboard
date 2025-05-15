import React, { JSX, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

type DetailHeaderProps = {
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
};

const DetailHeader = ({
    id,
    title,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    description,
    thumbnail,
    images,
}: DetailHeaderProps) => {
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState<string | undefined>(thumbnail);

    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const renderStars = (rating: number) => {
        const stars: JSX.Element[] = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                stars.push(<span key={i} className="text-yellow-400">★</span>);
            } else if (i === fullStars && hasHalfStar) {
                stars.push(<span key={i} className="text-yellow-400">★</span>);
            } else {
                stars.push(<span key={i} className="text-gray-300">★</span>);
            }
        }
        return stars;
    };

    return (
        <div className="bg-white rounded-lg shadow-sm p-8 max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Left Column - Image Gallery */}
                <div className="w-full md:w-1/2">
                    <div className="mb-4">
                        <img
                            src={selectedImage}
                            alt={title}
                            className="w-full h-96 object-cover rounded-lg"
                        />
                    </div>
                    <div className="grid grid-cols-6 gap-2">
                        {images.map((thumb, index) => (
                            <div
                                key={index}
                                className={`cursor-pointer border-2 rounded-lg overflow-hidden ${selectedImage === thumb ? 'border-blue-500' : 'border-gray-200'}`}
                                onClick={() => setSelectedImage(thumb)}
                            >
                                <img
                                    src={thumb}
                                    alt={`Thumbnail ${index + 1}`}
                                    className="w-full h-16 object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column - Product Details */}
                <div className="w-full md:w-1/2">
                    <div className="flex flex-wrap gap-2 mb-4">
                        {stock > 0 && (
                            <span className="bg-green-500 text-white px-3 py-1 text-sm rounded-md">
                                In Stock
                            </span>
                        )}
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 text-sm rounded-md">
                            {category}
                        </span>
                    </div>

                    <h1 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h1>

                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex items-center">
                            <span className="text-gray-400 line-through text-lg">${(price + (price * discountPercentage) / 100).toFixed(2)}</span>
                            <span className="ml-2 text-gray-800 text-2xl font-semibold">${price.toFixed(2)}</span>
                        </div>
                    </div>

                    <div className="flex items-center mb-6">
                        <div className="flex mr-2">
                            {renderStars(rating)}
                        </div>
                        <span className="text-gray-600">({rating} rating)</span>
                    </div>

                    <div className="border-t border-b border-gray-200 py-4 mb-6">
                        <div className="flex justify-between py-2">
                            <span className="text-gray-600">Brand</span>
                            <span className="text-gray-800 font-medium">{brand}</span>
                        </div>
                        <div className="flex justify-between py-2">
                            <span className="text-gray-600">SKU</span>
                            <span className="text-gray-800 font-medium">{id}</span>
                        </div>
                        <div className="flex justify-between py-2">
                            <span className="text-gray-600">Stock</span>
                            <span className="text-gray-800 font-medium">{stock}</span>
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-600 mb-2">QTY:</label>
                        <div className="flex items-center">
                            <button
                                onClick={decreaseQuantity}
                                className="border border-gray-300 rounded-l-md px-3 py-2 text-gray-600 hover:bg-gray-100"
                            >
                                -
                            </button>
                            <input
                                type="text"
                                className="border-t border-b border-gray-300 w-16 text-center py-2"
                                value={quantity}
                                readOnly
                            />
                            <button
                                onClick={increaseQuantity}
                                className="border border-gray-300 rounded-r-md px-3 py-2 text-gray-600 hover:bg-gray-100"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    <div className="mb-6">
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700">
                            Edit
                        </button>
                    </div>

                    <div className="text-gray-600">
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailHeader;