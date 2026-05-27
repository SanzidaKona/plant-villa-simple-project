'use client';

import React, { useState, useEffect } from 'react'; // 🎯 ডুপ্লিকেট ইমপোর্ট ফিক্সড
import Link from 'next/link';
import { Search, ShoppingCart, Moon, Sun } from 'lucide-react';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactForm from '@/components/contact/ContactForm';

export default function ContactPage() {
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
    <div className="min-h-screen bg-[#f4f6f3] text-[#05190e] font-sans antialiased w-full relative selection:bg-emerald-100 flex flex-col">
      
      {/* ব্যাকগ্রাউন্ড ওয়াটারমার্ক পাতা */}
      <div className="absolute top-16 -left-12 w-80 h-80 opacity-20 pointer-events-none rotate-12 bg-[url('https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=500')] bg-cover " />
      <div className="absolute bottom-0 left-0 w-44 h-44 opacity-25 pointer-events-none bg-[url('https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=300')] bg-cover" />

      {/* 🌟 ১. টপ নেভিগেশন বার */}
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
            <Link href="/terms" className="text-base text-[#05190e]/70 hover:text-[#05190e] font-bold transition-colors">
              Terms & Conditions
            </Link>
            {/* 🎯 কন্টাক্ট পেজ হওয়ায় এই লিঙ্কে অ্যাক্টিভ বর্ডার এবং সঠিক পাথ (/contact) দেওয়া হলো */}
            <Link href="/contact" className="text-base text-[#05190e] font-bold transition-colors border-b-2 border-[#4a654f]">
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

      {/* Main Container Grid */}
      <main className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
        <ContactInfo />
        <ContactForm />
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white/70 backdrop-blur-sm py-6 text-center text-[11px] font-bold tracking-widest text-gray-400 uppercase relative z-10">
        © 2026 PLANT VILLA. BOTANICAL LUXURY FOR EVERY HOME.
      </footer>

    </div>
  );
}