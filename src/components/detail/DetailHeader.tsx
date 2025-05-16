import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Rating from "../app/Rating";
import Button from "../app/Button";

type DetailHeaderProps = {
    id: number;
    title: string;
    price: number;
    discountPercentage: number;
    rating: number;
    reviews: object[],
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
};

const DetailHeader = ({
    id,
    title,
    price,
    discountPercentage,
    rating,
    reviews,
    stock,
    brand,
    category,
    thumbnail,
    images,
}: DetailHeaderProps) => {
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState<string | undefined>(thumbnail);

    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    return (
        <div className="bg-white section-spacing">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Left Column - Image Gallery */}
                <div className="w-full md:w-1/2 mb-18">
                    <div className="mb-4 aspect-[540/460]">
                        <img
                            src={selectedImage}
                            alt={title}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>

                    <div className="grid grid-cols-6 gap-2">
                        {images.map((thumb, index) => (
                            <div
                                key={index}
                                className={`cursor-pointer aspect-square rounded-lg border-blue ${selectedImage === thumb ? 'border-blue-500' : 'border-gray-200'}`}
                                onClick={() => setSelectedImage(thumb)}
                            >
                                <img
                                    src={thumb}
                                    alt={`Thumbnail ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column - Product Details */}
                <div className="w-full md:w-1/2 pt-7 font-manrope">
                    <div className="flex items-center gap-2 mb-3">
                        {stock > 0 ? (
                            <span className="bg-green text-white px-3 py-2 text-14 rounded-md">
                                In Stock
                            </span>
                        ) : (
                            <span className="bg-red text-white px-3 py-2 text-14 rounded-md">
                                Out of Stock
                            </span>
                        )}
                        <span className="text-gray text-14">
                            {category}
                        </span>
                    </div>

                    <h1 className="text-22 font-manropeBold text-black mb-3">{title}</h1>

                    <div className="flex items-center gap-4 mb-3">
                        <div className="flex items-center">
                            <span className="text-gray font-manropeBold line-through text-18">${(price + (price * discountPercentage) / 100).toFixed(2)}</span>
                            <span className="ml-2 text-black text-22 font-manropeBold">${price.toFixed(2)}</span>
                        </div>
                    </div>

                    <div className="flex items-center mb-6 text-14">
                        <div className="flex mr-2">
                            <Rating
                                rating={rating} />
                        </div>
                        <span className="text-black">({rating} with {reviews.length} reviews)</span>
                    </div>

                    <div className="border-t border-b border-gray/20 mb-6">
                        <div className="flex justify-between my-6">
                            <span className="text-black">Brand</span>
                            <span className="text-black font-manropeBold">{brand}</span>
                        </div>
                        <div className="flex justify-between my-6">
                            <span className="text-black">SKU</span>
                            <span className="text-black font-manropeBold">{id}</span>
                        </div>
                        <div className="flex justify-between my-6">
                            <span className="text-black">Stock</span>
                            <span className="text-black font-manropeBold">{stock}</span>
                        </div>

                        <div className="mb-6 flex items-center">
                            <label className="block text-black font-manropeBold mr-7">QTY:</label>

                            <div className="flex items-center">
                                <button
                                    onClick={decreaseQuantity}
                                    className="border border-gray/40 rounded-l-md px-4 py-1 text-black hover:bg-blue hover:text-white transition"
                                >
                                    -
                                </button>
                                <p className="bg-white border-t border-b border-gray/40 text-center !w-10 !px-2 !py-1">
                                    {quantity}</p>                                
                                    <button
                                        onClick={increaseQuantity}
                                        className="border border-gray/40 rounded-r-md px-4 py-1 text-black hover:bg-blue hover:text-white transition">
                                    +
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mb-6 flex">
                        <Button
                            onClick={() => navigate(`/edit?id=${id}`)}
                            text="Edit"
                            theme="blue" />
                    </div>

                    <div className="text-14">
                        <p className="text-gray">Dispatched in 2-3 weeks</p>
                        <p className="text-black">Why the longer time for delivery?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailHeader;