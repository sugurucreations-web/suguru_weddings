import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    // Load content from JSON file (acts as simple CMS)
    fetch('/images/content.json')
      .then(res => res.json())
      .then(data => setContent(data))
      .catch(err => console.error('Error loading content:', err));

    // Track page view
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: 'Home',
        page_location: window.location.href,
        page_path: window.location.pathname
      });
    }
  }, []);

  if (!content) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-rose-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <Hero slides={content.heroSlides} />
      <Services services={content.services} />
      <Portfolio items={content.portfolio} />
      <Testimonials testimonials={content.testimonials} />
      <About about={content.about} />
      <Contact contact={content.contact} />
      <Footer contact={content.contact} />
      <WhatsAppButton phone={content.contact.whatsapp} />
    </div>
  );
}

export default App;
