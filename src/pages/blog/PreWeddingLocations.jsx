import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Heart, ArrowLeft } from 'lucide-react';

const PreWeddingLocations = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Telangana Pre-Wedding Photoshoot Locations 2025 - Suguru Weddings";
  }, []);

  const locations = [
    {
      name: "Ramoji Film City",
      type: "Film Studio Complex",
      features: ["Multiple themed sets", "Gardens & fountains", "European streets", "Japanese garden"],
      bestFor: "Cinematic couples, variety seekers",
      cost: "₹2,000-5,000 entry + permit fees"
    },
    {
      name: "Ananthagiri Hills",
      type: "Hill Station",
      features: ["Misty landscapes", "Coffee plantations", "Tribal culture", "Waterfalls"],
      bestFor: "Nature lovers, monsoon shoots",
      cost: "Free (travel: 90km from Hyderabad)"
    },
    {
      name: "Golconda Fort",
      type: "Historical Monument",
      features: ["Ancient architecture", "Sunset views", "Stone corridors", "Panoramic vistas"],
      bestFor: "Heritage-themed shoots",
      cost: "₹25 entry + ₹2,000 photography permit"
    },
    {
      name: "Hussain Sagar Lake",
      type: "Lakefront",
      features: ["Buddha statue backdrop", "Sunset views", "City skyline", "Boat options"],
      bestFor: "Romantic evening shoots",
      cost: "Free (public area)"
    },
    {
      name: "Shamirpet Lake",
      type: "Scenic Lake",
      features: ["Peaceful surroundings", "Hills & water", "Less crowded", "Natural beauty"],
      bestFor: "Intimate, peaceful shoots",
      cost: "Free (40km from city)"
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
            src="https://images.unsplash.com/photo-1530047625168-4b29bfbbe1fc?w=1200"
            alt="Pre-Wedding Photoshoot Locations Telangana"
            className="w-full h-96 object-cover rounded-2xl mb-8"
          />

          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Top 15 Pre-Wedding Photoshoot Locations in Telangana (2025)
          </h1>
          
          <div className="flex items-center gap-4 text-slate-600 mb-8 pb-8 border-b">
            <span>January 18, 2025</span>
            <span>•</span>
            <span>By Suguru Weddings Team</span>
            <span>•</span>
            <span>10 min read</span>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-slate-700 leading-relaxed mb-6">
              Planning a pre-wedding photoshoot in Telangana? You're in luck! The state offers diverse locations from heritage monuments to lush hills, serene lakes to modern cityscapes. As photographers who've covered 200+ pre-wedding shoots across Telangana, we're sharing our insider guide to the best locations.
            </p>

            <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-6">Why Choose Telangana for Your Pre-Wedding Shoot?</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Telangana offers incredible variety within short distances. You can shoot at a 400-year-old fort in the morning and a modern lakefront by evening. The state's rich cultural heritage combined with natural beauty makes it perfect for couples seeking unique backdrops.
            </p>

            <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-6">Top Pre-Wedding Locations in Telangana</h2>
            
            <div className="space-y-8 my-8">
              {locations.map((loc, idx) => (
                <div key={idx} className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 border-l-4 border-rose-600">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-2">{idx + 1}. {loc.name}</h3>
                      <p className="text-rose-600 font-semibold flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {loc.type}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="font-semibold text-slate-700 mb-2">Key Features:</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {loc.features.map((feature, i) => (
                        <li key={i} className="text-sm text-slate-600 flex items-center gap-2">
                          <Heart className="h-3 w-3 text-rose-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-slate-700">Best For:</p>
                      <p className="text-slate-600">{loc.bestFor}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-700">Approximate Cost:</p>
                      <p className="text-slate-600">{loc.cost}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-6">Tips for a Perfect Pre-Wedding Shoot</h2>
            
            <div className="bg-slate-50 rounded-xl p-8 my-8">
              <h3 className="text-xl font-bold mb-4">Planning Your Shoot:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-rose-600 font-bold">1.</span>
                  <span className="text-slate-700"><strong>Book in advance:</strong> Popular locations like Ramoji Film City require advance booking, especially on weekends.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-600 font-bold">2.</span>
                  <span className="text-slate-700"><strong>Check weather:</strong> Monsoon makes Ananthagiri Hills stunning but also challenging. Plan accordingly.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-600 font-bold">3.</span>
                  <span className="text-slate-700"><strong>Multiple locations:</strong> Combine 2-3 nearby locations in one day for variety.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-600 font-bold">4.</span>
                  <span className="text-slate-700"><strong>Outfit changes:</strong> Plan 2-3 outfit changes to maximize variety from each location.</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-6">Best Time to Shoot</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              <strong>October to February:</strong> Perfect weather with cool temperatures and clear skies. This is peak wedding season, so book early.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              <strong>March to May:</strong> Hot but manageable for morning and evening shoots. Indoor locations like Ramoji Film City work well.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              <strong>June to September:</strong> Monsoon brings lush greenery. Ananthagiri Hills and lake locations look spectacular.
            </p>

            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-8 my-12 border border-rose-200">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Ready to Book Your Pre-Wedding Shoot?</h3>
              <p className="text-slate-700 mb-6">
                We've covered pre-wedding shoots at all these locations and can help you plan the perfect day. From location scouting to permits to creative concepts - we handle everything.
              </p>
              <Link 
                to="/#contact"
                className="inline-block bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-full font-semibold transition"
              >
                Book Your Shoot
              </Link>
            </div>

            <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-6">Conclusion</h2>
            <p className="text-slate-700 leading-relaxed">
              Telangana's diverse landscapes offer endless possibilities for creative pre-wedding photography. Whether you want heritage grandeur, natural serenity, or modern chic - there's a perfect location waiting for you. The key is choosing places that reflect your personality and working with photographers who know these locations intimately.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t">
            <Link 
              to="/#contact"
              className="inline-block bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Contact Us for Pre-Wedding Shoots
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
};

export default PreWeddingLocations;
