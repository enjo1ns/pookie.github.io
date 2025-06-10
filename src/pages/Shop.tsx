
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
    // Sweatshirts
    {
      id: 1,
      name: "Eclipse Crescent Sweatshirt",
      price: 89,
      image: "/lovable-uploads/d47f73fe-2d4e-4c75-a133-7d1722c9bed0.png",
      type: "Sweatshirt",
      description: "Mystical crescent moon design with celestial symbols. Premium heavyweight cotton blend.",
      features: ["Premium heavyweight cotton", "Celestial crescent design", "Ribbed cuffs and hem", "Unisex fit"],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      inStock: true,
      rating: 4.9
    },
    {
      id: 2,
      name: "Gothic AHH Statement Sweatshirt",
      price: 95,
      image: "/lovable-uploads/31c3ee47-4532-4a41-9f8c-083b3d4400ff.png",
      type: "Sweatshirt",
      description: "Bold distressed lettering with gothic aesthetic. Express your dark side.",
      features: ["Distressed print design", "Premium cotton blend", "Oversized fit", "Vintage wash"],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      inStock: true,
      rating: 4.7
    },
    {
      id: 3,
      name: "Understanding Archive Sweatshirt",
      price: 92,
      image: "/lovable-uploads/bded3195-115b-4df4-802f-7ec60d8b8526.png",
      type: "Sweatshirt",
      description: "Minimalist archive-inspired design with subtle branding. Modern gothic streetwear.",
      features: ["Archive-inspired design", "Contrast stitching", "Premium fleece lining", "Athletic fit"],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      inStock: true,
      rating: 4.8
    },
    // T-Shirts
    {
      id: 4,
      name: "Spectral Aura T-Shirt",
      price: 65,
      image: "/lovable-uploads/9f0fba0d-0378-492c-9687-809ff9e775a8.png",
      type: "T-Shirt",
      description: "Haunting spectral print with gradient effects. Ethereal gothic design.",
      features: ["Gradient spectral print", "100% premium cotton", "Oversized fit", "Glow-in-dark elements"],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      inStock: true,
      rating: 4.6
    },
    {
      id: 5,
      name: "Soulmate Strangers T-Shirt",
      price: 72,
      image: "/lovable-uploads/8d5a7eea-b9b9-4603-9124-9d0235c0ff38.png",
      type: "T-Shirt",
      description: "Melting figures design with philosophical text. Deep artistic expression.",
      features: ["Artistic melting print", "Soft premium cotton", "Regular fit", "Fade-resistant ink"],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      inStock: true,
      rating: 4.8
    },
    {
      id: 6,
      name: "Dark Flames T-Shirt",
      price: 68,
      image: "/lovable-uploads/2cfeaf05-363d-4a7c-a8a0-70f0673dcd83.png",
      type: "T-Shirt",
      description: "Symmetrical flame pattern with gothic undertones. Fire meets darkness.",
      features: ["Flame pattern design", "Lightweight cotton", "Oversized fit", "Metallic ink accents"],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      inStock: true,
      rating: 4.5
    },
    {
      id: 7,
      name: "Thorn Crown T-Shirt",
      price: 75,
      image: "/lovable-uploads/b1a580e3-d874-4b27-956c-919e89a014a1.png",
      type: "T-Shirt",
      description: "Intricate thorn crown pattern with detailed line work. Gothic elegance.",
      features: ["Detailed thorn design", "Premium ring-spun cotton", "Slim fit", "High-definition print"],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      inStock: true,
      rating: 4.9
    },
    // Hoodies
    {
      id: 8,
      name: "Sacred Gothic Hoodie",
      price: 125,
      image: "/lovable-uploads/215a7242-d046-43a2-baa2-def486c135d4.png",
      type: "Hoodie",
      description: "Religious gothic artwork with detailed embroidery. Sacred darkness meets streetwear.",
      features: ["Embroidered gothic art", "Premium heavyweight fleece", "Kangaroo pocket", "Lined hood"],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      inStock: true,
      rating: 4.9
    },
    {
      id: 9,
      name: "Anatomical Heart Hoodie",
      price: 135,
      image: "/lovable-uploads/cd3a3950-a538-40d3-9f8a-eb7d749ca7e4.png",
      type: "Hoodie",
      description: "Anatomical heart with wing details. Dark romance meets gothic fashion.",
      features: ["Anatomical heart print", "Vintage wash finish", "Oversized fit", "Drawstring hood"],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      inStock: true,
      rating: 4.7
    },
    {
      id: 10,
      name: "Medieval Warriors Hoodie",
      price: 142,
      image: "/lovable-uploads/fcc8db61-600d-4940-9279-28ce75cac860.png",
      type: "Hoodie",
      description: "Medieval warrior battle scene. Dark fantasy meets modern streetwear.",
      features: ["Medieval battle print", "Ultra-soft fleece", "Ribbed cuffs", "Front pocket"],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      inStock: true,
      rating: 4.8
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
