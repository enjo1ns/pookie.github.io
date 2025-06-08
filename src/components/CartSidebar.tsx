
import { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { Button } from '@/components/ui/button';
import { X, ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react';

const CartSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { items, removeFromCart, updateQuantity, getTotalItems, getTotalPrice, clearCart } = useCart();

  const handleCheckout = () => {
    alert('Order placed successfully! Thank you for your purchase.');
    clearCart();
    setIsOpen(false);
  };

  return (
    <>
      {/* Cart Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-20 right-6 z-40 bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-30 text-white p-3 rounded-full hover:bg-opacity-20 transition-all duration-300"
        style={{
          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)'
        }}
      >
        <ShoppingBag size={20} />
        {getTotalItems() > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {getTotalItems()}
          </span>
        )}
      </button>

      {/* Cart Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Sidebar */}
          <div 
            className="ml-auto w-full max-w-md h-full"
            style={{
              background: 'rgba(0, 0, 0, 0.9)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white border-opacity-10">
              <h2 className="font-cinzel text-xl text-white">Shopping Cart</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-300 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="text-center text-gray-400 mt-8">
                  <ShoppingBag size={48} className="mx-auto mb-4 opacity-50" />
                  <p>Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center space-x-4 p-4 rounded-lg"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="text-white font-medium text-sm">{item.name}</h3>
                        <p className="text-gray-400 text-xs">{item.type}</p>
                        <p className="text-white font-bold">${item.price}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="text-white hover:text-gray-300 p-1"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="text-white text-sm w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="text-white hover:text-gray-300 p-1"
                        >
                          <Plus size={16} />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-400 hover:text-red-300 p-1 ml-2"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-white border-opacity-10">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-white font-medium">Total:</span>
                  <span className="text-white font-bold text-xl">${getTotalPrice()}</span>
                </div>
                <Button
                  onClick={handleCheckout}
                  className="w-full bg-white text-black hover:bg-gray-200 font-medium py-3"
                >
                  Place Order
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CartSidebar;
