'use client';

import React from 'react';
import SignUp from '@/components/signup/SignUp';
import { Leaf } from 'lucide-react';

export default function SignUpPage() {
  return (
    <main className="min-h-screen flex flex-col md:flex-row bg-[#f8faf8]">
      {/* Form Section */}
      <section className="flex-1 flex items-center justify-center py-10 px-6 md:p-12 lg:p-16 bg-[#f8faf8]">
        <SignUp />
      </section>

       {/* Visual Side */}
      <aside className="hidden md:block md:w-1/2 h-screen sticky top-0 bg-[#eceeec] overflow-hidden">
        <div className="relative h-full w-full">
          <img
            alt="Lush botanical scene"
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbIjAbzlGxmGNof293zJhZKVaKeEVx6hcyNnp9PuqCOrb82HQGrPmW4onWF8pIQp3rhJZ37UkysIr809ms7S01HXIXbZKFR0Lzx7GU59naX_6oWyObNCobCqs5aPJSogt9ieEPnRVSI1nwir9Pt6tU85iawuKd_5NTUURb2XgKG88nSBaDYeF-Y7VPp9cO91BEK2P_WaZkFT5kinf4TcgoX8UED3I5DcxFr09ed_pG7ttmD7MffB-AvHULCSq8EeUX6mvo5-tqVPTf"
          />
          {/* Floating Card Content */}
          <div className="absolute bottom-12 left-12 right-12 p-6 bg-[#ffffff]/70 backdrop-blur-xl rounded-2xl border border-white/30 botanical-shadow-lg max-w-[500px]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#1a2e22] flex items-center justify-center text-white flex-shrink-0 animate-pulse">
                <Leaf className="w-8 h-8 text-emerald-600 animate-bounce" />
              </div>
              <div>
                
                <h3 className="font-serif text-[18px] font-semibold text-[#05190e]">
                  Nurture Your Sanctuary
                </h3>
                <p className="text-sm text-[#424843] mt-0.5 leading-relaxed font-sans">
                  Expert care guides and sustainable botanical styling for the modern home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </main>
  );
}