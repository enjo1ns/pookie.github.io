
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Animated Bats that follow scroll */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute opacity-40 transition-all duration-1000 ease-out"
          style={{
            top: `${20 + scrollY * 0.1}px`,
            left: `${25 + scrollY * 0.05}%`,
            transform: `translateY(${Math.sin(scrollY * 0.01) * 20}px)`
          }}
        >
          🦇
        </div>
        <div 
          className="absolute opacity-30 transition-all duration-1000 ease-out" 
          style={{
            top: `${160 + scrollY * 0.08}px`,
            right: `${20 + scrollY * 0.03}%`,
            transform: `translateY(${Math.cos(scrollY * 0.008) * 15}px)`
          }}
        >
          🦇
        </div>
        <div 
          className="absolute opacity-35 transition-all duration-1000 ease-out"
          style={{
            top: `${240 + scrollY * 0.12}px`,
            left: `${15 + scrollY * 0.04}%`,
            transform: `translateY(${Math.sin(scrollY * 0.012) * 25}px)`
          }}
        >
          🦇
        </div>
        <div 
          className="absolute opacity-25 transition-all duration-1000 ease-out"
          style={{
            top: `${100 + scrollY * 0.06}px`,
            right: `${35 + scrollY * 0.07}%`,
            transform: `translateY(${Math.cos(scrollY * 0.009) * 18}px)`
          }}
        >
          🦇
        </div>
        <div 
          className="absolute opacity-20 transition-all duration-1000 ease-out"
          style={{
            top: `${320 + scrollY * 0.09}px`,
            left: `${60 + scrollY * 0.02}%`,
            transform: `translateY(${Math.sin(scrollY * 0.011) * 22}px)`
          }}
        >
          🦇
        </div>
      </div>

      <div className="text-center max-w-3xl animate-fade-in-up relative z-10">
        {/* Creative Hook Elements */}
        <div className="mb-8 relative">
          {/* Moon-like glowing orb with reduced brightness */}
          <div 
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-16 w-24 h-24 rounded-full opacity-15 animate-pulse"
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 40%, transparent 70%)',
              boxShadow: '0 0 30px rgba(255,255,255,0.1), inset 0 0 15px rgba(255,255,255,0.05)'
            }}
          />
          
          {/* Floating mystical symbols */}
          <div className="absolute -top-8 -left-8 text-white opacity-30 animate-float text-2xl">✦</div>
          <div className="absolute -top-12 -right-6 text-white opacity-25 animate-float text-xl" style={{ animationDelay: '1s' }}>◊</div>
          <div className="absolute -bottom-4 -left-12 text-white opacity-20 animate-float text-lg" style={{ animationDelay: '2s' }}>※</div>
        </div>

        {/* Main Title */}
        <h1 
          className="font-cinzel font-bold text-4xl md:text-5xl text-white mb-4 relative"
          style={{
            textShadow: '0 0 10px rgba(255,255,255,0.4), 0 0 20px rgba(255,255,255,0.2)'
          }}
        >
          Where Shadows Dress in Style
          {/* Underline glow effect */}
          <div 
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-px opacity-60"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
              boxShadow: '0 0 8px rgba(255,255,255,0.4)'
            }}
          />
        </h1>

        {/* Subheading */}
        <p 
          className="font-inter text-base md:text-lg text-gray-300 mb-8 max-w-xl mx-auto leading-relaxed"
          style={{
            textShadow: '0 0 8px rgba(255,255,255,0.2)'
          }}
        >
          Unveil a darkly aesthetic wardrobe, curated for the bold and beautiful souls who dance with darkness.
        </p>

        {/* CTA Button with enhanced styling */}
        <Button 
          className="bg-transparent border-2 border-white text-white font-inter font-medium px-8 py-3 text-base hover:bg-white hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] backdrop-blur-sm relative group"
          style={{
            boxShadow: '0 0 10px rgba(255,255,255,0.2)'
          }}
        >
          <span className="relative z-10">Shop the Darkness</span>
          {/* Button glow effect on hover */}
          <div className="absolute inset-0 rounded border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
               style={{
                 boxShadow: '0 0 30px rgba(255,255,255,0.4), inset 0 0 30px rgba(255,255,255,0.1)'
               }}
          />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
