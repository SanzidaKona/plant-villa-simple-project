'use client';

import React from 'react';
import {ShieldCheck, Scale, Leaf } from 'lucide-react';


export default function TermsSidebar() {
  return (
    <div className="w-full space-y-8 text-[#05190e]">
        
      {/* Table of Contents */}
      <div className="space-y-4">
        <h3 className="font-serif text-xl font-bold tracking-wide">
          Table of Contents
        </h3>
        <ul className="space-y-3 text-sm font-semibold text-gray-700">
          <li className="flex items-center gap-2 cursor-pointer text-[#05190e]">
            <Leaf size={14} className="text-emerald-800" /> 1. Acceptance
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:text-[#05190e]">
            <Leaf size={14} className="text-emerald-800" /> 2. Plant Variations
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:text-[#05190e]">
            <Leaf size={14} className="text-emerald-800" /> 3. 7-Day Guarantee
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:text-[#05190e]">
            <Leaf size={14} className="text-emerald-600/60" /> 4. Circle Account
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:text-[#05190e]">
            <Leaf size={14} className="text-emerald-600/60" /> 5. Liability
          </li>
        </ul>
      </div>


      {/* Quick Summary Box */}
      {/* 🟢 ইমোজি বাদ দিয়ে Lucide Icons এবং পারফেক্ট লাইট গ্রিন ব্যাকগ্রাউন্ড */}
      <div className="bg-[#e4eedf] p-5 rounded-2xl space-y-4 border border-emerald-900/5 max-w-[280px]">
        <h3 className="font-serif text-lg font-bold text-[#05190e]">
          Quick Summary
        </h3>
        <div className="space-y-3.5">
          {/* 🛡️ Privacy পার্ট */}
          <div className="flex gap-2.5 items-start">
            <ShieldCheck size={23} className="text-emerald-800 mt-0.5 shrink-0" />
            <div className="text-xs font-medium text-gray-700">
              <strong className="text-[#05190e] block font-bold">Your Privacy</strong>
              (Secure payments)
            </div>
          </div>
          
          {/* ⚖️ Fair Usage পার্ট */}
          <div className="flex gap-2.5 items-start">
            <Scale size={23} className="text-emerald-800 mt-0.5 shrink-0" />
            <div className="text-xs font-medium text-gray-700">
              <strong className="text-[#05190e] block font-bold">Fair Usage</strong>
              (Personal use)
            </div>
          </div>
          
          {/* 🍃 7-Day Guarantee পার্ট */}
          <div className="flex gap-2.5 items-start">
            <Leaf size={23} className="text-emerald-800 mt-0.5 shrink-0" />
            <div className="text-xs font-medium text-gray-700">
              <strong className="text-[#05190e] block font-bold">7-Day Guarantee</strong>
              (Transit issues)
            </div>
          </div>
        </div>
      </div>

      {/* 🟢 Need Help Box (মকআপের মতো নিখুঁত ডার্ক গ্রিন ও পাতা সহ ফিক্সড কোড) */}
        <div className="p-6 bg-emerald-950 text-white rounded-2xl max-w-[280px] space-y-2 relative overflow-hidden shadow-sm">
  
      {/* 🍃 বক্সের ডানদিকের কোণার ভেতরের সেই ছোট সুন্দর পাতা দুটি */}
     <div className="absolute right-4 bottom-4 w-12 h-12 opacity-30 pointer-events-none select-none">
     <Leaf size={45} className="text-white" />
     </div>

      {/* 📝 টেক্সট কন্টেন্ট */}
      <h4 className="font-serif text-[17px] font-bold tracking-wide text-white relative z-10">
      Need Help?
      </h4>
      <p className="text-[11px] text-emerald-200/70 font-medium relative z-10">
      Have questions?
      </p>
      <a 
      href="mailto:legal@plantvilla.com" 
      className="block text-xs text-emerald-300 font-semibold tracking-wide hover:text-emerald-100 transition-colors relative z-10 mt-1"
      >
      legal@plantvilla.com
      </a>
      </div>
      </div>
    );
}