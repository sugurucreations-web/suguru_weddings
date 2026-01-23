import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Phone } from 'lucide-react';

const Hero = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleBookNow = () => {
    if (window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'CTA',
        event_label: 'Hero Book Now'
      });
    }
    if (window.fbq) {
      window.fbq('track', 'Lead');
    }
  };

  return (
    <section id="home" className="relative h-screen mt-16">
      <div className="absolute inset-0">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={slide.url} 
              alt={slide.caption} 
              className="w-full h-full object-cover"
              loading={idx === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </div>
        ))}
      </div>

      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {slides[currentSlide].caption}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl leading-relaxed">
              Professional photography & videography services in Hyderabad for weddings, events, and celebrations
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                onClick={handleBookNow}
                className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-lg font-semibold transition transform hover:scale-105 shadow-lg flex items-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Book Your Event
              </a>
              <a 
                href="#portfolio" 
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold transition border-2 border-white/50"
              >
                View Portfolio
              </a>
            </div>
            
            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap gap-8 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center font-bold">5+</div>
                <span>Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center font-bold">500+</div>
                <span>Happy Couples</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center font-bold">4.9★</div>
                <span>Average Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 rounded-full transition-all ${
              idx === currentSlide ? 'bg-white w-8' : 'bg-white/50 w-2'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
