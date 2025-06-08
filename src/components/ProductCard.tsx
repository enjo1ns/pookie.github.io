
import { useState, useRef, MouseEvent } from 'react';
import { Button } from '@/components/ui/button';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  type: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Omit<Product, 'quantity'>) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  return (
    <div 
      ref={cardRef}
      className="group relative rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden"
      style={{
        width: '230px',
        height: '380px',
        backgroundColor: 'rgba(16, 20, 24, 0.7)',
        border: '1px solid #2A2F33',
        boxShadow: '0 4px 20px rgba(255,255,255,0.1)'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Product Image */}
      <div className="w-full h-48 overflow-hidden flex items-center justify-center">
        <img 
          src="/lovable-uploads/9bb25294-fbfd-4b7e-81d4-06bb5b98295f.png" 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Product Info */}
      <div className="p-4 text-center flex flex-col justify-between h-32">
        <div>
          <h3 className="font-inter font-medium text-white text-sm mb-2">
            {product.name}
          </h3>
          <p className="text-gray-400 text-xs mb-3">
            {product.type}
          </p>
          <p className="text-white font-semibold text-base mb-3">
            ${product.price}
          </p>
        </div>
        
        {onAddToCart && (
          <Button 
            onClick={handleAddToCart}
            className="bg-white bg-opacity-10 border border-white border-opacity-30 text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm text-xs py-1"
            style={{
              boxShadow: '0 2px 10px rgba(255, 255, 255, 0.1)'
            }}
          >
            Add to Cart
          </Button>
        )}
      </div>

      {/* Moving Glow Effect that follows mouse */}
      {isHovered && (
        <div 
          className="absolute pointer-events-none transition-all duration-200 ease-out"
          style={{
            width: '120px',
            height: '120px',
            left: `${mousePosition.x - 60}px`,
            top: `${mousePosition.y - 60}px`,
            background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 40%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(8px)',
            zIndex: 10
          }}
        />
      )}

      {/* Hover Border Glow Effect */}
      <div 
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          border: '2px solid rgba(255,255,255,0.6)',
          boxShadow: '0 0 25px rgba(255,255,255,0.3), inset 0 0 25px rgba(255,255,255,0.1)'
        }}
      />

      {/* Lift Effect Shadow */}
      <div 
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10"
        style={{
          boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
          transform: 'translateY(10px)'
        }}
      />
    </div>
  );
};

export default ProductCard;
