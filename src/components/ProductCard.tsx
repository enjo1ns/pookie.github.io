
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
      className="group relative rounded-2xl transition-all duration-500 hover:scale-[1.02] cursor-pointer overflow-hidden"
      style={{
        width: '280px',
        height: '420px',
        background: 'linear-gradient(145deg, rgba(20, 25, 30, 0.95), rgba(10, 15, 20, 0.85))',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 4px 16px rgba(255, 255, 255, 0.02)'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Premium Border Glow */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
        style={{
          background: 'linear-gradient(45deg, rgba(255,255,255,0.1), transparent, rgba(255,255,255,0.1))',
          padding: '1px'
        }}
      />

      {/* Product Image Container */}
      <div className="relative w-full h-56 overflow-hidden rounded-t-2xl">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-gray-800/30 to-gray-900/50 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-contain transition-all duration-700 group-hover:scale-110 group-hover:rotate-1 p-4"
        />
        
        {/* Floating Price Tag */}
        <div 
          className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-sm font-semibold text-white z-20 transform transition-all duration-300 group-hover:scale-110"
          style={{
            background: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
        >
          ${product.price}
        </div>
      </div>

      {/* Product Info Section */}
      <div className="p-6 flex flex-col justify-between h-40">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span 
              className="text-xs font-medium tracking-widest uppercase opacity-70 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                color: 'rgba(255, 255, 255, 0.6)',
                fontFamily: 'Inter, sans-serif',
                letterSpacing: '2px'
              }}
            >
              {product.type}
            </span>
          </div>
          
          <h3 
            className="font-bold text-white text-lg leading-tight transition-all duration-300 group-hover:text-gray-100"
            style={{
              fontFamily: 'Cinzel, serif',
              letterSpacing: '0.5px'
            }}
          >
            {product.name}
          </h3>
        </div>
        
        {onAddToCart && (
          <Button 
            onClick={handleAddToCart}
            className="w-full mt-4 py-2.5 text-sm font-medium transition-all duration-300 group-hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '12px',
              color: 'white',
              boxShadow: '0 4px 15px rgba(255, 255, 255, 0.1)'
            }}
          >
            Add to Collection
          </Button>
        )}
      </div>

      {/* Dynamic Mouse Glow Effect */}
      {isHovered && (
        <div 
          className="absolute pointer-events-none transition-all duration-200 ease-out"
          style={{
            width: '150px',
            height: '150px',
            left: `${mousePosition.x - 75}px`,
            top: `${mousePosition.y - 75}px`,
            background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 40%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(10px)',
            zIndex: 15
          }}
        />
      )}

      {/* Premium Shadow on Hover */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"
        style={{
          boxShadow: '0 25px 50px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.05)',
          transform: 'translateY(10px)'
        }}
      />

      {/* Subtle Inner Glow */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1), inset 0 0 20px rgba(255,255,255,0.02)'
        }}
      />
    </div>
  );
};

export default ProductCard;
