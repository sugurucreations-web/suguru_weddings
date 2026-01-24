import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Camera, MapPin, Check, Phone, Heart } from 'lucide-react';

const PreWeddingShootTelangana = ({ content }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Pre-Wedding Photoshoot Telangana | Best Pre-Wedding Photographer Hyderabad - Suguru Weddings";
  }, []);

  const locations = [
    { name: "Ramoji Film City", desc: "Multiple themed sets and beautiful gardens" },
    { name: "Hussain Sagar Lake", desc: "Scenic waterfront with sunset views" },
    { name: "Golconda Fort", desc: "Historic architecture and panoramic views" },
    { name: "Qutub Shahi Tombs", desc: "Ancient monuments with unique backdrops" },
    { name: "Shamirpet Lake", desc: "Peaceful lakeside location" },
    { name: "Ananthagiri Hills", desc: "Lush greenery and misty landscapes" },
    { name: "NTR Gardens", desc: "Beautiful landscaped gardens" },
    { name: "Durgam Cheruvu", desc: "Secret lake with rock formations" }
  ];

  const packages = [
    {
      name: "Basic Pre-Wedding Package",
      price: "₹25,000",
      features: [
        "4 hours photoshoot",
        "1 location",
        "1 photographer",
        "100+ edited photos",
        "Online gallery",
        "All raw files"
      ]
    },
    {
      name: "Premium Pre-Wedding Package",
      price: "₹40,000",
      popular: true,
      features: [
        "6 hours photoshoot",
        "2 locations",
        "1 photographer + assistant",
        "150+ edited photos",
        "3-5 min cinematic video",
        "Premium photo album",
        "Props and styling assistance",
        "All raw files"
      ]
    },
    {
      name: "Luxury Pre-Wedding Package",
      price: "₹65,000",
      features: [
        "Full day photoshoot (8 hours)",
        "3 locations",
        "2 photographers",
        "200+ edited photos",
        "10 min cinematic film",
        "Drone coverage",
        "Luxury album + prints",
        "Complete styling & props",
        "All raw files",
        "Save-the-date video"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[70vh] mt-16">
        <img 
          src="https://images.unsplash.com/photo-1530047625168-4b29bfbbe1fc?w=1600" 
          alt="Pre-Wedding Photoshoot in Telangana"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Pre-Wedding Photoshoot in Telangana
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl">
              Romantic pre-wedding photography at Hyderabad's most beautiful locations. Create stunning memories before your big day with creative couple photoshoots.
            </p>
            <Link to="/#contact" className="inline-block bg-rose-600 hover:bg-rose-700 px-8 py-4 rounded-lg font-semibold">
              Book Your Shoot
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
                Best Pre-Wedding Photographer in Hyderabad
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Pre-wedding photoshoots are the perfect way to celebrate your love story before the wedding chaos begins. At Suguru Weddings, we specialize in creating romantic, creative, and natural pre-wedding photos that capture your unique chemistry as a couple.
              </p>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Whether you dream of a romantic outdoor shoot at Ananthagiri Hills, a grand photoshoot at Ramoji Film City, or an urban session in Hyderabad's modern locations, we bring your vision to life with creative concepts and expert photography.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Our pre-wedding shoots are designed to be fun, relaxed, and natural. We help you feel comfortable in front of the camera so your genuine emotions and love shine through every photograph.
              </p>
              
              <div className="bg-rose-50 p-6 rounded-xl mb-6">
                <h3 className="font-bold text-lg mb-3">Our Pre-Wedding Packages Include:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-rose-600 mt-1" />
                    <span>4-8 hours professional photoshoot</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-rose-600 mt-1" />
                    <span>1-3 beautiful locations in Telangana</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-rose-600 mt-1" />
                    <span>100-200+ professionally edited photos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-rose-600 mt-1" />
                    <span>Cinematic video (in premium packages)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-rose-600 mt-1" />
                    <span>Creative concepts and props</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-rose-600 mt-1" />
                    <span>Photo album and prints</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-xl border border-pink-200">
                <h3 className="font-bold mb-3 flex items-center gap-2">
                  <Heart className="h-5 w-5 text-rose-600" />
                  Starting from ₹25,000
                </h3>
                <p className="text-sm text-slate-600">
                  Customizable packages based on locations, duration, and deliverables. Contact us for a personalized quote.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <img 
                src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800"
                alt="Romantic pre-wedding photography Hyderabad"
                className="rounded-2xl shadow-2xl"
              />
              <img 
                src="https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?w=800"
                alt="Couple photoshoot Telangana"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Popular Locations */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-4">Popular Pre-Wedding Shoot Locations in Telangana</h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              From historic monuments to scenic lakes, Telangana offers stunning backdrops for your pre-wedding photoshoot.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              {locations.map((loc, idx) => (
                <div key={idx} className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-rose-600 hover:shadow-lg transition">
                  <MapPin className="h-8 w-8 text-rose-600 mb-3" />
                  <h3 className="font-bold text-lg mb-2">{loc.name}</h3>
                  <p className="text-sm text-slate-600">{loc.desc}</p>
                </div>
              ))}
            </div>
          </div>

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

          {/* Shoot Styles */}
          <div className="mb-16 bg-slate-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-center mb-12">Pre-Wedding Photoshoot Styles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Romantic & Dreamy",
                  desc: "Soft lighting, intimate poses, and emotional moments. Perfect for couples who want a classic, timeless feel.",
                  image: "https://images.unsplash.com/photo-1522673607710-d0f486925809?w=400"
                },
                {
                  title: "Fun & Candid",
                  desc: "Playful, natural interactions and laughter. Great for couples who want to show their fun side.",
                  image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=400"
                },
                {
                  title: "Cinematic & Dramatic",
                  desc: "Movie-style shots with dramatic lighting and poses. Ideal for couples who love bold, artistic photos.",
                  image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400"
                }
              ].map((style, idx) => (
                <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
                  <img src={style.image} alt={style.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <Camera className="h-10 w-10 text-rose-600 mb-4" />
                    <h3 className="font-bold text-xl mb-3">{style.title}</h3>
                    <p className="text-slate-600">{style.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tips Section */}
          <div className="mb-16 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-center mb-12">Tips for a Perfect Pre-Wedding Shoot</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "Choose Comfortable Outfits",
                  desc: "Wear clothes that make you feel confident and comfortable. Coordinate colors but don't match exactly."
                },
                {
                  title: "Pick Meaningful Locations",
                  desc: "Select places that have special significance to your relationship or simply locations you both love."
                },
                {
                  title: "Be Natural & Relax",
                  desc: "The best photos come when you're relaxed and being yourselves. Don't force poses - let emotions flow."
                },
                {
                  title: "Plan for Weather",
                  desc: "Check weather forecasts and have a backup plan. Golden hour (early morning/late afternoon) gives best light."
                }
              ].map((tip, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border-l-4 border-rose-600">
                  <h3 className="font-bold text-lg mb-2">{tip.title}</h3>
                  <p className="text-slate-600">{tip.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Pre-Wedding Shoot FAQs</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  q: "When should we do our pre-wedding shoot?",
                  a: "Ideally 2-4 months before your wedding. This gives enough time for editing and printing for wedding invitations or displays."
                },
                {
                  q: "How long does a pre-wedding shoot take?",
                  a: "Depending on the package, shoots typically last 4-8 hours including travel time between locations and outfit changes."
                },
                {
                  q: "Can we choose our own locations?",
                  a: "Absolutely! We're happy to shoot at your chosen locations. We can also suggest places based on your style preferences."
                },
                {
                  q: "What should we wear?",
                  a: "Wear outfits that reflect your personality and make you comfortable. We recommend 2-3 outfit changes for variety."
                }
              ].map((faq, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-xl border-l-4 border-rose-600">
                  <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                  <p className="text-slate-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-rose-600 to-pink-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Ready for Your Pre-Wedding Shoot?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's create beautiful memories together. Book your pre-wedding photoshoot in Telangana today!
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

export default PreWeddingShootTelangana;
