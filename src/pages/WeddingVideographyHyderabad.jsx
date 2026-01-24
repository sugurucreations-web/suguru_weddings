import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Video, Check, Play, Phone, ArrowRight } from 'lucide-react';

const WeddingVideographyHyderabad = ({ content }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Wedding Videography Hyderabad | Cinematic Wedding Films Telangana - Suguru Weddings";
  }, []);

  const packages = [
    {
      name: "Essential Video Package",
      price: "₹60,000",
      features: [
        "8 hours coverage",
        "1 videographer + 1 assistant",
        "3-5 minute highlight film",
        "Cinematic editing",
        "Background music",
        "All raw footage on hard drive",
        "YouTube upload"
      ]
    },
    {
      name: "Premium Video Package",
      price: "₹1,00,000",
      popular: true,
      features: [
        "Full day coverage (12 hours)",
        "2 videographers + assistant",
        "5-7 minute highlight film",
        "20-30 minute full wedding film",
        "Drone aerial shots",
        "Cinematic color grading",
        "Custom background score",
        "All raw footage",
        "Social media teasers"
      ]
    },
    {
      name: "Luxury Cinematic Package",
      price: "₹1,80,000",
      features: [
        "Full event coverage (2 days)",
        "3 videographers + 2 assistants",
        "10 minute cinematic trailer",
        "45-60 minute feature film",
        "Drone coverage",
        "Gimbal stabilized shots",
        "Professional color grading",
        "Original music composition",
        "All raw footage (2 copies)",
        "Same-day teaser delivery",
        "Instagram Reels package"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] mt-16">
        <img 
          src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1600" 
          alt="Wedding Videography in Hyderabad by Suguru Weddings"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Cinematic Wedding Videography in Hyderabad
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl">
              Professional wedding cinematography services in Hyderabad and across Telangana. We don't just record your wedding – we create cinematic films that tell your love story.
            </p>
            <div className="flex gap-4">
              <a href="#packages" className="bg-rose-600 hover:bg-rose-700 px-8 py-4 rounded-lg font-semibold flex items-center gap-2">
                View Packages <ArrowRight className="h-5 w-5" />
              </a>
              <a href="tel:+919876543210" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 px-8 py-4 rounded-lg font-semibold flex items-center gap-2">
                <Phone className="h-5 w-5" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">
                Best Wedding Videographers in Hyderabad
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Suguru Weddings is one of Hyderabad's leading wedding videography studios, specializing in creating cinematic wedding films that capture the emotion, beauty, and joy of your special day. Our team of professional videographers uses state-of-the-art 4K cameras, gimbals, and drones to create stunning wedding films.
              </p>
              <p className="text-slate-600 mb-4 leading-relaxed">
                We understand that wedding videography is more than just recording events – it's about telling your unique love story. Our cinematic approach combines documentary-style coverage with creative storytelling to produce films that you'll cherish for generations.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                From intimate weddings at Park Hyatt to grand celebrations at Taj Falaknuma Palace, we've filmed 500+ weddings across Hyderabad, Telangana, and Andhra Pradesh. Our understanding of Telugu wedding traditions ensures we never miss those important cultural moments.
              </p>
              
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-xl border border-rose-100">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Video className="h-6 w-6 text-rose-600" />
                  Our Videography Services Include:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-rose-600 mt-1" />
                    <span>4K Ultra HD cinematic filming</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-rose-600 mt-1" />
                    <span>Drone aerial videography</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-rose-600 mt-1" />
                    <span>Gimbal stabilized shots</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-rose-600 mt-1" />
                    <span>Professional color grading</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-rose-600 mt-1" />
                    <span>Custom music and sound design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-rose-600 mt-1" />
                    <span>Same-day highlight reels available</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800"
                  alt="Cinematic wedding videography Hyderabad"
                  className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full group-hover:scale-110 transition">
                    <Play className="h-12 w-12 text-white" />
                  </div>
                </div>
              </div>
              <div className="bg-slate-800 text-white p-6 rounded-xl">
                <h3 className="font-bold text-xl mb-3">Why Choose Our Wedding Films?</h3>
                <ul className="space-y-2 text-slate-200">
                  <li>✓ Cinematic storytelling approach</li>
                  <li>✓ Professional-grade equipment</li>
                  <li>✓ Experienced Telugu wedding coverage</li>
                  <li>✓ Fast turnaround times</li>
                  <li>✓ Unlimited revisions on highlight films</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Video Styles */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Wedding Videography Styles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Cinematic Films",
                  desc: "Movie-style wedding films with dramatic shots, slow motion, and creative storytelling. Perfect for couples who want a theatrical experience."
                },
                {
                  title: "Documentary Style",
                  desc: "Natural coverage of events as they unfold. Captures genuine moments and emotions without staged setups."
                },
                {
                  title: "Highlight Reels",
                  desc: "3-7 minute condensed films featuring the best moments of your wedding day, perfect for sharing on social media."
                },
                {
                  title: "Traditional Coverage",
                  desc: "Complete documentation of all ceremonies and rituals from start to finish, ensuring nothing is missed."
                },
                {
                  title: "Drone Videography",
                  desc: "Stunning aerial shots of your venue, establishing shots, and unique perspectives that add grandeur to your film."
                },
                {
                  title: "Same Day Edit",
                  desc: "A short highlight film edited and shown on your wedding day itself – perfect for reception screenings."
                }
              ].map((style, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-xl hover:shadow-lg transition">
                  <Video className="h-10 w-10 text-rose-600 mb-4" />
                  <h3 className="font-bold text-xl mb-3">{style.title}</h3>
                  <p className="text-slate-600">{style.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Packages */}
          <div id="packages" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-4">Wedding Videography Packages in Hyderabad</h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Flexible packages designed for different wedding styles and budgets. All packages include professional editing and music.
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
          <div className="mt-16 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Create Your Wedding Film?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Book your wedding videographer today. Limited slots for 2025-2026 wedding season.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/#contact" className="bg-rose-600 hover:bg-rose-700 px-8 py-4 rounded-full font-bold transition">
                Request Quote
              </Link>
              <a href="tel:+919876543210" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 px-8 py-4 rounded-full font-bold transition">
                Call: +91 XXXXX XXXXX
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeddingVideographyHyderabad;
