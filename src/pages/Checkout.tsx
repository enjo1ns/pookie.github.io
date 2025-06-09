
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "../contexts/CartContext";
import { ArrowLeft, CreditCard, Lock, ShoppingBag } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Checkout = () => {
  const navigate = useNavigate();
  const { items, getTotalPrice, clearCart } = useCart();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    cardNumber: "",
    expiryDate: "",
    cvc: "",
    cardName: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendOrderToDiscord = async (orderData: any) => {
    const webhookUrl = "https://discord.com/api/webhooks/1380540131685171233/_jvGYdo_xGr6gG0TCwjATtSp2901A1iHcuzAgRtt3jSchLGNhU1lXsI6NoGG2jbEV_Xx";
    
    const embed = {
      title: "🛒 New Order Received!",
      color: 0x9333ea, // Purple color
      fields: [
        {
          name: "📧 Customer Email",
          value: orderData.email,
          inline: true
        },
        {
          name: "👤 Customer Name", 
          value: `${orderData.firstName} ${orderData.lastName}`,
          inline: true
        },
        {
          name: "💰 Total Amount",
          value: `$${orderData.total}`,
          inline: true
        },
        {
          name: "📍 Shipping Address",
          value: `${orderData.address}\n${orderData.city}, ${orderData.zipCode}`,
          inline: false
        },
        {
          name: "🛍️ Items Ordered",
          value: orderData.items.map((item: any) => 
            `• ${item.name} (${item.type}) - Qty: ${item.quantity} - $${item.price * item.quantity}`
          ).join('\n'),
          inline: false
        },
        {
          name: "💳 Payment Info",
          value: `Card ending in ${orderData.cardNumber.slice(-4)}\nCard Name: ${orderData.cardName}`,
          inline: false
        }
      ],
      timestamp: new Date().toISOString(),
      footer: {
        text: "Pookie Store - Order Management"
      }
    };

    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          embeds: [embed]
        }),
      });
    } catch (error) {
      console.error("Failed to send order to Discord:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Validate form
    const requiredFields = ['email', 'firstName', 'lastName', 'address', 'city', 'zipCode', 'cardNumber', 'expiryDate', 'cvc', 'cardName'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (missingFields.length > 0) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      setIsProcessing(false);
      return;
    }

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Send order to Discord
    const orderData = {
      ...formData,
      items,
      total: getTotalPrice(),
      orderDate: new Date().toISOString()
    };

    await sendOrderToDiscord(orderData);

    // Clear cart and show success
    clearCart();
    
    toast({
      title: "Order Placed Successfully! 🎉",
      description: "Your mystical order has been confirmed. Check your email for details.",
    });

    // Redirect to success page or home
    setTimeout(() => {
      navigate('/');
    }, 2000);

    setIsProcessing(false);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-black relative">
        <div className="fixed inset-0 z-0">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url('/lovable-uploads/79e337f6-b626-44f1-b37a-49f67d3c5675.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed'
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-70" />
        </div>
        
        <div className="relative z-10">
          <Navigation />
          <div className="pt-24 px-6 pb-20 text-center">
            <div className="max-w-md mx-auto">
              <ShoppingBag size={64} className="mx-auto mb-4 text-gray-400" />
              <h1 className="text-2xl font-bold text-white mb-4">Your cart is empty</h1>
              <p className="text-gray-300 mb-6">Add some mystical items to your cart before checking out.</p>
              <Button onClick={() => navigate('/shop')} className="bg-purple-600 hover:bg-purple-700">
                Continue Shopping
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black relative">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/lovable-uploads/79e337f6-b626-44f1-b37a-49f67d3c5675.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
      </div>

      <div className="relative z-10">
        <Navigation />
        
        <div className="pt-24 px-6 pb-20">
          <div className="max-w-6xl mx-auto">
            {/* Back Button */}
            <Button
              onClick={() => navigate(-1)}
              variant="ghost"
              className="mb-6 text-white hover:text-purple-300"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to Cart
            </Button>

            {/* Header */}
            <div className="text-center mb-12">
              <h1 
                className="font-cinzel text-4xl md:text-5xl text-white mb-4"
                style={{ textShadow: '0 0 20px rgba(255,255,255,0.5)' }}
              >
                ✨ Complete Your Order ✨
              </h1>
              <p className="text-gray-300 text-lg">
                Secure checkout for your mystical treasures
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Checkout Form */}
              <div 
                className="rounded-2xl p-8"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Contact Information */}
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-4 flex items-center">
                      <span className="mr-2">📧</span> Contact Information
                    </h3>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-black/50 border-gray-600 text-white placeholder-gray-400"
                      required
                    />
                  </div>

                  {/* Shipping Information */}
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-4 flex items-center">
                      <span className="mr-2">📍</span> Shipping Information
                    </h3>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <Input
                        name="firstName"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="bg-black/50 border-gray-600 text-white placeholder-gray-400"
                        required
                      />
                      <Input
                        name="lastName"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="bg-black/50 border-gray-600 text-white placeholder-gray-400"
                        required
                      />
                    </div>
                    <div className="space-y-4">
                      <Input
                        name="address"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="bg-black/50 border-gray-600 text-white placeholder-gray-400"
                        required
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <Input
                          name="city"
                          placeholder="City"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="bg-black/50 border-gray-600 text-white placeholder-gray-400"
                          required
                        />
                        <Input
                          name="zipCode"
                          placeholder="ZIP code"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          className="bg-black/50 border-gray-600 text-white placeholder-gray-400"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Payment Information */}
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-4 flex items-center">
                      <CreditCard className="mr-2" size={20} />
                      Payment Information
                    </h3>
                    <div className="space-y-4">
                      <Input
                        name="cardName"
                        placeholder="Name on card"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        className="bg-black/50 border-gray-600 text-white placeholder-gray-400"
                        required
                      />
                      <Input
                        name="cardNumber"
                        placeholder="Card number"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        className="bg-black/50 border-gray-600 text-white placeholder-gray-400"
                        maxLength={16}
                        required
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <Input
                          name="expiryDate"
                          placeholder="MM/YY"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          className="bg-black/50 border-gray-600 text-white placeholder-gray-400"
                          maxLength={5}
                          required
                        />
                        <Input
                          name="cvc"
                          placeholder="CVC"
                          value={formData.cvc}
                          onChange={handleInputChange}
                          className="bg-black/50 border-gray-600 text-white placeholder-gray-400"
                          maxLength={4}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full py-4 text-lg font-medium bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isProcessing ? (
                      <span className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <Lock className="mr-2" size={20} />
                        Complete Order - ${getTotalPrice()}
                      </span>
                    )}
                  </Button>
                </form>
              </div>

              {/* Order Summary */}
              <div 
                className="rounded-2xl p-8"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                <h3 className="text-white font-semibold text-lg mb-6">Order Summary</h3>
                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="text-white font-medium">{item.name}</h4>
                        <p className="text-gray-400 text-sm">{item.type}</p>
                        <p className="text-gray-300">Qty: {item.quantity}</p>
                      </div>
                      <div className="text-white font-medium">
                        ${item.price * item.quantity}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-gray-600 pt-4">
                  <div className="flex justify-between items-center text-xl font-bold text-white">
                    <span>Total:</span>
                    <span>${getTotalPrice()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Checkout;
