import React from 'react';
import { X } from 'lucide-react';

export function PlantDetailModal({ plant, onClose, onAddToCart }) {
  if (!plant) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 animate-fade-in">
      <div 
        className="absolute inset-0 bg-[#05190e]/40 backdrop-blur-md" 
        onClick={onClose} 
      />
      <div className="relative z-10 bg-surface dark:bg-[#121612] rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row border border-outline-variant/40 shadow-2xl">
        {/* Left plant cover */}
        <div className="w-full md:w-1/2 h-56 md:h-auto min-h-[250px] relative">
          <img 
            src={plant.image} 
            className="w-full h-full object-cover" 
            alt={plant.name} 
            referrerPolicy="no-referrer"
          />
          <button
            onClick={onClose}
            className="absolute top-3 left-3 p-1.5 rounded-full bg-white/90 hover:bg-white text-primary cursor-pointer shadow-md transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Right details content */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-baseline mb-2">
              <span className="text-[10px] text-secondary font-bold tracking-wider uppercase">
                {plant.category} collection
              </span>
              <span className="font-display text-lg font-bold text-primary dark:text-emerald-400">
                ${plant.price.toFixed(2)}
              </span>
            </div>
            <h3 className="font-display text-2xl font-bold text-primary dark:text-white leading-tight mb-1">{plant.name}</h3>
            <p className="text-xs text-on-surface-variant dark:text-gray-400 italic mb-4">{plant.scientificName}</p>
            <p className="text-xs text-on-surface dark:text-gray-200 leading-relaxed mb-6">{plant.description}</p>

            {/* Micro care logs */}
            <div className="grid grid-cols-2 gap-2 mb-6">
              <div className="p-2.5 bg-surface-container-low dark:bg-[#19211a] rounded-lg text-center border border-outline-variant/10 text-[11px]">
                <span className="block text-on-surface-variant font-medium">Watering</span>
                <strong className="text-primary dark:text-white">{plant.water}</strong>
              </div>
              <div className="p-2.5 bg-surface-container-low dark:bg-[#19211a] rounded-lg text-center border border-outline-variant/10 text-[11px]">
                <span className="block text-on-surface-variant font-medium">Light</span>
                <strong className="text-primary dark:text-white">{plant.light}</strong>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <button
              onClick={() => {
                onAddToCart(plant);
                onClose();
              }}
              className="w-full py-3 bg-primary dark:bg-[#2d4933] text-white text-xs uppercase tracking-wider font-bold rounded-xl cursor-pointer hover:bg-secondary active:scale-95 transition-all shadow-md"
            >
              Add to Bag
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
