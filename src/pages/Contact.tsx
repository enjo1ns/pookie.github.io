
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@pookie.com",
      description: "Send us a message anytime",
      link: "mailto:hello@pookie.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Call us directly",
      link: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Shadow District, Gothic City",
      description: "Visit our flagship store",
      link: "#"
    },
    {
      icon: Clock,
      title: "Hours",
      value: "Mon-Fri: 10AM-8PM",
      description: "We're here to help",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Enhanced Background */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url('/lovable-uploads/8f1e2ebe-c6ee-4b5c-904d-6cdcf48838b4.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
      </div>

      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {[...Array(25)].map((_, i) => (
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
          <div className="max-w-7xl mx-auto">
            {/* Enhanced Page Header */}
            <div className="text-center mb-20">
              <h1 
                className="font-cinzel text-5xl md:text-6xl text-white mb-6 font-bold"
                style={{
                  textShadow: '0 0 30px rgba(255,255,255,0.5), 0 0 60px rgba(255,255,255,0.2)',
                  letterSpacing: '2px'
                }}
              >
                Contact Us
              </h1>
              <p 
                className="font-inter text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                style={{
                  textShadow: '0 0 15px rgba(255,255,255,0.2)',
                  letterSpacing: '0.5px'
                }}
              >
                Reach out to us from the shadows. We're here to help you embrace the darkness and find your perfect gothic style.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Enhanced Contact Form */}
              <div 
                className="relative rounded-3xl p-10 border group hover:scale-[1.02] transition-all duration-700"
                style={{
                  background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02))',
                  backdropFilter: 'blur(25px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}
              >
                <h2 
                  className="font-cinzel text-3xl text-white mb-8 font-semibold"
                  style={{
                    textShadow: '0 0 20px rgba(255,255,255,0.4)'
                  }}
                >
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none transition-all duration-300 border"
                        style={{
                          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                          backdropFilter: 'blur(15px)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.4)'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'}
                        required
                      />
                    </div>
                    <div className="group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none transition-all duration-300 border"
                        style={{
                          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                          backdropFilter: 'blur(15px)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.4)'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'}
                        required
                      />
                    </div>
                  </div>
                  <div className="group">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none transition-all duration-300 border"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                        backdropFilter: 'blur(15px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.4)'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'}
                      required
                    />
                  </div>
                  <div className="group">
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none transition-all duration-300 resize-none border"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                        backdropFilter: 'blur(15px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.4)'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'}
                      required
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full h-14 text-lg font-medium relative overflow-hidden group rounded-xl"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))',
                      backdropFilter: 'blur(20px)',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                    }}
                  >
                    <span className="relative z-10 flex items-center justify-center text-white transition-colors duration-500 group-hover:text-black">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </span>
                    <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-xl" />
                  </Button>
                </form>

                {/* Form hover glow effect */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow: '0 0 50px rgba(255,255,255,0.1), inset 0 0 50px rgba(255,255,255,0.05)'
                  }}
                />
              </div>

              {/* Enhanced Contact Information */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="group"
                    style={{
                      animationDelay: `${index * 150}ms`
                    }}
                  >
                    <div 
                      className="relative rounded-2xl p-8 border transition-all duration-500 hover:scale-105 cursor-pointer"
                      style={{
                        background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02))',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)'
                      }}
                      onClick={() => info.link !== "#" && window.open(info.link, '_blank')}
                    >
                      <div className="flex items-start space-x-6">
                        <div className="p-4 rounded-2xl"
                             style={{
                               background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                               backdropFilter: 'blur(10px)'
                             }}>
                          <info.icon 
                            className="text-white group-hover:scale-110 transition-all duration-300" 
                            size={24}
                            style={{
                              filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.3))'
                            }}
                          />
                        </div>
                        <div className="flex-1">
                          <h3 
                            className="font-cinzel text-xl text-white mb-2 font-semibold"
                            style={{
                              textShadow: '0 0 15px rgba(255,255,255,0.4)'
                            }}
                          >
                            {info.title}
                          </h3>
                          <p 
                            className="font-inter text-white font-medium mb-2 text-lg"
                            style={{
                              textShadow: '0 0 10px rgba(255,255,255,0.3)'
                            }}
                          >
                            {info.value}
                          </p>
                          <p 
                            className="font-inter text-gray-300 text-sm"
                            style={{
                              textShadow: '0 0 8px rgba(255,255,255,0.2)'
                            }}
                          >
                            {info.description}
                          </p>
                        </div>
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
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Contact;
