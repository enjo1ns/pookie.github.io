
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "../contexts/CartContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import ProductCard from "../components/ProductCard";

const Shop = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Products" },
    { id: "tshirt", name: "T-Shirts" },
    { id: "hoodie", name: "Hoodies" },
    { id: "sweatshirt", name: "Sweatshirts" }
  ];

  const allProducts = [
    {
      id: 1,
      name: "Gothic Black T-Shirt",
      price: 50,
      image: "/lovable-uploads/9bb25294-fbfd-4b7e-81d4-06bb5b98295f.png",
      type: "T-Shirt",
      category: "tshirt",
      description: "Premium gothic black t-shirt with unique design",
      bestseller: true
    },
    {
      id: 2,
      name: "Dark Sweatshirt",
      price: 75,
      image: "/lovable-uploads/9bb25294-fbfd-4b7e-81d4-06bb5b98295f.png",
      type: "Sweatshirt",
      category: "sweatshirt",
      description: "Comfortable dark sweatshirt for the modern goth",
      bestseller: true
    },
    {
      id: 3,
      name: "Shadow Hoodie",
      price: 90,
      image: "/lovable-uploads/9bb25294-fbfd-4b7e-81d4-06bb5b98295f.png",
      type: "Hoodie",
      category: "hoodie",
      description: "Cozy hoodie with mysterious shadow designs",
      bestseller: true
    },
    {
      id: 4,
      name: "White Gothic T-Shirt",
      price: 45,
      image: "/lovable-uploads/9bb25294-fbfd-4b7e-81d4-06bb5b98295f.png",
      type: "T-Shirt",
      category: "tshirt",
      description: "Elegant white t-shirt with gothic aesthetics",
      bestseller: false
    },
    {
      id: 5,
      name: "Midnight Hoodie",
      price: 95,
      image: "/lovable-uploads/9bb25294-fbfd-4b7e-81d4-06bb5b98295f.png",
      type: "Hoodie",
      category: "hoodie",
      description: "Deep black hoodie for those who embrace the night",
      bestseller: false
    },
    {
      id: 6,
      name: "Phantom Sweatshirt",
      price: 70,
      image: "/lovable-uploads/9bb25294-fbfd-4b7e-81d4-06bb5b98295f.png",
      type: "Sweatshirt",
      category: "sweatshirt",
      description: "Ethereal sweatshirt with phantom-inspired design",
      bestseller: false
    },
    {
      id: 7,
      name: "Raven T-Shirt",
      price: 55,
      image: "/lovable-uploads/9bb25294-fbfd-4b7e-81d4-06bb5b98295f.png",
      type: "T-Shirt",
      category: "tshirt",
      description: "Dark t-shirt featuring mystical raven artwork",
      bestseller: false
    },
    {
      id: 8,
      name: "Eclipse Hoodie",
      price: 100,
      image: "/lovable-uploads/9bb25294-fbfd-4b7e-81d4-06bb5b98295f.png",
      type: "Hoodie",
      category: "hoodie",
      description: "Limited edition hoodie with eclipse motif",
      bestseller: false
    }
  ];

  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  const bestSellers = allProducts.filter(product => product.bestseller);
  const tshirts = allProducts.filter(product => product.category === "tshirt");
  const hoodies = allProducts.filter(product => product.category === "hoodie");
  const sweatshirts = allProducts.filter(product => product.category === "sweatshirt");

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

  const CategoryCarousel = ({ title, products }: { title: string, products: typeof allProducts }) => (
    <div className="mb-16">
      <h2 className="font-cinzel text-3xl text-white mb-8 text-center">{title}</h2>
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full max-w-6xl mx-auto perspective-1000"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {products.map((product, index) => (
            <CarouselItem key={product.id} className="pl-2 md:pl-4 basis-full md:basis-1/3">
              <div 
                className="transition-all duration-700 transform-gpu"
                style={{
                  transform: `translateZ(${index === 1 ? '0px' : '-100px'}) scale(${index === 1 ? '1' : '0.85'})`,
                  filter: index === 1 ? 'blur(0px)' : 'blur(2px)',
                  opacity: index === 1 ? 1 : 0.6,
                  zIndex: index === 1 ? 10 : 5
                }}
              >
                <ProductCard 
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-110 hover:shadow-2xl" />
        <CarouselNext className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-110 hover:shadow-2xl" />
      </Carousel>
    </div>
  );

  const scrollToCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    
    let sectionId = '';
    switch(categoryId) {
      case 'all':
        sectionId = 'bestsellers';
        break;
      case 'tshirt':
        sectionId = 'tshirts';
        break;
      case 'hoodie':
        sectionId = 'hoodies';
        break;
      case 'sweatshirt':
        sectionId = 'sweatshirts';
        break;
      default:
        sectionId = 'bestsellers';
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
        <div className="absolute inset-0 bg-black bg-opacity-70" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        
        <div className="pt-24 px-6 pb-20">
          <div className="max-w-7xl mx-auto">
            {/* Page Header */}
            <div className="text-center mb-12">
              <h1 
                className="font-cinzel text-5xl md:text-6xl text-white mb-4"
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
              <div className="max-w-md mx-auto mb-8">
                <div className="relative group">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 transition-all duration-300 group-hover:text-white" />
                  <Input
                    type="text"
                    placeholder="Search for darkness..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:bg-white/15 transition-all duration-300 hover:bg-white/15 hover:border-white/40"
                  />
                </div>
              </div>

              {/* Category Navigation */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    onClick={() => scrollToCategory(category.id)}
                    variant={activeCategory === category.id ? "default" : "outline"}
                    className={`px-6 py-2 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl relative overflow-hidden group ${
                      activeCategory === category.id
                        ? "bg-white text-black hover:bg-gray-200 shadow-lg shadow-white/20"
                        : "bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/40"
                    }`}
                    style={{
                      boxShadow: activeCategory === category.id 
                        ? '0 0 30px rgba(255,255,255,0.3), 0 10px 20px rgba(0,0,0,0.3)' 
                        : '0 0 15px rgba(255,255,255,0.1)'
                    }}
                  >
                    <span className="relative z-10">{category.name}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </Button>
                ))}
              </div>
            </div>

            <Separator className="bg-white/20 mb-16" />

            {/* Best Sellers Section */}
            <div id="bestsellers">
              <CategoryCarousel title="Best Sellers" products={bestSellers} />
            </div>

            <Separator className="bg-white/20 mb-16" />

            {/* T-Shirts Section */}
            <div id="tshirts">
              <CategoryCarousel title="T-Shirts" products={tshirts} />
            </div>

            <Separator className="bg-white/20 mb-16" />

            {/* Hoodies Section */}
            <div id="hoodies">
              <CategoryCarousel title="Hoodies" products={hoodies} />
            </div>

            <Separator className="bg-white/20 mb-16" />

            {/* Sweatshirts Section */}
            <div id="sweatshirts">
              <CategoryCarousel title="Sweatshirts" products={sweatshirts} />
            </div>

            {/* Search Results Section */}
            {searchQuery && (
              <>
                <Separator className="bg-white/20 mb-16" />
                <div className="mb-16">
                  <h2 className="font-cinzel text-3xl text-white mb-8 text-center">
                    Search Results for "{searchQuery}"
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {filteredProducts.map(product => (
                      <div key={product.id} className="flex justify-center">
                        <ProductCard 
                          product={product}
                          onAddToCart={handleAddToCart}
                        />
                      </div>
                    ))}
                  </div>
                  {filteredProducts.length === 0 && (
                    <p className="text-center text-gray-400 text-lg">
                      No products found matching your search.
                    </p>
                  )}
                </div>
              </>
            )}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Shop;
