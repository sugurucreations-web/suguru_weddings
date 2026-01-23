import React from 'react';
import { Heart, Camera, Users, Calendar, Award, Clock, CheckCircle, Video } from 'lucide-react';

const Services = ({ services }) => {
  const whyChooseUs = [
    { icon: Award, title: '5+ Years Experience', desc: 'Trusted by 500+ couples' },
    { icon: Clock, title: '24/7 Support', desc: 'Always here for you' },
    { icon: CheckCircle, title: '100% Satisfaction', desc: 'Quality guaranteed' },
    { icon: Video, title: 'Latest Equipment', desc: '4K & drone coverage' }
  ];

  const handleServiceClick = (serviceName) => {
    if (window.gtag) {
      window.gtag('event', 'service_interest', {
        event_category: 'Services',
        event_label: serviceName
      });
    }
  };

  return (
    <>
      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="text-center group">
                <item.icon className="h-12 w-12 text-rose-600 mx-auto mb-4 group-hover:scale-110 transition" />
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Services</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive photography and videography packages tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => {
              const IconComponent = {
                Heart, Camera, Users, Calendar
              }[service.icon] || Camera;

              return (
                <div 
                  key={idx} 
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition group cursor-pointer"
                  onClick={() => handleServiceClick(service.title)}
                >
                  <IconComponent className="h-12 w-12 text-rose-600 mb-4 group-hover:scale-110 transition" />
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-slate-600 mb-4">{service.desc}</p>
                  <p className="text-rose-600 font-bold text-lg">{service.price}</p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="#contact"
                    className="mt-6 block text-center bg-rose-50 text-rose-600 py-2 rounded-lg font-semibold hover:bg-rose-600 hover:text-white transition"
                  >
                    Enquire Now
                  </a>
                </div>
              );
            })}
          </div>

          {/* Packages Banner */}
          <div className="mt-16 bg-gradient-to-r from-rose-600 to-pink-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Custom Packages Available</h3>
            <p className="text-lg mb-6">Mix and match services to create your perfect package. Get special discounts on combo bookings!</p>
            <a 
              href="#contact" 
              className="inline-block bg-white text-rose-600 px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition"
            >
              Request Custom Quote
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
