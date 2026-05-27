'use client';

import React from 'react';
import { Mail, MapPin, Clock } from 'lucide-react';

export default function ContactInfo() {
  return (
    <section className="md:col-span-5 space-y-6">
      <h1 className="font-serif text-5xl sm:text-6xl font-bold tracking-tight text-[#05190e]">
        Get in Touch
      </h1>
      <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium max-w-sm">
        Share your botanical dreams, care questions, or simply say hello. We nurture connection.
      </p>

      {/* কন্টাক্ট ইনফো লিস্ট */}
      <div className="space-y-4 pt-4 text-sm font-medium text-gray-800">
        <div className="flex items-center gap-3.5">
          <Mail className="w-5 h-5 text-emerald-800 shrink-0" />
          <a href="mailto:support@plantvilla.com" className="hover:underline transition-all">
            support@plantvilla.com
          </a>
        </div>

        <div className="flex items-center gap-3.5">
          <MapPin className="w-5 h-5 text-emerald-800 shrink-0" />
          <span>Botanical HQ, Seattle WA</span>
        </div>

        <div className="flex items-center gap-3.5">
          <Clock className="w-5 h-5 text-emerald-800 shrink-0" />
          <span>Care Bot Active: 24/7</span>
        </div>
      </div>
    </section>
  );
}