
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
    <section className="py-12 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 
          className="font-cinzel text-2xl md:text-3xl text-white text-center mb-12 font-bold tracking-wider"
          style={{
            textShadow: '0 0 15px rgba(255,255,255,0.3)'
          }}
        >
          {title}
        </h2>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Arrows */}
          {canGoPrev && (
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-30 rounded-full p-3 text-white hover:bg-opacity-20 transition-all duration-300 hover:scale-110"
              style={{
                boxShadow: '0 4px 15px rgba(255,255,255,0.1)'
              }}
            >
              <ChevronLeft size={20} />
            </button>
          )}
          
          {canGoNext && (
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-30 rounded-full p-3 text-white hover:bg-opacity-20 transition-all duration-300 hover:scale-110"
              style={{
                boxShadow: '0 4px 15px rgba(255,255,255,0.1)'
              }}
            >
              <ChevronRight size={20} />
            </button>
          )}

          {/* Products Display */}
          <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
            {products.map((product, index) => {
              const distance = Math.abs(index - currentIndex);
              const isActive = index === currentIndex;
              const isVisible = distance <= 2;
              
              if (!isVisible) return null;
              
              let translateX = (index - currentIndex) * 280;
              let scale = isActive ? 1 : 0.85 - (distance * 0.1);
              let zIndex = isActive ? 10 : 10 - distance;
              let blur = isActive ? 0 : distance * 1.5;
              let opacity = isActive ? 1 : 0.6 - (distance * 0.2);

              return (
                <div
                  key={product.id}
                  className="absolute transition-all duration-700 ease-out"
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

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-white shadow-lg' 
                    : 'bg-white bg-opacity-30 hover:bg-opacity-50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
