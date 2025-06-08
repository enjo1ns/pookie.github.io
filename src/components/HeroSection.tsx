
import { Button } from "@/components/ui/button";
import { Bird } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Animated Birds */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="animate-float absolute top-20 left-1/4 opacity-30">
          <Bird className="text-white w-6 h-6" />
        </div>
        <div className="animate-float absolute top-40 right-1/4 opacity-20" style={{ animationDelay: '1s' }}>
          <Bird className="text-white w-5 h-5" />
        </div>
        <div className="animate-float absolute top-60 left-1/6 opacity-25" style={{ animationDelay: '2s' }}>
          <Bird className="text-white w-4 h-4" />
        </div>
      </div>

      <div className="text-center max-w-3xl animate-fade-in-up">
        {/* Main Title */}
        <h1 
          className="font-cinzel font-bold text-3xl md:text-5xl text-white mb-4"
          style={{
            textShadow: '0 0 10px rgba(255,255,255,0.4), 0 0 20px rgba(255,255,255,0.2)'
          }}
        >
          Where Shadows Dress in Style
        </h1>

        {/* Subheading */}
        <p 
          className="font-inter text-base md:text-lg text-gray-300 mb-6 max-w-xl mx-auto"
          style={{
            textShadow: '0 0 8px rgba(255,255,255,0.2)'
          }}
        >
          Unveil a darkly aesthetic wardrobe, curated for the bold and beautiful souls who dance with darkness.
        </p>

        {/* CTA Button */}
        <Button 
          className="bg-transparent border-2 border-white text-white font-inter font-medium px-6 py-2 text-base hover:bg-white hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] backdrop-blur-sm"
          style={{
            boxShadow: '0 0 10px rgba(255,255,255,0.2)'
          }}
        >
          Shop the Darkness
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
