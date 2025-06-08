
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  type: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div 
      className="group relative rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer"
      style={{
        width: '205px',
        height: '321px',
        backgroundColor: 'rgba(16, 20, 24, 0.7)',
        border: '1px solid #2A2F33',
        boxShadow: '0 4px 20px rgba(255,255,255,0.1)'
      }}
    >
      {/* Product Image */}
      <div className="w-full h-48 rounded-t-lg overflow-hidden flex items-center justify-center">
        <img 
          src="/lovable-uploads/9bb25294-fbfd-4b7e-81d4-06bb5b98295f.png" 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Product Info */}
      <div className="p-4 text-center">
        <h3 className="font-inter font-medium text-white text-sm mb-2">
          {product.name}
        </h3>
        <p className="text-gray-400 text-xs mb-3">
          {product.type}
        </p>
        <p className="text-white font-semibold text-base">
          ${product.price}
        </p>
      </div>

      {/* Hover Border Glow Effect */}
      <div 
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          border: '2px solid rgba(255,255,255,0.6)',
          boxShadow: '0 0 25px rgba(255,255,255,0.3), inset 0 0 25px rgba(255,255,255,0.1)'
        }}
      />

      {/* Lift Effect Shadow */}
      <div 
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10"
        style={{
          boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
          transform: 'translateY(10px)'
        }}
      />
    </div>
  );
};

export default ProductCard;
