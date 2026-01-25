import React from 'react';
import { MapPin, Camera, Video, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const LocalAreasSection = () => {
  const localServices = [
    {
      title: 'Wedding Photography in Hyderabad',
      href: '/wedding-photography-hyderabad',
      icon: Camera,
      desc: 'Professional wedding photography services in Hyderabad',
      color: 'rose'
    },
    {
      title: 'Wedding Videography in Hyderabad',
      href: '/wedding-videography-hyderabad',
      icon: Video,
      desc: 'Cinematic wedding videography in Hyderabad',
      color: 'pink'
    },
    {
      title: 'Pre-Wedding Shoot in Telangana',
      href: '/pre-wedding-shoot-telangana',
      icon: Heart,
      desc: 'Romantic pre-wedding shoots across Telangana',
      color: 'purple'
    },
    {
      title: 'Destination Weddings in Andhra Pradesh',
      href: '/destination-weddings-andhra-pradesh',
      icon: MapPin,
      desc: 'Capturing destination weddings in Andhra Pradesh',
      color: 'indigo'
    }
  ];

  const photographers = [
    {
      title: 'Photographer in Guntur',
      href: '/local/photographer-guntur',
      location: 'Guntur, Andhra Pradesh'
    },
    {
      title: 'Photographer in Visakhapatnam',
      href: '/local/photographer-visakhapatnam',
      location: 'Visakhapatnam, Andhra Pradesh'
    },
    {
      title: 'Photographer in Warangal',
      href: '/local/photographer-warangal',
      location: 'Warangal, Telangana'
    },
    {
      title: 'Videographer in Vijayawada',
      href: '/local/videographer-vijayawada',
      location: 'Vijayawada, Andhra Pradesh'
    }
  ];

  return (
    <>
      {/* Main Services by Location */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Our Services Across Telangana & Andhra Pradesh
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Professional wedding photography and videography services available across major cities in Telangana and Andhra Pradesh
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {localServices.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <Link
                  key={idx}
                  to={service.href}
                  className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 border-2 border-transparent hover:border-rose-200"
                >
                  <div className={`w-14 h-14 rounded-full bg-${service.color}-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className={`h-7 w-7 text-${service.color}-600`} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-rose-600 transition">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {service.desc}
                  </p>
                </Link>
              );
            })}
          </div>

          {/* Local Photographers Grid */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-800 mb-3">
                Local Photography Services
              </h3>
              <p className="text-lg text-slate-600">
                Find professional photographers and videographers in your city
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {photographers.map((photographer, idx) => (
                <Link
                  key={idx}
                  to={photographer.href}
                  className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-slate-100 hover:border-rose-300"
                >
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-rose-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1 group-hover:text-rose-600 transition">
                        {photographer.title}
                      </h4>
                      <p className="text-sm text-slate-500">
                        {photographer.location}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-rose-600 to-pink-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Serving Telangana & Andhra Pradesh
            </h3>
            <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto opacity-90">
              We travel across Hyderabad, Guntur, Visakhapatnam, Warangal, Vijayawada and surrounding areas to capture your special moments
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-white text-rose-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-slate-100 transition-all transform hover:scale-105"
            >
              Book Your Date Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default LocalAreasSection;
