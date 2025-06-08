
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Shop = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      name: "T-Shirt (Black)",
      price: 50,
      image: "/lovable-uploads/9bb25294-fbfd-4b7e-81d4-06bb5b98295f.png",
      type: "T-Shirt"
    },
    {
      id: 2,
      name: "Sweatshirt",
      price: 40,
      image: "/lovable-uploads/9bb25294-fbfd-4b7e-81d4-06bb5b98295f.png",
      type: "Sweatshirt"
    },
    {
      id: 3,
      name: "Hoodie",
      price: 30,
      image: "/lovable-uploads/9bb25294-fbfd-4b7e-81d4-06bb5b98295f.png",
      type: "Hoodie"
    },
    {
      id: 4,
      name: "T-Shirt (White)",
      price: 30,
      image: "/lovable-uploads/9bb25294-fbfd-4b7e-81d4-06bb5b98295f.png",
      type: "T-Shirt"
    }
  ];

  return (
    <div className="min-h-screen bg-black relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url('/lovable-uploads/79e337f6-b626-44f1-b37a-49f67d3c5675.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        
        <div className="pt-24 px-6 pb-20">
          <div className="max-w-7xl mx-auto">
            {/* Page Header */}
            <div className="text-center mb-16">
              <h1 
                className="font-cinzel text-4xl md:text-5xl text-white mb-4"
                style={{
                  textShadow: '0 0 20px rgba(255,255,255,0.5)'
                }}
              >
                Shop the Darkness
              </h1>
              <p 
                className="font-inter text-lg text-gray-300 max-w-2xl mx-auto"
                style={{
                  textShadow: '0 0 10px rgba(255,255,255,0.3)'
                }}
              >
                Explore our collection of gothic apparel, tailored to embrace the shadows!
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group relative"
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  {/* Glassmorphism Card */}
                  <div 
                    className="relative rounded-xl overflow-hidden transition-all duration-300 hover:scale-105"
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      boxShadow: hoveredProduct === product.id 
                        ? '0 20px 40px rgba(255, 255, 255, 0.1), 0 0 30px rgba(255, 255, 255, 0.2)'
                        : '0 8px 25px rgba(0, 0, 0, 0.3)'
                    }}
                  >
                    {/* Product Image */}
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="p-6">
                      <h3 className="font-inter font-semibold text-white text-lg mb-2">
                        {product.name}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4">
                        {product.type}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-white font-bold text-xl">
                          ${product.price}
                        </span>
                        <Button 
                          className="bg-white bg-opacity-10 border border-white border-opacity-30 text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm"
                          style={{
                            boxShadow: '0 4px 15px rgba(255, 255, 255, 0.1)'
                          }}
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    {hoveredProduct === product.id && (
                      <div 
                        className="absolute inset-0 rounded-xl pointer-events-none"
                        style={{
                          background: 'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                          boxShadow: 'inset 0 0 30px rgba(255,255,255,0.2)'
                        }}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Shop;
