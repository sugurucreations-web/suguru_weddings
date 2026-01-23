import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = ({ testimonials }) => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-slate-600">Don't just take our word for it</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-6 relative hover:shadow-xl transition">
              <Quote className="absolute top-4 right-4 h-8 w-8 text-rose-200" />
              <div className="flex mb-4">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 italic leading-relaxed">"{test.text}"</p>
              <div className="border-t pt-4 flex items-center gap-4">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center font-bold text-rose-600">
                  {test.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-slate-800">{test.name}</p>
                  <p className="text-sm text-slate-500">{test.event}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">Have you worked with us? Share your experience!</p>
          <a 
            href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK/review" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition"
          >
            Leave a Google Review
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
