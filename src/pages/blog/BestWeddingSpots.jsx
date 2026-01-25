import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Camera, ArrowLeft } from 'lucide-react';

const BestWeddingSpots = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Best Wedding Photo Spots in Hyderabad 2026 - Suguru Weddings";
  }, []);

  const spots = [
    {
      name: "Taj Falaknuma Palace",
      type: "Luxury Hotel",
      why: "Grand architecture, royal interiors, panoramic city views",
      best: "Evening golden hour shots, palace exteriors, royal halls",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Ramoji Film City",
      type: "Film Studio",
      why: "Multiple themed sets, gardens, palaces, European streets",
      best: "All day - diverse backdrops available",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Golconda Fort",
      type: "Historical Monument",
      why: "Ancient architecture, stunning sunset views, dramatic backdrops",
      best: "Sunset photography, architectural shots",
      rating: "⭐⭐⭐⭐"
    },
    {
      name: "Qutub Shahi Tombs",
      type: "Heritage Site",
      why: "Indo-Persian architecture, beautiful domes, peaceful atmosphere",
      best: "Morning soft light, architectural photography",
      rating: "⭐⭐⭐⭐"
    },
    {
      name: "Hussain Sagar Lake",
      type: "Lakefront",
      why: "Waterfront views, Buddha statue backdrop, city skyline",
      best: "Sunset shots, romantic evening photography",
      rating: "⭐⭐⭐⭐"
    },
    {
      name: "Durgam Cheruvu (Secret Lake)",
      type: "Natural Lake",
      why: "Unique rock formations, serene waters, less crowded",
      best: "Sunrise and sunset, nature photography",
      rating: "⭐⭐⭐⭐"
    },
    {
      name: "Botanical Garden",
      type: "Gardens",
      why: "Lush greenery, flower gardens, variety of backdrops",
      best: "Morning light, garden photography",
      rating: "⭐⭐⭐⭐"
    },
    {
      name: "Shamirpet Lake",
      type: "Lake & Hills",
      why: "Peaceful location, scenic landscapes, less urban",
      best: "Pre-wedding shoots, outdoor sessions",
      rating: "⭐⭐⭐⭐"
    }
  ];

  return (
    <div className="min-h-screen mt-16 py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/blog" className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>

        <article>
          <img 
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1200"
            alt="Best Wedding Photo Spots in Hyderabad"
            className="w-full h-96 object-cover rounded-2xl mb-8"
          />

          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Best Wedding Photo Spots in Hyderabad (2026 Guide)
          </h1>
          
          <div className="flex items-center gap-4 text-slate-600 mb-8 pb-8 border-b">
            <span>January 20, 2026</span>
            <span>•</span>
            <span>By Suguru Weddings Team</span>
            <span>•</span>
            <span>8 min read</span>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-slate-700 leading-relaxed mb-6">
              Hyderabad offers a perfect blend of heritage, modern architecture, and natural beauty - making it an ideal city for stunning wedding photography. As professional wedding photographers who've shot at 500+ locations across the city, we're sharing our top picks for the best wedding photo spots in Hyderabad.
            </p>

            <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-6">Why Location Matters for Wedding Photography</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              The right location can transform your wedding photos from ordinary to extraordinary. A beautiful backdrop adds depth, character, and visual interest to your images. Whether you prefer historic monuments, luxury hotels, or natural landscapes, Hyderabad has it all.
            </p>

            <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-6">Top 8 Wedding Photo Locations in Hyderabad</h2>
            
            <div className="space-y-8 my-8">
              {spots.map((spot, idx) => (
                <div key={idx} className="bg-slate-50 rounded-xl p-6 border-l-4 border-rose-600">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold text-slate-800">{idx + 1}. {spot.name}</h3>
                    <span className="text-2xl">{spot.rating}</span>
                  </div>
                  <p className="text-rose-600 font-semibold mb-3">Type: {spot.type}</p>
                  <p className="text-slate-700 mb-2"><strong>Why we love it:</strong> {spot.why}</p>
                  <p className="text-slate-700"><strong>Best for:</strong> {spot.best}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-6">Pro Tips for Shooting at These Locations</h2>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <Camera className="h-6 w-6 text-rose-600 mt-1 flex-shrink-0" />
                <span className="text-slate-700"><strong>Get permits:</strong> Many heritage sites require photography permits. Book in advance.</span>
              </li>
              <li className="flex items-start gap-3">
                <Camera className="h-6 w-6 text-rose-600 mt-1 flex-shrink-0" />
                <span className="text-slate-700"><strong>Visit at right time:</strong> Golden hours (early morning and late afternoon) give the best natural light.</span>
              </li>
              <li className="flex items-start gap-3">
                <Camera className="h-6 w-6 text-rose-600 mt-1 flex-shrink-0" />
                <span className="text-slate-700"><strong>Scout beforehand:</strong> Visit the location before your wedding day to plan shots and timing.</span>
              </li>
              <li className="flex items-start gap-3">
                <Camera className="h-6 w-6 text-rose-600 mt-1 flex-shrink-0" />
                <span className="text-slate-700"><strong>Hire professionals:</strong> Experienced Hyderabad photographers know these locations inside-out.</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-6">Choosing the Right Location for Your Wedding Style</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Your wedding location should match your personal style and wedding theme:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6 ml-4">
              <li><strong>Traditional Telugu Wedding:</strong> Choose Qutub Shahi Tombs or Golconda Fort for cultural richness</li>
              <li><strong>Luxury Modern Wedding:</strong> Taj Falaknuma Palace or high-end hotels work best</li>
              <li><strong>Nature-Loving Couples:</strong> Shamirpet Lake, Durgam Cheruvu, or Botanical Garden</li>
              <li><strong>Cinematic Shoots:</strong> Ramoji Film City offers the most variety</li>
            </ul>

            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-8 my-12 border border-rose-200">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Need Help Planning Your Wedding Photography?</h3>
              <p className="text-slate-700 mb-6">
                At Suguru Weddings, we've photographed weddings at all these locations and can help you choose the perfect spot for your style. We handle all permits, timing, and create a shot list tailored to each venue.
              </p>
              <Link 
                to="/#contact"
                className="inline-block bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-full font-semibold transition"
              >
                Book a Consultation
              </Link>
            </div>

            <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-6">Conclusion</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Hyderabad is blessed with incredible diversity in wedding photography locations. From royal palaces to serene lakes, heritage monuments to modern venues - you have endless options to create stunning wedding memories.
            </p>
            <p className="text-slate-700 leading-relaxed">
              The key is choosing locations that resonate with your story and working with experienced photographers who know how to make the most of each spot's unique features.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t">
            <p className="text-slate-600 mb-4">Ready to start planning your wedding photography?</p>
            <Link 
              to="/#contact"
              className="inline-block bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Contact Suguru Weddings
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BestWeddingSpots;
