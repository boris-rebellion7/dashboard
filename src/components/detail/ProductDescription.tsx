import React from 'react';

interface ProductDescriptionProps {
    description: string;
    category?: string;
    brand?: string;
    dimensions?: {
        width: string;
        height: string;
    };
    shippingInformation?: string;
    tags: [],
    warrantyInformation?: string;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({
    description,
    dimensions,
    shippingInformation = "Ships in 1 month",
    tags,
    warrantyInformation = "1 month warranty"
}) => {

    return (
        <div className="bg-white text-black font-manrope section-spacing">
            <h2 className="text-24 font-manropeBold mb-7">Description</h2>

            {/* Product Description */}
            <div className="mb-7">
                <p className="text-14">{description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Product Dimensions */}
                {dimensions && (
                    <div className='bg-lightGray p-3 rounded-2xl'>
                        <h3 className="text-16 font-manropeBold mb-4">Dimensions</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="">Width</div>
                            <div className="text-right font-manropeBold">{dimensions.width}</div>

                            <div className="">Height</div>
                            <div className="text-right font-manropeBold">{dimensions.height}</div>
                        </div>
                    </div>
                )}

                {/* Warranty and Shipping */}
                <div className='bg-lightGray p-3 rounded-2xl'>
                    <h3 className="text-16 font-manropeBold mb-4">Warranty and shipping</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="">Warranty</div>
                        <div className="text-right font-manropeBold">{warrantyInformation}</div>

                        <div className="">Shipping</div>
                        <div className="text-right font-manropeBold">{shippingInformation}</div>
                    </div>
                </div>
            </div>

            {/* Tags */}
            {tags.length > 0 && (
                <div className="mt-6">
                    <h3 className="font-manropeBold mb-2">Tags:</h3>
                    
                    <div className="flex flex-wrap gap-4">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="bg-lightGray px-3 py-1 rounded-md text-14"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDescription;