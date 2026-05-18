"use client";
import { Search, ShoppingCart, Moon, LayoutGrid } from 'lucide-react';
import {motion} from 'motion/react';

export default function Navbar() {
  return (
    <div className="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-outline-variant/30">
      <div className="max-w-[1280px] mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center bg-transparent ] ">
         <div className="flex items-center space-x-8">
          <span className="font-display text-4xl text-black text-primary  font-bold">Plant Villa</span>
         <div className="hidden lg:flex space-x-6 text-[#08080880] ">
         <a className="font-sans text-base text-primary   border-primary" href="#">Home</a>
         <a className="font-sans text-base text-on-surface/70 hover:text-primary transition-colors" href="#">Shop</a>
         <a className="font-sans text-base text-on-surface/70 hover:text-primary transition-colors" href="#">Terms & Conditions</a>
         <a className="font-sans text-base text-on-surface/70 hover:text-primary transition-colors" href="#">Contact</a>
         
      </div>
         </div>
         <div className="flex items-center space-x-4 mt-4 md:mt-0 ">
         
          <div className="relative hidden sm:block text-[#08080880] ] ml-auto">
            
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface/50 w-5 h-5 text-[#08080880]" />
              <input 
              className="pl-10 pr-4 py-2 rounded-full border border-outline-variant bg-surface-container-low focus:outline-none focus:ring-1 focus:ring-secondary text-sm w-48 transition-all focus:w-64 bg-gray-100" 
              placeholder="Search plants..." 
              type="text" 
            />

          </div>
          <div className="flex space-x-2">
            <button aria-label="Shopping Cart" className="p-2 hover:bg-surface-container-low rounded-full transition-colors relative text-black">
              <ShoppingCart className="w-6 h-6" />
            </button>
            <button aria-label="Toggle Dark Mode" className="p-2 hover:bg-surface-container-low rounded-full transition-colors text-black ">
              <Moon className="w-6 h-6 " />
            </button>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-black text-white rounded-lg font-semibold hover:opacity-90 transition-opacity ">
            Sign In
          </motion.button>
           
         </div>

    </div>
    
 </div>
    
    
  );
}