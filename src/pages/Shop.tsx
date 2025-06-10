
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
            <div className="text-center mb-12">
              <h1 
                className="font-cinzel text-4xl md:text-5xl text-white mb-4"
                style={{
                  textShadow: '0 0 20px rgba(255,255,255,0.5)'
                }}
              >
                Shop the Darkness
              </h1>
              <p 
                className="font-inter text-lg text-gray-300 max-w-2xl mx-auto mb-8"
                style={{
                  textShadow: '0 0 10px rgba(255,255,255,0.3)'
                }}
              >
                Explore our collection of gothic apparel, tailored to embrace the shadows
              </p>

              {/* Search Bar */}
              <SearchBar 
                value={searchQuery}
                onChange={setSearchQuery}
              />

              {/* Category Navigation */}
              <CategoryButtons 
                categories={categories}
                onCategoryClick={handleCategoryClick}
              />
            </div>

            {/* Divider */}
            <div 
              className="w-full h-px my-16 mx-auto"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
                maxWidth: '600px'
              }}
            />

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

            {/* No results message */}
            {searchQuery && filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-white/60 text-lg">
                  No products found matching "{searchQuery}"
                </p>
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
