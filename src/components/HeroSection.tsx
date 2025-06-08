
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Animated Bats */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="animate-float absolute top-20 left-1/4 text-white opacity-30 text-2xl">🦇</div>
        <div className="animate-float absolute top-40 right-1/4 text-white opacity-20 text-xl" style={{ animationDelay: '1s' }}>🦇</div>
        <div className="animate-float absolute top-60 left-1/6 text-white opacity-25 text-lg" style={{ animationDelay: '2s' }}>🦇</div>
      </div>

      <div className="text-center max-w-4xl animate-fade-in-up">
        {/* Main Title */}
        <h1 
          className="font-cinzel font-bold text-5xl md:text-7xl text-white mb-6"
          style={{
            textShadow: '0 0 10px rgba(255,255,255,0.4), 0 0 20px rgba(255,255,255,0.2)'
          }}
        >
          Where Shadows Dress in Style
        </h1>

        {/* Subheading */}
        <p 
          className="font-inter text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          style={{
            textShadow: '0 0 8px rgba(255,255,255,0.2)'
          }}
        >
          Unveil a darkly aesthetic wardrobe, curated for the bold and beautiful souls who dance with darkness.
        </p>

        {/* CTA Button */}
        <Button 
          className="bg-transparent border-2 border-white text-white font-inter font-medium px-8 py-3 text-lg hover:bg-white hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] backdrop-blur-sm"
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
