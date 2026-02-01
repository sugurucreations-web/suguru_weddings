import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Camera, Mail, Phone, MapPin, Instagram, Facebook, Youtube, Send } from 'lucide-react';

const Footer = ({ contact }) => {
  const [email, setEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState('');

  const handleNewsletterSubmit = async () => {
    if (!email) return;
    
    setNewsletterStatus('sending');
    
    // Track newsletter signup
    if (window.gtag) {
      window.gtag('event', 'newsletter_signup', {
        event_category: 'Engagement',
        event_label: 'Footer Newsletter'
      });
    }

    // Replace with your Formspree or email service endpoint
    try {
      await fetch('https://formspree.io/f/xgoaalnp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, type: 'newsletter' })
      });
      
      setNewsletterStatus('success');
      setEmail('');
      setTimeout(() => setNewsletterStatus(''), 3000);
    } catch (error) {
      setNewsletterStatus('error');
    }
  };

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Camera className="h-8 w-8 text-rose-500" />
              <span className="text-2xl font-bold">Suguru Weddings</span>
            </div>
            <p className="text-slate-300 mb-4 leading-relaxed">
              Professional photography & videography services in Hyderabad. Creating timeless memories since 2019.
            </p>
            <div className="flex space-x-3">
              <a 
                href={contact.social.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-800 p-2 rounded-full hover:bg-rose-600 transition"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href={contact.social.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href={contact.social.youtube} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-800 p-2 rounded-full hover:bg-red-600 transition"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="block text-slate-300 hover:text-rose-400 transition"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Our Services</h4>
            <div className="space-y-2 text-slate-300">
              <p>Wedding Photography</p>
              <p>Pre-Wedding Shoots</p>
              <p>Birthday Photography</p>
              <p>Corporate Events</p>
              <p>Drone Coverage</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-4">Stay Updated</h4>
            <p className="text-slate-300 mb-4">Get photography tips and special offers</p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-slate-800 text-white border-0 focus:outline-none focus:ring-2 focus:ring-rose-600"
              />
              <button
                onClick={handleNewsletterSubmit}
                className="w-full bg-rose-600 hover:bg-rose-700 py-2 rounded-lg font-semibold transition flex items-center justify-center gap-2"
              >
                <Send className="h-4 w-4" />
                Subscribe
              </button>
              {newsletterStatus === 'success' && (
                <p className="text-green-400 text-sm">Subscribed successfully!</p>
              )}
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-4 text-slate-300">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-rose-500" />
              <a href={`tel:${contact.phone}`} className="hover:text-rose-400 transition">
                {contact.phone}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-rose-500" />
              <a href={`mailto:${contact.email}`} className="hover:text-rose-400 transition">
                {contact.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-rose-500" />
              <span>{contact.location}</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-400">
            &copy; {new Date().getFullYear()} Suguru Weddings. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm mt-2">
            Made with ❤️ by <a href="https://digitalvint.com" target="_blank" rel="noopener noreferrer" className="hover:text-rose-400">Digital Vint</a> | {' '}
            <Link to="/privacy-policy" className="hover:text-rose-400">Privacy Policy</Link> | {' '}
            <Link to="/terms-of-service" className="hover:text-rose-400">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
