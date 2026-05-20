'use client';

import { motion } from 'motion/react';
import { CheckCircle2, ShoppingBag } from 'lucide-react';

export default function ProductCard({ product, onAddToCart }) {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="group bg-[#ffffff] border border-[#c3c8c2]/20 rounded-xl overflow-hidden shadow-md hover:-translate-y-2 transition-all duration-500"
    >
      {/* Product Image */}
    
      <div className="relative overflow-hidden  aspect-[4/5]">
        <img 
          loading="lazy"
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded flex items-center gap-1.5 shadow-sm">
          <CheckCircle2 className="w-4 h-4 text-green-600" />
          <span className="text-[10px] font-extrabold text-stone-800 uppercase tracking-widest">7-Day Guarantee</span>
        </div>
      </div>
      
      {/* Product Details */}
      <div className="p-8">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-[#05190e] group-hover:text-green-600 transition-colors tracking-tight">
            {product.name}
          </h3>
          <span className="text-lg font-bold text-green-700">${product.price.toFixed(2)}</span>
        </div>
        <p className="text-sm text-[#424843] mb-8 line-clamp-2 leading-relaxed">
          {product.description}
        </p>
        
        {/* Add To Cart Button */}
        <button 
          onClick={() => onAddToCart && onAddToCart(product)}
          className="w-full py-4 bg-[#05190e] text-white font-bold uppercase tracking-widest text-[11px] rounded-lg bg-stone-900 hover:bg-green-700 transition-all active:scale-[0.98] flex items-center justify-center gap-2 shadow-md"
        >
          <ShoppingBag className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}