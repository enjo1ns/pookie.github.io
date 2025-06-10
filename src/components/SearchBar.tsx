
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchBar = ({ value, onChange, placeholder = "Search products..." }: SearchBarProps) => {
  return (
    <div className="relative max-w-md mx-auto">
      <div 
        className="relative rounded-xl overflow-hidden"
        style={{
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
        }}
      >
        <Search 
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 z-10" 
          size={18} 
        />
        <Input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="pl-12 pr-4 py-3 bg-transparent border-0 text-white placeholder:text-white/50 focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
          style={{
            fontSize: '14px'
          }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
