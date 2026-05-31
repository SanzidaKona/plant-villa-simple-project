import React from 'react';
import { X, ShoppingCart, Trash2, Plus, Minus } from 'lucide-react';

export function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) {
  if (!isOpen) return null;

  const cartTotalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const cartSubtotal = cartItems.reduce((acc, item) => acc + (item.plant.price * item.quantity), 0);

  return (
    <div className="fixed inset-0 z-100 flex justify-end">
      <div 
        onClick={onClose} 
        className="absolute inset-0 bg-primary/40 backdrop-blur-xs transition-opacity" 
      />
      <div className="relative z-10 bg-surface dark:bg-[#121612] h-full w-full max-w-md shadow-2xl flex flex-col py-6 border-l border-outline-variant/30 text-on-surface animate-in slide-in-from-right duration-250">
        <div className="px-6 mb-6 flex justify-between items-center bg-surface dark:bg-[#121612]">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-secondary dark:text-emerald-450" />
            <h3 className="font-display font-semibold text-lg text-primary dark:text-white">Your Botanical Bag</h3>
            <span className="text-xs bg-surface-container dark:bg-[#222822] text-primary dark:text-gray-300 font-bold px-2 rounded-full">{cartTotalItems} item(s)</span>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-md text-primary dark:text-gray-400 hover:bg-surface-container cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Products List */}
        <div className="flex-1 overflow-y-auto px-6 space-y-4">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16">
              <ShoppingCart className="w-12 h-12 text-outline-variant dark:text-gray-600 mb-3" />
              <p className="font-display font-bold text-sm text-primary dark:text-gray-200">Bag is empty</p>
              <p className="text-xs text-on-surface-variant dark:text-gray-400 mt-1 max-w-[240px]">Explore our luxury specimens to add healthy greens to your interior.</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.plant.id} className="flex gap-4 p-3 bg-surface-container-low dark:bg-[#1a201b] rounded-xl border border-outline-variant/20 hover:border-outline-variant/50 transition-colors animate-fade-in">
                <img src={item.plant.image} className="w-12 h-16 rounded-md object-cover" alt={item.plant.name} referrerPolicy="no-referrer" />
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xs font-bold text-primary dark:text-white line-clamp-1">{item.plant.name}</h4>
                      <p className="text-[10px] text-on-surface-variant italic">{item.plant.scientificName}</p>
                    </div>
                    <button 
                      onClick={() => onRemoveItem(item.plant.id)}
                      className="text-on-surface-variant hover:text-error dark:text-gray-400 dark:hover:text-rose-450 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => onUpdateQuantity(item.plant.id, -1)}
                        className="p-1 rounded bg-surface dark:bg-[#252d27] font-bold text-xs cursor-pointer hover:bg-surface-container"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.plant.id, 1)}
                        className="p-1 rounded bg-surface dark:bg-[#252d27] font-bold text-xs cursor-pointer hover:bg-surface-container"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <span className="text-xs font-bold text-primary dark:text-gray-200">${(item.plant.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Cart calculations & secure checkout */}
        {cartItems.length > 0 && (
          <div className="p-6 bg-surface-container-low dark:bg-[#1a201b] border-t border-outline-variant/30 mt-auto rounded-t-2xl space-y-4">
            <div className="flex justify-between text-xs text-on-surface-variant dark:text-gray-300">
              <span>Subtotal:</span>
              <span className="font-bold text-primary dark:text-white">${cartSubtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xs text-on-surface-variant dark:text-gray-300">
              <span>Organic Delivery courier:</span>
              <span className="font-semibold text-[#4a654f] dark:text-emerald-450">{cartSubtotal > 100 ? 'FREE' : '$15.05'}</span>
            </div>
            <div className="flex justify-between items-baseline text-sm font-bold text-primary dark:text-white pt-2 border-t border-outline-variant/20">
              <span>Estimated Total:</span>
              <span className="font-display text-lg">${(cartSubtotal + (cartSubtotal > 100 ? 0 : 15.05)).toFixed(2)}</span>
            </div>

            <button
              onClick={() => {
                alert("Order completed successfully under luxury greenhouse fulfillment protocol! Thank you for choosing Plant Villa.");
                onClearCart();
                onClose();
              }}
              className="w-full py-3 bg-primary dark:bg-[#2d4933] text-white text-xs uppercase tracking-widest font-bold rounded-xl cursor-pointer hover:bg-[#3d5d45] active:scale-95 transition-all text-center"
            >
              Checkout Secured Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
