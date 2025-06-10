
interface CategoryButtonsProps {
  categories: string[];
  onCategoryClick: (category: string) => void;
}

const CategoryButtons = ({ categories, onCategoryClick }: CategoryButtonsProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryClick(category)}
          className="group relative px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-105"
          style={{
            background: 'rgba(255, 255, 255, 0.06)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
          }}
        >
          <span className="relative z-10 text-sm tracking-wide">
            {category}
          </span>
          
          {/* Hover effect */}
          <div 
            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: 'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
              border: '1px solid rgba(255,255,255,0.3)'
            }}
          />
          
          {/* Subtle glow */}
          <div 
            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
            style={{
              boxShadow: '0 0 20px rgba(255,255,255,0.1)'
            }}
          />
        </button>
      ))}
    </div>
  );
};

export default CategoryButtons;
