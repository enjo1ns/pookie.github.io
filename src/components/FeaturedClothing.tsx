
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
      {/* Magical particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping opacity-30"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse opacity-40"></div>
        <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-white rounded-full animate-bounce opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Title */}
        <h2 
          className="font-cinzel text-2xl md:text-3xl text-white text-center mb-16 animate-pulse"
          style={{
            textShadow: '0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(255,255,255,0.3)'
          }}
        >
          FEATURED CLOTHING
        </h2>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-30 rounded-full p-3 text-white hover:bg-opacity-20 transition-all duration-300 hover:scale-110 group"
            style={{
              boxShadow: '0 4px 20px rgba(255,255,255,0.1), 0 0 30px rgba(255,255,255,0.1)'
            }}
          >
            <ChevronLeft size={24} className="group-hover:animate-pulse" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-30 rounded-full p-3 text-white hover:bg-opacity-20 transition-all duration-300 hover:scale-110 group"
            style={{
              boxShadow: '0 4px 20px rgba(255,255,255,0.1), 0 0 30px rgba(255,255,255,0.1)'
            }}
          >
            <ChevronRight size={24} className="group-hover:animate-pulse" />
          </button>

          {/* Products Carousel */}
          <div className="overflow-hidden rounded-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {products.map((product) => (
                <div key={product.id} className="w-full flex-shrink-0 px-8 py-8">
                  <div className="flex justify-center">
                    {/* Product Card */}
                    <div 
                      className="group relative rounded-lg transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden"
                      style={{
                        width: '280px',
                        height: '420px',
                        backgroundColor: 'rgba(16, 20, 24, 0.7)',
                        border: '1px solid #2A2F33',
                        boxShadow: '0 4px 20px rgba(255,255,255,0.1), 0 8px 40px rgba(255,255,255,0.05)'
                      }}
                    >
                      {/* Product Image */}
                      <div className="w-full h-56 overflow-hidden flex items-center justify-center p-4 relative">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                          style={{
                            filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.1))'
                          }}
                        />
                        {/* Magical shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>
                      </div>

                      {/* Product Info */}
                      <div className="p-6 text-center flex flex-col justify-between h-40">
                        <div>
                          <h3 
                            className="font-inter font-medium text-white text-base mb-2"
                            style={{
                              textShadow: '0 0 5px rgba(255,255,255,0.2)'
                            }}
                          >
                            {product.name}
                          </h3>
                          <p className="text-gray-400 text-sm mb-3">
                            {product.type}
                          </p>
                          <p 
                            className="text-white font-semibold text-lg mb-4"
                            style={{
                              textShadow: '0 0 8px rgba(255,255,255,0.3)'
                            }}
                          >
                            ${product.price}
                          </p>
                        </div>
                        
                        {/* Add to Cart Button - Only visible on hover */}
                        <Button 
                          onClick={() => handleAddToCart(product)}
                          className="opacity-0 group-hover:opacity-100 transition-all duration-500 bg-white bg-opacity-10 border border-white border-opacity-30 text-white hover:bg-white hover:text-black backdrop-blur-sm text-sm py-2 hover:scale-105"
                          style={{
                            boxShadow: '0 2px 10px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 255, 255, 0.1)'
                          }}
                        >
                          Add to Cart
                        </Button>
                      </div>

                      {/* Hover Border Glow Effect */}
                      <div 
                        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{
                          border: '2px solid rgba(255,255,255,0.6)',
                          boxShadow: '0 0 25px rgba(255,255,255,0.3), inset 0 0 25px rgba(255,255,255,0.1)'
                        }}
                      />

                      {/* Floating sparkles on hover */}
                      <div className="absolute top-2 right-2 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500"></div>
                      <div className="absolute bottom-4 left-4 w-0.5 h-0.5 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-700"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
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
                  boxShadow: index === currentIndex ? '0 0 15px rgba(255,255,255,0.5)' : 'none'
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
