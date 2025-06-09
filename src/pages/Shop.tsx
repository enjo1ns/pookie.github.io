
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "../contexts/CartContext";
import { useState } from "react";
import { Link } from "react-router-dom";

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
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Enhanced Background with multiple layers */}
      <div className="fixed inset-0 z-0">
        {/* Main background */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/lovable-uploads/79e337f6-b626-44f1-b37a-49f67d3c5675.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Animated overlay with moving particles */}
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        
        {/* Floating magical orbs */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-white rounded-full opacity-30 animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full opacity-40 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-60 left-1/4 w-5 h-5 bg-blue-300 rounded-full opacity-25 animate-float" style={{ animationDelay: '4s' }} />
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-pink-300 rounded-full opacity-35 animate-float" style={{ animationDelay: '1s' }} />
        
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
        <div className="absolute inset-0 bg-gradient-to-tl from-pink-900/10 via-transparent to-indigo-900/10" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        
        <div className="pt-24 px-6 pb-20">
          <div className="max-w-7xl mx-auto">
            {/* Enhanced Page Header */}
            <div className="text-center mb-16 relative">
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <div className="w-96 h-96 bg-gradient-radial from-white/10 to-transparent rounded-full animate-pulse" />
              </div>
              <h1 
                className="font-cinzel text-4xl md:text-6xl text-white mb-4 relative"
                style={{
                  textShadow: '0 0 30px rgba(255,255,255,0.8), 0 0 60px rgba(255,255,255,0.4)'
                }}
              >
                ✨ Shop the Darkness ✨
              </h1>
              <p 
                className="font-inter text-lg text-gray-300 max-w-2xl mx-auto relative"
                style={{
                  textShadow: '0 0 15px rgba(255,255,255,0.5)'
                }}
              >
                Discover enchanted gothic apparel that embraces the mystical shadows of your soul
              </p>
              
              {/* Magical sparkles around header */}
              <div className="absolute -top-4 left-1/4 text-white opacity-60 animate-bounce">✦</div>
              <div className="absolute top-8 right-1/4 text-purple-300 opacity-50 animate-pulse">★</div>
              <div className="absolute -bottom-2 left-1/3 text-blue-300 opacity-40 animate-bounce" style={{ animationDelay: '1s' }}>✧</div>
            </div>

            {/* Enhanced Products Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {products.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02] cursor-pointer block"
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(25px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)'
                  }}
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  <div className="flex h-80">
                    {/* Product Image Side */}
                    <div className="w-2/5 relative overflow-hidden rounded-l-2xl">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
                      
                      {/* Magical glow on hover */}
                      {hoveredProduct === product.id && (
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-blue-500/20 animate-pulse" />
                      )}
                    </div>

                    {/* Product Details Side */}
                    <div className="w-3/5 p-8 flex flex-col justify-between relative">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span 
                            className="text-xs font-medium tracking-[3px] uppercase"
                            style={{
                              background: 'linear-gradient(90deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundClip: 'text'
                            }}
                          >
                            ✦ {product.type} ✦
                          </span>
                          <div 
                            className="w-12 h-px"
                            style={{
                              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.5) 50%, transparent 100%)'
                            }}
                          />
                        </div>
                        
                        <h3 className="font-cinzel font-bold text-white text-2xl mb-4 leading-tight group-hover:text-purple-200 transition-colors duration-300">
                          {product.name}
                        </h3>
                        
                        <p className="text-gray-300 text-sm leading-relaxed mb-6 opacity-90 group-hover:text-gray-200 transition-colors duration-300">
                          {product.description}
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="text-gray-400 text-xs uppercase tracking-wider mb-1">Enchanted Price</span>
                          <span 
                            className="text-3xl font-bold"
                            style={{
                              background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundClip: 'text',
                              textShadow: '0 0 20px rgba(255,255,255,0.3)'
                            }}
                          >
                            ${product.price}
                          </span>
                        </div>
                        
                        <Button 
                          onClick={(e) => {
                            e.preventDefault();
                            handleAddToCart(product);
                          }}
                          className="relative px-6 py-3 font-medium text-white border-2 border-white/30 rounded-xl transition-all duration-300 hover:border-white/60 hover:shadow-lg hover:shadow-white/20 group/btn overflow-hidden"
                          style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)'
                          }}
                        >
                          <span className="relative z-10 transition-colors duration-300 group-hover/btn:text-black">
                            ✨ Add to Cart
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left" />
                        </Button>
                      </div>

                      {/* Enhanced Floating Glow Effect */}
                      {hoveredProduct === product.id && (
                        <div 
                          className="absolute top-4 right-4 w-20 h-20 rounded-full pointer-events-none"
                          style={{
                            background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,0,255,0.1) 40%, transparent 70%)',
                            filter: 'blur(15px)',
                            animation: 'pulse 2s ease-in-out infinite'
                          }}
                        />
                      )}
                    </div>
                  </div>

                  {/* Enhanced Hover Border Effect */}
                  <div 
                    className={`absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500 ${
                      hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                      background: 'linear-gradient(45deg, rgba(255,255,255,0.2), rgba(255,0,255,0.1), rgba(0,255,255,0.1), rgba(255,255,255,0.2))',
                      backgroundSize: '200% 200%',
                      animation: hoveredProduct === product.id ? 'gradient-shift 3s ease infinite' : 'none'
                    }}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>

      {/* Enhanced CSS Animation */}
      <style>
        {`
          @keyframes gradient-shift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Shop;
