
import ProductCard from "./ProductCard";
import { useCart } from "../contexts/CartContext";

const FeaturedClothing = () => {
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: "Gothic T-Shirt",
      price: 30,
      image: "/lovable-uploads/9bb25294-fbfd-4b7e-81d4-06bb5b98295f.png",
      type: "T-Shirt"
    },
    {
      id: 2,
      name: "Dark Sweatshirt",
      price: 45,
      image: "/lovable-uploads/9bb25294-fbfd-4b7e-81d4-06bb5b98295f.png",
      type: "Sweatshirt"
    },
    {
      id: 3,
      name: "Shadow Hoodie",
      price: 60,
      image: "/lovable-uploads/9bb25294-fbfd-4b7e-81d4-06bb5b98295f.png",
      type: "Hoodie"
    },
    {
      id: 4,
      name: "White Gothic T-Shirt",
      price: 30,
      image: "/lovable-uploads/9bb25294-fbfd-4b7e-81d4-06bb5b98295f.png",
      type: "T-Shirt"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 
          className="font-cinzel text-2xl md:text-3xl text-white text-center mb-16"
          style={{
            textShadow: '0 0 8px rgba(255,255,255,0.3)'
          }}
        >
          FEATURED CLOTHING
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center px-8 py-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedClothing;
