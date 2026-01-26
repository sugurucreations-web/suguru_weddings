import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Camera, Phone, Check, Anchor } from 'lucide-react';

const PhotographerVisakhapatnam = ({ content }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Wedding Photographer in Visakhapatnam | Beach Wedding Photography Vizag - Suguru Weddings";
  }, []);

  const venues = [
    "The Park Visakhapatnam",
    "Novotel Visakhapatnam Varun Beach",
    "Welcomhotel by ITC",
    "Rushikonda Beach",
    "Rama Krishna Beach",
    "Kailasagiri Hill Park",
    "Yarada Beach",
    "Dolphin's Nose Viewpoint"
  ];

  return (
    <div className="min-h-screen mt-16 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Anchor className="h-12 w-12 text-blue-600" />
            <h1 className="text-5xl font-bold text-slate-800">
              Wedding Photographer in Visakhapatnam
            </h1>
          </div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Beach wedding photography specialist in Visakhapatnam (Vizag), Andhra Pradesh. Capturing stunning coastal weddings with ocean views and golden sunsets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800"
              alt="Beach Wedding Photography Visakhapatnam"
              className="rounded-2xl shadow-2xl mb-6"
            />
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400"
                alt="Vizag Beach Wedding"
                className="rounded-xl shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=400"
                alt="Coastal Wedding Visakhapatnam"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Premier Beach Wedding Photographer in Vizag
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Visakhapatnam, the 'Jewel of the East Coast', offers spectacular beachfront venues perfect for destination weddings. Suguru Weddings specializes in beach wedding photography, capturing the magic of ocean waves, golden sunsets, and coastal celebrations.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              From luxury resorts like The Park and Novotel to pristine beaches like Rushikonda and Yarada, we've photographed weddings at all major Vizag locations. Our experience with beach weddings ensures perfect timing for golden hour shots and stunning ocean backdrops.
            </p>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl mb-6 border border-cyan-200">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Camera className="h-6 w-6 text-cyan-600" />
                Beach Wedding Photography Specialties:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-cyan-600 mt-1 flex-shrink-0" />
                  <span>Sunset beach ceremonies photography</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-cyan-600 mt-1 flex-shrink-0" />
                  <span>Ocean backdrop couple portraits</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-cyan-600 mt-1 flex-shrink-0" />
                  <span>Drone aerial shots of coastal venues</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-cyan-600 mt-1 flex-shrink-0" />
                  <span>Beach pre-wedding photoshoots</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-cyan-600 mt-1 flex-shrink-0" />
                  <span>Handling beach lighting challenges</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-cyan-600 mt-1 flex-shrink-0" />
                  <span>Complete destination wedding coverage</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-xl p-6">
              <h3 className="font-bold text-xl mb-2">Beach Wedding Packages from ₹80,000</h3>
              <p className="mb-4 opacity-90">Includes travel, accommodation, and complete wedding coverage</p>
              <div className="flex gap-4">
                <Link to="/#contact" className="bg-cyan-600 hover:bg-cyan-700 px-6 py-2 rounded-lg font-semibold transition">
                  Get Quote
                </Link>
                <a href="tel:+919876543210" className="bg-white/20 hover:bg-white/30 px-6 py-2 rounded-lg font-semibold transition">
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Beach Venues */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Beach Wedding Venues in Visakhapatnam</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {venues.map((venue, idx) => (
              <div key={idx} className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl border-2 border-cyan-200 hover:border-cyan-600 hover:shadow-lg transition">
                <MapPin className="h-8 w-8 text-cyan-600 mb-3" />
                <h3 className="font-bold text-lg">{venue}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Beach Wedding Tips */}
        <div className="mb-16 bg-amber-50 rounded-2xl p-12 border border-amber-200">
          <h2 className="text-3xl font-bold text-center mb-12">Beach Wedding Photography Tips</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                <span className="text-3xl">🌅</span>
                Golden Hour Magic
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Schedule your ceremony 1-2 hours before sunset for the most beautiful, warm lighting. The golden hour creates stunning, romantic photos with soft shadows and glowing backgrounds.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                <span className="text-3xl">🌊</span>
                Tide Timing
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Check tide schedules when planning beach ceremonies. Low tide provides more beach space and better photo opportunities, while high tide can create dramatic wave backdrops.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                <span className="text-3xl">👗</span>
                Dress Selection
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Choose flowing fabrics that move beautifully with ocean breeze. Avoid very long trains that can drag in sand. Lighter colors photograph beautifully against blue ocean backdrops.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                <span className="text-3xl">☀️</span>
                Weather Backup
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Always have an indoor backup plan. We scout alternate locations and have contingency plans for unexpected weather changes typical of coastal areas.
              </p>
            </div>
          </div>
        </div>

        {/* Why Vizag for Weddings */}
        <div className="mb-16 bg-slate-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Visakhapatnam for Your Wedding?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🏖️</div>
              <h3 className="font-bold text-xl mb-3">Pristine Beaches</h3>
              <p className="text-slate-600">
                Vizag boasts some of India's most beautiful beaches - Rushikonda, Yarada, and RK Beach offer stunning wedding backdrops.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🏨</div>
              <h3 className="font-bold text-xl mb-3">Luxury Resorts</h3>
              <p className="text-slate-600">
                5-star beachfront hotels like The Park, Novotel, and Welcomhotel provide world-class wedding venues and guest accommodations.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">✈️</div>
              <h3 className="font-bold text-xl mb-3">Well Connected</h3>
              <p className="text-slate-600">
                International airport, excellent rail connectivity, and coastal highway make Vizag easily accessible for destination wedding guests.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Beach Wedding Photography Packages</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Beach Essentials",
                price: "₹80,000",
                features: [
                  "Full day beach coverage",
                  "2 photographers",
                  "500+ edited photos",
                  "Sunset session",
                  "All travel costs included"
                ]
              },
              {
                name: "Coastal Premium",
                price: "₹1,20,000",
                popular: true,
                features: [
                  "2-day complete coverage",
                  "3 photographers",
                  "800+ photos + video",
                  "Drone beach coverage",
                  "Pre-wedding beach shoot",
                  "Luxury album"
                ]
              },
              {
                name: "Destination Luxury",
                price: "₹1,80,000",
                features: [
                  "3-day full coverage",
                  "Full photo+video team",
                  "1200+ photos",
                  "Cinematic wedding film",
                  "Multiple beach locations",
                  "Complete travel package"
                ]
              }
            ].map((pkg, idx) => (
              <div key={idx} className={`rounded-2xl p-6 ${pkg.popular ? 'bg-gradient-to-br from-cyan-600 to-blue-600 text-white scale-105 shadow-2xl' : 'bg-white border-2 border-slate-200'}`}>
                {pkg.popular && (
                  <div className="bg-white text-cyan-600 text-sm font-bold px-3 py-1 rounded-full inline-block mb-3">
                    BEST VALUE
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-slate-800'}`}>
                  {pkg.name}
                </h3>
                <p className={`text-3xl font-bold mb-6 ${pkg.popular ? 'text-white' : 'text-cyan-600'}`}>
                  {pkg.price}
                </p>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className={`flex items-start gap-2 text-sm ${pkg.popular ? 'text-white' : 'text-slate-700'}`}>
                      <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/#contact"
                  className={`block text-center py-3 rounded-lg font-semibold transition ${
                    pkg.popular 
                      ? 'bg-white text-cyan-600 hover:bg-slate-100' 
                      : 'bg-cyan-600 text-white hover:bg-cyan-700'
                  }`}
                >
                  Book Package
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl shadow-xl p-8 max-w-3xl mx-auto border border-cyan-200">
            <div className="flex items-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-2xl">★</span>
              ))}
            </div>
            <p className="text-slate-700 text-lg italic mb-4">
              "Our beach wedding at Rushikonda was a dream come true, and Suguru Weddings captured every magical moment perfectly. The sunset photos are absolutely breathtaking! They handled the beach lighting challenges expertly."
            </p>
            <p className="font-bold text-slate-800">- Deepika & Arjun</p>
            <p className="text-slate-500 text-sm">Beach Wedding at The Park, Visakhapatnam</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-4">Plan Your Beach Wedding in Visakhapatnam</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Create stunning beach wedding memories in Vizag. Contact us for customized photography packages and venue recommendations.
          </p>
          <Link to="/#contact" className="inline-block bg-white text-cyan-600 px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition">
            Schedule Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PhotographerVisakhapatnam;
