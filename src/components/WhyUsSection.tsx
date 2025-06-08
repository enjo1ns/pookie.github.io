
import { Shield, Heart, Star } from "lucide-react";

const WhyUsSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Quality Materials",
      description: "Our fabrics are soft, comfortable, and durable."
    },
    {
      icon: Heart,
      title: "Sustainable Fashion",
      description: "Eco-friendly practices in every step."
    },
    {
      icon: Star,
      title: "Unique Designs",
      description: "Exclusive dark-themed styles."
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 
          className="font-cinzel text-4xl md:text-5xl text-white text-center mb-16"
          style={{
            textShadow: '0 0 8px rgba(255,255,255,0.3)'
          }}
        >
          WHY US
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white bg-opacity-5 backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-10 hover:border-opacity-30 transition-all duration-300 hover:scale-105 text-center"
              style={{
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
              }}
            >
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div 
                  className="p-4 rounded-full bg-white bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300"
                  style={{
                    boxShadow: '0 0 20px rgba(255,255,255,0.2)'
                  }}
                >
                  <feature.icon 
                    size={32} 
                    className="text-white"
                    style={{
                      filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.3))'
                    }}
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="font-cinzel text-xl text-white mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="font-inter text-gray-300 leading-relaxed">
                {feature.description}
              </p>

              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  boxShadow: '0 0 30px rgba(255,255,255,0.1)'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
