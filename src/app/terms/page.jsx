'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, Moon, Sun } from 'lucide-react';
import TermsSidebar from '@/components/terms/TermsSidebar';
import TermsContent from '@/components/terms/TermsContent';

export default function TermsAndConditionsPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartCount, setCartCount] = useState(0);

  // Dark Mode side-effect
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    // 🧱 h-screen সরিয়ে min-h-screen এবং স্বাভাবিক স্ক্রোলিং ফ্লো রাখা হয়েছে
    <div className="min-h-screen bg-[#f4f6f3] text-[#05190e] font-sans antialiased w-full relative selection:bg-emerald-100 flex flex-col">
       
      {/* 🌟 ১. টপ নেভিগেশন বার (এটি স্ক্রিনের ওপরে ফিক্সড থাকবে এবং z-50 এর কারণে সবকিছু এর নিচ দিয়ে যাবে) */}
      <header className="sticky top-0 w-full z-50 bg-[#eceeec]/90 backdrop-blur-md border-b border-[#c3c8c2]/40 shadow-sm">
        <div className="max-w-[1280px] mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center">
          <div className="font-serif font-display text-4xl text-[#05190e] font-bold mb-4 md:mb-0">Plant Villa</div>
          
          <nav className="font-sans flex gap-6 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
            <Link href="/" className="text-base text-[#05190e]/70 hover:text-[#05190e] font-bold transition-colors">
              Home
            </Link>
            <Link href="/shop" className="text-base text-[#05190e]/70 hover:text-[#05190e] font-bold transition-colors">
              Shop
            </Link>
            <Link href="/terms" className="text-base text-[#05190e] font-bold transition-colors border-b-2 border-[#4a654f]">
              Terms & Conditions
            </Link>
            <Link href="#" className="text-base text-[#05190e]/70 hover:text-[#05190e] font-bold transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <div className="relative hidden lg:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#424843]" />
              <input 
                type="text" 
                placeholder="Search plants..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-[#f2f4f2] border border-[#c3c8c2] rounded-full text-sm focus:ring-2 focus:ring-[#4a654f] focus:border-transparent outline-none w-48 text-[#05190e]"
              />
            </div>
            
            <div className="font-sans flex items-center gap-2">
              <button className="p-2 hover:bg-[#f2f4f2] rounded-full transition-colors lg:hidden text-black">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-[#f2f4f2] rounded-full transition-colors relative text-black">
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 bg-[#4a654f] text-[#ffffff] text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">{cartCount}</span>
                )}
              </button>
              <button onClick={() => setDarkMode(!darkMode)} className="p-2 hover:bg-[#f2f4f2] rounded-full transition-colors text-[#424843] hover:text-[#05190e]">
                {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
            <Link href="/signin">
              <button className="font-sans ml-2 font-bold uppercase tracking-widest text-[11px] text-[#ffffff] bg-[#05190e] px-6 py-3 rounded-lg hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-[#05190e]/10">
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </header>
    
      {/* 📦 মেইন স্ক্রোলিং বডি লেয়ার (ন্যাভবারের নিচে ফ্রেশ ফ্লো) */}
      <div className="flex-1 flex flex-col">

          {/* ২. বড় ব্যানার হেডার */}
          <header className="relative bg-[#eef1de] py-20 text-center w-full overflow-hidden border-b border-gray-300/40 z-10">
            <div className="relative z-10 max-w-xl mx-auto px-4">
              <h1 className="font-serif text-4xl font-bold tracking-wide text-[#05190e]">
                Terms & Conditions
              </h1>
              <p className="text-[10px] tracking-widest font-bold text-[#4f7754] uppercase mt-2">
                Last Updated: May 26, 2026
              </p>
            </div>
          </header>

          {/* ৩. মেইন কন্টেইনার লেআউট গ্রিড */}
          <div className="w-full max-w-6xl mx-auto px-6 mb-16 mt-12 box-border flex-1">
            <div className="flex flex-row items-start justify-between gap-16 w-full bg-transparent">
              
              {/* বাম পাশ: সাইডবার */}
              <aside className="w-[30%] min-w-[260px] max-w-[300px] shrink-0 box-border sticky top-28">
                <TermsSidebar />
              </aside>

              {/* ডান পাশ: কন্টেন্ট */}
              <section className="w-[70%] shrink box-border overflow-hidden">
                <TermsContent />
              </section>

            </div>
          </div>
        
        {/* ৪. ফুটার */}
        <footer className="border-t border-gray-200/60 bg-white/70 backdrop-blur-sm py-6 text-center text-[10px] font-bold tracking-widest text-gray-400 uppercase w-full mt-auto">
          © 2026 PLANT VILLA. BOTANICAL LUXURY FOR EVERY HOME.
        </footer>

      </div>
    </div>
  );
}