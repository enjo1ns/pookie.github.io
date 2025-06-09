
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

        {/* Enhanced Interactive Moon with better design */}
        <div className="hidden lg:block relative">
          <div className="relative w-96 h-96 overflow-visible">
            {/* Main Moon with enhanced styling */}
            <div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full transition-all duration-700 ease-out cursor-pointer"
              style={{
                background: `
                  radial-gradient(circle at 35% 25%, 
                    rgba(255, 255, 255, 0.95) 0%, 
                    rgba(240, 240, 245, 0.9) 20%,
                    rgba(220, 220, 230, 0.85) 40%,
                    rgba(200, 200, 215, 0.8) 60%,
                    rgba(180, 180, 200, 0.75) 80%,
                    rgba(160, 160, 185, 0.7) 100%
                  )
                `,
                boxShadow: `
                  0 0 40px rgba(255,255,255,0.4),
                  0 0 80px rgba(255,255,255,0.2),
                  0 0 120px rgba(255,255,255,0.1),
                  inset -15px -15px 30px rgba(0,0,0,0.2),
                  inset 5px 5px 20px rgba(255,255,255,0.3)
                `,
                transform: `
                  translate(-50%, -50%) 
                  translate(${(mousePosition.x - window.innerWidth/2) * 0.001}px, ${(mousePosition.y - window.innerHeight/2) * 0.001}px)
                `,
                filter: 'blur(0.2px)'
              }}
            >
              {/* Enhanced Moon surface details */}
              <div className="absolute top-8 left-10 w-4 h-4 rounded-full bg-gray-300 opacity-60 shadow-inner"></div>
              <div className="absolute top-16 right-8 w-3 h-3 rounded-full bg-gray-400 opacity-50 shadow-inner"></div>
              <div className="absolute bottom-12 left-8 w-5 h-5 rounded-full bg-gray-350 opacity-55 shadow-inner"></div>
              <div className="absolute bottom-8 right-12 w-2 h-2 rounded-full bg-gray-400 opacity-45 shadow-inner"></div>
              <div className="absolute top-12 left-16 w-2 h-2 rounded-full bg-gray-300 opacity-50 shadow-inner"></div>
            </div>

            {/* Random Orbiting Particles - Now with better distribution and no boundaries */}
            {[...Array(16)].map((_, i) => {
              const angle = (i * 22.5) + Math.sin(Date.now() * 0.0005 + i) * 15;
              const radius = 90 + Math.sin(Date.now() * 0.0008 + i * 1.5) * 25;
              const size = 1.5 + Math.sin(Date.now() * 0.001 + i * 2) * 0.5;
              
              return (
                <div
                  key={i}
                  className="absolute rounded-full opacity-70"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    background: `radial-gradient(circle, 
                      rgba(255,255,255,0.9) 0%, 
                      rgba(255,255,255,0.6) 50%, 
                      rgba(255,255,255,0.2) 100%
                    )`,
                    top: '50%',
                    left: '50%',
                    transform: `
                      translate(-50%, -50%) 
                      rotate(${angle + (mousePosition.x + mousePosition.y) * 0.008}deg) 
                      translateX(${radius}px)
                    `,
                    filter: 'blur(0.3px)',
                    transition: 'transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    boxShadow: '0 0 6px rgba(255,255,255,0.6)'
                  }}
                />
              );
            })}

            {/* Enhanced floating dust particles - Random distribution */}
            {[...Array(25)].map((_, i) => {
              const randomX = -50 + Math.random() * 200;
              const randomY = -50 + Math.random() * 200;
              const randomSize = 0.5 + Math.random() * 1;
              const randomOpacity = 0.3 + Math.random() * 0.4;
              
              return (
                <div
                  key={`dust-${i}`}
                  className="absolute rounded-full"
                  style={{
                    width: `${randomSize}px`,
                    height: `${randomSize}px`,
                    background: 'rgba(255,255,255,0.8)',
                    top: '50%',
                    left: '50%',
                    opacity: randomOpacity,
                    transform: `
                      translate(-50%, -50%) 
                      translate(${randomX + Math.sin(Date.now() * 0.0012 + i) * 12}px, ${randomY + Math.cos(Date.now() * 0.0008 + i) * 15}px)
                    `,
                    animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 3}s`,
                    filter: 'blur(0.3px)',
                    boxShadow: '0 0 3px rgba(255,255,255,0.5)'
                  }}
                />
              );
            })}

            {/* Enhanced primary glow effect */}
            <div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full pointer-events-none opacity-25"
              style={{
                background: `radial-gradient(circle, 
                  rgba(255,255,255,0.2) 0%, 
                  rgba(255,255,255,0.1) 30%, 
                  rgba(255,255,255,0.05) 60%, 
                  transparent 85%
                )`,
                filter: 'blur(25px)',
                transform: `
                  translate(-50%, -50%) 
                  translate(${(mousePosition.x - window.innerWidth/2) * 0.0008}px, ${(mousePosition.y - window.innerHeight/2) * 0.0008}px)
                `,
                transition: 'transform 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
            />

            {/* Secondary outer glow for enhanced feathering */}
            <div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none opacity-15"
              style={{
                background: `radial-gradient(circle, 
                  rgba(255,255,255,0.1) 0%, 
                  rgba(255,255,255,0.05) 40%, 
                  transparent 75%
                )`,
                filter: 'blur(40px)',
                transform: `
                  translate(-50%, -50%) 
                  translate(${(mousePosition.x - window.innerWidth/2) * 0.0005}px, ${(mousePosition.y - window.innerHeight/2) * 0.0005}px)
                `,
                transition: 'transform 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
