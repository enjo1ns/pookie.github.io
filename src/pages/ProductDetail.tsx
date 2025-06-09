
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

  // Mock product data - in real app this would come from API
  const product = {
    id: parseInt(id || '1'),
    name: "Gothic Shadow T-Shirt",
    price: 50,
    originalPrice: 75,
    image: "/lovable-uploads/9bb25294-fbfd-4b7e-81d4-06bb5b98295f.png",
    type: "T-Shirt",
    description: "Embrace the darkness with this premium gothic t-shirt. Crafted from the finest materials, this piece features intricate shadow designs that shift and dance in different lighting. Perfect for those who walk between worlds.",
    features: [
      "Premium 100% organic cotton",
      "Hand-crafted shadow embroidery",
      "Fade-resistant gothic prints",
      "Comfortable slim fit",
      "Machine washable"
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    tags: ['Gothic', 'Premium', 'Limited Edition', 'Bestseller'],
    rating: 4.8,
    reviews: 127,
    inStock: true
  };

  useEffect(() => {
    // Simulate loading
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
        
        {/* Back Button */}
        <div className="pt-20 px-6 pb-4">
          <Button
            onClick={handleBack}
            variant="ghost"
            className="text-white hover:bg-white hover:bg-opacity-10 transition-all duration-300 mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
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
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
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
                        filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.1))'
                      }}
                    />
                  </div>
                  
                  {/* Floating Action Buttons */}
                  <div className="absolute top-6 right-6 flex flex-col space-y-3 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <button
                      onClick={() => setIsFavorite(!isFavorite)}
                      className={`w-12 h-12 rounded-full backdrop-blur-md border border-white border-opacity-20 flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                        isFavorite ? 'bg-red-500 bg-opacity-80' : 'bg-white bg-opacity-10 hover:bg-opacity-20'
                      }`}
                    >
                      <Heart className={`w-5 h-5 ${isFavorite ? 'text-white fill-white' : 'text-white'}`} />
                    </button>
                    <button className="w-12 h-12 rounded-full bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-opacity-20">
                      <Share2 className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Side - Product Details */}
              <div className="space-y-8 animate-slide-in-right">
                
                {/* Product Tags */}
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag, index) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full border transition-all duration-300 hover:scale-105"
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                        color: 'rgba(255, 255, 255, 0.9)',
                        animationDelay: `${index * 100}ms`
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Product Title & Rating */}
                <div>
                  <h1 
                    className="font-cinzel text-4xl md:text-5xl text-white mb-4 font-bold"
                    style={{
                      textShadow: '0 0 20px rgba(255,255,255,0.3)'
                    }}
                  >
                    {product.name}
                  </h1>
                  
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(product.rating) 
                              ? 'text-yellow-400 fill-yellow-400' 
                              : 'text-gray-500'
                          }`}
                        />
                      ))}
                      <span className="text-white ml-2 font-medium">{product.rating}</span>
                    </div>
                    <span className="text-gray-400">({product.reviews} reviews)</span>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-4">
                  <span 
                    className="text-4xl font-bold"
                    style={{
                      background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xl text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                  <span className="bg-green-500 bg-opacity-20 text-green-400 px-2 py-1 rounded text-sm font-medium">
                    Save ${product.originalPrice! - product.price}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-lg leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div>
                  <h3 className="text-white font-semibold mb-4 text-lg">Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li 
                        key={feature}
                        className="flex items-center text-gray-300 transition-all duration-300 hover:text-white"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="w-2 h-2 bg-white rounded-full mr-3 opacity-60" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Size Selection */}
                <div>
                  <h3 className="text-white font-semibold mb-4 text-lg">Size</h3>
                  <div className="flex flex-wrap gap-3">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-12 h-12 rounded-lg border-2 font-medium transition-all duration-300 hover:scale-105 ${
                          selectedSize === size
                            ? 'border-white bg-white bg-opacity-20 text-white'
                            : 'border-gray-600 text-gray-400 hover:border-gray-400'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity & Add to Cart */}
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-3">
                    <span className="text-white font-medium">Quantity:</span>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-10 h-10 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-20 text-white hover:bg-opacity-20 transition-all duration-300"
                      >
                        -
                      </button>
                      <span className="w-12 text-center text-white font-medium">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-10 h-10 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-20 text-white hover:bg-opacity-20 transition-all duration-300"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <Button
                    onClick={handleAddToCart}
                    className="flex-1 h-14 text-lg font-medium bg-white bg-opacity-10 border-2 border-white border-opacity-30 text-white hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-sm group overflow-hidden relative"
                  >
                    <span className="relative z-10 flex items-center">
                      <ShoppingCart className="mr-2 h-5 w-5" />
                      Add to Cart - ${product.price * quantity}
                    </span>
                    <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </Button>
                </div>

                {/* Trust Signals */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white border-opacity-10">
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Truck className="w-5 h-5" />
                    <span className="text-sm">Free Shipping</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Shield className="w-5 h-5" />
                    <span className="text-sm">Secure Payment</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <RotateCcw className="w-5 h-5" />
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
