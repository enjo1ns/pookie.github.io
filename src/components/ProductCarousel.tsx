
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  type: string;
}

interface ProductCarouselProps {
  products: Product[];
  title: string;
  onAddToCart: (product: Product) => void;
  onProductClick: (productId: number) => void;
}

const ProductCarousel = ({ products, title, onAddToCart, onProductClick }: ProductCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const canGoPrev = products.length > 1;
  const canGoNext = products.length > 1;

  return (
    <section className="py-16 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Section Title */}
        <div className="text-center mb-16">
          <h2 
            className="font-cinzel text-3xl md:text-4xl text-white font-bold tracking-wider relative inline-block"
            style={{
              textShadow: '0 0 20px rgba(255,255,255,0.3)'
            }}
          >
            {title}
            <div 
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-white/60 to-transparent"
            />
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Enhanced Navigation Arrows */}
          {canGoPrev && (
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-30 group transition-all duration-300 hover:scale-110 active:scale-95"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02))',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '16px',
                padding: '14px',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)'
              }}
            >
              <ChevronLeft size={22} className="text-white/80 group-hover:text-white transition-colors duration-300" />
            </button>
          )}
          
          {canGoNext && (
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-30 group transition-all duration-300 hover:scale-110 active:scale-95"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02))',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '16px',
                padding: '14px',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)'
              }}
            >
              <ChevronRight size={22} className="text-white/80 group-hover:text-white transition-colors duration-300" />
            </button>
          )}

          {/* Products Display with Enhanced Depth */}
          <div className="relative h-[480px] flex items-center justify-center overflow-hidden">
            {products.map((product, index) => {
              const distance = Math.abs(index - currentIndex);
              const isActive = index === currentIndex;
              const isVisible = distance <= 2;
              
              if (!isVisible) return null;
              
              let translateX = (index - currentIndex) * 320;
              let scale = isActive ? 1 : 0.8 - (distance * 0.08);
              let zIndex = isActive ? 20 : 20 - distance;
              let blur = isActive ? 0 : distance * 2;
              let opacity = isActive ? 1 : 0.4 - (distance * 0.15);

              return (
                <div
                  key={product.id}
                  className="absolute transition-all duration-700 ease-out cursor-pointer"
                  style={{
                    transform: `translateX(${translateX}px) scale(${scale})`,
                    zIndex,
                    filter: `blur(${blur}px)`,
                    opacity
                  }}
                  onClick={() => onProductClick(product.id)}
                >
                  <ProductCard 
                    product={product}
                    onAddToCart={onAddToCart}
                  />
                </div>
              );
            })}
          </div>

          {/* Enhanced Dots Indicator */}
          <div className="flex justify-center mt-12 space-x-3">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex 
                    ? 'w-8 h-2 bg-white/80 shadow-lg' 
                    : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                }`}
                style={{
                  boxShadow: index === currentIndex ? '0 0 15px rgba(255,255,255,0.3)' : 'none'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
