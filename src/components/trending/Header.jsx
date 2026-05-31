import React from 'react';
import Link from 'next/link';
import { Menu, ShoppingCart, Moon, Sun } from 'lucide-react';

export function Header({
  darkMode,
  onToggleDarkMode,
  onOpenSidebar,
  onOpenCart,
  cartTotalItems,
}) {
  return (
    <header className="sticky top-0 w-full z-50 bg-[#f8faf8] dark:bg-[#121512] border-b border-[#c3c8c2]/30 shadow-sm flex justify-between items-center px-4 h-16 transition-colors">
  
  <div className="flex items-center gap-4">
    <button 
      onClick={onOpenSidebar}
      aria-label="Menu"
      className="text-primary dark:text-[#b0ceb4] active:scale-95 duration-200 p-1 rounded-lg hover:bg-surface-container dark:hover:bg-[#1c221d] cursor-pointer transition-colors"
    >
      <Menu className="w-6 h-6" />
    </button>
    <h1 
      className="font-display font-bold text-2xl md:text-3xl text-primary dark:text-white tracking-tight cursor-pointer select-none"
    >
      Plant Villa
    </h1>
  </div>
  
  <div className="hidden lg:flex space-x-6 text-[#08080880]">
    <Link className="font-sans text-base text-[#05190e]/70 dark:text-gray-300 hover:text-[#05190e] dark:hover:text-emerald-400 font-bold transition-colors border-b-2 border-transparent" href="/">
      Home
    </Link>
  
    <Link className="font-sans text-base text-[#191c1b]/70 dark:text-gray-300 hover:text-[#05190e] dark:hover:text-emerald-400 font-bold transition-colors" href="/shop">
      Shop
    </Link>
    
    <Link className="font-sans text-base text-[#191c1b]/70 dark:text-gray-300 hover:text-[#05190e] dark:hover:text-emerald-400 font-bold transition-colors" href="/terms">
      Terms & Conditions
    </Link>
    
    <Link className="font-sans text-base text-[#191c1b]/70 dark:text-gray-300 hover:text-[#05190e] dark:hover:text-emerald-400 font-bold transition-colors" href="/contact">
      Contact
    </Link>
  </div>
  
<div className="flex items-center gap-3">
  {/* Dark Mode Toggle */}
  <button
    onClick={onToggleDarkMode}
    title={darkMode ? "Switch to daylight greenhouse" : "Switch to midnight forest"}
    aria-label="Toggle Dark Mode"
    className="p-2 rounded-full cursor-pointer hover:bg-surface-container dark:hover:bg-[#1c221d] text-secondary dark:text-emerald-400 transition-colors"
  >
    
    {darkMode ? (
      <Sun className="w-6 h-6 text-amber-400" />
    ) : (
      <Moon className="w-6 h-6 text-gray-800 dark:text-white" />
    )}
  </button>

    {/* Shopping Cart button */}
    <button 
      onClick={onOpenCart}
      aria-label="Open cart"
      className="relative p-2 text-primary dark:text-[#b0ceb4] hover:bg-surface-container dark:hover:bg-[#1c221d] rounded-lg cursor-pointer transition-colors group"
    >
      <ShoppingCart className="w-6 h-6 group-hover:scale-105 transition-transform" />
      {cartTotalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-tertiary-container dark:bg-[#cca72f] text-on-tertiary-container dark:text-primary font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-surface dark:border-[#121512] shadow-sm animate-bounce-short">
          {cartTotalItems}
        </span>
      )}
    </button>
  </div>

</header>
  );
}
