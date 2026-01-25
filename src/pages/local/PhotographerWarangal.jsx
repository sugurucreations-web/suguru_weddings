import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Camera, Phone, Check } from 'lucide-react';

const PhotographerWarangal = ({ content }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Wedding Photographer in Warangal | Best Wedding Photography Warangal - Suguru Weddings";
  }, []);

  const venues = [
    "Haritha Kakatiya Hotel",
    "Kakatiya Function Hall",
    "Sri Sai Lakshmi Kalyana Mandapam",
    "Heritage Wedding Venues",
    "Warangal Fort Area",
    "Bhadrakali Temple Surroundings",
    "Laknavaram Lake",
    "Thousand Pillar Temple"
  ];

  return (
    <div className="min-h-screen mt-16 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-slate-800 mb-4">
            Wedding Photographer in Warangal
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Professional wedding photography services in Warangal, Telangana. Capturing beautiful moments across Warangal's heritage locations and modern venues.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800"
              alt="Wedding Photography in Warangal"
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Trusted Wedding Photographers Serving Warangal
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Based in Hyderabad and serving Warangal, Suguru Weddings brings premium wedding photography services to one of Telangana's most historic cities. We understand the cultural significance of Warangal weddings and specialize in capturing traditional Telugu ceremonies.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Whether your wedding is at heritage hotels like Haritha Kakatiya Hotel, grand banquet halls, or traditional venues, we travel to Warangal to document your special day with the same quality and dedication as our Hyderabad clients.
            </p>

            <div className="bg-rose-50 rounded-xl p-6 mb-6">
              <h3 className="font-bold text-lg mb-4">Why Choose Us for Warangal Weddings?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-rose-600 mt-1 flex-shrink-0" />
                  <span>No extra travel charges within 100km of Hyderabad</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-rose-600 mt-1 flex-shrink-0" />
                  <span>Familiar with all major Warangal wedding venues</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-rose-600 mt-1 flex-shrink-0" />
                  <span>Deep understanding of Telugu traditions and rituals</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-rose-600 mt-1 flex-shrink-0" />
                  <span>Same premium quality as Hyderabad weddings</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-rose-600 mt-1 flex-shrink-0" />
                  <span>Complete photography + videography packages</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-xl p-6">
              <h3 className="font-bold text-xl mb-2">Packages Starting from ₹50,000</h3>
              <p className="mb-4 opacity-90">Full day coverage, professional editing, online gallery, wedding album</p>
              <div className="flex gap-4">
                <Link to="/#contact" className="bg-rose-600 hover:bg-rose-700 px-6 py-2 rounded-lg font-semibold transition">
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
          <h2 className="text-3xl font-bold text-center mb-12">Popular Wedding Venues in Warangal</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {venues.map((venue, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border-2 border-slate-200 hover:border-rose-600 hover:shadow-lg transition">
                <MapPin className="h-8 w-8 text-rose-600 mb-3" />
                <h3 className="font-bold text-lg">{venue}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="bg-slate-50 rounded-2xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services in Warangal</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Wedding Photography",
              "Wedding Videography",
              "Pre-Wedding Shoots",
              "Candid Photography",
              "Traditional Photography",
              "Drone Coverage",
              "Same Day Editing",
              "Photo Albums & Prints"
            ].map((service, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-rose-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold">{service}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* About Warangal */}
        <div className="mb-16 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-6">Why Warangal is Perfect for Weddings</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">Rich Heritage</h3>
              <p className="text-slate-700 leading-relaxed">
                Warangal, the former capital of the Kakatiya dynasty, offers stunning historical backdrops including the iconic Warangal Fort, Thousand Pillar Temple, and ancient monuments perfect for wedding photography.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4">Modern Amenities</h3>
              <p className="text-slate-700 leading-relaxed">
                Despite its historical significance, Warangal boasts modern wedding venues, hotels, and facilities ensuring your guests have a comfortable and memorable experience.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4">Accessibility</h3>
              <p className="text-slate-700 leading-relaxed">
                Located just 150km from Hyderabad, Warangal is easily accessible by road and rail, making it convenient for guests traveling from across Telangana and neighboring states.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4">Cultural Authenticity</h3>
              <p className="text-slate-700 leading-relaxed">
                Warangal preserves authentic Telugu culture and traditions, offering a genuine experience for couples seeking traditional wedding ceremonies with cultural richness.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-2xl">★</span>
              ))}
            </div>
            <p className="text-slate-700 text-lg italic mb-4">
              "Suguru Weddings traveled to Warangal for our wedding and exceeded all expectations. They captured every ritual, every emotion, and every detail beautifully. Highly recommend for Warangal weddings!"
            </p>
            <p className="font-bold text-slate-800">- Priya & Karthik</p>
            <p className="text-slate-500 text-sm">Wedding at Haritha Kakatiya Hotel, Warangal</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-rose-600 to-pink-600 rounded-2xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-4">Book Your Warangal Wedding Photographer</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Limited dates available for 2025-2026. Contact us today to discuss your wedding photography needs in Warangal.
          </p>
          <Link to="/#contact" className="inline-block bg-white text-rose-600 px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition">
            Request Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PhotographerWarangal;
