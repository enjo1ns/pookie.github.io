
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Star, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [batClicked, setBatClicked] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleBatClick = () => {
    setBatClicked(true);
    setTimeout(() => setBatClicked(false), 1000);
  };

  return (
    <section className="min-h-screen flex items-center px-6 relative overflow-hidden pt-16">
      {/* Interactive Corner Bat */}
      <div className="absolute top-4 right-4 z-20">
        <img 
          src="/lovable-uploads/b64407f9-ac90-4973-8a85-05c0f1a51b08.png" 
          alt="Interactive bat"
          className={`w-12 h-12 cursor-pointer transition-all duration-500 hover:scale-125 hover:rotate-12 ${
            batClicked ? 'animate-bounce scale-150 rotate-45' : ''
          }`}
          onClick={handleBatClick}
          style={{
            filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.3))',
            opacity: 0.8
          }}
        />
      </div>

      {/* Animated Bats that follow scroll */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src="/lovable-uploads/49935eb7-dfd9-4883-b890-e9474054b293.png" 
          alt="bat"
          className="absolute opacity-40 transition-all duration-1000 ease-out w-8 h-8"
          style={{
            top: `${20 + scrollY * 0.1}px`,
            left: `${25 + scrollY * 0.05}%`,
            transform: `translateY(${Math.sin(scrollY * 0.01) * 20}px)`
          }}
        />
        <img 
          src="/lovable-uploads/49935eb7-dfd9-4883-b890-e9474054b293.png" 
          alt="bat"
          className="absolute opacity-30 transition-all duration-1000 ease-out w-6 h-6" 
          style={{
            top: `${160 + scrollY * 0.08}px`,
            right: `${20 + scrollY * 0.03}%`,
            transform: `translateY(${Math.cos(scrollY * 0.008) * 15}px)`
          }}
        />
        <img 
          src="/lovable-uploads/49935eb7-dfd9-4883-b890-e9474054b293.png" 
          alt="bat"
          className="absolute opacity-35 transition-all duration-1000 ease-out w-7 h-7"
          style={{
            top: `${240 + scrollY * 0.12}px`,
            left: `${15 + scrollY * 0.04}%`,
            transform: `translateY(${Math.sin(scrollY * 0.012) * 25}px)`
          }}
        />
        <img 
          src="/lovable-uploads/49935eb7-dfd9-4883-b890-e9474054b293.png" 
          alt="bat"
          className="absolute opacity-25 transition-all duration-1000 ease-out w-5 h-5"
          style={{
            top: `${100 + scrollY * 0.06}px`,
            right: `${35 + scrollY * 0.07}%`,
            transform: `translateY(${Math.cos(scrollY * 0.009) * 18}px)`
          }}
        />
        <img 
          src="/lovable-uploads/49935eb7-dfd9-4883-b890-e9474054b293.png" 
          alt="bat"
          className="absolute opacity-20 transition-all duration-1000 ease-out w-6 h-6"
          style={{
            top: `${320 + scrollY * 0.09}px`,
            left: `${60 + scrollY * 0.02}%`,
            transform: `translateY(${Math.sin(scrollY * 0.011) * 22}px)`
          }}
        />
      </div>

      {/* Left Content Container */}
      <div className="max-w-6xl mx-auto flex items-center justify-between w-full">
        <div className="text-left max-w-2xl animate-fade-in-up relative z-10">
          {/* Creative Hook Elements */}
          <div className="mb-8 relative">
            {/* Floating mystical symbols */}
            <div className="absolute -top-8 -left-8 text-white opacity-30 animate-float text-2xl">✦</div>
            <div className="absolute -top-12 -right-6 text-white opacity-25 animate-float text-xl" style={{ animationDelay: '1s' }}>◊</div>
            <div className="absolute -bottom-4 -left-12 text-white opacity-20 animate-float text-lg" style={{ animationDelay: '2s' }}>※</div>
          </div>

          {/* Main Title with Premium Icon */}
          <div className="flex items-center mb-4">
            <Star className="text-white mr-3 opacity-80" size={24} />
            <h1 
              className="font-cinzel font-bold text-4xl md:text-5xl text-white relative"
              style={{
                textShadow: '0 0 10px rgba(255,255,255,0.4), 0 0 20px rgba(255,255,255,0.2)'
              }}
            >
              Pookie
              {/* Underline glow effect */}
              <div 
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-px opacity-60"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
                  boxShadow: '0 0 8px rgba(255,255,255,0.4)'
                }}
              />
            </h1>
            <Star className="text-white ml-3 opacity-80" size={24} />
          </div>

          {/* Subheading */}
          <p 
            className="font-inter text-base md:text-lg text-gray-300 mb-8 max-w-xl leading-relaxed"
            style={{
              textShadow: '0 0 8px rgba(255,255,255,0.2)'
            }}
          >
            Unveil a darkly aesthetic wardrobe, curated for the bold and beautiful souls who dance with darkness.
          </p>

          {/* CTA Button with enhanced styling and icon */}
          <Link to="/shop">
            <Button 
              className="bg-transparent border-2 border-white text-white font-inter font-medium px-8 py-3 text-base hover:bg-white hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] backdrop-blur-sm relative group"
              style={{
                boxShadow: '0 0 10px rgba(255,255,255,0.2)'
              }}
            >
              <Sparkles className="mr-2" size={18} />
              <span className="relative z-10">Shop the Darkness</span>
              {/* Button glow effect on hover */}
              <div className="absolute inset-0 rounded border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                   style={{
                     boxShadow: '0 0 30px rgba(255,255,255,0.4), inset 0 0 30px rgba(255,255,255,0.1)'
                   }}
              />
            </Button>
          </Link>
        </div>

        {/* Interactive Moon with Particles on Right - Improved with smoother edges and reduced sensitivity */}
        <div className="hidden lg:block relative">
          <div className="relative w-80 h-80">
            {/* Main Moon with feathered edges */}
            <div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full transition-all duration-500 ease-out cursor-pointer"
              style={{
                background: 'radial-gradient(circle at 30% 30%, #f8f9fa, #e9ecef, #6c757d)',
                boxShadow: '0 0 30px rgba(255,255,255,0.3), inset -10px -10px 20px rgba(0,0,0,0.3), 0 0 60px rgba(255,255,255,0.1)',
                transform: `translate(-50%, -50%) translate(${(mousePosition.x - window.innerWidth/2) * 0.008}px, ${(mousePosition.y - window.innerHeight/2) * 0.008}px)`,
                filter: 'blur(0.5px)'
              }}
            >
              {/* Moon craters */}
              <div className="absolute top-6 left-8 w-3 h-3 rounded-full bg-gray-400 opacity-40"></div>
              <div className="absolute top-12 right-6 w-2 h-2 rounded-full bg-gray-500 opacity-30"></div>
              <div className="absolute bottom-8 left-6 w-4 h-4 rounded-full bg-gray-400 opacity-25"></div>
            </div>

            {/* Orbiting Particles with smoother movement */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 rounded-full opacity-60 animate-pulse"
                style={{
                  background: 'radial-gradient(circle, rgba(255,255,255,0.8), rgba(255,255,255,0.3))',
                  top: '50%',
                  left: '50%',
                  transform: `
                    translate(-50%, -50%) 
                    rotate(${i * 45 + (mousePosition.x + mousePosition.y) * 0.03}deg) 
                    translateX(${80 + Math.sin(Date.now() * 0.001 + i) * 20}px)
                  `,
                  animationDelay: `${i * 0.2}s`,
                  filter: 'blur(0.5px)',
                  transition: 'transform 0.6s ease-out'
                }}
              />
            ))}

            {/* Floating Dust Particles with gentler movement */}
            {[...Array(12)].map((_, i) => (
              <div
                key={`dust-${i}`}
                className="absolute w-1 h-1 rounded-full opacity-40"
                style={{
                  background: 'rgba(255,255,255,0.6)',
                  top: `${20 + i * 5}%`,
                  left: `${15 + (i % 3) * 25}%`,
                  transform: `translate(${Math.sin(Date.now() * 0.002 + i) * 10}px, ${Math.cos(Date.now() * 0.0015 + i) * 15}px)`,
                  animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                  animationDelay: `${i * 0.3}s`,
                  filter: 'blur(0.5px)'
                }}
              />
            ))}

            {/* Enhanced Glow Effect with feathered edges */}
            <div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full pointer-events-none opacity-20"
              style={{
                background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 50%, transparent 80%)',
                filter: 'blur(20px)',
                transform: `translate(-50%, -50%) translate(${(mousePosition.x - window.innerWidth/2) * 0.006}px, ${(mousePosition.y - window.innerHeight/2) * 0.006}px)`,
                transition: 'transform 0.8s ease-out'
              }}
            />

            {/* Additional soft outer glow for feathered effect */}
            <div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full pointer-events-none opacity-10"
              style={{
                background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                filter: 'blur(30px)',
                transform: `translate(-50%, -50%) translate(${(mousePosition.x - window.innerWidth/2) * 0.004}px, ${(mousePosition.y - window.innerHeight/2) * 0.004}px)`,
                transition: 'transform 1s ease-out'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
