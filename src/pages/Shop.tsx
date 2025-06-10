
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

  const ProductCard = ({ product, index }: { product: typeof allProducts[0], index: number }) => (
    <div
      className="group relative rounded-2xl transition-all duration-700 cursor-pointer mx-2"
      style={{
        width: '280px',
        height: '400px',
        background: 'rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        transform: `translateZ(${index === 1 ? '0px' : index === 0 ? '-50px' : '-50px'}) scale(${index === 1 ? '1' : '0.9'})`,
        filter: index === 1 ? 'blur(0px)' : 'blur(1px)',
        zIndex: index === 1 ? 10 : 5
      }}
      onClick={() => handleProductClick(product.id)}
    >
      <div className="p-6 h-full flex flex-col">
        <div className="h-48 mb-4 overflow-hidden rounded-xl">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        
        <div className="flex flex-col flex-grow">
          <span className="text-xs text-gray-400 uppercase tracking-wider mb-2">
            {product.type}
          </span>
          <h3 className="font-cinzel text-white text-xl mb-3 leading-tight">
            {product.name}
          </h3>
          <p className="text-gray-300 text-sm mb-4 flex-grow">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-white">
              ${product.price}
            </span>
            <Button 
              onClick={(e) => {
                e.stopPropagation();
                handleAddToCart(product);
              }}
              className="bg-white/10 border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  const CategoryCarousel = ({ title, products }: { title: string, products: typeof allProducts }) => (
    <div className="mb-16">
      <h2 className="font-cinzel text-3xl text-white mb-8 text-center">{title}</h2>
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full max-w-5xl mx-auto"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {products.map((product, index) => (
            <CarouselItem key={product.id} className="pl-2 md:pl-4 basis-full md:basis-1/3">
              <ProductCard product={product} index={1} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-black" />
        <CarouselNext className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-black" />
      </Carousel>
    </div>
  );

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
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Search for darkness..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:bg-white/15"
                  />
                </div>
              </div>

              {/* Category Navigation */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    variant={activeCategory === category.id ? "default" : "outline"}
                    className={`px-6 py-2 transition-all duration-300 ${
                      activeCategory === category.id
                        ? "bg-white text-black hover:bg-gray-200"
                        : "bg-white/10 border-white/20 text-white hover:bg-white/20"
                    }`}
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>

            <Separator className="bg-white/20 mb-16" />

            {/* Best Sellers Section */}
            <CategoryCarousel title="Best Sellers" products={bestSellers} />

            <Separator className="bg-white/20 mb-16" />

            {/* T-Shirts Section */}
            <CategoryCarousel title="T-Shirts" products={tshirts} />

            <Separator className="bg-white/20 mb-16" />

            {/* Hoodies Section */}
            <CategoryCarousel title="Hoodies" products={hoodies} />

            <Separator className="bg-white/20 mb-16" />

            {/* Sweatshirts Section */}
            <CategoryCarousel title="Sweatshirts" products={sweatshirts} />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Shop;
