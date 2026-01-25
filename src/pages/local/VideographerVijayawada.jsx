import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Video, Phone, Check } from 'lucide-react';

const VideographerVijayawada = ({ content }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Wedding Videographer in Vijayawada | Cinematic Wedding Films Vijayawada - Suguru Weddings";
  }, []);

  const venues = [
    "The Gateway Hotel",
    "Fortune Murali Park",
    "Novotel Vijayawada Varun",
    "Bhavani Island",
    "Prakasam Barrage Venues",
    "Kanaka Durga Temple Area",
    "Riverside Wedding Venues",
    "Undavalli Caves Backdrop"
  ];

  return (
    <div className="min-h-screen mt-16 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-slate-800 mb-4">
            Wedding Videographer in Vijayawada
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Cinematic wedding videography services in Vijayawada, Andhra Pradesh. Creating beautiful wedding films across Vijayawada's riverside and heritage locations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800"
              alt="Wedding Videography in Vijayawada"
              className="rounded-2xl shadow-2xl mb-6"
            />
            <img 
              src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800"
              alt="Cinematic Wedding Films Vijayawada"
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Professional Wedding Videography in Vijayawada
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Vijayawada, Andhra Pradesh's business capital, offers stunning riverside venues and heritage locations perfect for cinematic wedding films. Suguru Weddings travels from Hyderabad to Vijayawada to create breathtaking wedding videos that tell your love story.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              From the iconic Prakasam Barrage to luxury hotels and traditional venues, we've filmed weddings at all major Vijayawada locations. Our team understands the cultural nuances of Telugu and AP weddings, ensuring every important moment is captured beautifully.
            </p>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl mb-6 border border-blue-200">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Video className="h-6 w-6 text-blue-600" />
                Our Videography Services Include:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>4K Ultra HD cinematic filming</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Drone aerial coverage of Vijayawada landmarks</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Gimbal stabilized shots</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Professional color grading and editing</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Same-day highlight reels available</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Complete travel to Vijayawada included</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-xl p-6">
              <h3 className="font-bold text-xl mb-2">Packages Starting from ₹60,000</h3>
              <p className="mb-4 opacity-90">Complete wedding videography with editing, music, and delivery</p>
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
          <h2 className="text-3xl font-bold text-center mb-12">Popular Wedding Venues in Vijayawada</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {venues.map((venue, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border-2 border-slate-200 hover:border-blue-600 hover:shadow-lg transition">
                <MapPin className="h-8 w-8 text-blue-600 mb-3" />
                <h3 className="font-bold text-lg">{venue}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Why Vijayawada */}
        <div className="mb-16 bg-slate-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Vijayawada for Your Wedding?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🌊</div>
              <h3 className="font-bold text-xl mb-3">Riverside Beauty</h3>
              <p className="text-slate-600">
                The Krishna River and Prakasam Barrage provide stunning backdrops for wedding photography and videography.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🏨</div>
              <h3 className="font-bold text-xl mb-3">Luxury Hotels</h3>
              <p className="text-slate-600">
                World-class hotels like Gateway, Novotel, and Fortune Murali offer premium wedding venues and accommodations.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🚄</div>
              <h3 className="font-bold text-xl mb-3">Great Connectivity</h3>
              <p className="text-slate-600">
                Well-connected by air, rail, and road making it accessible for guests from across Andhra Pradesh and beyond.
              </p>
            </div>
          </div>
        </div>

        {/* Packages */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Videography Packages for Vijayawada</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Essential Package",
                price: "₹60,000",
                features: [
                  "8 hours coverage",
                  "1 videographer",
                  "5 min highlight film",
                  "Cinematic editing",
                  "Travel included"
                ]
              },
              {
                name: "Premium Package",
                price: "₹1,00,000",
                popular: true,
                features: [
                  "Full day coverage",
                  "2 videographers",
                  "10 min highlight + full film",
                  "Drone coverage",
                  "Same-day edit option"
                ]
              },
              {
                name: "Luxury Package",
                price: "₹1,50,000",
                features: [
                  "2-day coverage",
                  "3 videographers",
                  "Multiple films",
                  "Drone + gimbal",
                  "Instant social media reels"
                ]
              }
            ].map((pkg, idx) => (
              <div key={idx} className={`rounded-2xl p-6 ${pkg.popular ? 'bg-gradient-to-br from-blue-600 to-cyan-600 text-white scale-105 shadow-2xl' : 'bg-white border-2 border-slate-200'}`}>
                {pkg.popular && (
                  <div className="bg-white text-blue-600 text-sm font-bold px-3 py-1 rounded-full inline-block mb-3">
                    POPULAR
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-slate-800'}`}>
                  {pkg.name}
                </h3>
                <p className={`text-3xl font-bold mb-6 ${pkg.popular ? 'text-white' : 'text-blue-600'}`}>
                  {pkg.price}
                </p>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className={`flex items-start gap-2 ${pkg.popular ? 'text-white' : 'text-slate-700'}`}>
                      <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/#contact"
                  className={`block text-center py-3 rounded-lg font-semibold transition ${
                    pkg.popular 
                      ? 'bg-white text-blue-600 hover:bg-slate-100' 
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-4">Book Your Vijayawada Wedding Videographer</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Create cinematic wedding films in Vijayawada. Contact us for packages and availability.
          </p>
          <Link to="/#contact" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VideographerVijayawada;
