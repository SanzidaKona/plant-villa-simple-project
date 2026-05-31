'use client';

import React, { useState, useEffect } from 'react';
import { Search, Clock } from 'lucide-react';

const PLANTS = [
  {
    id: 'calathea-orbifolia',
    name: 'Calathea Orbifolia',
    scientificName: 'Calathea orbifolia',
    price: 48.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrHh-Dz6kKXp1jfcuezkiQewyZ9pZdeRH3lVRzEupxPFxaBnYTtkkiR4aCqWb04_m_r9uXsjUmyq7LBYlUdDgr7EdZYtPl53TEAc569_LpB4xdC_sDVUYATCIdO5GO0-nhIMpxCZwTqNh_E6SK0-lc_O8-qe78Cj_e3qry8_5uDJT07Yq9oU5qP7JTHFAkx4Eiz4um_7bBpCBbOq2_R4SkOmMobtU_cZWs06tz4YwKWqrx17JkZMiAXHhjmXF3L4EihoIwcWt0LoO4',
    tag: 'BESTSELLER',
    tagType: 'bestseller',
    description: 'A luxurious interior specimen featuring vibrant green, broad leaves with distinctive silver-green pinstripe patterns. Thrives in high humidity and gentle, filtered morning light, making it a perfect centerpiece for biological luxury and serene spaces.',
    careLevel: 'Intermediate',
    water: 'Weekly',
    light: 'Bright indirect',
    size: 'Medium',
    toxic: false,
    category: 'pet-friendly'
  },
  {
    id: 'monstera-albo',
    name: 'Monstera Albo',
    scientificName: 'Monstera deliciosa \'Albo Borsigiana\'',
    price: 125.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2WdGXLi6WK_UKDMxcbnKvKuQO25EGVN8YV35lzOytRMpDWYbOrcfET3IYd6bzjg1GcurjXDmQSURYB3Tmjoo8ciHb6ByWf8smx7Ex4bY1UfQDkkum3VQmg8BbZ8YBfu09eLjkcFiGGcjlK6K5VIbZwx5wtuj8QevqjQXk7x2atTk97OY2P7aOebJRoIGEobKKIIWdoIlGZ-ATpRLjS_VlOSkm6FPzWs9hucyUO9mYRTNsi8ik-ZaTSex-7rnZh66f-sL3-QpbntHw',
    tag: 'RARE FIND',
    tagType: 'rare',
    description: 'A prized masterpiece for plant collectors, showcasing dramatic white and cream marbled variegation against deep glossy green fenestrations. Each leaf is a unique living work of high-end canvas art.',
    careLevel: 'Expert',
    water: 'Bi-weekly',
    light: 'Bright indirect',
    size: 'Large',
    toxic: true,
    category: 'rare'
  }
];

const RECENT_SEARCHES_MOCK = ['Monstera', 'Fiddle Leaf Fig', 'Snake Plant'];


import { Header } from '@/components/trending/Header';
import { PlantCard } from '@/components/trending/PlantCardProps';
import { PlantDetailModal } from '@/components/trending/PlantDetailModal';
import { CartDrawer } from '@/components/trending/CartDrawer';
import { NavigationDrawer } from '@/components/trending/NavigationDrawer';

