
interface CategoryButtonsProps {
  categories: string[];
  onCategoryClick: (category: string) => void;
}

const CategoryButtons = ({ categories, onCategoryClick }: CategoryButtonsProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mt-10">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryClick(category)}
          className="group relative px-5 py-2.5 font-medium text-white transition-all duration-300 hover:scale-105 active:scale-95"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.01))',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '14px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
            fontFamily: 'Inter, sans-serif',
            fontSize: '13px',
            letterSpacing: '1px'
          }}
        >
          <span className="relative z-10 font-semibold tracking-wide">
            {category}
          </span>
          
          {/* Hover Background */}
          <div 
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))',
              border: '1px solid rgba(255,255,255,0.15)'
            }}
          />
          
          {/* Glow Effect */}
          <div 
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
            style={{
              boxShadow: '0 0 25px rgba(255,255,255,0.08), 0 8px 25px rgba(0,0,0,0.3)'
            }}
          />

          {/* Active State Indicator */}
          <div 
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white/60 group-hover:w-6 transition-all duration-300 rounded-full"
          />
        </button>
      ))}
    </div>
  );
};

export default CategoryButtons;
