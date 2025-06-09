import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Star, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [batClicked, setBatClicked] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBatClick = () => {
    setBatClicked(true);
    setTimeout(() => setBatClicked(false), 1000);
  };

  // Load Spline viewer script
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.10.2/build/spline-viewer.js';
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-between px-6 relative overflow-hidden pt-16">
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

      {/* Left Content */}
      <div className="text-left max-w-xl animate-fade-in-up relative z-10 flex-1">
        {/* Creative Hook Elements */}
        <div className="mb-8 relative">
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
            <div 
              className="absolute bottom-0 left-0 w-3/4 h-px opacity-60"
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

        {/* CTA Button */}
        <Link to="/shop">
          <Button 
            className="bg-transparent border-2 border-white text-white font-inter font-medium px-8 py-3 text-base hover:bg-white hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] backdrop-blur-sm relative group"
            style={{
              boxShadow: '0 0 10px rgba(255,255,255,0.2)'
            }}
          >
            <Sparkles className="mr-2" size={18} />
            <span className="relative z-10">Shop the Darkness</span>
            <div className="absolute inset-0 rounded border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                 style={{
                   boxShadow: '0 0 30px rgba(255,255,255,0.4), inset 0 0 30px rgba(255,255,255,0.1)'
                 }}
            />
          </Button>
        </Link>
      </div>

      {/* Right Spline Object */}
      <div className="flex-1 max-w-lg h-96 relative z-10">
        <spline-viewer 
          url="https://prod.spline.design/Hsx6kMmoiLyd0U3M/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
