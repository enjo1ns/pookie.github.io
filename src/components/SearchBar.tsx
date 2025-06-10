
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchBar = ({ value, onChange, placeholder = "Search the shadows..." }: SearchBarProps) => {
  return (
    <div className="relative max-w-lg mx-auto">
      <div 
        className="relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02]"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02))',
          backdropFilter: 'blur(25px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
        }}
      >
        <Search 
          className="absolute left-5 top-1/2 -translate-y-1/2 text-white/40 z-10 transition-colors duration-300" 
          size={20} 
        />
        <Input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="pl-14 pr-5 py-4 bg-transparent border-0 text-white placeholder:text-white/30 focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 text-base"
          style={{
            fontFamily: 'Inter, sans-serif',
            letterSpacing: '0.5px'
          }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
