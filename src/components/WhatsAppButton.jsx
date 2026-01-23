import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = ({ phone }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    if (window.gtag) {
      window.gtag('event', 'whatsapp_click', {
        event_category: 'Contact',
        event_label: 'WhatsApp Button'
      });
    }
    if (window.fbq) {
      window.fbq('track', 'Contact');
    }

    const message = encodeURIComponent('Hi! I found your website and I\'m interested in your photography services. Can we discuss?');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Popup Message */}
      {showPopup && (
        <div className="fixed bottom-24 right-6 bg-white rounded-lg shadow-2xl p-4 max-w-xs animate-slide-up z-50">
          <button 
            onClick={() => setShowPopup(false)}
            className="absolute top-2 right-2 text-slate-400 hover:text-slate-600"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="flex items-start gap-3">
            <div className="bg-green-500 p-2 rounded-full">
              <MessageCircle className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="font-semibold text-slate-800 mb-1">Need Quick Help?</p>
              <p className="text-sm text-slate-600 mb-2">Chat with us on WhatsApp!</p>
              <button 
                onClick={handleWhatsAppClick}
                className="text-sm bg-green-500 text-white px-4 py-1 rounded-full hover:bg-green-600 transition"
              >
                Start Chat
              </button>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setShowPopup(true)}
        onMouseLeave={() => setTimeout(() => setShowPopup(false), 5000)}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 transition transform hover:scale-110 animate-bounce"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          1
        </span>
      </button>
    </>
  );
};

export default WhatsAppButton;