export default function App() {
  // Navigation states
  const [currentSection, setCurrentSection] = useState('shop');
  
  // Custom dark theme state
  const [darkMode, setDarkMode] = useState(false);

  // Core Search & Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState(RECENT_SEARCHES_MOCK);
  const [selectedPlant, setSelectedPlant] = useState(null);

  // Panel toggles
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  // Cart Management
  const [cartItems, setCartItems] = useState([]);

  // Dark Mode Theme Effect
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Cart helper functions
  const handleAddToCart = (plant, event) => {
    if (event) {
      event.stopPropagation();
    }
    setCartItems(prev => {
      const exists = prev.find(item => item.plant.id === plant.id);
      if (exists) {
        return prev.map(item => 
          item.plant.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { plant, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const handleUpdateQuantity = (id, delta) => {
    setCartItems(prev => 
      prev.map(item => {
        if (item.plant.id === id) {
          const newQty = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  const handleRemoveFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.plant.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Search filter functions
  const handleChipClick = (term) => {
    setSearchQuery(term);
  };

  const handleRemoveSearchTerm = (e, termToRemove) => {
    e.stopPropagation();
    setRecentSearches(prev => prev.filter(item => item !== termToRemove));
  };

  const handleClearSearches = () => {
    setRecentSearches([]);
  };

  // Filter based on query
  const filteredPlants = PLANTS.filter(plant => {
    const q = searchQuery.toLowerCase();
    return !q || 
      plant.name.toLowerCase().includes(q) || 
      plant.scientificName.toLowerCase().includes(q) ||
      plant.description.toLowerCase().includes(q);
  });

  const cartTotalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className={`min-h-screen  transition-colors duration-300 font-sans ${darkMode ? 'dark bg-[#0e110f] text-gray-100' : 'text-[#191c1b] bg-[#f8faf8]'}`}>
      
      {/* Dynamic Header */}
      <Header 
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
        onOpenSidebar={() => setSidebarOpen(true)}
        onOpenCart={() => setCartOpen(true)}
        cartTotalItems={cartTotalItems}
      />

      {/* Main Canvas Area */}
      <main className="pt-20 px-4 md:px-8 pb-12 max-w-7xl mx-auto min-h-screen">
        
        {currentSection === 'shop' && (
          <>
            {/* Search Box */}
            <section className="mb-10 mt-4 max-w-2xl mx-auto">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <Search className="w-5 h-5 text-[#737873] dark:text-gray-400" />
                </div>
                <input 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#f2f4f2] dark:bg-[#181d19] border border-[#c3c8c2]/40 rounded-xl py-4 pl-12 pr-4 font-normal text-sm md:text-base focus:outline-none focus:border-[#4a654f] transition-all placeholder:text-[#424843] dark:placeholder:text-gray-400 text-[#191c1b] dark:text-white" 
                  placeholder="Search plants..." 
                  type="text"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-1.5 rounded-full hover:bg-[#eceeec] dark:bg-zinc-800 text-[#424843] cursor-pointer text-xs font-bold"
                  >
                    Clear
                  </button>
                )}
              </div>
            </section>

            {/* Recent Searches Chips */}
            {recentSearches.length > 0 && (
              <section className="mb-10 max-w-2xl mx-auto">
                <div className="flex justify-between items-center mb-3">
                  <h2 className="font-sans text-xs uppercase tracking-widest font-bold text-[#05190e] dark:text-gray-300">Recent Searches</h2>
                  <button 
                    onClick={handleClearSearches}
                    className="font-sans text-[10px] uppercase font-bold tracking-widest text-[#4a654f] dark:text-emerald-450 hover:underline cursor-pointer"
                  >
                    Clear All
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {recentSearches.map((term, idx) => (
                    <div 
                      key={idx}
                      onClick={() => handleChipClick(term)}
                      className="flex items-center gap-1 px-4 py-2 bg-[#e6e9e7] dark:bg-[#202721] rounded-full hover:bg-[#424843] dark:hover:bg-[#2b352c] transition-colors cursor-pointer group"
                    >
                      <span className="font-sans text-xs text-[#424843] dark:text-gray-300">{term}</span>
                      <span 
                        onClick={(e) => handleRemoveSearchTerm(e, term)}
                        className="p-0.5 text-xs text-[#737873] dark:text-gray-400 hover:text-error dark:hover:text-rose-450 rounded-full transition-colors font-bold ml-1"
                      >
                        ×
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Product Specimens Grid */}
            <section className="mb-12">
              <div className="flex justify-between items-baseline mb-6">
                <h2 className="font-display font-semibold text-lg md:text-2xl text-[#05190e] dark:text-white">
                  {searchQuery ? `Search results for "${searchQuery}"` : "Trending Plants"}
                </h2>
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="text-xs text-[#4a654f] dark:text-emerald-450 hover:underline cursor-pointer font-medium"
                  >
                    Show all plants
                  </button>
                )}
              </div>

              {filteredPlants.length === 0 ? (
                <div className="text-center py-12 bg-[#f2f4f2] dark:bg-[#1c221d] rounded-2xl border border-dashed border-[#c3c8c2]/40">
                  <p className="font-display text-sm font-semibold text-[#05190e] dark:text-gray-300">No specimens match your search</p>
                  <p className="text-xs text-[#424843] dark:text-gray-400 mt-1">Try general keywords or click recent searches.</p>
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="mt-4 px-4 py-1.5 bg-[#05190e] dark:bg-[#1a2e22] text-white text-xs font-semibold rounded-lg cursor-pointer"
                  >
                    Reset Query
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-6 md:gap-8">
                  {filteredPlants.map((plant) => (
                    <PlantCard 
                      key={plant.id} 
                      plant={plant}
                      onSelect={() => setSelectedPlant(plant)}
                      onAddToCart={handleAddToCart}
                    />
                  ))}

                  {/* Curated Collection display banner */}
                  <div className="col-span-2 mt-4">
                    <div 
                      onClick={() => {
                        setSearchQuery('');
                        const target = PLANTS.filter(p => !p.toxic);
                        if (target.length > 0) {
                          setSelectedPlant(target[0]);
                        }
                      }}
                      className="relative w-full h-48 rounded-xl overflow-hidden botanical-shadow border border-[#c3c8c2] dark:border-[#c3c8c2]/10 group cursor-pointer"
                    >
                      <img 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBW7AAnLbpp1dVXTcepz2adLDzFPDv1tt_-1x2Btaeoyfbd3ZME54fwMBDzZWZ3ESi9vqqRdhppl8iWO-V4uTdEjul1J2kGiJX7dmMViMbx5-2jnAK5ZH8mz7C1xkuX3Jcb_vhnsZY4mz0Hr2tMwq8Mrnf605bHJjNcmQmnhPzkc5t_8R_5is9WuC6vlG2PcSBIWUXMcOY5Kz8_NaPNZOzNJh2vmuprVyIhF5mqwULigRI_XaICVKaGgW8WPcFyzDnzeawqsFt2J6uH" 
                        alt="Pet Friendly display banner"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#05190e]/80 via-[#05190e]/20 to-transparent flex flex-col justify-end p-6">
                        <span className="font-sans text-[10px] text-[#cceacf] mb-1 uppercase tracking-widest font-bold">Collection</span>
                        <h3 className="font-display text-xl md:text-2xl font-bold text-white">Pet-Friendly Favorites</h3>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>
          </>
        )}

        {/* Support Tab Section */}
        {currentSection === 'about' && (
          <section className="max-w-2xl mx-auto py-6 text-center font-sans">
            <h2 className="font-display text-3xl font-bold text-[#05190e] dark:text-white mb-2">WhatsApp Direct Support</h2>
            <p className="text-sm text-[#424843] dark:text-gray-300 mb-8">Connect directly with our horticulturist team at the greenhouse.</p>

            <div className="p-8 bg-[#f2f4f2] dark:bg-[#1a201b] rounded-2xl border border-[#c3c8c2]/20 inline-flex flex-col items-center max-w-md">
              <Clock className="w-10 h-10 text-[#4a654f] mb-3" />
              <h4 className="text-base font-bold text-[#05190e] dark:text-emerald-300">Live Greenhouse Hours</h4>
              <p className="text-xs text-[#424843] dark:text-gray-400 mt-1 mb-6">7 Days, 8:00 AM - 6:00 PM PST. Response is typically under one hour.</p>
              
              <a 
                href="https://wa.me/12345678" 
                target="_blank" 
                referrerPolicy="no-referrer"
                className="px-6 py-3 bg-[#25d366] text-white rounded-xl text-xs uppercase tracking-widest font-bold cursor-pointer hover:bg-[#1ebe57] transition-all active:scale-95 text-center shadow-md justify-center flex items-center gap-2"
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </section>
        )}

        {/* Terms Section */}
        {currentSection === 'terms' && (
          <section className="max-w-2xl mx-auto py-6 font-sans text-on-surface">
            <h2 className="font-display text-3xl font-bold text-[#05190e] dark:text-white mb-2">Terms &amp; Conditions</h2>
            <p className="text-sm text-[#424843] dark:text-gray-400 mb-8 font-medium">Boutique Purchase Rules &amp; Plant Care Guide. Updated June 2024.</p>

            <div className="space-y-6">
              <div className="p-5 bg-[#f2f4f2] dark:bg-[#1a201b] rounded-xl border border-[#c3c8c2]/20 shadow-xs">
                <h4 className="font-bold text-[#05190e] dark:text-emerald-400 text-sm">1. Premium Botanical Quality &amp; Shipping Guarantee</h4>
                <p className="text-xs text-[#424843] dark:text-gray-300 mt-2 leading-relaxed">
                  We handpick and thoroughly inspect the pristine health of every botanical specimen. To preserve the health and lush foliage of live plants, our shipments are prepared using professional thermal bio-packaging. 
                </p>
              </div>

              <div className="p-5 bg-[#f2f4f2] dark:bg-[#1a201b] rounded-xl border border-[#c3c8c2]/20 shadow-xs">
                <h4 className="font-bold text-[#05190e] dark:text-emerald-400 text-sm">2. Damage Replacement Protocol</h4>
                <p className="text-xs text-[#424843] dark:text-gray-300 mt-2 leading-relaxed">
                  Due to the nature of live and organic plants, general physical returns are not accepted. However, if your specimen arrives damaged due to transport, please take digital photographs and file a support claim within 48 hours for a swift botanical replacement.
                </p>
              </div>

              <div className="p-5 bg-[#f2f4f2] dark:bg-[#1a201b] rounded-xl border border-[#c3c8c2]/20 shadow-xs">
                <h4 className="font-bold text-[#05190e] dark:text-emerald-400 text-sm">3. Maintenance and Acclimation Guidelines</h4>
                <p className="text-xs text-[#424843] dark:text-gray-300 mt-2 leading-relaxed">
                  Plants require specific light, temperature, and moisture environments to thrive. We provide precise guidelines regarding light, soil, and watering requirements. Standard indoor changes (e.g., HVAC vents, seasonal draft changes) may alter soil moisture — please inspect your plant leaves regularly!
                </p>
              </div>
            </div>
          </section>
        )}

      </main>

      {/* Navigation Drawer Overlay */}
      <NavigationDrawer 
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onNavigate={(section) => setCurrentSection(section)}
        currentSection={currentSection}
      />

      {/* Detailed Specimen Modal Popup */}
      <PlantDetailModal 
        plant={selectedPlant}
        onClose={() => setSelectedPlant(null)}
        onAddToCart={(plant) => handleAddToCart(plant)}
      />

      {/* Cart Drawer Panel */}
      <CartDrawer 
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

      {/* Footer Content */}
      <footer className="w-full px-4 py-12 flex flex-col items-center gap-4 bg-[#f2f4f2] dark:bg-[#121512] border-t border-[#c3c8c2]/30 mt-6 text-center transition-colors">
        <h2 className="font-display text-3xl font-bold text-[#05190e] dark:text-white tracking-tight">Plant Villa</h2>
        <p className="font-sans text-xs text-[#424843] dark:text-gray-400">© 2024 Plant Villa. Botanical Luxury.</p>
        <div className="flex gap-4 font-sans text-xs font-semibold">
          <button 
            onClick={() => {
              setCurrentSection('shop');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} 
            className="text-[#05190e] dark:text-gray-300 hover:text-[#4a654f] cursor-pointer"
          >
            Boutique Shop
          </button>
          <span>•</span>
          <button 
            onClick={() => setCurrentSection('terms')} 
            className="text-[#05190e] dark:text-gray-300 hover:text-[#4a654f] cursor-pointer"
          >
            Terms &amp; Conditions
          </button>
          <span>•</span>
          <button 
            onClick={() => setCurrentSection('about')} 
            className="text-[#05190e] dark:text-gray-300 hover:text-[#4a654f] cursor-pointer"
          >
            WhatsApp Support
          </button>
        </div>
      </footer>

    </div>
  );
}