
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "../contexts/CartContext";

const FeaturedClothing = () => {
  const { addToCart } = useCart();
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: 1,
      name: "Gothic T-Shirt",
      price: 30,
      image: "/lovable-uploads/9bb25294-fbfd-4b7e-81d4-06bb5b98295f.png",
      type: "T-Shirt"
    },
    {
      id: 2,
      name: "Dark Sweatshirt",
      price: 45,
      image: "/lovable-uploads/9bb25294-fbfd-4b7e-81d4-06bb5b98295f.png",
      type: "Sweatshirt"
    },
    {
      id: 3,
      name: "Shadow Hoodie",
      price: 60,
      image: "/lovable-uploads/9bb25294-fbfd-4b7e-81d4-06bb5b98295f.png",
      type: "Hoodie"
    },
    {
      id: 4,
      name: "White Gothic T-Shirt",
      price: 30,
      image: "/lovable-uploads/9bb25294-fbfd-4b7e-81d4-06bb5b98295f.png",
      type: "T-Shirt"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart(product);
  };

  return (
    <section className="py-20 px-6 relative">
      {/* Enhanced magical particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping opacity-30"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse opacity-40"></div>
        <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-white rounded-full animate-bounce opacity-20"></div>
        <div className="absolute top-1/6 right-1/3 w-1 h-1 bg-white rounded-full animate-ping opacity-25"></div>
        <div className="absolute bottom-1/4 left-1/5 w-2 h-2 bg-white rounded-full animate-pulse opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Title */}
        <h2 
          className="font-avenir text-2xl md:text-3xl text-white text-center mb-16 animate-pulse"
          style={{
            textShadow: '0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(255,255,255,0.3)'
          }}
        >
          FEATURED CLOTHING
        </h2>

        {/* Enhanced Carousel Container with 3D Depth */}
        <div className="relative max-w-6xl mx-auto perspective-1000">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-30 rounded-full p-3 text-white hover:bg-opacity-20 transition-all duration-300 hover:scale-110 group"
            style={{
              boxShadow: '0 4px 20px rgba(255,255,255,0.1), 0 0 30px rgba(255,255,255,0.1)'
            }}
          >
            <ChevronLeft size={24} className="group-hover:animate-pulse" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-30 rounded-full p-3 text-white hover:bg-opacity-20 transition-all duration-300 hover:scale-110 group"
            style={{
              boxShadow: '0 4px 20px rgba(255,255,255,0.1), 0 0 30px rgba(255,255,255,0.1)'
            }}
          >
            <ChevronRight size={24} className="group-hover:animate-pulse" />
          </button>

          {/* 3D Products Display */}
          <div className="relative h-96 flex items-center justify-center">
            {products.map((product, index) => {
              const isActive = index === currentIndex;
              const distance = Math.abs(index - currentIndex);
              const isVisible = distance <= 2;
              
              if (!isVisible) return null;
              
              let translateX = (index - currentIndex) * 300;
              let scale = isActive ? 1 : 0.8 - (distance * 0.1);
              let zIndex = isActive ? 10 : 10 - distance;
              let blur = isActive ? 0 : distance * 2;
              let opacity = isActive ? 1 : 0.7 - (distance * 0.2);

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
                >
                  {/* Enhanced Product Card with 3D Effects */}
                  <div 
                    className="group relative rounded-lg transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden transform-gpu"
                    style={{
                      width: '280px',
                      height: '380px',
                      backgroundColor: 'rgba(16, 20, 24, 0.8)',
                      border: isActive ? '2px solid rgba(255,255,255,0.3)' : '1px solid #2A2F33',
                      boxShadow: isActive 
                        ? '0 20px 60px rgba(255,255,255,0.2), 0 0 40px rgba(255,255,255,0.1)' 
                        : '0 4px 20px rgba(255,255,255,0.05)'
                    }}
                  >
                    {/* Product Image */}
                    <div className="w-full h-56 overflow-hidden flex items-center justify-center p-4 relative">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                        style={{
                          filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.2))'
                        }}
                      />
                      {/* Enhanced magical shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>
                    </div>

                    {/* Product Info */}
                    <div className="p-6 text-center flex flex-col justify-between h-32">
                      <div>
                        <h3 
                          className="font-avenir font-medium text-white text-base mb-2"
                          style={{
                            textShadow: '0 0 5px rgba(255,255,255,0.2)'
                          }}
                        >
                          {product.name}
                        </h3>
                        <p className="text-gray-400 font-sf text-sm mb-3">
                          {product.type}
                        </p>
                        <p 
                          className="text-white font-avenir font-semibold text-lg mb-4"
                          style={{
                            textShadow: '0 0 8px rgba(255,255,255,0.3)'
                          }}
                        >
                          ${product.price}
                        </p>
                      </div>
                      
                      {/* Add to Cart Button - Enhanced visibility */}
                      <Button 
                        onClick={() => handleAddToCart(product)}
                        className={`transition-all duration-500 bg-white bg-opacity-10 border border-white border-opacity-30 text-white hover:bg-white hover:text-black backdrop-blur-sm text-sm py-2 hover:scale-105 font-sf ${
                          isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                        }`}
                        style={{
                          boxShadow: '0 2px 10px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 255, 255, 0.1)'
                        }}
                      >
                        Add to Cart
                      </Button>
                    </div>

                    {/* Enhanced Hover Border Glow Effect */}
                    <div 
                      className={`absolute inset-0 rounded-lg transition-opacity duration-500 pointer-events-none ${
                        isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                      }`}
                      style={{
                        border: '2px solid rgba(255,255,255,0.6)',
                        boxShadow: '0 0 30px rgba(255,255,255,0.4), inset 0 0 30px rgba(255,255,255,0.1)'
                      }}
                    />

                    {/* Enhanced floating sparkles */}
                    <div className="absolute top-2 right-2 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500"></div>
                    <div className="absolute bottom-4 left-4 w-0.5 h-0.5 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-700"></div>
                    <div className="absolute top-1/3 right-1/4 w-0.5 h-0.5 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-600"></div>
                  </div>
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
                className={`w-3 h-3 rounded-full transition-all duration-500 hover:scale-125 ${
                  index === currentIndex 
                    ? 'bg-white shadow-lg animate-pulse' 
                    : 'bg-white bg-opacity-30 hover:bg-opacity-50'
                }`}
                style={{
                  boxShadow: index === currentIndex ? '0 0 20px rgba(255,255,255,0.6)' : 'none'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedClothing;
