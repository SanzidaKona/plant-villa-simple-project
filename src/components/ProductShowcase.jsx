"use client";

import { ShoppingCart } from 'lucide-react';
import { motion } from 'motion/react';

const PRODUCTS = [
  {
    name: "Fiddle Leaf Fig",
    price: 120,
    tag: "Popular",
    feature: "Air Purifying",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxg9D3sbZEf1xbyoMAn6vZqOfqksGhpB1h_Sgeoyzp7aL9Tjawb7jWfjsdoj-JQozLj7sp6VFEsNbjgQ9Ze7ciMMs6XhbsAY1DsFwSgvCiEGQ-e6a3Lyf6xZXqPl-JlVVcbsSYNPo1eh14JLl1OuucO8sGSj-AOwp7_Bi6XhWSFBLK1fBIc3tyrmp3zpjtEYq3xkTzUCbEx5g74TdozPnHHcDwWLf4c4rk7o9QvJqJBHkQBbtjbHp9IaJSsOkss_hhiO5B6Ck3DRkk",
    color: "bg-[#cceacf]"
  },
  {
    name: "Meyer Lemon Tree",
    price: 85,
    tag: "Edible",
    feature: "Pet Friendly",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZhVz6aNabRgPzzwAbMCMpBxRe6aMmBmjwXT1wz_Ea8jQ187OAIhFVcBTSpDxhskS5StY1G2hVuUaQ3o4yY9fEXYKKjR7F7WqtOjzEV3c8_f6XYGb43KXfb2MpnusoSNPrve8NTK_j9KnOfZR36GNQzs09Ej6grS0sQ2OI2pMLTTy4PJcoN5Zq8Dh4VWTsq3ojZKdopVGCBgPkPfZm_Ebbr0gl5drH_rTFg9aKJhaJCZvSPwl-pzB-Ldvxs31OblH5mvD8y09Q7HZq",
    color: "bg-[#ffe088]"
  },
  {
    name: "European Olive",
    price: 155,
    tag: "Best Seller",
    feature: "Low Water",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAR4OeiEWwEUZeWxnTZ-dNtp-w17Fo187mUm5xrVfrXYXFStV8GQsXw1-A0-PlYJnm8GrbgCg7S-krIlnreNm2Wux9bRdRLHvRGLukGMV-qN6GpZ-VUe5CyLiNS8DIK2KqEtDQB63CBOjZVfH3ceJ7D-S4IJQsfAkCp8g5dQKjMi6G4CEyNbeDyR7uwztA1dgcRrEFAqeiQUKX-g7U4MUIRNZSa_iPuaLKGlNfww8M_xXx1gDsMtg8pfYODuVBRr-v_2Uf9-nfzSUCU",
    color: "bg-[#cceacf]"
  },
  {
    name: "Bird of Paradise",
    price: 95,
    tag: "New",
    feature: "High Light",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2hqbBafouEo73Pc9RPiMF879Ad6SSMS0w1jIqh5pxNooBvTvbhUhwoJwOpGqCbOT4fB655ftsnAyscEBbnmhBqOfoG4XJaYpYvWE_RIJN5w2F5L7ZRU8f00SNEONvLQs-WMdyvtBl48jtx6GhrrDj7iXp6uXa68F-Kcrd9GGPdu-dOuQow-kgiRQobP2MwhhtDHIZ-z0uEATFzuB14CHduTdioa1VWZgrO378idvEelddFwY6S7eTOj70tLq4ma1ZhSES8JiRxelH",
    color: "bg-[#cceacf]"
  }
];

export default function ProductShowcase() {
  return (
    <section className="bg-[#f2f4f2] py-12 ">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="font-serif text-center mb-12">
          <h2 className="  font-display text-4xl  font-bold text-black">Popular Trees</h2>
          <div className="font-sans flex justify-center gap-2 mt-4">
            <span className="px-5 py-2 bg-[#05190e] bg-on-[#ffffff] rounded-full text-sm font-medium cursor-pointer">All</span>
            <span className="px-5 py-2 bg-[#e1e3e1] text-[#08080880] rounded-full text-sm font-medium hover:bg-[#c9e7cc]  transition-colors cursor-pointer">Indoor</span>
            <span className="px-5 py-2 bg-[#e1e3e1] text-[#08080880] rounded-full text-sm font-medium hover:bg-[#c9e7cc]  transition-colors cursor-pointer">Fruit Bearing</span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -4 }}
              className="bg-[#f8faf8] p-2 rounded-2xl border border-outline-variant/30 shadow-botanical hover:shadow-botanical-hover transition-all"
            >
              <div className="aspect-square rounded-xl overflow-hidden bg-[#f8faf8] mb-4">
                <img 
                  alt={product.name} 
                  className="w-full h-full object-cover" 
                  src={product.image}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="px-2 pb-2">
                <div className="flex justify-between items-start mb-1">
                  <h4 className=" font-semibold text-[#05190e]">{product.name}</h4>
                  <span className=" font-semibold text-[#4a654f]">${product.price}</span>
                </div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className={`px-2 py-0.5 ${product.color} text-[#191c1b] font-bold text-[10px] uppercase rounded`}>
                    {product.tag}
                  </span>
                  <span className="text-[#191c1b]/60 text-xs">{product.feature}</span>
                </div>
                <button className="w-full py-2.5 border border-[#05190e] text-[#05190e] rounded-lg font-semibold hover:bg-[#05190e] hover:text-[#ffffff] transition-colors flex items-center justify-center group">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <button className="px-10 py-3 border border-outline text-[#191c1b] rounded-lg font-semibold hover:bg-[#e6e9e7] transition-colors">
            See more
          </button>
        </div>
      </div>
    </section>
  );
}
