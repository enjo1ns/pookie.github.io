
import { ShoppingBag } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  type: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div 
      className="group relative bg-white bg-opacity-5 backdrop-blur-md rounded-xl p-4 border border-white border-opacity-10 hover:border-opacity-30 transition-all duration-300 hover:scale-105"
      style={{
        boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
      }}
    >
      {/* Product Image Placeholder */}
      <div className="aspect-square bg-black bg-opacity-30 rounded-lg mb-3 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
        {product.image}
      </div>

      {/* Product Info */}
      <div className="text-center">
        <h3 className="font-inter font-medium text-white text-sm mb-1">
          {product.name}
        </h3>
        <p className="text-gray-400 text-xs mb-2">
          {product.type}
        </p>
        <p className="text-white font-semibold text-base">
          ${product.price}
        </p>
      </div>

      {/* Hover Add to Cart */}
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-1.5 hover:bg-opacity-30 cursor-pointer">
          <ShoppingBag size={16} className="text-white" />
        </div>
      </div>

      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: '0 0 30px rgba(255,255,255,0.1)'
        }}
      />
    </div>
  );
};

export default ProductCard;
