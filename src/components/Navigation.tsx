
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Star, ShoppingCart } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import CartSidebar from "./CartSidebar";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();
  const { items } = useCart();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-20 backdrop-blur-md border-b border-white border-opacity-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <Star className="text-white animate-pulse" size={20} />
              <span className="font-avenir text-xl text-white">pookie</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-sf text-sm transition-all duration-300 relative group ${
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
              
              {/* Cart Button */}
              <button
                onClick={toggleCart}
                className="relative text-white hover:text-gray-300 transition-all duration-300 p-2 hover:scale-110 group"
              >
                <ShoppingCart size={20} className="group-hover:animate-pulse" />
                {totalItems > 0 && (
                  <span 
                    className="absolute -top-1 -right-1 bg-white text-black text-xs rounded-full h-5 w-5 flex items-center justify-center font-sf font-medium animate-pulse"
                    style={{
                      boxShadow: '0 0 10px rgba(255,255,255,0.6)'
                    }}
                  >
                    {totalItems}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Menu Button and Cart */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleCart}
                className="relative text-white p-2 hover:scale-110 transition-transform duration-300"
              >
                <ShoppingCart size={20} />
                {totalItems > 0 && (
                  <span 
                    className="absolute -top-1 -right-1 bg-white text-black text-xs rounded-full h-4 w-4 flex items-center justify-center font-sf font-medium animate-pulse"
                    style={{
                      boxShadow: '0 0 10px rgba(255,255,255,0.6)'
                    }}
                  >
                    {totalItems}
                  </span>
                )}
              </button>
              <button
                onClick={toggleMenu}
                className="text-white p-2 hover:scale-110 transition-transform duration-300"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
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
                    className={`block font-sf text-sm transition-colors duration-300 ${
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

      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={closeCart} />
    </>
  );
};

export default Navigation;
