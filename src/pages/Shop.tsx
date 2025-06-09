
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
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
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Floating Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute w-32 h-32 rounded-full animate-float opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)',
            top: '20%',
            left: '10%',
            animationDuration: '6s'
          }}
        />
        <div 
          className="absolute w-20 h-20 rounded-full animate-float opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
            top: '60%',
            right: '15%',
            animationDuration: '8s',
            animationDelay: '2s'
          }}
        />
        <div 
          className="absolute w-16 h-16 rounded-full animate-float opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)',
            bottom: '30%',
            left: '20%',
            animationDuration: '7s',
            animationDelay: '4s'
          }}
        />
      </div>

      {/* Background Image with Enhanced Effects */}
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-blue-900/10" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        
        <div className="pt-24 px-6 pb-20">
          <div className="max-w-7xl mx-auto">
            {/* Enhanced Page Header */}
            <div className="text-center mb-16 relative">
              {/* Magical Lines */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px">
                <div 
                  className="w-full h-px animate-pulse"
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 20%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.3) 80%, transparent 100%)'
                  }}
                />
              </div>
              
              <h1 
                className="font-cinzel text-4xl md:text-6xl text-white mb-6 animate-glow relative z-10 bg-black/20 backdrop-blur-sm px-8 py-4 rounded-lg inline-block"
                style={{
                  textShadow: '0 0 30px rgba(255,255,255,0.8), 0 0 60px rgba(255,255,255,0.4)'
                }}
              >
                ✦ Shop the Darkness ✦
              </h1>
              
              <p 
                className="font-inter text-lg md:text-xl text-gray-300 max-w-3xl mx-auto relative z-10 bg-black/30 backdrop-blur-sm px-6 py-3 rounded-lg"
                style={{
                  textShadow: '0 0 15px rgba(255,255,255,0.5)'
                }}
              >
                Explore our mystical collection of gothic apparel, where shadows meet elegance
              </p>

              {/* Decorative Elements */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
                <div className="w-2 h-2 bg-white rounded-full animate-ping opacity-60" />
              </div>
              <div className="absolute bottom-0 left-1/4 transform -translate-y-4">
                <div className="w-1 h-1 bg-white rounded-full animate-pulse opacity-40" />
              </div>
              <div className="absolute bottom-0 right-1/4 transform -translate-y-4">
                <div className="w-1 h-1 bg-white rounded-full animate-pulse opacity-40" />
              </div>
            </div>

            {/* Enhanced Products Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className="group relative overflow-hidden rounded-3xl transition-all duration-700 hover:scale-[1.03] cursor-pointer transform"
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(30px)',
                    border: '2px solid rgba(255, 255, 255, 0.15)',
                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.08)',
                    animationDelay: `${index * 0.2}s`
                  }}
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  {/* Magical Aura Effect */}
                  <div 
                    className={`absolute inset-0 rounded-3xl transition-opacity duration-700 ${
                      hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                      background: 'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05), rgba(255,255,255,0.1))',
                      backgroundSize: '200% 200%',
                      animation: hoveredProduct === product.id ? 'gradient-shift 3s ease infinite' : 'none'
                    }}
                  />

                  <div className="flex h-96">
                    {/* Product Image Side */}
                    <div className="w-2/5 relative overflow-hidden rounded-l-3xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-contain p-6 transition-all duration-700 group-hover:scale-110 group-hover:rotate-2 relative z-10"
                        style={{
                          filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.3))'
                        }}
                      />
                      
                      {/* Magical Sparkles */}
                      {hoveredProduct === product.id && (
                        <>
                          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-ping" />
                          <div className="absolute top-3/4 right-1/4 w-0.5 h-0.5 bg-white rounded-full animate-pulse" />
                          <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-white rounded-full animate-bounce" />
                        </>
                      )}
                    </div>

                    {/* Product Details Side */}
                    <div className="w-3/5 p-8 flex flex-col justify-between relative">
                      <div>
                        <div className="flex items-center justify-between mb-6">
                          <span 
                            className="text-xs font-medium tracking-[4px] uppercase px-3 py-1 rounded-full border"
                            style={{
                              background: 'linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                              borderColor: 'rgba(255,255,255,0.2)',
                              color: 'rgba(255,255,255,0.9)',
                              textShadow: '0 0 10px rgba(255,255,255,0.5)'
                            }}
                          >
                            ✦ {product.type} ✦
                          </span>
                        </div>
                        
                        <h3 className="font-cinzel font-bold text-white text-3xl mb-6 leading-tight group-hover:text-shadow-lg transition-all duration-500">
                          {product.name}
                        </h3>
                        
                        <p className="text-gray-300 text-sm leading-relaxed mb-8 opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                          {product.description}
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="text-gray-400 text-xs uppercase tracking-wider mb-2 font-cinzel">Price</span>
                          <span 
                            className="text-4xl font-bold animate-glow"
                            style={{
                              background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundClip: 'text',
                              textShadow: '0 0 30px rgba(255,255,255,0.5)'
                            }}
                          >
                            ${product.price}
                          </span>
                        </div>
                        
                        <Button 
                          onClick={() => handleAddToCart(product)}
                          className="relative px-10 py-4 font-medium text-white border-2 border-white/30 rounded-2xl transition-all duration-500 hover:border-white/60 hover:shadow-2xl hover:shadow-white/20 group/btn overflow-hidden backdrop-blur-sm"
                          style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(15px)'
                          }}
                        >
                          <span className="relative z-10 transition-colors duration-500 group-hover/btn:text-black font-cinzel tracking-wider">
                            Add to Cart
                          </span>
                          <div className="absolute inset-0 bg-white transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left" />
                          
                          {/* Button Sparkle Effect */}
                          <div className="absolute top-1 right-1 w-1 h-1 bg-white rounded-full opacity-0 group-hover/btn:opacity-100 group-hover/btn:animate-ping transition-opacity duration-500" />
                        </Button>
                      </div>

                      {/* Enhanced Floating Glow Effect */}
                      {hoveredProduct === product.id && (
                        <>
                          <div 
                            className="absolute top-8 right-8 w-24 h-24 rounded-full pointer-events-none animate-pulse"
                            style={{
                              background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
                              filter: 'blur(15px)'
                            }}
                          />
                          <div 
                            className="absolute bottom-8 left-8 w-16 h-16 rounded-full pointer-events-none animate-pulse"
                            style={{
                              background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                              filter: 'blur(10px)',
                              animationDelay: '1s'
                            }}
                          />
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>

      {/* Enhanced CSS Animations */}
      <style>
        {`
          @keyframes gradient-shift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-10px) rotate(1deg); }
            66% { transform: translateY(-5px) rotate(-1deg); }
          }
          
          @keyframes glow {
            0%, 100% { 
              text-shadow: 0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(255,255,255,0.3);
            }
            50% { 
              text-shadow: 0 0 30px rgba(255,255,255,0.8), 0 0 60px rgba(255,255,255,0.5);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Shop;
