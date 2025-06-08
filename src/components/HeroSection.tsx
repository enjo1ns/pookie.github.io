
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Sparkles, Star, Crown } from "lucide-react";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Premium SVG Bat Component
  const PremiumBat = ({ size = 24, opacity = 0.4, className = "" }) => (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      className={`text-white ${className}`}
      style={{ opacity }}
    >
      <path
        d="M12 2C11.5 2.5 11 3 10 3.5C9 4 8.5 4.5 8 5.5C7.5 6.5 7 7.5 6.5 8.5C6 9.5 5.5 10.5 5 11.5C4.5 12.5 4 13.5 3.5 14.5C3 15.5 2.5 16.5 2 17.5C1.5 18.5 1 19.5 0.5 20.5C0 21.5 0 22 0 22C0.5 21.5 1 21 1.5 20.5C2 20 2.5 19.5 3 19C3.5 18.5 4 18 4.5 17.5C5 17 5.5 16.5 6 16C6.5 15.5 7 15 7.5 14.5C8 14 8.5 13.5 9 13C9.5 12.5 10 12 10.5 11.5C11 11 11.5 10.5 12 10C12.5 10.5 13 11 13.5 11.5C14 12 14.5 12.5 15 13C15.5 13.5 16 14 16.5 14.5C17 15 17.5 15.5 18 16C18.5 16.5 19 17 19.5 17.5C20 18 20.5 18.5 21 19C21.5 19.5 22 20 22.5 20.5C23 21 23.5 21.5 24 22C24 22 24 21.5 23.5 20.5C23 19.5 22.5 18.5 22 17.5C21.5 16.5 21 15.5 20.5 14.5C20 13.5 19.5 12.5 19 11.5C18.5 10.5 18 9.5 17.5 8.5C17 7.5 16.5 6.5 16 5.5C15.5 4.5 15 4 14 3.5C13 3 12.5 2.5 12 2Z"
        fill="currentColor"
      />
      <circle cx="8" cy="8" r="1" fill="currentColor" opacity="0.8" />
      <circle cx="16" cy="8" r="1" fill="currentColor" opacity="0.8" />
    </svg>
  );

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Premium Animated Bats that follow scroll */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute transition-all duration-1000 ease-out"
          style={{
            top: `${20 + scrollY * 0.1}px`,
            left: `${25 + scrollY * 0.05}%`,
            transform: `translateY(${Math.sin(scrollY * 0.01) * 20}px) rotate(${scrollY * 0.02}deg)`
          }}
        >
          <PremiumBat size={28} opacity={0.4} className="drop-shadow-lg" />
        </div>
        <div 
          className="absolute transition-all duration-1000 ease-out" 
          style={{
            top: `${160 + scrollY * 0.08}px`,
            right: `${20 + scrollY * 0.03}%`,
            transform: `translateY(${Math.cos(scrollY * 0.008) * 15}px) rotate(${-scrollY * 0.015}deg)`
          }}
        >
          <PremiumBat size={24} opacity={0.35} className="drop-shadow-md" />
        </div>
        <div 
          className="absolute transition-all duration-1000 ease-out"
          style={{
            top: `${240 + scrollY * 0.12}px`,
            left: `${15 + scrollY * 0.04}%`,
            transform: `translateY(${Math.sin(scrollY * 0.012) * 25}px) rotate(${scrollY * 0.01}deg)`
          }}
        >
          <PremiumBat size={32} opacity={0.3} className="drop-shadow-xl" />
        </div>
        <div 
          className="absolute transition-all duration-1000 ease-out"
          style={{
            top: `${100 + scrollY * 0.06}px`,
            right: `${35 + scrollY * 0.07}%`,
            transform: `translateY(${Math.cos(scrollY * 0.009) * 18}px) rotate(${-scrollY * 0.025}deg)`
          }}
        >
          <PremiumBat size={26} opacity={0.25} className="drop-shadow-lg" />
        </div>
        <div 
          className="absolute transition-all duration-1000 ease-out"
          style={{
            top: `${320 + scrollY * 0.09}px`,
            left: `${60 + scrollY * 0.02}%`,
            transform: `translateY(${Math.sin(scrollY * 0.011) * 22}px) rotate(${scrollY * 0.03}deg)`
          }}
        >
          <PremiumBat size={30} opacity={0.2} className="drop-shadow-lg" />
        </div>
      </div>

      <div className="text-center max-w-3xl animate-fade-in-up relative z-10">
        {/* Premium Floating Icons */}
        <div className="mb-8 relative">
          <div className="absolute -top-8 -left-8 text-white opacity-40 animate-float">
            <Sparkles size={24} className="drop-shadow-lg" />
          </div>
          <div className="absolute -top-12 -right-6 text-white opacity-35 animate-float" style={{ animationDelay: '1s' }}>
            <Star size={20} className="drop-shadow-md" />
          </div>
          <div className="absolute -bottom-4 -left-12 text-white opacity-30 animate-float" style={{ animationDelay: '2s' }}>
            <Crown size={22} className="drop-shadow-lg" />
          </div>
          <div className="absolute -top-6 right-12 text-white opacity-25 animate-float" style={{ animationDelay: '0.5s' }}>
            <Sparkles size={18} className="drop-shadow-sm" />
          </div>
        </div>

        {/* Main Title with Premium Styling */}
        <h1 
          className="font-cinzel font-bold text-4xl md:text-5xl text-white mb-4 relative"
          style={{
            textShadow: '0 0 20px rgba(255,255,255,0.6), 0 0 40px rgba(255,255,255,0.3), 0 2px 4px rgba(0,0,0,0.3)'
          }}
        >
          Where Shadows Dress in Style
          {/* Enhanced Underline Glow Effect */}
          <div 
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-px opacity-80"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), rgba(255,255,255,0.6), rgba(255,255,255,0.8), transparent)',
              boxShadow: '0 0 15px rgba(255,255,255,0.6), 0 0 30px rgba(255,255,255,0.3)'
            }}
          />
        </h1>

        {/* Enhanced Subheading */}
        <p 
          className="font-inter text-base md:text-lg text-gray-300 mb-8 max-w-xl mx-auto leading-relaxed"
          style={{
            textShadow: '0 0 12px rgba(255,255,255,0.3), 0 1px 2px rgba(0,0,0,0.2)'
          }}
        >
          Unveil a darkly aesthetic wardrobe, curated for the bold and beautiful souls who dance with darkness.
        </p>

        {/* Premium CTA Button */}
        <Button 
          className="bg-transparent border-2 border-white text-white font-inter font-medium px-8 py-3 text-base hover:bg-white hover:text-black transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.7)] backdrop-blur-sm relative group overflow-hidden"
          style={{
            boxShadow: '0 0 20px rgba(255,255,255,0.3), inset 0 0 20px rgba(255,255,255,0.1)'
          }}
        >
          <span className="relative z-10 flex items-center gap-2">
            <Crown size={18} />
            Shop the Darkness
            <Sparkles size={16} className="group-hover:animate-pulse" />
          </span>
          {/* Enhanced Button Glow Effect */}
          <div className="absolute inset-0 rounded border-2 border-white opacity-0 group-hover:opacity-100 transition-all duration-500"
               style={{
                 boxShadow: '0 0 40px rgba(255,255,255,0.6), inset 0 0 40px rgba(255,255,255,0.2)'
               }}
          />
          {/* Premium Shimmer Effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
