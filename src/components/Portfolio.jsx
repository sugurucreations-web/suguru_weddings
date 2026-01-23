import React, { useState } from 'react';
import { Search } from 'lucide-react';

const Portfolio = ({ items }) => {
  const [selectedGallery, setSelectedGallery] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['all', ...new Set(items.map(item => item.category))];
  
  const filteredGallery = items.filter(item => {
    const matchesCategory = selectedGallery === 'all' || item.category === selectedGallery;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleImageClick = (itemTitle) => {
    if (window.gtag) {
      window.gtag('event', 'portfolio_view', {
        event_category: 'Portfolio',
        event_label: itemTitle
      });
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Portfolio</h2>
          <p className="text-xl text-slate-600 mb-8">Browse our recent work and get inspired</p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search photos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-full focus:outline-none focus:ring-2 focus:ring-rose-600"
              />
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedGallery(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  selectedGallery === cat
                    ? 'bg-rose-600 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1).replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredGallery.map((item) => (
            <div 
              key={item.id} 
              className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition cursor-pointer"
              onClick={() => handleImageClick(item.title)}
            >
              <img 
                src={item.url} 
                alt={item.title} 
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-4">
                <p className="text-white font-bold text-lg">{item.title}</p>
                <p className="text-white/80 text-sm capitalize">{item.category.replace('-', ' ')}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredGallery.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg">No photos found. Try a different search or category.</p>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-xl text-slate-600 mb-6">Love what you see? Let's create magic together!</p>
          <a 
            href="#contact" 
            className="inline-block bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-full font-bold transition transform hover:scale-105"
          >
            Book Your Session
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
