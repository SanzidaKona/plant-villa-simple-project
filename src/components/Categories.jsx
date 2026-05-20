"use client";

import { motion } from 'motion/react';

const CATEGORIES = [
  {
    title: "Indoor Sanctuary",
    desc: "Breathe life into your workspace",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB638hQwLbGGoiw-NJjKLBkfoZnwAk4wURGK5SCB5JGEUufLHjRZqJ-rHErQzYFNOJk6vMVQgoIYB7SwCzbbf1BioD8mi9BBot9YfAQD3ofB5Mc3QWYWS-ei2o8VPfCGqbjhrwDo076aDSsRVP6D718qKe3tMDkaGNIdBn1kqjqDujYY_cGf75EYsg3qGphXKJq1-qNoP_Ek8lL9WRyA8ZAyKKNptgmwsk5XkLe5C3LoqcyavLwqUbQHLZwkHOLw4MK-hk_2y-OJ3Yo",
    span: "md:col-span-2"
  },
  {
    title: "Desert Chic",
    desc: "",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOxUyyJoln_kNVjndvXazT5-hzwQiLjqx0UUasgwb_IhazhJcQ3yPOK-Mb7deqR-5AfvejE9hy9StnZxrq-7jmtgbgJ9FJ1qXr9swD1Kv8WBKiaLsn45rgRN_H-8kvra5en0Gt73ex3Ie16X612hSUFYG7NXtGA19khO6DBrgJjUBqSnjxpZfWHJRbQbb1aSCPZ7jjjfe6o1uscTFZa6PscYxFOpt1NkzoI_UH-GzEwOR5ayYVoovkr7ROv3BnmoME8S_3CBM6WGXs",
    span: "col-span-1"
  },
  {
    title: "Garden Luxe",
    desc: "",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNYOn0C4Z4WMpdQKIJnzh3zmmktI4kJwfu5P-itifb0I-IESCY7YTzwiuF3NUp6IAkcnQcdr3E2cmndJHoQAQkuZInbJ6tFNRFEMpjqW505r_teiJtj_Lu-f7tkazrQH2So8l-RtQHyWigCMnBGO85h9oGWAgAzGN2Qco1ex9s4s2mS8DrEOGFoSngYIZZB66ETb9Eua3f-GK-Kj2hrFeEqZGNBSw6J2VQxFpmaK1vgjyGxdZBXyHkYDQxVOyQZp-tL-BRPUthYKxC",
    span: "col-span-1"
  }

];

export default function Categories() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 py-12  ">
      <div className="flex justify-between items-end mb-8">
        <div>
          <p className="font-sans text-xs font-bold  mb-1 text-[#4a654f]">Curated Collections</p>
          <h2 className="font-serif font-bold font-display text-3xl text-[#05190e] ">Find Your Green Companion</h2>
        </div>
        <a className=" font-sans border-b border-[#4a654f]  pb-1 text-[#4a654f] font-semibold" href="#">View all categories</a>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-4 gap-6">
        {CATEGORIES.map((cat, i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 1.02 }}
            className={`${cat.span}  relative group overflow-hidden rounded-xl h-80 shadow-botanical cursor-pointer`}
          >
            <img 
              alt={cat.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              src={cat.image}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex flex-col justify-end p-6">
              <h3 className="font-serif text-white font-display text-2xl font-bold">{cat.title}</h3>
              {cat.desc && <p className="font-sans text-white/80  text-sm">{cat.desc}</p>}
            </div>
            <div className="absolute inset-0 bg-[#05190e]/20 opacity-0  group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="font-serif bg-white  px-6 py-3 rounded-full font-bold shadow-lg text-black">Explore Collection</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
