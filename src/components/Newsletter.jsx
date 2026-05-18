"use client";

import { motion } from 'motion/react';

export default function Newsletter() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 py-12">
      <div className="bg-[#05190e] p-12 md:p-24 rounded-2xl text-center space-y-8 relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="font-display text-4xl lg:text-5xl text-[#ffffff] font-bold">Join the Plant Villa Circle</h2>
          <p className="text-[#ffffff]/70 max-w-xl mx-auto text-lg">
            Receive curated care guides, early access to rare drops, and botanical inspiration for your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 max-w-lg mx-auto">
            <input 
              className="flex-1 px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-[#cceacf]" 
              placeholder="Enter your email" 
              type="email" 
            />
            <motion.button 
              whileHover={{ opacity: 0.9 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-[#cceacf] text-[#334d38] font-bold rounded-lg transition-opacity"
            >
              Subscribe
            </motion.button>
          </div>
        </div>
        {/* Background decorative elements */}
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#cceacf]/10 rounded-full blur-[100px]"></div>
        <div className="absolute -left-20 -top-20 w-64 h-64 bg-[#cceacf]/5 rounded-full blur-[80px]"></div>
      </div>
    </section>
  );
}
