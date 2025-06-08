
import HeroSection from "../components/HeroSection";
import FeaturedClothing from "../components/FeaturedClothing";
import WhyUsSection from "../components/WhyUsSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black relative">
      {/* Background Image with Parallax Effect */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url('/lovable-uploads/1e59507b-2801-4e90-a159-a7141b184c62.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <FeaturedClothing />
        <WhyUsSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
