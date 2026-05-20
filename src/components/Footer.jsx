"use client";

import { Mail, MessageCircle, Wallet, CreditCard, Landmark } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#e1e3e1] w-full mt-12">
      <div className="max-w-[1280px] mx-auto px-6 py-16 flex flex-wrap justify-between gap-12">
        <div className="w-full lg:w-1/3 space-y-6">
          <span 
            style={{ fontFamily: "" }} 
            className="font-serif font-display text-4xl text-[#05190e] font-bold"
          >
            Plant Villa
          </span>
          <p className="font-sans text-sm text-[#191c1b]/60 max-w-xs leading-relaxed">
            Elevating interior spaces with premium, hand-selected botanical specimens. Professional care delivered to your door.
          </p>
          
         
          <div className="flex space-x-4 text-[#191c1b]/60">
           
            <a aria-label="Facebook" className="hover:text-[#05190e] transition-colors" href="#">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            
            
            <a aria-label="Instagram" className="hover:text-[#05190e] transition-colors" href="#">
              <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            
            
            <button aria-label="Email" className="hover:text-[#05190e] transition-colors">
              <Mail className="w-5 h-5" />
            </button>
            <button aria-label="WhatsApp" className="hover:text-[#05190e] transition-colors">
              <MessageCircle className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="flex gap-16 flex-wrap">
          <div className="space-y-4">
            <h5 className="font-sans text-xs font-bold text-[#05190e] uppercase tracking-widest">COMPANY</h5>
            <ul className="space-y-2">
              <li><a className="text-sm text-[#191c1b]/60 hover:text-[#4a654f] transition-colors" href="#">About Us</a></li>
              <li><a className="text-sm text-[#191c1b]/60 hover:text-[#4a654f] transition-colors" href="#">Sustainability</a></li>
              <li><a className="text-sm text-[#191c1b]/60 hover:text-[#4a654f] transition-colors" href="#">Careers</a></li>
              <li><a className="text-sm text-[#191c1b]/60 hover:text-[#4a654f] transition-colors" href="#">Journal</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h5 className="font-sans text-xs font-bold text-[#05190e] uppercase tracking-widest">CUSTOMER CARE</h5>
            <ul className="space-y-2">
              <li><a className="text-sm text-[#191c1b]/60 hover:text-[#4a654f] transition-colors" href="#">Shipping Policy</a></li>
              <li><a className="text-sm text-[#191c1b]/60 hover:text-[#4a654f] transition-colors" href="#">Returns</a></li>
              <li><a className="text-sm text-[#191c1b]/60 hover:text-[#4a654f] transition-colors" href="#">FAQ</a></li>
              <li><a className="text-sm text-[#191c1b]/60 hover:text-[#4a654f] transition-colors" href="#">Wholesale</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h5 className="font-sans text-xs font-bold text-[#05190e] uppercase tracking-widest">PRIVACY</h5>
            <ul className="space-y-2">
              <li><a className="text-sm text-[#191c1b]/60 hover:text-[#4a654f] transition-colors" href="#">Privacy Policy</a></li>
              <li><a className="text-sm text-[#191c1b]/60 hover:text-[#4a654f] transition-colors" href="#">Newsletter</a></li>
              <li><a className="text-sm text-[#191c1b]/60 hover:text-[#4a654f] transition-colors" href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="max-w-[1280px] mx-auto px-6 py-6 border-t border-[#c3c8c2]/30 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-serif text-[10px] text-[#191c1b]/50 uppercase tracking-[0.2em]">
          © 2026 Plant Villa. Botanical Luxury for Every Home.
        </p>
        <div className="flex items-center space-x-4 opacity-40 grayscale invert">
          <Wallet className="w-5 h-5" />
          <CreditCard className="w-5 h-5" />
          <Landmark className="w-5 h-5" />
        </div>
      </div>
    </footer>
  );
}