
import { Instagram, Heart, Star, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer 
      className="bg-black bg-opacity-80 backdrop-blur-lg border-t border-white border-opacity-20 py-12 px-6"
      style={{
        boxShadow: '0 -10px 30px rgba(0, 0, 0, 0.5)'
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo/Brand */}
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-3">
              <Star className="text-white" size={20} />
              <span 
                className="font-cinzel text-2xl text-white tracking-wider"
                style={{
                  textShadow: '0 0 10px rgba(255,255,255,0.3)',
                  letterSpacing: '0.1em'
                }}
              >
                pookie
              </span>
              <Sparkles className="text-white opacity-80" size={16} />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8 mb-6 md:mb-0">
            {['Home', 'Shop', 'About', 'Contact'].map((link) => (
              <a 
                key={link}
                href="#" 
                className="font-inter text-gray-300 hover:text-white transition-all duration-300 text-sm tracking-wide relative group"
                style={{ letterSpacing: '0.05em' }}
              >
                {link}
                <div className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"
                     style={{ boxShadow: '0 0 5px rgba(255,255,255,0.5)' }} />
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            {[Instagram, Heart].map((Icon, index) => (
              <a 
                key={index}
                href="#" 
                className="p-3 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 backdrop-blur-sm group"
                style={{
                  boxShadow: '0 0 15px rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <Icon size={18} className="text-white group-hover:scale-110 transition-transform duration-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="text-center mt-10 pt-8 border-t border-white border-opacity-20">
          <p 
            className="font-cinzel text-gray-300 italic text-lg tracking-wide"
            style={{
              textShadow: '0 0 8px rgba(255,255,255,0.2)',
              letterSpacing: '0.05em'
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
