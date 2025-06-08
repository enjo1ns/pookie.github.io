
import { Instagram, Heart, Star } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-60 backdrop-blur-sm border-t border-white border-opacity-10 py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo/Brand */}
          <div className="mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <Star className="text-white" size={16} />
              <span className="font-cinzel text-lg text-white">pookie</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="font-inter text-gray-300 hover:text-white transition-colors duration-300 text-sm">
              Home
            </a>
            <a href="#" className="font-inter text-gray-300 hover:text-white transition-colors duration-300 text-sm">
              Shop
            </a>
            <a href="#" className="font-inter text-gray-300 hover:text-white transition-colors duration-300 text-sm">
              About
            </a>
            <a href="#" className="font-inter text-gray-300 hover:text-white transition-colors duration-300 text-sm">
              Contact
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-3">
            <a 
              href="#" 
              className="p-2 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300"
              style={{
                boxShadow: '0 0 10px rgba(255,255,255,0.2)'
              }}
            >
              <Instagram size={16} className="text-white" />
            </a>
            <a 
              href="#" 
              className="p-2 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300"
              style={{
                boxShadow: '0 0 10px rgba(255,255,255,0.2)'
              }}
            >
              <Heart size={16} className="text-white" />
            </a>
          </div>
        </div>

        {/* Quote */}
        <div className="text-center mt-6 pt-6 border-t border-white border-opacity-10">
          <p 
            className="font-cinzel text-gray-400 italic text-base"
            style={{
              textShadow: '0 0 5px rgba(255,255,255,0.1)'
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
