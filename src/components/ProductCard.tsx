
import { useState, useRef, MouseEvent } from 'react';
import { Star } from 'lucide-react';

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
      className="group relative rounded-xl transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden"
      style={{
        width: '280px',
        height: '380px',
        backgroundColor: 'rgba(16, 20, 24, 0.8)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255,255,255,0.05)'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* NEW Badge */}
      {product.isNew && (
        <div className="absolute top-4 right-4 z-30">
          <div 
            className="px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider flex items-center space-x-1"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))',
              color: '#000',
              boxShadow: '0 4px 15px rgba(255,255,255,0.3), 0 0 20px rgba(255,255,255,0.2)',
              border: '1px solid rgba(255,255,255,0.3)'
            }}
          >
            <Star className="w-3 h-3" fill="currentColor" />
            <span>NEW</span>
          </div>
        </div>
      )}

      {/* Product Image */}
      <div className="w-full h-56 overflow-hidden flex items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900">
        <img 
          src="/lovable-uploads/9bb25294-fbfd-4b7e-81d4-06bb5b98295f.png" 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Product Info */}
      <div className="p-6 text-center space-y-3">
        <h3 
          className="font-cinzel font-semibold text-white text-lg tracking-wide"
          style={{
            textShadow: '0 0 10px rgba(255,255,255,0.2)',
            letterSpacing: '0.05em'
          }}
        >
          {product.name}
        </h3>
        <p className="text-gray-300 text-sm font-inter tracking-wider opacity-80">
          {product.type}
        </p>
        <div className="flex items-center justify-center space-x-2">
          <span className="text-white font-bold text-xl font-inter tracking-wide">
            ${product.price}
          </span>
          <Star className="w-4 h-4 text-white opacity-60" />
        </div>
      </div>

      {/* Moving Glow Effect that follows mouse */}
      {isHovered && (
        <div 
          className="absolute pointer-events-none transition-all duration-300 ease-out"
          style={{
            width: '150px',
            height: '150px',
            left: `${mousePosition.x - 75}px`,
            top: `${mousePosition.y - 75}px`,
            background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 40%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(15px)',
            zIndex: 10
          }}
        />
      )}

      {/* Hover Border Glow Effect */}
      <div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          border: '2px solid rgba(255,255,255,0.3)',
          boxShadow: '0 0 30px rgba(255,255,255,0.3), inset 0 0 30px rgba(255,255,255,0.05)'
        }}
      />

      {/* Lift Effect Shadow */}
      <div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"
        style={{
          boxShadow: '0 25px 50px rgba(0,0,0,0.6)',
          transform: 'translateY(15px)'
        }}
      />
    </div>
  );
};

export default ProductCard;
