import React from 'react';
import { Award, Users, Camera, Heart } from 'lucide-react';

const About = ({ about }) => {
  const stats = [
    { icon: Award, value: '5+', label: 'Years Experience' },
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Camera, value: '1000+', label: 'Events Covered' },
    { icon: Heart, value: '4.9', label: 'Average Rating' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-800 mb-6">{about.title}</h2>
            {about.paragraphs.map((para, idx) => (
              <p key={idx} className="text-slate-600 mb-4 leading-relaxed">
                {para}
              </p>
            ))}

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center p-4 bg-rose-50 rounded-lg">
                  <stat.icon className="h-8 w-8 text-rose-600 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-slate-800">{stat.value}</p>
                  <p className="text-sm text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src={about.image}
              alt="Photography team"
              className="rounded-2xl shadow-2xl"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-6 bg-rose-600 text-white p-6 rounded-lg shadow-xl">
              <p className="text-3xl font-bold">500+</p>
              <p className="text-sm">Successful Events</p>
            </div>
          </div>
        </div>

        {/* Equipment Section */}
        <div className="mt-20 bg-slate-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">Professional Equipment We Use</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <Camera className="h-10 w-10 text-rose-600 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">4K Cameras</h4>
              <p className="text-sm text-slate-600">Sony A7, Canon 5D Mark IV</p>
            </div>
            <div>
              <Camera className="h-10 w-10 text-rose-600 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Drone Coverage</h4>
              <p className="text-sm text-slate-600">DJI Mavic Pro</p>
            </div>
            <div>
              <Camera className="h-10 w-10 text-rose-600 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Lighting Setup</h4>
              <p className="text-sm text-slate-600">Professional Studio Lights</p>
            </div>
            <div>
              <Camera className="h-10 w-10 text-rose-600 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Editing Suite</h4>
              <p className="text-sm text-slate-600">Adobe Creative Cloud</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
