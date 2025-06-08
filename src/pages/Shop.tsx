
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import CartSidebar from "../components/CartSidebar";
import { Button } from "@/components/ui/button";
import { useCart } from "../contexts/CartContext";
import { useState } from "react";

const Shop = () => {
  const { addToCart } = useCart();
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      name: "Gothic Black T-Shirt",
      price: 50,
      image: "/lovable-uploads/9bb25294-fbfd-4b7e-81d4-06bb5b98295f.png",
      type: "T-Shirt",
      description: "Premium gothic black t-shirt with unique design"
    },
    {
      id: 2,
      name: "Dark Sweatshirt",
      price: 75,
      image: "/lovable-uploads/9bb25294-fbfd-4b7e-81d4-06bb5b98295f.png",
      type: "Sweatshirt",
      description: "Comfortable dark sweatshirt for the modern goth"
    },
    {
      id: 3,
      name: "Shadow Hoodie",
      price: 90,
      image: "/lovable-uploads/9bb25294-fbfd-4b7e-81d4-06bb5b98295f.png",
      type: "Hoodie",
      description: "Cozy hoodie with mysterious shadow designs"
    },
    {
      id: 4,
      name: "White Gothic T-Shirt",
      price: 45,
      image: "/lovable-uploads/9bb25294-fbfd-4b7e-81d4-06bb5b98295f.png",
      type: "T-Shirt",
      description: "Elegant white t-shirt with gothic aesthetics"
    }
  ];

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      type: product.type
    });
  };

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
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <CartSidebar />
        
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
                Explore our collection of gothic apparel, tailored to embrace the shadows
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02] cursor-pointer"
                  style={{
                    background: 'rgba(255, 255, 255, 0.06)',
                    backdropFilter: 'blur(25px)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)'
                  }}
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  <div className="flex h-80">
                    {/* Product Image Side */}
                    <div className="w-2/5 relative overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
                    </div>

                    {/* Product Details Side */}
                    <div className="w-3/5 p-8 flex flex-col justify-between relative">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span 
                            className="text-xs font-medium tracking-[3px] uppercase"
                            style={{
                              background: 'linear-gradient(90deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 100%)',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundClip: 'text'
                            }}
                          >
                            {product.type}
                          </span>
                          <div 
                            className="w-12 h-px"
                            style={{
                              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)'
                            }}
                          />
                        </div>
                        
                        <h3 className="font-cinzel font-bold text-white text-2xl mb-4 leading-tight">
                          {product.name}
                        </h3>
                        
                        <p className="text-gray-300 text-sm leading-relaxed mb-6 opacity-90">
                          {product.description}
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="text-gray-400 text-xs uppercase tracking-wider mb-1">Price</span>
                          <span 
                            className="text-3xl font-bold"
                            style={{
                              background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundClip: 'text'
                            }}
                          >
                            ${product.price}
                          </span>
                        </div>
                        
                        <Button 
                          onClick={() => handleAddToCart(product)}
                          className="relative px-8 py-3 font-medium text-white border-2 border-white/20 rounded-xl transition-all duration-300 hover:border-white/40 hover:shadow-lg hover:shadow-white/10 group/btn overflow-hidden"
                          style={{
                            background: 'rgba(255, 255, 255, 0.08)',
                            backdropFilter: 'blur(10px)'
                          }}
                        >
                          <span className="relative z-10 transition-colors duration-300 group-hover/btn:text-black">
                            Add to Cart
                          </span>
                          <div className="absolute inset-0 bg-white transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left" />
                        </Button>
                      </div>

                      {/* Floating Glow Effect */}
                      {hoveredProduct === product.id && (
                        <div 
                          className="absolute top-4 right-4 w-20 h-20 rounded-full pointer-events-none animate-pulse"
                          style={{
                            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                            filter: 'blur(10px)'
                          }}
                        />
                      )}
                    </div>
                  </div>

                  {/* Hover Border Effect */}
                  <div 
                    className={`absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500 ${
                      hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                      background: 'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05), rgba(255,255,255,0.1))',
                      backgroundSize: '200% 200%',
                      animation: hoveredProduct === product.id ? 'gradient-shift 2s ease infinite' : 'none'
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>

      {/* CSS Animation using a style tag without jsx attribute */}
      <style>
        {`
          @keyframes gradient-shift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
        `}
      </style>
    </div>
  );
};

export default Shop;
