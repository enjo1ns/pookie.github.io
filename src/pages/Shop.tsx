
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
  const [searchTerm, setSearchTerm] = useState("");
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
      name: "Dark Vintage Tee",
      price: 55,
      image: "/lovable-uploads/9bb25294-fbfd-4b7e-81d4-06bb5b98295f.png",
      type: "T-Shirt",
      description: "Vintage style dark t-shirt",
      category: "tshirts"
    }
  ];

  const categories = [
    { id: "all", name: "All", filter: () => true },
    { id: "tshirts", name: "T-Shirts", filter: (product: any) => product.category === "tshirts" },
    { id: "hoodies", name: "Hoodies", filter: (product: any) => product.category === "hoodies" },
    { id: "sweatshirts", name: "Sweatshirts", filter: (product: any) => product.category === "sweatshirts" }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.type.toLowerCase().includes(searchTerm.toLowerCase());
    const category = categories.find(cat => cat.id === activeCategory);
    const matchesCategory = category ? category.filter(product) : true;
    return matchesSearch && matchesCategory;
  });

  const bestSellers = products.slice(0, 4);
  const tshirts = products.filter(p => p.category === "tshirts");
  const hoodies = products.filter(p => p.category === "hoodies");
  const sweatshirts = products.filter(p => p.category === "sweatshirts");

  const handleAddToCart = (product: typeof products[0]) => {
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

  const scrollCarousel = (direction: 'left' | 'right', carouselRef: React.RefObject<HTMLDivElement>) => {
    if (carouselRef.current) {
      const scrollAmount = 280;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const CarouselSection = ({ title, products }: { title: string; products: typeof bestSellers }) => {
    const carouselRef = useRef<HTMLDivElement>(null);

    return (
      <div className="mb-16">
        <h2 className="font-cinzel text-2xl text-white mb-8 text-center">{title}</h2>
        <div className="relative">
          <button
            onClick={() => scrollCarousel('left', carouselRef)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scrollCarousel('right', carouselRef)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={20} />
          </button>
          
          <div 
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-12 py-4"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {products.map((product, index) => (
              <div
                key={product.id}
                className="flex-shrink-0 transition-all duration-500 hover:scale-105"
                style={{ 
                  scrollSnapAlign: 'center',
                  filter: 'blur(0px)',
                }}
                onClick={() => handleProductClick(product.id)}
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
                className="font-inter text-lg text-gray-300 max-w-2xl mx-auto mb-12"
                style={{
                  textShadow: '0 0 10px rgba(255,255,255,0.3)'
                }}
              >
                Explore our collection of gothic apparel, tailored to embrace the shadows
              </p>

              {/* Search Bar */}
              <div className="max-w-md mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" size={18} />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Category Buttons */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 backdrop-blur-sm border ${
                      activeCategory === category.id
                        ? 'bg-white/20 border-white/40 text-white'
                        : 'bg-white/5 border-white/20 text-white/80 hover:bg-white/10 hover:border-white/30'
                    } hover:scale-105`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mb-16" />

            {/* Best Sellers Carousel */}
            <CarouselSection title="Best Sellers" products={bestSellers} />

            {/* T-Shirts Carousel */}
            <CarouselSection title="T-Shirts" products={tshirts} />

            {/* Hoodies Carousel */}
            <CarouselSection title="Hoodies" products={hoodies} />

            {/* Sweatshirts Carousel */}
            {sweatshirts.length > 0 && (
              <CarouselSection title="Sweatshirts" products={sweatshirts} />
            )}
          </div>
        </div>

        <Footer />
      </div>

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Shop;
