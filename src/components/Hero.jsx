"use client";

import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const HERO_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuDo9Yf8M8LtSsngCu4VPR-XU-odvHea6Qwqm7kiLGartgta54na30dMY23OO1coxU0_iXHsJke_wEt2u3uZciQR6c_rkN6mlsC_gKya3MPa3zVNOQw-a09-8Otr0yo99c0ipYAGN-p7bcZmCTaUyY5cJJa74O72VwjhfsEGR_8BU6k8z-JI4uIN1e_s6GCgadPxADQbsDMucbbJZnHYsfxYxY9uxA-rfr4g2KzBOm6o1V3rmlf0KsrMipRaR6-XgenH3NKGo_BrPpt6";

export default function Hero() {
  return (
    <section className="max-w-[1280px] mx-auto flex justify-between px-6 py-12 border-2 ">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-[#E8F5E9] rounded-2xl overflow-hidden flex flex-col md:flex-row items-center shadow-botanical"
      >
        <div className="w-full md:w-1/2 p-12 md:p-16 lg:p-24 space-y-6">
          <p className="text-[#08080880]  text-xs font-bold text-secondary uppercase tracking-[0.2em]">Fresh nursery stock this week</p>
          <h1 className="text-black font-display text-5xl lg:text-6xl text-primary leading-tight font-bold ">
            Bring Home Fruit Trees That Grow With Your Family
          </h1>
          <div className=" flex flex-col items-start gap-5 pt-4">
            <motion.button 
              whileHover={{ y: -2 }}
              className="px-8 py-4 bg-primary text-on-primary rounded-lg font-semibold shadow-botanical bg-black text-white"
            >
              Shop Plants
            </motion.button>
            <button className="px-8 py-4 text-primary font-semibold flex items-center group text-black">
              Browse Catalog 
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform text-black" />
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-[400px] md:h-[600px] relative">
          <img 
            alt="Lemon Tree" 
            className="w-full h-full object-cover" 
            src={HERO_IMAGE}
            referrerPolicy="no-referrer"
          />
        </div>
      </motion.div>
    </section>
  );
}
