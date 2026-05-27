'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    careLogNumber: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Botanical Message Submitted:', formData);
  };

  return (
    <section className="md:col-span-7">
      <div className="bg-[#f0ece3] p-8 rounded-2xl border border-gray-300/40 shadow-sm space-y-6">
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Full Name */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold tracking-wider uppercase text-gray-600 block">
              Full Name
            </label>
            <input
              type="text"
              required
              placeholder="Evelyn Thorne"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full bg-[#fcfaf4] border border-gray-300/80 rounded-xl px-4 py-3 text-sm text-[#05190e] placeholder-gray-400 focus:outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 transition-all shadow-inner"
            />
          </div>

          {/* Email Address */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold tracking-wider uppercase text-gray-600 block">
              Email Address
            </label>
            <input
              type="email"
              required
              placeholder="evelyn@example.com"
              value={formData.emailAddress}
              onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
              className="w-full bg-[#fcfaf4] border border-gray-300/80 rounded-xl px-4 py-3 text-sm text-[#05190e] placeholder-gray-400 focus:outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 transition-all shadow-inner"
            />
          </div>

          {/* Care Log Number */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold tracking-wider uppercase text-gray-600 block">
              Care Log Number <span className="text-gray-400 font-normal lowercase">(optional)</span>
            </label>
            <input
              type="text"
              placeholder="e.g. #PV-8492"
              value={formData.careLogNumber}
              onChange={(e) => setFormData({ ...formData, careLogNumber: e.target.value })}
              className="w-full bg-[#fcfaf4] border border-gray-300/80 rounded-xl px-4 py-3 text-sm text-[#05190e] placeholder-gray-400 focus:outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 transition-all shadow-inner"
            />
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold tracking-wider uppercase text-gray-600 block">
              Your Message
            </label>
            <textarea
              rows="4"
              required
              placeholder="Write your botanical query here..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-[#fcfaf4] border border-gray-300/80 rounded-xl px-4 py-3 text-sm text-[#05190e] placeholder-gray-400 focus:outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 resize-none transition-all shadow-inner"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#0c2317] hover:bg-[#123322] text-white text-xs font-bold tracking-widest uppercase py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer active:scale-[0.99]"
          >
            Send Your Botanical Message
          </button>
        </form>

        
      </div>
    </section>
  );
}