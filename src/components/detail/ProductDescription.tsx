import React from 'react';

// Using only the properties we need from the Product interface
interface ProductDescriptionProps {
  description: string;
  category?: string;
  brand?: string;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({ 
  description, 
  category = "",
  brand = ""
}) => {
  // Mock dimensions data - in a real app, you might get this from your product data
  const dimensions = {
    width: 23.17,
    height: 14.63
  };

  // Mock warranty data - in a real app, you might get this from your product data
  const warranty = {
    period: "1 month warranty",
    shipping: "Ships in 1 month"
  };

  // Create tags from category and brand
  const tags = [
    ...(category ? [category] : []),
    ...(brand ? [brand] : []),
  ].filter(tag => tag.toLowerCase() !== "unknown" && tag !== "");

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
      <h2 className="text-xl font-medium text-gray-800 mb-4">Description</h2>
      
      {/* Product Description */}
      <div className="text-gray-600 mb-6">
        <p className="mb-4">{description}</p>
        
        {/* Additional Description - Using lorem ipsum as in the example */}
        <p className="mb-4">
          Vivamus quis metus in nunc semper efficitur eget vitae diam. Proin justo diam, venenatis sit amet eros in, iaculis auctor magna. 
          Pellentesque sit amet accumsan urna, sit amet pretium ipsum. Fusce condimentum venenatis mauris et luctus. 
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Dimensions */}
        <div>
          <h3 className="text-lg font-medium text-gray-700 mb-3">Dimensions</h3>
          <div className="grid grid-cols-2 gap-2">
            <div className="text-gray-600">Width</div>
            <div className="text-right text-gray-800">{dimensions.width}</div>
            
            <div className="text-gray-600">Height</div>
            <div className="text-right text-gray-800">{dimensions.height}</div>
          </div>
        </div>
        
        {/* Warranty and Shipping */}
        <div>
          <h3 className="text-lg font-medium text-gray-700 mb-3">Warranty and shipping</h3>
          <div className="grid grid-cols-2 gap-2">
            <div className="text-gray-600">Warranty</div>
            <div className="text-right text-gray-800">{warranty.period}</div>
            
            <div className="text-gray-600">Shipping</div>
            <div className="text-right text-gray-800">{warranty.shipping}</div>
          </div>
        </div>
      </div>
      
      {/* Tags */}
      {tags.length > 0 && (
        <div className="mt-6">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Tags:</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
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