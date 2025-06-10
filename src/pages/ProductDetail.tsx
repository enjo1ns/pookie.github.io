import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ArrowLeft, Heart, Share2, Star, ShoppingCart, Truck, Shield, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '../contexts/CartContext';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  // All products data - this would typically come from an API
  const allProducts = [
    {
      id: 1,
      name: "Eclipse Crescent Sweatshirt",
      price: 89,
      originalPrice: 120,
      image: "/lovable-uploads/d47f73fe-2d4e-4c75-a133-7d1722c9bed0.png",
      type: "Sweatshirt",
      description: "Mystical crescent moon design with celestial symbols. This premium heavyweight cotton blend sweatshirt features intricate crescent moon artwork that captures the essence of lunar mysticism. Perfect for those who find beauty in the night sky and embrace celestial energy.",
      features: ["Premium heavyweight cotton", "Celestial crescent design", "Ribbed cuffs and hem", "Unisex fit", "Pre-shrunk fabric"],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      tags: ['Gothic', 'Premium', 'Celestial', 'Bestseller'],
      rating: 4.9,
      reviews: 89,
      inStock: true
    },
    {
      id: 2,
      name: "Gothic AHH Statement Sweatshirt",
      price: 95,
      originalPrice: 125,
      image: "/lovable-uploads/31c3ee47-4532-4a41-9f8c-083b3d4400ff.png",
      type: "Sweatshirt",
      description: "Bold distressed lettering with gothic aesthetic. Express your dark side with this statement piece featuring weathered typography that speaks to the soul. The distressed finish gives it an authentic vintage feel.",
      features: ["Distressed print design", "Premium cotton blend", "Oversized fit", "Vintage wash", "Reinforced seams"],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      tags: ['Gothic', 'Statement', 'Vintage', 'Oversized'],
      rating: 4.7,
      reviews: 76,
      inStock: true
    },
    // ... keep existing code (other products)
  ];

  const product = allProducts.find(p => p.id === parseInt(id || '1')) || allProducts[0];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      type: product.type
    });
  };

  const handleBack = () => {
    navigate(-1);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white opacity-20"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Fixed Background with better styling */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url('/lovable-uploads/1e59507b-2801-4e90-a159-a7141b184c62.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-80" />
      </div>

      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-20">
        <Navigation />
        
        {/* Enhanced Back Button */}
        <div className="pt-20 px-6 pb-4">
          <Button
            onClick={handleBack}
            variant="ghost"
            className="group relative overflow-hidden text-white border border-white/20 hover:border-white/40 transition-all duration-300 backdrop-blur-md bg-white/5 hover:bg-white/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Shop
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
        </div>

        {/* Main Product Section */}
        <div className="px-6 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              
              {/* Left Side - Product Image */}
              <div className="relative group">
                <div 
                  className="relative rounded-3xl overflow-hidden transition-all duration-700 hover:scale-[1.02]"
                  style={{
                    background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02))',
                    backdropFilter: 'blur(25px)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <div className="aspect-square p-8 flex items-center justify-center">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className={`w-full h-full object-contain transition-all duration-1000 ${
                        imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`}
                      onLoad={() => setImageLoaded(true)}
                      style={{
                        filter: 'drop-shadow(0 0 25px rgba(255,255,255,0.15))'
                      }}
                    />
                  </div>
                  
                  {/* Enhanced Floating Action Buttons */}
                  <div className="absolute top-6 right-6 flex flex-col space-y-3 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <button
                      onClick={() => setIsFavorite(!isFavorite)}
                      className={`w-12 h-12 rounded-full backdrop-blur-md border transition-all duration-300 hover:scale-110 flex items-center justify-center ${
                        isFavorite 
                          ? 'bg-red-500/80 border-red-400/50 shadow-lg shadow-red-500/25' 
                          : 'bg-white/10 border-white/20 hover:bg-white/20'
                      }`}
                    >
                      <Heart className={`w-5 h-5 transition-colors duration-300 ${isFavorite ? 'text-white fill-white' : 'text-white'}`} />
                    </button>
                    <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/20">
                      <Share2 className="w-5 h-5 text-white" />
                    </button>
                  </div>

                  {/* Premium Glow Effect */}
                  <div 
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      boxShadow: '0 0 40px rgba(255,255,255,0.1), inset 0 0 40px rgba(255,255,255,0.05)'
                    }}
                  />
                </div>
              </div>

              {/* Right Side - Product Details */}
              <div className="space-y-8 animate-slide-in-right">
                
                {/* Product Tags */}
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag, index) => (
                    <span
                      key={tag}
                      className="group px-4 py-2 text-xs font-medium rounded-full border transition-all duration-300 hover:scale-105 cursor-default"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                        color: 'rgba(255, 255, 255, 0.9)',
                        animationDelay: `${index * 100}ms`,
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      {tag}
                      <div className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </span>
                  ))}
                </div>

                {/* Product Title & Rating */}
                <div>
                  <h1 
                    className="font-cinzel text-4xl md:text-5xl text-white mb-4 font-bold"
                    style={{
                      textShadow: '0 0 25px rgba(255,255,255,0.4), 0 0 50px rgba(255,255,255,0.1)'
                    }}
                  >
                    {product.name}
                  </h1>
                  
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 transition-colors duration-300 ${
                            i < Math.floor(product.rating) 
                              ? 'text-yellow-400 fill-yellow-400 drop-shadow-lg' 
                              : 'text-gray-500'
                          }`}
                        />
                      ))}
                      <span className="text-white ml-2 font-medium">{product.rating}</span>
                    </div>
                    <span className="text-gray-400">({product.reviews} reviews)</span>
                  </div>
                </div>

                {/* Enhanced Price */}
                <div className="flex items-center space-x-4">
                  <span 
                    className="text-4xl font-bold"
                    style={{
                      background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      textShadow: '0 0 20px rgba(255,255,255,0.3)'
                    }}
                  >
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xl text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                  {product.originalPrice && (
                    <span className="bg-gradient-to-r from-green-500/20 to-green-400/20 border border-green-400/30 text-green-400 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                      Save ${product.originalPrice - product.price}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-300 text-lg leading-relaxed" style={{ textShadow: '0 0 10px rgba(255,255,255,0.1)' }}>
                  {product.description}
                </p>

                {/* Features */}
                <div>
                  <h3 className="text-white font-semibold mb-4 text-lg" style={{ textShadow: '0 0 15px rgba(255,255,255,0.3)' }}>
                    Features
                  </h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li 
                        key={feature}
                        className="flex items-center text-gray-300 transition-all duration-300 hover:text-white group"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="w-2 h-2 bg-white rounded-full mr-4 opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-white/20" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Enhanced Size Selection */}
                <div>
                  <h3 className="text-white font-semibold mb-4 text-lg" style={{ textShadow: '0 0 15px rgba(255,255,255,0.3)' }}>
                    Size
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-12 h-12 rounded-xl border-2 font-medium transition-all duration-300 hover:scale-105 backdrop-blur-sm ${
                          selectedSize === size
                            ? 'border-white bg-white/20 text-white shadow-lg shadow-white/10'
                            : 'border-gray-600 bg-white/5 text-gray-400 hover:border-gray-400 hover:bg-white/10'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Enhanced Quantity & Add to Cart */}
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-3">
                    <span className="text-white font-medium">Quantity:</span>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-sm hover:scale-105"
                      >
                        -
                      </button>
                      <span className="w-12 text-center text-white font-medium">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-sm hover:scale-105"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <Button
                    onClick={handleAddToCart}
                    className="flex-1 h-14 text-lg font-medium relative overflow-hidden group"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))',
                      backdropFilter: 'blur(20px)',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                      borderRadius: '16px'
                    }}
                  >
                    <span className="relative z-10 flex items-center text-white transition-colors duration-500 group-hover:text-black">
                      <ShoppingCart className="mr-2 h-5 w-5" />
                      Add to Cart - ${product.price * quantity}
                    </span>
                    <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-xl" />
                  </Button>
                </div>

                {/* Enhanced Trust Signals */}
                <div 
                  className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 rounded-xl p-4"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01))',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <div className="flex items-center space-x-2 text-gray-300 group hover:text-white transition-colors duration-300">
                    <Truck className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm">Free Shipping</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300 group hover:text-white transition-colors duration-300">
                    <Shield className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm">Secure Payment</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300 group hover:text-white transition-colors duration-300">
                    <RotateCcw className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm">Easy Returns</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>

      <style>{`
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ProductDetail;
