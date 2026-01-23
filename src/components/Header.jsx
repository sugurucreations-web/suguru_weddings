import React, { useState, useEffect } from 'react';
import { Camera, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    if (window.gtag) {
      window.gtag('event', 'navigation_click', {
        event_category: 'Navigation',
        event_label: href
      });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="flex items-center space-x-2 group">
            <Camera className="h-8 w-8 text-rose-600 group-hover:scale-110 transition" />
            <span className="text-2xl font-bold text-slate-800">Suguru Weddings</span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-slate-700 hover:text-rose-600 font-medium transition relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a
              href="#contact"
              className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-2 rounded-full font-semibold transition transform hover:scale-105"
              onClick={() => {
                handleNavClick('#contact');
                if (window.fbq) window.fbq('track', 'InitiateCheckout');
              }}
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t animate-slide-up">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className="block text-slate-700 hover:text-rose-600 hover:bg-rose-50 px-4 py-2 rounded-lg transition"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => {
                handleNavClick('#contact');
                if (window.fbq) window.fbq('track', 'InitiateCheckout');
              }}
              className="block bg-rose-600 hover:bg-rose-700 text-white text-center px-6 py-3 rounded-lg font-semibold transition"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
