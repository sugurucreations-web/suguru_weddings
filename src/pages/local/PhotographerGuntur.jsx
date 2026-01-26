import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Camera, Phone, Check } from 'lucide-react';

const PhotographerGuntur = ({ content }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Wedding Photographer in Guntur | Best Wedding Photography Guntur AP - Suguru Weddings";
  }, []);

  const venues = [
    "Brindavan Gardens",
    "Sai Priya Resorts",
    "Hotel DV Manor",
    "Green Park Function Hall",
    "Amaravati Heritage Sites",
    "Uppalapadu Bird Sanctuary",
    "Kondaveedu Fort",
    "Guntur City Banquet Halls"
  ];

  return (
    <div className="min-h-screen mt-16 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-slate-800 mb-4">
            Wedding Photographer in Guntur
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Professional wedding photography services in Guntur, Andhra Pradesh. Capturing traditional Telugu weddings with cultural authenticity and modern creativity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800"
              alt="Wedding Photography in Guntur"
              className="rounded-2xl shadow-2xl mb-6"
            />
            <img 
              src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800"
              alt="Traditional Telugu Wedding Guntur"
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Trusted Wedding Photographers in Guntur
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Guntur, the heart of Andhra Pradesh, is known for its rich cultural heritage and traditional Telugu weddings. Suguru Weddings brings premium photography services to Guntur, understanding the local customs, traditions, and the importance of capturing every ritual authentically.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Whether your wedding is at Brindavan Gardens, Hotel DV Manor, or traditional kalyana mandapams, we travel from Hyderabad to provide the same high-quality photography service that our clients expect. Our team is familiar with Guntur venues and can navigate the city efficiently to capture your special day.
            </p>

            <div className="bg-green-50 rounded-xl p-6 mb-6 border border-green-200">
              <h3 className="font-bold text-lg mb-4">Why Choose Us for Guntur Weddings?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Deep understanding of Telugu wedding rituals</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Familiar with all major Guntur wedding venues</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Experience with traditional and modern ceremonies</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Complete travel costs included in packages</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Bilingual team (Telugu & English)</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-xl p-6">
              <h3 className="font-bold text-xl mb-2">Wedding Packages from ₹55,000</h3>
              <p className="mb-4 opacity-90">Traditional + Candid photography with complete coverage</p>
              <div className="flex gap-4">
                <Link to="/#contact" className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg font-semibold transition">
                  Get Quote
                </Link>
                <a href="tel:+919876543210" className="bg-white/20 hover:bg-white/30 px-6 py-2 rounded-lg font-semibold transition">
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Venues */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Wedding Venues in Guntur</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {venues.map((venue, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border-2 border-slate-200 hover:border-green-600 hover:shadow-lg transition">
                <MapPin className="h-8 w-8 text-green-600 mb-3" />
                <h3 className="font-bold text-lg">{venue}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-16 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-12 border border-green-200">
          <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Wedding Photography Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Traditional Photography",
                desc: "Classic family portraits, group photos, and formal ceremony documentation"
              },
              {
                title: "Candid Photography",
                desc: "Natural moments and emotions captured as they unfold during your wedding"
              },
              {
                title: "Pre-Wedding Shoots",
                desc: "Creative couple photoshoots at scenic Guntur and nearby locations"
              },
              {
                title: "Videography",
                desc: "Cinematic wedding films capturing your complete celebration"
              },
              {
                title: "Drone Coverage",
                desc: "Aerial shots of venues and outdoor celebrations"
              },
              {
                title: "Albums & Prints",
                desc: "Premium quality wedding albums and professional prints"
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md">
                <Camera className="h-10 w-10 text-green-600 mb-4" />
                <h3 className="font-bold text-xl mb-2">{service.title}</h3>
                <p className="text-slate-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* About Guntur */}
        <div className="mb-16 bg-slate-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-center mb-12">Guntur: A Perfect Wedding Destination</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">Cultural Heritage</h3>
              <p className="text-slate-700 leading-relaxed mb-6">
                Guntur is steeped in Telugu culture and traditions. The city is known for maintaining authentic wedding customs, making it ideal for couples seeking traditional ceremonies with cultural depth.
              </p>
              <h3 className="font-bold text-xl mb-4">Strategic Location</h3>
              <p className="text-slate-700 leading-relaxed">
                Located centrally in Andhra Pradesh, Guntur is well-connected to Vijayawada (30km), Amaravati (25km), and other major cities, making it convenient for guests from across the state.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4">Modern Amenities</h3>
              <p className="text-slate-700 leading-relaxed mb-6">
                Despite its traditional roots, Guntur offers modern wedding venues, quality hotels, and excellent facilities ensuring comfort for you and your guests.
              </p>
              <h3 className="font-bold text-xl mb-4">Scenic Surroundings</h3>
              <p className="text-slate-700 leading-relaxed">
                Nearby locations like Amaravati, Kondaveedu Fort, and Uppalapadu offer beautiful backdrops for pre-wedding and outdoor photography sessions.
              </p>
            </div>
          </div>
        </div>

        {/* Packages */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Photography Packages for Guntur</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Traditional Package",
                price: "₹55,000",
                features: [
                  "10 hours coverage",
                  "2 photographers",
                  "400+ edited photos",
                  "Traditional + candid mix",
                  "Photo album (30 pages)",
                  "Travel included"
                ]
              },
              {
                name: "Premium Package",
                price: "₹90,000",
                popular: true,
                features: [
                  "Full day coverage",
                  "3 photographers",
                  "600+ edited photos",
                  "Cinematic video",
                  "Luxury album (50 pages)",
                  "Pre-wedding shoot",
                  "All travel & stay"
                ]
              },
              {
                name: "Luxury Package",
                price: "₹1,40,000",
                features: [
                  "2-day coverage",
                  "4 photographers + team",
                  "1000+ edited photos",
                  "Full wedding film",
                  "Premium albums (2 sets)",
                  "Drone coverage",
                  "Complete package"
                ]
              }
            ].map((pkg, idx) => (
              <div key={idx} className={`rounded-2xl p-6 ${pkg.popular ? 'bg-gradient-to-br from-green-600 to-emerald-600 text-white scale-105 shadow-2xl' : 'bg-white border-2 border-slate-200'}`}>
                {pkg.popular && (
                  <div className="bg-white text-green-600 text-sm font-bold px-3 py-1 rounded-full inline-block mb-3">
                    RECOMMENDED
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-slate-800'}`}>
                  {pkg.name}
                </h3>
                <p className={`text-3xl font-bold mb-6 ${pkg.popular ? 'text-white' : 'text-green-600'}`}>
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
                      ? 'bg-white text-green-600 hover:bg-slate-100' 
                      : 'bg-green-600 text-white hover:bg-green-700'
                  }`}
                >
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl mx-auto border-2 border-green-200">
            <div className="flex items-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-2xl">★</span>
              ))}
            </div>
            <p className="text-slate-700 text-lg italic mb-4">
              "We had our wedding in Guntur and Suguru Weddings exceeded all our expectations. They captured every traditional ritual beautifully and the candid photos are absolutely stunning. The team was professional, punctual, and understood our Telugu wedding customs perfectly."
            </p>
            <p className="font-bold text-slate-800">- Sravya & Kiran</p>
            <p className="text-slate-500 text-sm">Wedding at Brindavan Gardens, Guntur</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-4">Book Your Guntur Wedding Photographer</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Preserve your precious wedding memories with professional photography. Contact us for packages and availability in Guntur.
          </p>
          <Link to="/#contact" className="inline-block bg-white text-green-600 px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PhotographerGuntur;
