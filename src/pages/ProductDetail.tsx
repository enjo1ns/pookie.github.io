
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "../contexts/CartContext";
import { ArrowLeft, Star, Heart, Share2 } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [isImageHovered, setIsImageHovered] = useState(false);

  // Mock product data - in real app, fetch by ID
  const product = {
    id: parseInt(id || "1"),
    name: "Gothic Black T-Shirt",
    price: 50,
    image: "/lovable-uploads/9bb25294-fbfd-4b7e-81d4-06bb5b98295f.png",
    type: "T-Shirt",
    description: "Immerse yourself in the shadows with this premium gothic black t-shirt. Crafted from the finest ethereal cotton, this piece embodies the perfect balance between darkness and elegance. The mystical design channels ancient gothic aesthetics while providing modern comfort for your everyday adventures.",
    features: ["100% Premium Cotton", "Mystical Design", "Comfortable Fit", "Machine Washable"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["Gothic", "Dark", "Premium", "Comfortable", "Mystical"],
    rating: 4.8,
    reviews: 127
  };

  const handleAddToCart = () => {
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
      {/* Enhanced Background */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/lovable-uploads/79e337f6-b626-44f1-b37a-49f67d3c5675.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-blue-900/30" />
        
        {/* Floating magical elements */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-white rounded-full opacity-40 animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-20 w-4 h-4 bg-purple-400 rounded-full opacity-30 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-pink-300 rounded-full opacity-50 animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10">
        <Navigation />
        
        <div className="pt-24 px-6 pb-20">
          <div className="max-w-7xl mx-auto">
            {/* Back Button */}
            <Button
              onClick={() => navigate(-1)}
              variant="ghost"
              className="mb-6 text-white hover:text-purple-300 transition-colors duration-300"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to Shop
            </Button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Product Image Section */}
              <div className="relative">
                <div 
                  className="aspect-square rounded-2xl overflow-hidden relative group"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
                  }}
                  onMouseEnter={() => setIsImageHovered(true)}
                  onMouseLeave={() => setIsImageHovered(false)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      isImageHovered ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  
                  {/* Magical overlay on hover */}
                  {isImageHovered && (
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/20 animate-pulse" />
                  )}
                  
                  {/* Floating action buttons */}
                  <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110">
                      <Heart size={16} />
                    </button>
                    <button className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110">
                      <Share2 size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Details Section */}
              <div className="flex flex-col justify-center space-y-6">
                {/* Product Title & Rating */}
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-purple-300 text-sm font-medium tracking-wider uppercase">✦ {product.type} ✦</span>
                  </div>
                  <h1 
                    className="font-cinzel text-4xl lg:text-5xl text-white mb-4"
                    style={{ textShadow: '0 0 20px rgba(255,255,255,0.5)' }}
                  >
                    {product.name}
                  </h1>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-400"} 
                        />
                      ))}
                    </div>
                    <span className="text-gray-300 text-sm">({product.reviews} reviews)</span>
                  </div>
                </div>

                {/* Price */}
                <div 
                  className="text-4xl font-bold text-white mb-6"
                  style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 0 30px rgba(255,255,255,0.4)'
                  }}
                >
                  ${product.price}
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                  {product.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="text-white font-semibold mb-3 text-lg">Mystical Features:</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <span className="text-purple-400">✦</span>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Size Selection */}
                <div className="mb-6">
                  <h3 className="text-white font-semibold mb-3">Choose Your Size:</h3>
                  <div className="flex space-x-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                          selectedSize === size
                            ? 'border-purple-400 bg-purple-400/20 text-white'
                            : 'border-gray-600 text-gray-300 hover:border-purple-400/50'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div className="mb-6">
                  <h3 className="text-white font-semibold mb-3">Quantity:</h3>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 rounded-lg border border-gray-600 text-white hover:border-purple-400 transition-colors duration-300"
                    >
                      -
                    </button>
                    <span className="text-white font-medium text-lg w-8 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 rounded-lg border border-gray-600 text-white hover:border-purple-400 transition-colors duration-300"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Tags */}
                <div className="mb-8">
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-sm text-gray-300 border border-white/20"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <Button
                  onClick={handleAddToCart}
                  className="w-full py-4 text-lg font-medium bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group overflow-hidden relative"
                >
                  <span className="relative z-10">✨ Add to Cart - ${product.price * quantity}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(180deg); }
          }
        `}
      </style>
    </div>
  );
};

export default ProductDetail;
