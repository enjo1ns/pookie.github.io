
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ProductCarousel from "../components/ProductCarousel";
import SearchBar from "../components/SearchBar";
import CategoryButtons from "../components/CategoryButtons";
import { useCart } from "../contexts/CartContext";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  // Refs for section scrolling
  const bestSellersRef = useRef<HTMLDivElement>(null);
  const tshirtsRef = useRef<HTMLDivElement>(null);
  const hoodiesRef = useRef<HTMLDivElement>(null);
  const sweatshirtsRef = useRef<HTMLDivElement>(null);

  const allProducts = [
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
    },
    {
      id: 5,
      name: "Midnight Hoodie",
      price: 95,
      image: "/lovable-uploads/9bb25294-fbfd-4b7e-81d4-06bb5b98295f.png",
      type: "Hoodie",
      description: "Deep black hoodie with silver accents"
    },
    {
      id: 6,
      name: "Raven Sweatshirt",
      price: 80,
      image: "/lovable-uploads/9bb25294-fbfd-4b7e-81d4-06bb5b98295f.png",
      type: "Sweatshirt",
      description: "Premium sweatshirt with raven motifs"
    }
  ];

  // Filter products based on search
  const filteredProducts = allProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Categorize products
  const bestSellers = filteredProducts.slice(0, 4); // Top 4 as best sellers
  const tshirts = filteredProducts.filter(p => p.type === "T-Shirt");
  const hoodies = filteredProducts.filter(p => p.type === "Hoodie");
  const sweatshirts = filteredProducts.filter(p => p.type === "Sweatshirt");

  const categories = ["Best Sellers", "T-Shirts", "Hoodies", "Sweatshirts"];

  const handleAddToCart = (product: typeof allProducts[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      type: product.type
    });
  };

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  const handleCategoryClick = (category: string) => {
    const refs = {
      "Best Sellers": bestSellersRef,
      "T-Shirts": tshirtsRef,
      "Hoodies": hoodiesRef,
      "Sweatshirts": sweatshirtsRef
    };
    
    refs[category as keyof typeof refs]?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="min-h-screen bg-black relative">
      {/* Enhanced Background */}
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        
        <div className="pt-28 px-6 pb-24">
          <div className="max-w-7xl mx-auto">
            {/* Enhanced Page Header */}
            <div className="text-center mb-16">
              <h1 
                className="font-cinzel text-5xl md:text-6xl text-white mb-6 font-bold"
                style={{
                  textShadow: '0 0 30px rgba(255,255,255,0.4), 0 0 60px rgba(255,255,255,0.2)',
                  letterSpacing: '2px'
                }}
              >
                Embrace the Darkness
              </h1>
              <p 
                className="font-inter text-xl text-gray-200 max-w-3xl mx-auto mb-12 leading-relaxed"
                style={{
                  textShadow: '0 0 15px rgba(255,255,255,0.2)',
                  letterSpacing: '0.5px'
                }}
              >
                Discover our curated collection of gothic elegance, where shadows meet sophistication
              </p>

              {/* Enhanced Search Bar */}
              <div className="mb-8">
                <SearchBar 
                  value={searchQuery}
                  onChange={setSearchQuery}
                />
              </div>

              {/* Enhanced Category Navigation */}
              <CategoryButtons 
                categories={categories}
                onCategoryClick={handleCategoryClick}
              />
            </div>

            {/* Premium Divider */}
            <div 
              className="w-full h-px my-20 mx-auto relative"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 20%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.2) 80%, transparent 100%)',
                maxWidth: '800px'
              }}
            >
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white/40 rounded-full"
                style={{
                  boxShadow: '0 0 15px rgba(255,255,255,0.3)'
                }}
              />
            </div>

            {/* Product Sections */}
            {bestSellers.length > 0 && (
              <div ref={bestSellersRef}>
                <ProductCarousel
                  products={bestSellers}
                  title="Best Sellers"
                  onAddToCart={handleAddToCart}
                  onProductClick={handleProductClick}
                />
              </div>
            )}

            {tshirts.length > 0 && (
              <div ref={tshirtsRef}>
                <ProductCarousel
                  products={tshirts}
                  title="T-Shirts"
                  onAddToCart={handleAddToCart}
                  onProductClick={handleProductClick}
                />
              </div>
            )}

            {hoodies.length > 0 && (
              <div ref={hoodiesRef}>
                <ProductCarousel
                  products={hoodies}
                  title="Hoodies"
                  onAddToCart={handleAddToCart}
                  onProductClick={handleProductClick}
                />
              </div>
            )}

            {sweatshirts.length > 0 && (
              <div ref={sweatshirtsRef}>
                <ProductCarousel
                  products={sweatshirts}
                  title="Sweatshirts"
                  onAddToCart={handleAddToCart}
                  onProductClick={handleProductClick}
                />
              </div>
            )}

            {/* Enhanced No Results Message */}
            {searchQuery && filteredProducts.length === 0 && (
              <div className="text-center py-32">
                <div 
                  className="inline-block p-8 rounded-2xl"
                  style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.05)'
                  }}
                >
                  <p className="text-white/60 text-lg font-inter">
                    No shadows found matching "<span className="text-white/80 font-semibold">{searchQuery}</span>"
                  </p>
                  <p className="text-white/40 text-sm mt-2">
                    Try searching for something else...
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Shop;
