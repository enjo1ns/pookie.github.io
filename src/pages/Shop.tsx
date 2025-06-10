
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { useCart } from "../contexts/CartContext";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

const Shop = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const products = [
    {
      id: 1,
      name: "Gothic Black T-Shirt",
      price: 50,
      image: "/lovable-uploads/9bb25294-fbfd-4b7e-81d4-06bb5b98295f.png",
      type: "T-Shirt",
      description: "Premium gothic black t-shirt with unique design",
      category: "tshirts"
    },
    {
      id: 2,
      name: "Dark Sweatshirt",
      price: 75,
      image: "/lovable-uploads/9bb25294-fbfd-4b7e-81d4-06bb5b98295f.png",
      type: "Sweatshirt",
      description: "Comfortable dark sweatshirt for the modern goth",
      category: "sweatshirts"
    },
    {
      id: 3,
      name: "Shadow Hoodie",
      price: 90,
      image: "/lovable-uploads/9bb25294-fbfd-4b7e-81d4-06bb5b98295f.png",
      type: "Hoodie",
      description: "Cozy hoodie with mysterious shadow designs",
      category: "hoodies"
    },
    {
      id: 4,
      name: "White Gothic T-Shirt",
      price: 45,
      image: "/lovable-uploads/9bb25294-fbfd-4b7e-81d4-06bb5b98295f.png",
      type: "T-Shirt",
      description: "Elegant white t-shirt with gothic aesthetics",
      category: "tshirts"
    },
    {
      id: 5,
      name: "Midnight Hoodie",
      price: 95,
      image: "/lovable-uploads/9bb25294-fbfd-4b7e-81d4-06bb5b98295f.png",
      type: "Hoodie",
      description: "Premium midnight black hoodie",
      category: "hoodies"
    },
    {
      id: 6,
      name: "Dark Souls Sweatshirt",
      price: 80,
      image: "/lovable-uploads/9bb25294-fbfd-4b7e-81d4-06bb5b98295f.png",
      type: "Sweatshirt",
      description: "Inspired by dark souls aesthetic",
      category: "sweatshirts"
    }
  ];

  const categories = [
    { id: "all", name: "All", count: products.length },
    { id: "bestsellers", name: "Best Sellers", count: 4 },
    { id: "tshirts", name: "T-Shirts", count: products.filter(p => p.category === "tshirts").length },
    { id: "hoodies", name: "Hoodies", count: products.filter(p => p.category === "hoodies").length },
    { id: "sweatshirts", name: "Sweatshirts", count: products.filter(p => p.category === "sweatshirts").length }
  ];

  const bestSellers = products.slice(0, 4);
  const tshirts = products.filter(p => p.category === "tshirts");
  const hoodies = products.filter(p => p.category === "hoodies");
  const sweatshirts = products.filter(p => p.category === "sweatshirts");

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      type: product.type
    });
  };

  const scrollToCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    if (categoryId !== "all") {
      const element = document.getElementById(categoryId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const ProductCarousel = ({ products, title, id }: { products: any[], title: string, id: string }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    };

    const scrollRight = () => {
      if (currentIndex < products.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    };

    return (
      <div id={id} className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-cinzel text-3xl text-white">{title}</h2>
          <div className="flex gap-2">
            <button
              onClick={scrollLeft}
              disabled={currentIndex === 0}
              className="p-2 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={scrollRight}
              disabled={currentIndex >= products.length - 1}
              className="p-2 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div 
            ref={carouselRef}
            className="flex transition-transform duration-500 ease-out gap-6"
            style={{ transform: `translateX(-${currentIndex * 280}px)` }}
          >
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`flex-shrink-0 transition-all duration-500 ${
                  index === currentIndex 
                    ? 'scale-100 z-10 opacity-100' 
                    : index === currentIndex - 1 || index === currentIndex + 1
                    ? 'scale-90 z-5 opacity-60 blur-sm'
                    : 'scale-75 z-0 opacity-30 blur-md'
                }`}
                style={{
                  filter: index === currentIndex ? 'none' : `blur(${Math.abs(index - currentIndex) * 2}px)`,
                }}
              >
                <ProductCard 
                  product={product} 
                  onAddToCart={handleAddToCart}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
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
                className="font-inter text-lg text-gray-300 max-w-2xl mx-auto mb-12"
                style={{
                  textShadow: '0 0 10px rgba(255,255,255,0.3)'
                }}
              >
                Explore our collection of gothic apparel, tailored to embrace the shadows
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative group">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-white transition-colors duration-300" size={20} />
                  <input
                    type="text"
                    placeholder="Search for products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300 backdrop-blur-sm"
                    style={{
                      textShadow: '0 0 10px rgba(255,255,255,0.3)'
                    }}
                  />
                </div>
              </div>

              {/* Category Navigation */}
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => scrollToCategory(category.id)}
                    className={`group relative px-6 py-3 rounded-xl font-medium transition-all duration-500 overflow-hidden ${
                      activeCategory === category.id
                        ? 'text-black bg-white shadow-lg shadow-white/20'
                        : 'text-white bg-white/10 border border-white/20 hover:border-white/40'
                    }`}
                  >
                    {/* Hover effect background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-90 transition-opacity duration-300 -z-10" />
                    
                    {/* Animated border */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                         style={{
                           background: 'linear-gradient(45deg, #ff0080, #7928ca, #ff0080)',
                           backgroundSize: '200% 200%',
                           animation: 'gradient-shift 2s ease infinite',
                           padding: '2px'
                         }}>
                      <div className="w-full h-full bg-black rounded-xl" />
                    </div>
                    
                    {/* Content */}
                    <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                      {category.name}
                      <span className="ml-2 text-sm opacity-70">({category.count})</span>
                    </span>
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 -z-20" />
                  </button>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-16" />

            {/* Search Results */}
            {searchQuery && (
              <div className="mb-16">
                <h2 className="font-cinzel text-3xl text-white mb-8">
                  Search Results for "{searchQuery}"
                </h2>
                <div className="flex flex-wrap justify-center gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard 
                      key={product.id}
                      product={product} 
                      onAddToCart={handleAddToCart}
                    />
                  ))}
                </div>
                {filteredProducts.length === 0 && (
                  <p className="text-center text-gray-400 text-lg">No products found matching your search.</p>
                )}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mt-16" />
              </div>
            )}

            {/* Product Carousels */}
            {!searchQuery && (
              <>
                <ProductCarousel products={bestSellers} title="Best Sellers" id="bestsellers" />
                <ProductCarousel products={tshirts} title="T-Shirts" id="tshirts" />
                <ProductCarousel products={hoodies} title="Hoodies" id="hoodies" />
                <ProductCarousel products={sweatshirts} title="Sweatshirts" id="sweatshirts" />
              </>
            )}
          </div>
        </div>

        <Footer />
      </div>

      {/* CSS Animation */}
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
