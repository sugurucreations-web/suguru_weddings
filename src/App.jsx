import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// Pages
import HomePage from './pages/HomePage';
import WeddingVideographyHyderabad from './pages/local/WeddingVideographyHyderabad';
import PhotographerWarangal from './pages/local/PhotographerWarangal';
import VideographerVijayawada from './pages/local/VideographerVijayawada';
import PhotographerVisakhapatnam from './pages/local/PhotographerVisakhapatnam';
import PhotographerGuntur from './pages/local/PhotographerGuntur';

// Blog Pages
import BlogHome from './pages/blog/BlogHome';
import BestWeddingSpots from './pages/blog/BestWeddingSpots';
import PreWeddingLocations from './pages/blog/PreWeddingLocations';
import HiringPhotographer from './pages/blog/HiringPhotographer';
import LuxuryPhotographer from './pages/blog/LuxuryPhotographer';
import TopDestinations from './pages/blog/TopDestinations';

function App() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetch('/images/content.json')
      .then(res => res.json())
      .then(data => setContent(data))
      .catch(err => console.error('Error loading content:', err));
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
      <Routes>
        <Route path="/" element={<HomePage content={content} />} />
        
        {/* Service Pages */}
        <Route path="/wedding-photography-hyderabad" element={<WeddingPhotographyHyderabad content={content} />} />
        <Route path="/wedding-videography-hyderabad" element={<WeddingVideographyHyderabad content={content} />} />
        <Route path="/pre-wedding-shoot-telangana" element={<PreWeddingShootTelangana content={content} />} />
        <Route path="/destination-weddings-andhra-pradesh" element={<DestinationWeddingsAndhraPradesh content={content} />} />
        
        {/* Blog */}
        <Route path="/blog" element={<BlogHome />} />
        <Route path="/blog/best-wedding-photo-spots-hyderabad" element={<BestWeddingSpots />} />
        <Route path="/blog/telangana-pre-wedding-photoshoot-locations" element={<PreWeddingLocations />} />
        <Route path="/blog/hiring-photographer-hyderabad" element={<HiringPhotographer />} />
        <Route path="/blog/luxury-wedding-photographer-worth" element={<LuxuryPhotographer />} />
        <Route path="/blog/top-andhra-pradesh-wedding-destinations" element={<TopDestinations />} />
        
        {/* Local Pages */}
        <Route path="/wedding-photographer-warangal" element={<PhotographerWarangal content={content} />} />
        <Route path="/wedding-videographer-vijayawada" element={<VideographerVijayawada content={content} />} />
        <Route path="/wedding-photographer-visakhapatnam" element={<PhotographerVisakhapatnam content={content} />} />
        <Route path="/wedding-photographer-guntur" element={<PhotographerGuntur content={content} />} />
      </Routes>
      <Footer contact={content.contact} />
      <WhatsAppButton phone={content.contact.whatsapp} />
    </div>
  );
}

export default App;
