
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Star } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-20 backdrop-blur-md border-b border-white border-opacity-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Star className="text-white" size={20} />
            <span className="font-cinzel text-xl text-white">pookie</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-inter text-sm transition-all duration-300 relative group ${
                  location.pathname === item.path
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
                <div 
                  className={`absolute bottom-0 left-0 w-full h-px bg-white transition-transform duration-300 ${
                    location.pathname === item.path
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                  style={{
                    boxShadow: '0 0 8px rgba(255,255,255,0.4)'
                  }}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-black bg-opacity-90 backdrop-blur-md border-b border-white border-opacity-10">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block font-inter text-sm transition-colors duration-300 ${
                    location.pathname === item.path
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
