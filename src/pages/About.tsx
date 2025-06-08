
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Star, Heart, Sparkles } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Star,
      title: "Premium Quality",
      description: "Crafted with the finest materials for lasting comfort and style"
    },
    {
      icon: Heart,
      title: "Passionate Design",
      description: "Each piece is designed with love for the gothic aesthetic"
    },
    {
      icon: Sparkles,
      title: "Unique Style",
      description: "Express your dark beauty with our exclusive collections"
    }
  ];

  return (
    <div className="min-h-screen bg-black relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url('/lovable-uploads/b64407f9-ac90-4973-8a85-05c0f1a51b08.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        
        <div className="pt-24 px-6 pb-20">
          <div className="max-w-4xl mx-auto">
            {/* Page Header */}
            <div className="text-center mb-16">
              <h1 
                className="font-cinzel text-4xl md:text-5xl text-white mb-6"
                style={{
                  textShadow: '0 0 20px rgba(255,255,255,0.5)'
                }}
              >
                About Pookie
              </h1>
              <div 
                className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-20"
                style={{
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
                }}
              >
                <p 
                  className="font-inter text-lg text-gray-200 leading-relaxed mb-6"
                  style={{
                    textShadow: '0 0 10px rgba(255,255,255,0.3)'
                  }}
                >
                  Welcome to the shadows, where fashion meets the mystique of darkness. Pookie was born from a passion for gothic aesthetics and the desire to create clothing that speaks to the soul of those who dare to be different.
                </p>
                <p 
                  className="font-inter text-lg text-gray-200 leading-relaxed"
                  style={{
                    textShadow: '0 0 10px rgba(255,255,255,0.3)'
                  }}
                >
                  Our journey began in the depths of creativity, where we discovered that true beauty lies in embracing the darkness within. Each piece in our collection is carefully crafted to embody the essence of gothic elegance, allowing you to express your unique style with confidence.
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative"
                >
                  <div 
                    className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 h-full border border-white border-opacity-20 transition-all duration-300 hover:scale-105 hover:bg-opacity-15"
                    style={{
                      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)'
                    }}
                  >
                    <feature.icon 
                      className="text-white mb-4 group-hover:scale-110 transition-transform duration-300" 
                      size={32}
                      style={{
                        filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.3))'
                      }}
                    />
                    <h3 
                      className="font-cinzel text-xl text-white mb-3"
                      style={{
                        textShadow: '0 0 10px rgba(255,255,255,0.4)'
                      }}
                    >
                      {feature.title}
                    </h3>
                    <p 
                      className="font-inter text-gray-300 leading-relaxed"
                      style={{
                        textShadow: '0 0 5px rgba(255,255,255,0.2)'
                      }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote Section */}
            <div className="text-center">
              <div 
                className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-20"
                style={{
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
                }}
              >
                <blockquote 
                  className="font-cinzel text-2xl md:text-3xl text-white italic mb-4"
                  style={{
                    textShadow: '0 0 15px rgba(255,255,255,0.4)'
                  }}
                >
                  "In darkness, we find our light. In shadows, we discover our truth."
                </blockquote>
                <p 
                  className="font-inter text-gray-300"
                  style={{
                    textShadow: '0 0 8px rgba(255,255,255,0.3)'
                  }}
                >
                  - The Philosophy of Pookie
                </p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default About;
