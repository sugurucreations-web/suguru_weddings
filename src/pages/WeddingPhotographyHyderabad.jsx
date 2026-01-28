import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Camera, Check, Star, Phone, ArrowRight } from 'lucide-react';

const WeddingPhotographyHyderabad = ({ content }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Wedding Photography Hyderabad | Candid Wedding Photographer Telangana - Suguru Weddings";
  }, []);

  const packages = [
    {
      name: "Classic Wedding Package",
      price: "₹80,000",
      features: [
        "1 Traditional photographer",
        "1 Traditional videographer",
        "1 Candid photographer",
        "30 Sheets of album",
        "1 highlighted video",
        "1 full length video",
        "6 hours full coverage",
        "All Raw files"
      ]
    },
    {
      name: "Premium Wedding Package",
      price: "₹1,50,000",
      popular: true,
      features: [
        "1 Traditional photographer",
        "1 Traditional videographer",
        "1 Candid photographer",
	      "1 Cinematic videographer",
	      "1 Drone",
        "50 Sheets of album",
        "1 highlighted video 4-5 min",
        "1 full length video",
        "12 hours full coverage",
        "All Raw files"
      ]
    },
    {
      name: "Luxury Wedding Package",
      price: "₹2,50,000",
      features: [
        "1 Traditional photographer",
        "1 Traditional videographer",
        "1 Candid photographer",
	      "1 Cinematic videographer",
	      "1 Drone",
        "60 Sheets of album",
        "1 highlighted video 4-5 min ",
        "1 full length video",
	      "3 different event full coverage shoot like (Haldi + wedding + Reception)",
	      "1 LED screen 8/12",
        "12 hours full coverage",
        "All Raw files",
	      "Pre wedding shoot included",
	      "1 Hard drive"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] mt-16">
        <img 
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1600" 
          alt="Wedding Photography in Hyderabad by Suguru Weddings"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Wedding Photography in Hyderabad
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl">
              Premier candid wedding photography services in Hyderabad, Telangana. Capturing authentic moments, emotions, and memories that last forever.
            </p>
            <div className="flex gap-4">
              <a href="#packages" className="bg-rose-600 hover:bg-rose-700 px-8 py-4 rounded-lg font-semibold flex items-center gap-2">
                View Packages <ArrowRight className="h-5 w-5" />
              </a>
              <a href="tel:+918374962192" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 px-8 py-4 rounded-lg font-semibold flex items-center gap-2">
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
                Professional Wedding Photographers in Hyderabad
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                At Suguru Weddings, we specialize in capturing the essence of your special day through our expert wedding photography services in Hyderabad. With over 5 years of experience and 500+ successful weddings, we've become one of the most trusted names in Telangana's wedding photography industry.
              </p>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Our team of professional photographers combines traditional poses with candid moments to create a perfect blend of memories. We understand the cultural richness of Telugu weddings and know exactly when to capture those precious moments that happen in a blink.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Whether it's a grand celebration at Taj Falaknuma Palace or an intimate gathering in Banjara Hills, we ensure every emotion, every detail, and every tradition is beautifully documented.
              </p>
              
              <div className="bg-rose-50 p-6 rounded-xl">
                <h3 className="font-bold text-lg mb-3">Why Choose Suguru Weddings?</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-rose-600 mt-1" />
                    <span>5+ years serving Hyderabad's premium weddings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-rose-600 mt-1" />
                    <span>500+ happy couples across Telangana</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-rose-600 mt-1" />
                    <span>4K cameras + drone coverage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-rose-600 mt-1" />
                    <span>Same-day highlight delivery available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-rose-600 mt-1" />
                    <span>Understanding of Telugu wedding traditions</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <img 
                src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800"
                alt="Candid wedding photography Hyderabad"
                className="rounded-2xl shadow-2xl mb-6"
              />
              <img 
                src="https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800"
                alt="Traditional Telugu wedding photography"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Services Included */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Wedding Photography Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Candid Photography",
                  desc: "Natural, unposed moments captured as they happen. Our photographers blend into the background to capture genuine emotions and interactions."
                },
                {
                  title: "Traditional Photography",
                  desc: "Classic family portraits and group photos with proper lighting and composition. Perfect for preserving formal memories."
                },
                {
                  title: "Cinematic Coverage",
                  desc: "Movie-style photography with dramatic angles and lighting. Creates stunning visual stories of your wedding day."
                },
                {
                  title: "Bridal Portraits",
                  desc: "Dedicated photoshoots focusing on the bride's preparations, jewelry, attire, and emotions before the ceremony."
                },
                {
                  title: "Couple Shoots",
                  desc: "Romantic photography sessions of the couple, capturing their chemistry and connection in beautiful settings."
                },
                {
                  title: "Detail Shots",
                  desc: "Close-ups of decorations, invitations, rings, mehendi, flowers, and other important wedding details."
                }
              ].map((service, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-xl">
                  <Camera className="h-10 w-10 text-rose-600 mb-4" />
                  <h3 className="font-bold text-xl mb-3">{service.title}</h3>
                  <p className="text-slate-600">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Packages */}
          <div id="packages" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-4">Wedding Photography Packages in Hyderabad</h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Choose from our flexible packages designed to suit different wedding sizes and budgets. All packages include professional editing and online gallery.
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

          {/* FAQ Section */}
          <div className="bg-slate-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  q: "What areas in Hyderabad do you cover?",
                  a: "We cover all areas of Hyderabad including Banjara Hills, Jubilee Hills, Gachibowli, Madhapur, Hitech City, Kondapur, Kukatpally, Miyapur, Secunderabad, and surrounding areas. We also travel across Telangana and Andhra Pradesh."
                },
                {
                  q: "How long does it take to receive edited photos?",
                  a: "Standard delivery is 3-4 weeks for edited photos. We offer same-day highlights (20-30 photos) and express delivery (1-2 weeks) at an additional cost."
                },
                {
                  q: "Do you provide albums and prints?",
                  a: "Yes! All our packages include a premium wedding album. Additional albums, canvases, and prints are available at special rates for our clients."
                },
                {
                  q: "Can we customize packages?",
                  a: "Absolutely! We understand every wedding is unique. Contact us to discuss your specific requirements and we'll create a custom package that fits your needs and budget."
                },
                {
                  q: "Do you cover destination weddings?",
                  a: "Yes, we love destination weddings! We've covered weddings across Telangana, Andhra Pradesh, Goa, Rajasthan, and Kerala. Travel charges apply for locations outside Hyderabad."
                }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-3 text-slate-800">{faq.q}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-rose-600 to-pink-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Book Your Wedding Photographer?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Limited dates available for 2026-2027. Book early to secure your preferred wedding date.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/#contact" className="bg-white text-rose-600 px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition">
                Get Free Consultation
              </Link>
              <a href="tel:+918374962192" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 px-8 py-4 rounded-full font-bold transition">
                Call: +91 83749 62192
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeddingPhotographyHyderabad;
