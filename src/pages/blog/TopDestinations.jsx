import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Plane, ArrowLeft } from 'lucide-react';

const TopDestinations = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Top Andhra Pradesh Wedding Destinations 2026 - Suguru Weddings";
  }, []);

  const destinations = [
    {
      name: "Visakhapatnam",
      tagline: "The Jewel of the East Coast",
      type: "Beach Destination",
      highlights: [
        "Rushikonda Beach - pristine golden sands",
        "Rama Krishna Beach - iconic sunset views",
        "The Park & Novotel resorts - luxury beachfront venues",
        "Kailasagiri Hill - panoramic city and ocean views"
      ],
      bestFor: "Beach weddings, sunset ceremonies, modern luxury celebrations",
      season: "October to March",
      rating: 5
    },
    {
      name: "Vijayawada",
      tagline: "The Business Capital's Hidden Charm",
      type: "Riverside & Heritage",
      highlights: [
        "Prakasam Barrage - stunning river views",
        "Bhavani Island - unique island wedding venue",
        "Undavalli Caves - ancient rock-cut architecture",
        "Gateway Hotel & Fortune Murali - heritage properties"
      ],
      bestFor: "Riverside ceremonies, heritage weddings, corporate events",
      season: "November to February",
      rating: 4
    },
    {
      name: "Tirupati",
      tagline: "Sacred Hills, Divine Celebrations",
      type: "Temple Town & Hills",
      highlights: [
        "Temple venues with spiritual significance",
        "Tirumala Hills - cool climate and scenic beauty",
        "Marasa Sarovar Premiere - luxury accommodations",
        "Chandragiri Fort - historical venue option"
      ],
      bestFor: "Traditional temple weddings, spiritual ceremonies, hill station ambiance",
      season: "September to February",
      rating: 4
    },
    {
      name: "Araku Valley",
      tagline: "Coffee Country Romance",
      type: "Hill Station",
      highlights: [
        "Coffee plantations - unique natural backdrop",
        "Borra Caves - million-year-old limestone formations",
        "Tribal culture and art",
        "Cool climate year-round"
      ],
      bestFor: "Intimate destination weddings, nature lovers, adventure couples",
      season: "October to March (stunning in monsoon too)",
      rating: 5
    },
    {
      name: "Ananthagiri Hills",
      tagline: "Misty Mountain Magic",
      type: "Hill Station",
      highlights: [
        "Lush green landscapes",
        "Coffee and pepper plantations",
        "Anantha Padmanabha Swamy Temple",
        "Close to Hyderabad (90km)"
      ],
      bestFor: "Pre-wedding shoots, intimate gatherings, monsoon weddings",
      season: "June to January",
      rating: 4
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
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200"
            alt="Top Andhra Pradesh Wedding Destinations"
            className="w-full h-96 object-cover rounded-2xl mb-8"
          />

          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Top 5 Wedding Destinations in Andhra Pradesh (2026 Guide)
          </h1>
          
          <div className="flex items-center gap-4 text-slate-600 mb-8 pb-8 border-b">
            <span>January 10, 2026</span>
            <span>•</span>
            <span>By Suguru Weddings Team</span>
            <span>•</span>
            <span>9 min read</span>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-slate-700 leading-relaxed mb-6">
              Andhra Pradesh offers breathtaking diversity for destination weddings - from pristine beaches to sacred hills, coffee plantations to heritage sites. Having photographed 100+ destination weddings across the state, we're sharing our insider guide to AP's most spectacular wedding destinations.
            </p>

            <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-6">Why Choose Andhra Pradesh for Your Destination Wedding?</h2>
            <div className="bg-blue-50 rounded-xl p-6 my-6">
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <Plane className="h-5 w-5 text-blue-600 mt-1" />
                  <span><strong>Accessibility:</strong> Well-connected by air, rail, and road from Hyderabad and major cities</span>
                </li>
                <li className="flex items-start gap-3">
                  <Plane className="h-5 w-5 text-blue-600 mt-1" />
                  <span><strong>Affordability:</strong> More budget-friendly than Goa or Kerala for similar experiences</span>
                </li>
                <li className="flex items-start gap-3">
                  <Plane className="h-5 w-5 text-blue-600 mt-1" />
                  <span><strong>Variety:</strong> Beach, hills, heritage, and temple destinations all within one state</span>
                </li>
                <li className="flex items-start gap-3">
                  <Plane className="h-5 w-5 text-blue-600 mt-1" />
                  <span><strong>Cultural richness:</strong> Traditional Telugu hospitality and customs</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-6">Top 5 Destination Wedding Locations</h2>
            
            <div className="space-y-10 my-10">
              {destinations.map((dest, idx) => (
                <div key={idx} className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl overflow-hidden shadow-lg">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-3xl font-bold mb-2">{idx + 1}. {dest.name}</h3>
                        <p className="text-xl italic opacity-90">{dest.tagline}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(dest.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-4">
                      <span className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold">
                        {dest.type}
                      </span>
                    </div>
                    
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-rose-600" />
                      Key Highlights:
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-2 mb-4">
                      {dest.highlights.map((highlight, i) => (
                        <li key={i} className="text-slate-700 flex items-start gap-2">
                          <span className="text-rose-600 mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="grid md:grid-cols-2 gap-4 mt-6 pt-6 border-t">
                      <div>
                        <p className="font-semibold text-slate-800 mb-1">Best For:</p>
                        <p className="text-slate-600">{dest.bestFor}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800 mb-1">Best Season:</p>
                        <p className="text-slate-600">{dest.season}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-6">Planning Tips for Destination Weddings in AP</h2>
            
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-6">
              <h3 className="font-bold text-lg mb-4">Before You Book:</h3>
              <ul className="space-y-2 text-slate-700">
                <li><strong>1. Visit the venue:</strong> Always do a site visit before finalizing</li>
                <li><strong>2. Check accessibility:</strong> Ensure guests can reach easily</li>
                <li><strong>3. Accommodation:</strong> Verify enough rooms for all guests</li>
                <li><strong>4. Vendor availability:</strong> Confirm local vendors or plan to bring your team</li>
                <li><strong>5. Weather backup:</strong> Have indoor options for outdoor venues</li>
                <li><strong>6. Permits:</strong> Some beach/heritage locations need photography permits</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-6">Estimated Costs</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Destination wedding costs in Andhra Pradesh vary widely based on guest count, venue, and season:
            </p>
            <div className="bg-slate-50 rounded-xl p-6 my-6">
              <ul className="space-y-3 text-slate-700">
                <li><strong>Budget (50-100 guests):</strong> ₹5-8 lakhs</li>
                <li><strong>Mid-range (100-200 guests):</strong> ₹12-20 lakhs</li>
                <li><strong>Luxury (200+ guests):</strong> ₹25-50 lakhs+</li>
              </ul>
              <p className="text-sm text-slate-500 mt-4">
                *Includes venue, accommodation, food, and basic decorations. Photography, entertainment, and elaborate decor are additional.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-6">Photography Considerations</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              As wedding photographers, we recommend:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6 ml-4">
              <li>Book photographers familiar with the destination</li>
              <li>Allow time for location scouting (arrive 1 day early)</li>
              <li>Consider drone coverage for beaches and hills</li>
              <li>Plan golden hour shoots at scenic spots</li>
              <li>Budget for photographer travel and accommodation</li>
            </ul>

            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-8 my-12 border border-rose-200">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Planning a Destination Wedding in AP?</h3>
              <p className="text-slate-700 mb-6">
                We've photographed weddings at all these destinations and can help you choose the perfect location for your celebration. We handle location scouting, permits, and create stunning photographs that capture your destination wedding's unique beauty.
              </p>
              <Link 
                to="/#contact"
                className="inline-block bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-full font-semibold transition"
              >
                Discuss Your Destination Wedding
              </Link>
            </div>

            <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-6">Conclusion</h2>
            <p className="text-slate-700 leading-relaxed">
              Andhra Pradesh offers stunning diversity for destination weddings. Whether you dream of a beach ceremony in Visakhapatnam, a temple wedding in Tirupati, or an intimate celebration in coffee country, AP has it all. The key is choosing a destination that reflects your personality, planning well in advance, and working with experienced vendors who know these locations. Your destination wedding should be an unforgettable experience for you and your guests - and Andhra Pradesh delivers exactly that.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default TopDestinations;
