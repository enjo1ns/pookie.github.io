
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Star, Heart, Sparkles, Shield, Award, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Star,
      title: "Premium Quality",
      description: "Crafted with the finest materials for lasting comfort and style that transcends seasons"
    },
    {
      icon: Heart,
      title: "Passionate Design",
      description: "Each piece is designed with love for the gothic aesthetic and deep understanding of dark culture"
    },
    {
      icon: Sparkles,
      title: "Unique Style",
      description: "Express your dark beauty with our exclusive collections that celebrate individuality"
    },
    {
      icon: Shield,
      title: "Ethical Production",
      description: "Sustainably made with respect for both artisans and the environment"
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence in gothic fashion and innovative design approaches"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Built by and for the gothic community, understanding what truly matters"
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Enhanced Background */}
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
      </div>

      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        
        <div className="pt-28 px-6 pb-24">
          <div className="max-w-6xl mx-auto">
            {/* Enhanced Page Header */}
            <div className="text-center mb-20">
              <h1 
                className="font-cinzel text-5xl md:text-6xl text-white mb-8 font-bold"
                style={{
                  textShadow: '0 0 30px rgba(255,255,255,0.5), 0 0 60px rgba(255,255,255,0.2)',
                  letterSpacing: '2px'
                }}
              >
                About Pookie
              </h1>
              
              {/* Premium Description Card */}
              <div 
                className="relative max-w-4xl mx-auto rounded-3xl p-10 border group hover:scale-[1.02] transition-all duration-700"
                style={{
                  background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02))',
                  backdropFilter: 'blur(25px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}
              >
                <p 
                  className="font-inter text-xl text-gray-200 leading-relaxed mb-8"
                  style={{
                    textShadow: '0 0 15px rgba(255,255,255,0.2)',
                    letterSpacing: '0.5px'
                  }}
                >
                  Welcome to the shadows, where fashion meets the mystique of darkness. Pookie was born from a passion for gothic aesthetics and the desire to create clothing that speaks to the soul of those who dare to be different.
                </p>
                <p 
                  className="font-inter text-xl text-gray-200 leading-relaxed"
                  style={{
                    textShadow: '0 0 15px rgba(255,255,255,0.2)',
                    letterSpacing: '0.5px'
                  }}
                >
                  Our journey began in the depths of creativity, where we discovered that true beauty lies in embracing the darkness within. Each piece in our collection is carefully crafted to embody the essence of gothic elegance, allowing you to express your unique style with confidence and authenticity.
                </p>

                {/* Hover glow effect */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow: '0 0 50px rgba(255,255,255,0.1), inset 0 0 50px rgba(255,255,255,0.05)'
                  }}
                />
              </div>
            </div>

            {/* Premium Divider */}
            <div 
              className="w-full h-px my-20 mx-auto relative"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 20%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.2) 80%, transparent 100%)',
                maxWidth: '800px'
              }}
            >
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white/40 rounded-full"
                style={{
                  boxShadow: '0 0 15px rgba(255,255,255,0.3)'
                }}
              />
            </div>

            {/* Enhanced Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative h-full"
                  style={{
                    animationDelay: `${index * 150}ms`
                  }}
                >
                  <div 
                    className="relative rounded-2xl p-8 h-full border transition-all duration-500 hover:scale-105 cursor-default"
                    style={{
                      background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02))',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)'
                    }}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-6 p-4 rounded-2xl"
                           style={{
                             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                             backdropFilter: 'blur(10px)'
                           }}>
                        <feature.icon 
                          className="text-white group-hover:scale-110 transition-all duration-300" 
                          size={32}
                          style={{
                            filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.3))'
                          }}
                        />
                      </div>
                      <h3 
                        className="font-cinzel text-xl text-white mb-4 font-semibold"
                        style={{
                          textShadow: '0 0 15px rgba(255,255,255,0.4)'
                        }}
                      >
                        {feature.title}
                      </h3>
                      <p 
                        className="font-inter text-gray-300 leading-relaxed text-sm"
                        style={{
                          textShadow: '0 0 8px rgba(255,255,255,0.2)'
                        }}
                      >
                        {feature.description}
                      </p>
                    </div>

                    {/* Hover border effect */}
                    <div 
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
                      style={{
                        background: 'linear-gradient(45deg, rgba(255,255,255,0.1), transparent, rgba(255,255,255,0.1))',
                        padding: '1px'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Quote Section */}
            <div className="text-center">
              <div 
                className="relative max-w-4xl mx-auto rounded-3xl p-12 border group hover:scale-[1.02] transition-all duration-700"
                style={{
                  background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02))',
                  backdropFilter: 'blur(25px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="mb-8">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                       style={{
                         background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                         backdropFilter: 'blur(10px)'
                       }}>
                    <span className="text-white text-3xl font-cinzel">"</span>
                  </div>
                </div>
                
                <blockquote 
                  className="font-cinzel text-3xl md:text-4xl text-white italic mb-8 font-medium"
                  style={{
                    textShadow: '0 0 20px rgba(255,255,255,0.4)',
                    letterSpacing: '1px'
                  }}
                >
                  "In darkness, we find our light. In shadows, we discover our truth."
                </blockquote>
                <p 
                  className="font-inter text-gray-300 text-lg"
                  style={{
                    textShadow: '0 0 10px rgba(255,255,255,0.3)'
                  }}
                >
                  - The Philosophy of Pookie
                </p>

                {/* Quote hover glow effect */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow: '0 0 60px rgba(255,255,255,0.15), inset 0 0 60px rgba(255,255,255,0.08)'
                  }}
                />
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
