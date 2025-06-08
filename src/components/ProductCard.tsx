
import { useState, useRef, MouseEvent } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  type: string;
  isNew?: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
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

  return (
    <div 
      ref={cardRef}
      className="group relative rounded-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden"
      style={{
        width: '260px',
        height: '360px',
        backgroundColor: 'rgba(16, 20, 24, 0.8)',
        border: '1px solid rgba(255,255,255,0.1)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* NEW Badge */}
      {product.isNew && (
        <div className="absolute top-4 left-4 z-20">
          <div 
            className="bg-white text-black px-3 py-1 text-xs font-bold tracking-wider rounded-full"
            style={{
              boxShadow: '0 0 15px rgba(255,255,255,0.5)'
            }}
          >
            NEW
          </div>
        </div>
      )}

      {/* Product Image */}
      <div className="w-full h-56 overflow-hidden flex items-center justify-center bg-gradient-to-b from-transparent to-black/20">
        <img 
          src="/lovable-uploads/9bb25294-fbfd-4b7e-81d4-06bb5b98295f.png" 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Product Info */}
      <div className="p-6 text-center">
        <h3 className="font-inter font-semibold text-white text-base mb-2 tracking-wide">
          {product.name}
        </h3>
        <p className="text-gray-400 text-sm mb-4 font-light">
          {product.type}
        </p>
        <p className="text-white font-bold text-lg tracking-wider">
          ${product.price}
        </p>
      </div>

      {/* Moving Glow Effect that follows mouse */}
      {isHovered && (
        <div 
          className="absolute pointer-events-none transition-all duration-200 ease-out"
          style={{
            width: '140px',
            height: '140px',
            left: `${mousePosition.x - 70}px`,
            top: `${mousePosition.y - 70}px`,
            background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.08) 40%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(10px)',
            zIndex: 10
          }}
        />
      )}

      {/* Hover Border Glow Effect */}
      <div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          border: '2px solid rgba(255,255,255,0.8)',
          boxShadow: '0 0 30px rgba(255,255,255,0.4), inset 0 0 30px rgba(255,255,255,0.1)'
        }}
      />

      {/* Lift Effect Shadow */}
      <div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10"
        style={{
          boxShadow: '0 25px 50px rgba(0,0,0,0.6)',
          transform: 'translateY(15px)'
        }}
      />
    </div>
  );
};

export default ProductCard;
