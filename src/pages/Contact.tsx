
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
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
      description: "Send us a message"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Call us directly"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Shadow District, Gothic City",
      description: "Visit our store"
    },
    {
      icon: Clock,
      title: "Hours",
      value: "Mon-Fri: 10AM-8PM",
      description: "We're here to help"
    }
  ];

  return (
    <div className="min-h-screen bg-black relative">
      {/* Background Image */}
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
        <div className="absolute inset-0 bg-black bg-opacity-70" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        
        <div className="pt-24 px-6 pb-20">
          <div className="max-w-6xl mx-auto">
            {/* Page Header */}
            <div className="text-center mb-16">
              <h1 
                className="font-cinzel text-4xl md:text-5xl text-white mb-4"
                style={{
                  textShadow: '0 0 20px rgba(255,255,255,0.5)'
                }}
              >
                Contact Us
              </h1>
              <p 
                className="font-inter text-lg text-gray-300 max-w-2xl mx-auto"
                style={{
                  textShadow: '0 0 10px rgba(255,255,255,0.3)'
                }}
              >
                Reach out to us from the shadows. We're here to help you embrace the darkness.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div 
                className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-20"
                style={{
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)'
                }}
              >
                <h2 
                  className="font-cinzel text-2xl text-white mb-6"
                  style={{
                    textShadow: '0 0 15px rgba(255,255,255,0.4)'
                  }}
                >
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-white bg-opacity-10 border border-white border-opacity-30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white focus:bg-opacity-20 transition-all duration-300 backdrop-blur-sm"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-white bg-opacity-10 border border-white border-opacity-30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white focus:bg-opacity-20 transition-all duration-300 backdrop-blur-sm"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full bg-white bg-opacity-10 border border-white border-opacity-30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white focus:bg-opacity-20 transition-all duration-300 backdrop-blur-sm"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full bg-white bg-opacity-10 border border-white border-opacity-30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white focus:bg-opacity-20 transition-all duration-300 backdrop-blur-sm resize-none"
                      required
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-white bg-opacity-20 border border-white border-opacity-40 text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm py-3"
                    style={{
                      boxShadow: '0 4px 15px rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="group"
                  >
                    <div 
                      className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 border border-white border-opacity-20 transition-all duration-300 hover:scale-105 hover:bg-opacity-15"
                      style={{
                        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)'
                      }}
                    >
                      <div className="flex items-start space-x-4">
                        <info.icon 
                          className="text-white mt-1 group-hover:scale-110 transition-transform duration-300" 
                          size={24}
                          style={{
                            filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.3))'
                          }}
                        />
                        <div>
                          <h3 
                            className="font-cinzel text-lg text-white mb-1"
                            style={{
                              textShadow: '0 0 10px rgba(255,255,255,0.4)'
                            }}
                          >
                            {info.title}
                          </h3>
                          <p 
                            className="font-inter text-white font-medium mb-1"
                            style={{
                              textShadow: '0 0 8px rgba(255,255,255,0.3)'
                            }}
                          >
                            {info.value}
                          </p>
                          <p 
                            className="font-inter text-gray-300 text-sm"
                            style={{
                              textShadow: '0 0 5px rgba(255,255,255,0.2)'
                            }}
                          >
                            {info.description}
                          </p>
                        </div>
                      </div>
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
