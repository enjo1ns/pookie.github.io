
import { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { Button } from '@/components/ui/button';
import { X, ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react';

interface CartSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const CartSidebar = ({ isOpen = true, onClose }: CartSidebarProps) => {
  const { items, removeFromCart, updateQuantity, getTotalItems, getTotalPrice, clearCart } = useCart();

  const handleCheckout = () => {
    alert('Order placed successfully! Thank you for your purchase.');
    clearCart();
    if (onClose) onClose();
  };

  const handleClose = () => {
    if (onClose) onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Sidebar */}
      <div 
        className="ml-auto w-full max-w-md h-full animate-in slide-in-from-right duration-300"
        style={{
          background: 'rgba(0, 0, 0, 0.9)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 0 50px rgba(255, 255, 255, 0.1)'
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white border-opacity-10">
          <h2 
            className="font-avenir text-xl text-white"
            style={{
              textShadow: '0 0 10px rgba(255,255,255,0.3)'
            }}
          >
            Shopping Cart
          </h2>
          <button
            onClick={handleClose}
            className="text-white hover:text-gray-300 transition-all duration-300 hover:scale-110 hover:rotate-90"
          >
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center text-gray-400 mt-8">
              <ShoppingBag size={48} className="mx-auto mb-4 opacity-50 animate-pulse" />
              <p className="font-sf">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center space-x-4 p-4 rounded-lg transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 4px 20px rgba(255, 255, 255, 0.05)'
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded transition-transform duration-300 hover:scale-110"
                    style={{
                      boxShadow: '0 0 15px rgba(255, 255, 255, 0.2)'
                    }}
                  />
                  <div className="flex-1">
                    <h3 className="text-white font-sf font-medium text-sm">{item.name}</h3>
                    <p className="text-gray-400 font-sf text-xs">{item.type}</p>
                    <p 
                      className="text-white font-avenir font-bold"
                      style={{
                        textShadow: '0 0 5px rgba(255,255,255,0.3)'
                      }}
                    >
                      ${item.price}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="text-white hover:text-gray-300 p-1 hover:scale-110 transition-all duration-300"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="text-white font-sf text-sm w-8 text-center font-bold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="text-white hover:text-gray-300 p-1 hover:scale-110 transition-all duration-300"
                    >
                      <Plus size={16} />
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-400 hover:text-red-300 p-1 ml-2 hover:scale-110 transition-all duration-300"
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
              <span className="text-white font-sf font-medium">Total:</span>
              <span 
                className="text-white font-avenir font-bold text-xl"
                style={{
                  textShadow: '0 0 10px rgba(255,255,255,0.4)'
                }}
              >
                ${getTotalPrice()}
              </span>
            </div>
            <Button
              onClick={handleCheckout}
              className="w-full bg-white text-black hover:bg-gray-200 font-sf font-medium py-3 transition-all duration-300 hover:scale-105"
              style={{
                boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)'
              }}
            >
              Place Order
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;
