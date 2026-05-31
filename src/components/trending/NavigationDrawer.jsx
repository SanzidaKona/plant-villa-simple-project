import React from 'react';
import { X, Home, FileText, Mail } from 'lucide-react';

export function NavigationDrawer({
  isOpen,
  onClose,
  onNavigate,
  currentSection,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex animate-fade-in">
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-primary/40 backdrop-blur-xs transition-opacity" 
      />
      <nav className="relative z-10 bg-surface dark:bg-[#111512] h-full w-80 shadow-2xl flex flex-col py-6 border-r border-outline-variant/30 text-on-surface animate-in slide-in-from-left duration-200">
        <div className="px-6 mb-8 flex justify-between items-center">
          <h2 className="font-display font-bold text-2.5xl text-primary dark:text-white tracking-tight">Plant Villa</h2>
          <button 
            onClick={onClose}
            className="p-1 rounded-md text-primary dark:text-gray-300 hover:bg-surface-container dark:hover:bg-zinc-850 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex flex-col flex-1 overflow-y-auto px-4 gap-1.5">
          <button 
            onClick={() => {
              onNavigate('shop');
              onClose();
            }}
            className={`flex items-center gap-4 px-4 py-3 rounded-full text-left cursor-pointer transition-colors ${
              currentSection === 'shop' 
                ? 'bg-secondary-container dark:bg-[#223326] text-on-secondary-container dark:text-emerald-200 font-bold' 
                : 'text-on-surface-variant dark:text-gray-300 hover:bg-surface-container-low'
            }`}
          >
            <Home className="w-5 h-5" />
            <span className="text-sm font-semibold">Home Shop</span>
          </button>

          <button 
            onClick={() => {
              onNavigate('terms');
              onClose();
            }}
            className={`flex items-center gap-4 px-4 py-3 rounded-full text-left cursor-pointer transition-colors ${
              currentSection === 'terms' 
                ? 'bg-secondary-container dark:bg-[#223326] text-on-secondary-container dark:text-emerald-200 font-bold' 
                : 'text-on-surface-variant dark:text-gray-300 hover:bg-surface-container-low'
            }`}
          >
            <FileText className="w-5 h-5" />
            <span className="text-sm font-semibold">Terms &amp; Conditions</span>
          </button>

          <button 
            onClick={() => {
              onNavigate('about');
              onClose();
            }}
            className={`flex items-center gap-4 px-4 py-3 rounded-full text-left cursor-pointer transition-colors ${
              currentSection === 'about' 
                ? 'bg-secondary-container dark:bg-[#223326] text-on-secondary-container dark:text-emerald-200 font-bold' 
                : 'text-on-surface-variant dark:text-gray-300 hover:bg-surface-container-low'
            }`}
          >
            <Mail className="w-5 h-5" />
            <span className="text-sm font-semibold">Contact &amp; Support</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
