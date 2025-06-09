
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";

const FeaturedClothing = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: 1,
      name: "Gothic T-Shirt",
      price: 30,
      image: "/lovable-uploads/9bb25294-fbfd-4b7e-81d4-06bb5b98295f.png",
      type: "T-Shirt",
      colorTheme: "purple"
    },
    {
      id: 2,
      name: "Dark Sweatshirt",
      price: 45,
      image: "/lovable-uploads/9bb25294-fbfd-4b7e-81d4-06bb5b98295f.png",
      type: "Sweatshirt",
      colorTheme: "blue"
    },
    {
      id: 3,
      name: "Shadow Hoodie",
      price: 60,
      image: "/lovable-uploads/9bb25294-fbfd-4b7e-81d4-06bb5b98295f.png",
      type: "Hoodie",
      colorTheme: "red"
    },
    {
      id: 4,
      name: "White Gothic T-Shirt",
      price: 30,
      image: "/lovable-uploads/9bb25294-fbfd-4b7e-81d4-06bb5b98295f.png",
      type: "T-Shirt",
      colorTheme: "green"
    }
  ];

  const getColorShades = (theme: string) => {
    switch (theme) {
      case "purple":
        return {
          primary: "rgba(147, 51, 234, 0.15)",
          secondary: "rgba(147, 51, 234, 0.05)",
          glow: "rgba(147, 51, 234, 0.2)"
        };
      case "blue":
        return {
          primary: "rgba(59, 130, 246, 0.15)",
          secondary: "rgba(59, 130, 246, 0.05)",
          glow: "rgba(59, 130, 246, 0.2)"
        };
      case "red":
        return {
          primary: "rgba(239, 68, 68, 0.15)",
          secondary: "rgba(239, 68, 68, 0.05)",
          glow: "rgba(239, 68, 68, 0.2)"
        };
      case "green":
        return {
          primary: "rgba(34, 197, 94, 0.15)",
          secondary: "rgba(34, 197, 94, 0.05)",
          glow: "rgba(34, 197, 94, 0.2)"
        };
      default:
        return {
          primary: "rgba(255, 255, 255, 0.15)",
          secondary: "rgba(255, 255, 255, 0.05)",
          glow: "rgba(255, 255, 255, 0.2)"
        };
    }
  };

  const currentColors = getColorShades(products[currentIndex].colorTheme);

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

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < products.length - 1;

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart(product);
  };

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  return (
    <section className="py-20 px-6 relative">
      {/* Enhanced magical particles background with dynamic colors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full animate-ping opacity-20"
          style={{ backgroundColor: currentColors.primary }}
        ></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse opacity-25"></div>
        <div 
          className="absolute top-1/2 left-1/3 w-1.5 h-1.5 rounded-full animate-bounce opacity-15"
          style={{ backgroundColor: currentColors.primary }}
        ></div>
        <div className="absolute top-1/6 right-1/3 w-1 h-1 bg-white rounded-full animate-ping opacity-20"></div>
        <div 
          className="absolute bottom-1/4 left-1/5 w-2 h-2 rounded-full animate-pulse opacity-20"
          style={{ backgroundColor: currentColors.primary }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Title with improved font and styling */}
        <h2 
          className="font-cinzel text-3xl md:text-4xl lg:text-5xl text-white text-center mb-16 font-bold tracking-wider transition-all duration-700"
          style={{
            textShadow: `0 0 15px ${currentColors.glow}, 0 0 30px ${currentColors.secondary}, 0 0 45px rgba(255,255,255,0.1)`,
            letterSpacing: '0.1em'
          }}
        >
          FEATURED CLOTHING
        </h2>

        {/* Enhanced Carousel Container with 3D Depth */}
        <div className="relative max-w-6xl mx-auto perspective-1000">
          {/* Navigation Arrows - Conditional Rendering */}
          {canGoPrev && (
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-30 rounded-full p-3 text-white hover:bg-opacity-20 transition-all duration-300 hover:scale-110 group"
              style={{
                boxShadow: `0 4px 15px ${currentColors.secondary}, 0 0 15px ${currentColors.secondary}`,
                borderColor: currentColors.primary
              }}
            >
              <ChevronLeft size={24} className="group-hover:animate-pulse" />
            </button>
          )}
          
          {canGoNext && (
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-30 rounded-full p-3 text-white hover:bg-opacity-20 transition-all duration-300 hover:scale-110 group"
              style={{
                boxShadow: `0 4px 15px ${currentColors.secondary}, 0 0 15px ${currentColors.secondary}`,
                borderColor: currentColors.primary
              }}
            >
              <ChevronRight size={24} className="group-hover:animate-pulse" />
            </button>
          )}

          {/* 3D Products Display - Compact height with proper spacing */}
          <div className="relative h-[380px] flex items-center justify-center">
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
                  className="absolute transition-all duration-700 ease-out cursor-pointer"
                  style={{
                    transform: `translateX(${translateX}px) scale(${scale})`,
                    zIndex,
                    filter: `blur(${blur}px)`,
                    opacity
                  }}
                  onClick={() => handleProductClick(product.id)}
                >
                  {/* Enhanced Product Card with compact design */}
                  <div 
                    className="group relative rounded-lg transition-all duration-500 transform-gpu overflow-hidden"
                    style={{
                      width: '280px',
                      height: '360px',
                      backgroundColor: 'rgba(16, 20, 24, 0.8)',
                      border: isActive ? `2px solid ${currentColors.primary}` : '1px solid #2A2F33',
                      boxShadow: isActive 
                        ? `0 10px 30px ${currentColors.secondary}, 0 0 20px ${currentColors.glow}` 
                        : '0 4px 20px rgba(255,255,255,0.05)'
                    }}
                  >
                    {/* Product Image */}
                    <div className="w-full h-48 overflow-hidden flex items-center justify-center p-4 relative">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                        style={{
                          filter: `drop-shadow(0 0 8px ${isActive ? currentColors.glow : 'rgba(255,255,255,0.1)'})`
                        }}
                      />
                      {/* Enhanced magical shimmer effect with dynamic colors */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-15 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-1000"
                        style={{
                          background: `linear-gradient(to right, transparent, ${currentColors.primary}, transparent)`
                        }}
                      ></div>
                    </div>

                    {/* Product Info - Compact layout with proper spacing */}
                    <div className="px-6 py-4 h-28 flex flex-col justify-between">
                      <div className="text-center">
                        <h3 
                          className="font-cinzel font-medium text-white text-lg mb-1"
                          style={{
                            textShadow: `0 0 3px ${isActive ? currentColors.glow : 'rgba(255,255,255,0.1)'}`
                          }}
                        >
                          {product.name}
                        </h3>
                        <p className="text-gray-400 font-inter text-sm mb-2">
                          {product.type}
                        </p>
                        <p 
                          className="text-white font-cinzel font-semibold text-xl"
                          style={{
                            textShadow: `0 0 4px ${isActive ? currentColors.glow : 'rgba(255,255,255,0.15)'}`
                          }}
                        >
                          ${product.price}
                        </p>
                      </div>
                    </div>
                    
                    {/* Hover expansion area for Add to Cart Button */}
                    <div className="absolute bottom-0 left-0 right-0 h-0 group-hover:h-16 transition-all duration-500 ease-out overflow-hidden bg-gradient-to-t from-black/80 to-transparent">
                      <div className="p-4 pt-2">
                        <Button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleAddToCart(product);
                          }}
                          className="w-full transition-all duration-500 bg-white bg-opacity-10 border border-white border-opacity-30 text-white hover:bg-white hover:text-black backdrop-blur-sm text-sm py-2 hover:scale-105 font-inter opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0"
                          style={{
                            boxShadow: `0 2px 8px ${currentColors.secondary}, 0 0 12px ${currentColors.secondary}`,
                            borderColor: isActive ? currentColors.primary : 'rgba(255, 255, 255, 0.3)'
                          }}
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </div>

                    {/* Enhanced Hover Border Glow Effect with Dynamic Colors */}
                    <div 
                      className={`absolute inset-0 rounded-lg transition-opacity duration-500 pointer-events-none ${
                        isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                      }`}
                      style={{
                        border: `2px solid ${currentColors.primary}`,
                        boxShadow: `0 0 15px ${currentColors.glow}, inset 0 0 15px ${currentColors.secondary}`
                      }}
                    />

                    {/* Enhanced floating sparkles with dynamic colors */}
                    <div 
                      className="absolute top-2 right-2 w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500"
                      style={{ backgroundColor: currentColors.primary }}
                    ></div>
                    <div className="absolute bottom-4 left-4 w-0.5 h-0.5 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-700"></div>
                    <div 
                      className="absolute top-1/3 right-1/4 w-0.5 h-0.5 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-600"
                      style={{ backgroundColor: currentColors.primary }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Enhanced Dots Indicator with Dynamic Colors */}
          <div className="flex justify-center mt-8 space-x-3">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-500 hover:scale-125 ${
                  index === currentIndex 
                    ? 'shadow-lg animate-pulse' 
                    : 'bg-white bg-opacity-30 hover:bg-opacity-50'
                }`}
                style={{
                  backgroundColor: index === currentIndex ? currentColors.primary : undefined,
                  boxShadow: index === currentIndex ? `0 0 10px ${currentColors.glow}` : 'none'
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
