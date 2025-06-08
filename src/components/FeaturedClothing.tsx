
import { useState } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import ProductCard from "./ProductCard";

const FeaturedClothing = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const products = [
    {
      id: 1,
      name: "Gothic Essence Tee",
      price: 30,
      image: "/lovable-uploads/9bb25294-fbfd-4b7e-81d4-06bb5b98295f.png",
      type: "Premium T-Shirt",
      isNew: true
    },
    {
      id: 2,
      name: "Shadow Embrace Sweatshirt",
      price: 45,
      image: "/lovable-uploads/9bb25294-fbfd-4b7e-81d4-06bb5b98295f.png",
      type: "Luxury Sweatshirt",
      isNew: true
    },
    {
      id: 3,
      name: "Midnight Veil Hoodie",
      price: 60,
      image: "/lovable-uploads/9bb25294-fbfd-4b7e-81d4-06bb5b98295f.png",
      type: "Designer Hoodie",
      isNew: true
    },
    {
      id: 4,
      name: "Noir Collection Tee",
      price: 30,
      image: "/lovable-uploads/9bb25294-fbfd-4b7e-81d4-06bb5b98295f.png",
      type: "Classic T-Shirt",
      isNew: false
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, products.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, products.length - 2)) % Math.max(1, products.length - 2));
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="text-white mr-3 opacity-80" size={24} />
            <h2 
              className="font-cinzel text-3xl md:text-4xl lg:text-5xl text-white tracking-wider"
              style={{
                textShadow: '0 0 15px rgba(255,255,255,0.4)',
                letterSpacing: '0.1em'
              }}
            >
              FEATURED COLLECTION
            </h2>
            <Sparkles className="text-white ml-3 opacity-80" size={24} />
          </div>
          <div 
            className="w-32 h-px mx-auto opacity-60"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
              boxShadow: '0 0 10px rgba(255,255,255,0.3)'
            }}
          />
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 border border-white border-opacity-30 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] group"
            style={{
              boxShadow: '0 0 10px rgba(255,255,255,0.2)'
            }}
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 border border-white border-opacity-30 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] group"
            style={{
              boxShadow: '0 0 10px rgba(255,255,255,0.2)'
            }}
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
          </button>

          {/* Products Carousel */}
          <div className="overflow-hidden px-16">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-8"
              style={{
                transform: `translateX(-${currentIndex * (100 / 3)}%)`
              }}
            >
              {products.map((product) => (
                <div key={product.id} className="flex-shrink-0 w-1/3">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {Array.from({ length: Math.max(1, products.length - 2) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]' 
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

export default FeaturedClothing;
