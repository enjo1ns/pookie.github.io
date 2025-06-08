
import ProductCard from "./ProductCard";

const FeaturedClothing = () => {
  const products = [
    {
      id: 1,
      name: "Gothic T-Shirt",
      price: 30,
      image: "🦇",
      type: "T-Shirt"
    },
    {
      id: 2,
      name: "Shadow Sweatshirt",
      price: 45,
      image: "🦇",
      type: "Sweatshirt"
    },
    {
      id: 3,
      name: "Dark Hoodie",
      price: 60,
      image: "🦇",
      type: "Hoodie"
    },
    {
      id: 4,
      name: "Midnight Tee",
      price: 30,
      image: "🦇",
      type: "T-Shirt"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 
          className="font-cinzel text-4xl md:text-5xl text-white text-center mb-4"
          style={{
            textShadow: '0 0 8px rgba(255,255,255,0.3)'
          }}
        >
          FEATURED CLOTHING
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedClothing;
