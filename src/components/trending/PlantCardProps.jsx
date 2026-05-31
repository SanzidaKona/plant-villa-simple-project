import React from 'react';
import { ShoppingCart } from 'lucide-react';

export function PlantCard({ plant, onSelect, onAddToCart }) {
  return (
    <div 
      onClick={onSelect}
      className="col-span-1 flex flex-col gap-2 group cursor-pointer"
    >
      <div className="aspect-[4/5] rounded-xl overflow-hidden botanical-shadow border border-outline-variant dark:border-outline-variant/10 relative group bg-surface-container-low dark:bg-[#1e2520]">
        <img 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          src={plant.image} 
          alt={plant.description} 
          referrerPolicy="no-referrer"
        />
        {plant.tag && (
          <div className={`absolute top-2 right-2 px-2.5 py-1 rounded-full font-sans text-[10px] font-bold tracking-tighter shadow-sm ${
            plant.tagType === 'bestseller' 
              ? 'bg-secondary-container dark:bg-[#2d4934] text-on-secondary-container dark:text-emerald-200' 
              : 'bg-tertiary-fixed dark:bg-[#524419] text-on-tertiary-fixed-variant dark:text-amber-100'
          }`}>
            {plant.tag}
          </div>
        )}
        
        {/* Quick action overlay */}
        <div className="absolute bottom-2 right-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={(e) => onAddToCart(plant, e)}
            className="bg-primary dark:bg-[#2d4633] text-white p-2 rounded-full cursor-pointer hover:bg-secondary dark:hover:bg-[#3c5d44] transition-colors shadow-md active:scale-95"
            title="Add item to shopping bag"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="mt-1">
        <h3 className="font-display font-bold text-sm md:text-base text-primary dark:text-white line-clamp-1">{plant.name}</h3>
        <p className="font-sans text-xs text-on-surface-variant dark:text-gray-400">${plant.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
