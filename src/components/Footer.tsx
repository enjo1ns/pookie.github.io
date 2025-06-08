
import { Instagram, Heart, Star } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-80 backdrop-blur-sm border-t border-white border-opacity-20 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo/Brand */}
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-3">
              <Star className="text-white" size={20} />
              <span className="font-cinzel text-xl text-white tracking-wider font-semibold">pookie</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8 mb-6 md:mb-0">
            <a href="#" className="font-inter text-gray-300 hover:text-white transition-colors duration-300 text-sm tracking-wide font-medium">
              Home
            </a>
            <a href="#" className="font-inter text-gray-300 hover:text-white transition-colors duration-300 text-sm tracking-wide font-medium">
              Shop
            </a>
            <a href="#" className="font-inter text-gray-300 hover:text-white transition-colors duration-300 text-sm tracking-wide font-medium">
              About
            </a>
            <a href="#" className="font-inter text-gray-300 hover:text-white transition-colors duration-300 text-sm tracking-wide font-medium">
              Contact
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="p-3 rounded-full bg-white bg-opacity-10 hover:bg-opacity-25 transition-all duration-300 group"
              style={{
                boxShadow: '0 0 15px rgba(255,255,255,0.2)'
              }}
            >
              <Instagram size={18} className="text-white group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full bg-white bg-opacity-10 hover:bg-opacity-25 transition-all duration-300 group"
              style={{
                boxShadow: '0 0 15px rgba(255,255,255,0.2)'
              }}
            >
              <Heart size={18} className="text-white group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* Quote */}
        <div className="text-center mt-8 pt-8 border-t border-white border-opacity-20">
          <p 
            className="font-cinzel text-gray-400 italic text-lg tracking-wide font-light"
            style={{
              textShadow: '0 0 8px rgba(255,255,255,0.1)'
            }}
          >
            "Clothe your soul in shadows and silk."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
