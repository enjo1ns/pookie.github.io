
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import CartSidebar from "../components/CartSidebar";
import { Button } from "@/components/ui/button";
import { useCart } from "../contexts/CartContext";
import { useState } from "react";

const Shop = () => {
  const { addToCart } = useCart();
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const products = [
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
    }
  ];

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      type: product.type
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
        <CartSidebar />
        
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
                className="font-inter text-lg text-gray-300 max-w-2xl mx-auto"
                style={{
                  textShadow: '0 0 10px rgba(255,255,255,0.3)'
                }}
              >
                Explore our collection of gothic apparel, tailored to embrace the shadows
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group relative"
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  {/* Wide Product Card */}
                  <div 
                    className="relative rounded-xl overflow-hidden transition-all duration-300 hover:scale-105"
                    style={{
                      background: 'rgba(255, 255, 255, 0.08)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      boxShadow: hoveredProduct === product.id 
                        ? '0 25px 50px rgba(255, 255, 255, 0.1), 0 0 40px rgba(255, 255, 255, 0.2)'
                        : '0 10px 30px rgba(0, 0, 0, 0.3)'
                    }}
                  >
                    <div className="flex flex-col md:flex-row">
                      {/* Product Image */}
                      <div className="md:w-1/2 aspect-square md:aspect-auto overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="md:w-1/2 p-8 flex flex-col justify-between">
                        <div>
                          <h3 className="font-cinzel font-bold text-white text-xl mb-3">
                            {product.name}
                          </h3>
                          <p className="text-gray-300 text-sm mb-2 uppercase tracking-wider">
                            {product.type}
                          </p>
                          <p className="text-gray-400 text-sm mb-6">
                            {product.description}
                          </p>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-white font-bold text-2xl">
                            ${product.price}
                          </span>
                          <Button 
                            onClick={() => handleAddToCart(product)}
                            className="bg-white bg-opacity-10 border-2 border-white border-opacity-30 text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm px-6 py-2 font-medium"
                            style={{
                              boxShadow: '0 4px 15px rgba(255, 255, 255, 0.1)'
                            }}
                          >
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    {hoveredProduct === product.id && (
                      <div 
                        className="absolute inset-0 rounded-xl pointer-events-none"
                        style={{
                          background: 'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                          boxShadow: 'inset 0 0 30px rgba(255,255,255,0.2)'
                        }}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Shop;
