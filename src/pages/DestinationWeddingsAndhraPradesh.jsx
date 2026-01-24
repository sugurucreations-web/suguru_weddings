import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plane, Camera, Check, MapPin, Star } from 'lucide-react';

const DestinationWeddingsAndhraPradesh = ({ content }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Destination Wedding Photography Andhra Pradesh | Wedding Photographer Visakhapatnam Vijayawada - Suguru Weddings";
  }, []);

  const destinations = [
    { 
      name: "Visakhapatnam", 
      desc: "Beach weddings with stunning ocean views",
      highlights: ["Rushikonda Beach", "Rama Krishna Beach", "Beach resorts"],
      image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400"
    },
    { 
      name: "Vijayawada", 
      desc: "Riverside venues and heritage locations",
      highlights: ["Prakasam Barrage", "Bhavani Island", "Heritage hotels"],
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400"
    },
    { 
      name: "Tirupati", 
      desc: "Temple weddings in sacred surroundings",
      highlights: ["Temple venues", "Hill stations", "Luxury resorts"],
      image: "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?w=400"
    },
    { 
      name: "Araku Valley", 
      desc: "Hill station weddings in coffee plantations",
      highlights: ["Coffee estates", "Tribal museums", "Scenic valleys"],
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[70vh] mt-16">
        <img 
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1600" 
          alt="Destination Wedding Photography Andhra Pradesh"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Destination Wedding Photography in Andhra Pradesh
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl">
              Professional wedding photography for destination weddings across Andhra Pradesh. From beaches to hills, temples to resorts - we capture your special moments anywhere.
            </p>
            <Link to="/#contact" className="inline-block bg-rose-600 hover:bg-rose-700 px-8 py-4 rounded-lg font-semibold flex items-center gap-2 w-fit">
              <Plane className="h-5 w-5" />
              Plan Your Destination Wedding
            </Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">
                Destination Wedding Photographers Covering Andhra Pradesh
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Planning a destination wedding in Andhra Pradesh? Suguru Weddings travels across the state to document your special celebration, whether it's a beachside ceremony in Visakhapatnam, a heritage wedding in Vijayawada, or a temple wedding in Tirupati.
              </p>
              <p className="text-slate-600 mb-4 leading-relaxed">
                With experience covering 100+ destination weddings across Andhra Pradesh and neighboring states, we understand the unique challenges and opportunities that come with destination wedding photography. Our team handles all logistics, from scouting locations to coordinating with local vendors.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                We arrive a day early to scout the venue, plan shots based on lighting conditions, and ensure we capture every important moment of your multi-day celebration.
              </p>
              
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Plane className="h-6 w-6 text-blue-600" />
                  Destination Wedding Coverage Includes:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-600 mt-1" />
                    <span>Complete multi-day event coverage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-600 mt-1" />
                    <span>Travel to any location in Andhra Pradesh</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-600 mt-1" />
                    <span>Pre-wedding location scouting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-600 mt-1" />
                    <span>Photography + videography team</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-600 mt-1" />
                    <span>Drone aerial coverage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-600 mt-1" />
                    <span>All travel & accommodation managed</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <img 
                src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800"
                alt="Beach wedding Visakhapatnam"
                className="rounded-2xl shadow-2xl"
              />
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400"
                  alt="Destination wedding photography"
                  className="rounded-xl shadow-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?w=400"
                  alt="Temple wedding photography"
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Popular Destinations */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-4">Popular Destination Wedding Locations in Andhra Pradesh</h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Discover the most beautiful and unique wedding destinations across Andhra Pradesh
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {destinations.map((dest, idx) => (
                <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition group">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={dest.image} 
                      alt={dest.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <Star className="h-4 w-4 text-yellow-500 inline" />
                      <span className="text-sm font-semibold ml-1">Popular</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2">{dest.name}</h3>
                    <p className="text-slate-600 mb-4">{dest.desc}</p>
                    <div className="space-y-1">
                      {dest.highlights.map((highlight, i) => (
                        <p key={i} className="text-sm text-slate-500 flex items-center gap-2">
                          <MapPin className="h-3 w-3" />
                          {highlight}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-16 bg-slate-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Suguru Weddings for Destination Weddings?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Experience Across AP",
                  desc: "We've covered weddings in all major cities and tourist destinations across Andhra Pradesh.",
                  icon: "🗺️"
                },
                {
                  title: "Complete Logistics",
                  desc: "We handle all travel arrangements, so you can focus on enjoying your wedding.",
                  icon: "✈️"
                },
                {
                  title: "Local Knowledge",
                  desc: "Familiar with local venues, best photo spots, and cultural traditions of each region.",
                  icon: "📍"
                },
                {
                  title: "Full Team Coverage",
                  desc: "Multiple photographers and videographers to capture every angle and moment.",
                  icon: "📸"
                },
                {
                  title: "Weather Backup Plans",
                  desc: "Always prepared with alternate plans for outdoor shoots based on weather conditions.",
                  icon: "🌤️"
                },
                {
                  title: "Fast Delivery",
                  desc: "Receive your edited photos and videos within 4-6 weeks, highlights in 1 week.",
                  icon: "⚡"
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-4">Destination Wedding Photography Packages</h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Transparent pricing with no hidden costs. Travel and accommodation included in all packages.
            </p>
            
           {/* Packages */}
          <div id="packages" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-4">Pre-Wedding Photoshoot Packages</h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Choose the perfect package for your pre-wedding shoot. All packages include professional editing and online gallery.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, idx) => (
                <div key={idx} className={`rounded-2xl p-8 ${pkg.popular ? 'bg-gradient-to-br from-rose-600 to-pink-600 text-white shadow-2xl scale-105' : 'bg-white border-2 border-slate-200'}`}>
                  {pkg.popular && (
                    <div className="bg-white text-rose-600 text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
                      MOST POPULAR
                    </div>
                  )}
                  <h3 className={`text-2xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-slate-800'}`}>
                    {pkg.name}
                  </h3>
                  <p className={`text-4xl font-bold mb-6 ${pkg.popular ? 'text-white' : 'text-rose-600'}`}>
                    {pkg.price}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className={`h-5 w-5 mt-0.5 ${pkg.popular ? 'text-white' : 'text-rose-600'}`} />
                        <span className={pkg.popular ? 'text-white' : 'text-slate-700'}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/#contact"
                    className={`block text-center py-3 rounded-lg font-semibold transition ${
                      pkg.popular 
                        ? 'bg-white text-rose-600 hover:bg-slate-100' 
                        : 'bg-rose-600 text-white hover:bg-rose-700'
                    }`}
                  >
                    Book This Package
                  </Link>
                </div>
              ))}
            </div>
          </div>
                    
                  {/* CTA */}
          <div className="bg-gradient-to-r from-rose-600 to-pink-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Ready for Your Destination Wedding Shoot?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's create beautiful memories together. Book your destination wedding shoot in Andhrapradesh today!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/#contact" className="bg-white text-rose-600 px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition">
                Book Now
              </Link>
              <a href="tel:+919876543210" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 px-8 py-4 rounded-full font-bold transition">
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationWeddingsAndhraPradesh;
