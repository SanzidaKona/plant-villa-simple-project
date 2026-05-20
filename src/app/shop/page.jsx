'use client';

import { useState, useEffect, useMemo } from 'react';
import { Search, ShoppingCart, Moon, Sun, ChevronLeft, ChevronRight, CheckCircle2, ArrowRight,Mail,MessageCircle,Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';


import { PRODUCTS, CATEGORIES, FEATURES } from '@/components/shop/Product';
import ProductCard from '@/components/shop/ProductCard';

export default function shop() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState(['Outdoor']);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [priceRange, setPriceRange] = useState(150);
  const [cartCount, setCartCount] = useState(0);
  

  // Dark Mode side-effect
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleCategory = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const toggleFeature = (feature) => {
    setSelectedFeatures(prev => 
      prev.includes(feature) ? prev.filter(f => f !== feature) : [...prev, feature]
    );
  };

  
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
      const matchesPrice = product.price <= priceRange;
      const matchesFeatures = selectedFeatures.length === 0 || selectedFeatures.every(f => product.features.includes(f));

      return matchesSearch && matchesCategory && matchesPrice && matchesFeatures;
    });
  }, [searchQuery, selectedCategories, priceRange, selectedFeatures]);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-stone-950 text-white dark' : 'bg-white text-stone-900'}`}>
      
      {/* Top Navigation Bar */}
      <header className="sticky top-0 w-full z-50 bg-[#eceeec]/80 backdrop-blur-md border-b border-[#c3c8c2]/30">
        <div className="max-w-[1280px] mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center">
          <div className="font-serif font-display text-4xl text-[#05190e] font-bold mb-4 md:mb-0">Plant Villa</div>
          
          <nav className="font-sans flex gap-6 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
            <Link href="/" className="text-base text-[#05190e]/70 hover:text-[#05190e] font-bold transition-colors">
              Home
            </Link>
            <Link href="/shop" className="text-base text-[#05190e]/70 hover:text-[#05190e] font-bold transition-colors border-b-2">
              Shop
            </Link>
            <Link href="#" className="text-base text-[#05190e]/70 hover:text-[#05190e] font-bold transition-colors">
              Terms & Conditions
            </Link>
            <Link href="#" className="text-base text-[#05190e]/70 hover:text-[#05190e] font-bold transition-colors">
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
                className="pl-10 pr-4 py-2 bg-[#f2f4f2] border border-[#c3c8c2] rounded-full text-sm focus:ring-2 focus:ring-[#4a654f] focus:border-transparent outline-none w-48"
              />
            </div>
            
            <div className="font-sans flex items-center gap-2">
              <button className="p-2 hover:bg-[#f2f4f2] rounded-full transition-colors lg:hidden">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-[#f2f4f2] rounded-full transition-colors relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute top-0 right-0 bg-[#4a654f] text-[#ffffff] text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">{cartCount}</span>
              </button>
              <button onClick={() => setDarkMode(!darkMode)} className="p-2 hover:bg-[#f2f4f2] rounded-full transition-colors text-[#424843] hover:text-[#05190e]">
                {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
           <Link href="/signin">
            <button className=" font-sans ml-2 font-bold uppercase tracking-widest text-[11px] text-[#ffffff] bg-[#05190e] px-6 py-3 rounded-lg hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-[#05190e]/10">
              Sign In
            </button>
          </Link>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-[1280px] mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 flex-shrink-0 space-y-12">
            <div>
              <h3 className="font-serif text-lg font-bold text-[#05190e] mb-6">Categories</h3>
              <div className="space-y-4">
                {CATEGORIES.map((cat) => (
                  <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox"
                      checked={selectedCategories.includes(cat)}
                      onChange={() => toggleCategory(cat)}
                      className="peer hidden"
                    />
                    <div className="w-5 h-5 border-2 border-[#c3c8c2] rounded peer-checked:bg-[#4a654f] peer-checked:border-[#4a654f] transition-all flex items-center justify-center">
                        <CheckCircle2 className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                      </div>
                    <span className={`text-sm transition-colors ${selectedCategories.includes(cat) ? 'font-bold text-[#05190e]' : 'text-[#424843] group-hover:text-[#05190e]'}`}>
                      {cat}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-serif text-lg font-bold text-[#05190e]">Price Range</h3>
                <span className="text-sm font-bold text-[#4a654f]">${priceRange}</span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="500" 
                value={priceRange}
                onChange={(e) => setPriceRange(parseInt(e.target.value))}
                className="w-full h-1.5 bg-[#e1e3e1] rounded-full appearance-none cursor-pointer accent-[#4a654f]"/>
            </div>
            <div className="flex justify-between text-xs text-[#424843] font-medium">
                  <span>$10</span>
                  <span>$500</span>
                </div>

            <div className="pt-8 border-t border-[#c3c8c2]/30">
              <h3 className="font-serif text-lg font-bold text-[#05190e] mb-6">Plant Features</h3>
              <div className="flex flex-wrap gap-2">
                {FEATURES.map((tag) => (
                  <span 
                    key={tag} 
                    onClick={() => toggleFeature(tag)}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider cursor-pointer transition-all border ${
                      selectedFeatures.includes(tag)
                        ? 'bg-emerald-600 border-emerald-600 text-white'
                        : 'bg-stone-100 dark:bg-stone-900 border-transparent text-stone-600 dark:text-stone-400 hover:bg-stone-200'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid Section */}
          <section className="flex-grow">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
              <div>
                <h1 className="font-serif font-display text-5xl text-[#05190e] font-bold mb-2">All Plants</h1>
                <p className="font-sans text-sm text-[#424843] font-medium">Showing 48 exquisite specimens</p>
              </div>
              <div className=" font-sans flex items-center gap-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#424843]">Sort by:</span>
                <select className="bg-transparent border-none text-sm font-bold text-[#05190e] focus:ring-0 cursor-pointer outline-none">
                  <option>Newest Arrivals</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Popularity</option>
                </select>
              </div>
            </div>

            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onAddToCart={handleAddToCart} 
                  />
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredProducts.length === 0 && (
              <div className=" font-sans text-center py-24">
                <p className="text-xl text-stone-500">No plants found matching the selected filters.</p>
              </div>
            )}

            {/* Pagination */}
            <div className="mt-16 flex justify-center items-center gap-3">
              <button className="w-12 h-12 flex items-center justify-center rounded-full border border-[#c3c8c2] hover:bg-[#f2f4f2] transition-all active:scale-90">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="bg-[#4a654f] text-[#ffffff] w-12 h-12 flex items-center justify-center rounded-full font-bold shadow-lg shadow-[#4a654f]/20">1</button>
              <button className="w-12 h-12 flex items-center justify-center rounded-full border border-[#c3c8c2] hover:bg-[#f2f4f2] transition-colors font-bold">2</button>
              <button className="w-12 h-12 flex items-center justify-center rounded-full border border-[#c3c8c2] hover:bg-[#f2f4f2] transition-colors font-bold">3</button>
              <button className="w-12 h-12 flex items-center justify-center rounded-full border border-[#c3c8c2] hover:bg-[#f2f4f2] transition-all active:scale-90">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full mt-24 bg-[#e1e3e1]">
        <div className="max-w-[1280px] mx-auto px-6 py-20 flex flex-wrap justify-between gap-12">
          <div className="w-full md:w-1/3 mb-12 md:mb-0">
            <div className="font-serif font-display text-4xl text-[#05190e] font-bold mb-6">Plant Villa</div>
            <p className="font-sans text-[#424843] text-sm leading-relaxed max-w-sm mb-8">
              Bringing nature's silent poetry into your living space. We curate only the finest botanical specimens for the discerning home.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-[#ffffff] rounded-full text-[#424843] hover:text-[#05190e] hover:shadow-lg transition-all">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-[#ffffff] rounded-full text-[#424843] hover:text-[#05190e] hover:shadow-lg transition-all">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-[#ffffff] rounded-full text-[#424843] hover:text-[#05190e] hover:shadow-lg transition-all">
                <Heart className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-12 lg:gap-24">
            <div className="space-y-6">
              <h4 className="font-sans font-bold uppercase text-xs tracking-[0.2em] text-[#191c1b]">Shop</h4>
              <nav className="flex flex-col gap-3">
                {['All Plants', 'Bestsellers', 'Gift Cards', 'Care Kits'].map(link => (
                  <a key={link} href="#" className="text-[#424843] hover:text-[#4a654f] transition-colors text-sm font-medium">{link}</a>
                ))}
              </nav>
            </div>
            
            <div className="space-y-6">
              <h4 className="font-sans font-bold uppercase text-xs tracking-[0.2em] text-[#191c1b]">Support</h4>
              <nav className="flex flex-col gap-3">
                {['About Us', 'Shipping Policy', 'Returns', 'Privacy Policy'].map(link => (
                  <a key={link} href="#" className="text-[#424843] hover:text-[#4a654f] transition-colors text-sm font-medium">{link}</a>
                ))}
              </nav>
            </div>

            <div className="space-y-6">
              <h4 className="font-sans font-bold uppercase text-xs tracking-[0.2em] text-[#191c1b]">Newsletter</h4>
              <p className="text-sm text-[#424843] max-w-[240px]">Get growth tips and early access to rare editions.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-[#f2f4f2] border-none rounded-l-lg py-3 px-4 text-sm focus:ring-1 focus:ring-secondary outline-none w-full max-w-[200px]"
                />
                <button className="bg-[#05190e] text-[#ffffff] px-4 rounded-r-lg hover:bg-[#4a654f] transition-all active:scale-95">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="w-full pt-12 mt-12 border-t border-[#c3c8c2]/30 text-center">
            <p className="font-serif text-[#424843] text-[11px] font-bold uppercase tracking-[0.3em]">
              © 2026 Plant Villa. Botanical Luxury for Every Home.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}