import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, XCircle, ArrowLeft } from 'lucide-react';

const HiringPhotographer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Things to Know Before Hiring a Photographer in Hyderabad - Suguru Weddings";
  }, []);

  return (
    <div className="min-h-screen mt-16 py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/blog" className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>

        <article>
          <img 
            src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1200"
            alt="Hiring Wedding Photographer Hyderabad"
            className="w-full h-96 object-cover rounded-2xl mb-8"
          />

          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            10 Things to Know Before Hiring a Photographer in Hyderabad
          </h1>
          
          <div className="flex items-center gap-4 text-slate-600 mb-8 pb-8 border-b">
            <span>January 15, 2025</span>
            <span>•</span>
            <span>By Suguru Weddings Team</span>
            <span>•</span>
            <span>7 min read</span>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-slate-700 leading-relaxed mb-6">
              Choosing the right wedding photographer is one of the most important decisions you'll make for your wedding. Your photos will be the lasting memories of your special day, so it's crucial to hire someone who understands your vision. Here's what you need to know before hiring a photographer in Hyderabad.
            </p>

            <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-6">1. Check Their Portfolio Thoroughly</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Don't just look at highlight reels. Ask to see complete wedding albums to understand their consistency. Every photographer can capture a few great shots, but can they deliver 500+ excellent photos from your wedding?
            </p>
            <div className="bg-green-50 border-l-4 border-green-500 p-4 my-4">
              <p className="flex items-start gap-2 text-green-800">
                <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0" />
                <span><strong>Do:</strong> Look for full wedding galleries, not just "best of" collections</span>
              </p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 my-4">
              <p className="flex items-start gap-2 text-red-800">
                <XCircle className="h-5 w-5 mt-1 flex-shrink-0" />
                <span><strong>Don't:</strong> Base your decision only on Instagram highlights</span>
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-6">2. Understand Different Photography Styles</h2>
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-slate-50 p-6 rounded-xl">
                <h3 className="font-bold text-lg mb-3">Traditional Photography</h3>
                <p className="text-slate-600">Posed family portraits, formal group shots, classic angles. Perfect for preserving formal memories.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl">
                <h3 className="font-bold text-lg mb-3">Candid Photography</h3>
                <p className="text-slate-600">Natural moments, emotions, unposed shots. Captures the real essence of your celebration.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl">
                <h3 className="font-bold text-lg mb-3">Cinematic Photography</h3>
                <p className="text-slate-600">Movie-style shots with dramatic lighting and composition. Creates artistic, editorial-quality images.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl">
                <h3 className="font-bold text-lg mb-3">Documentary Style</h3>
                <p className="text-slate-600">Storytelling approach capturing events as they unfold naturally without interference.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-6">3. Ask These Essential Questions</h2>
            <div className="space-y-4 my-6">
              {[
                "How many weddings have you photographed?",
                "Will you be the primary photographer on my wedding day?",
                "How many photographers will cover our wedding?",
                "What happens if you're sick on our wedding day?",
                "How long does editing take and when will we receive our photos?",
                "What's included in the package and what costs extra?",
                "Do you provide raw files or only edited photos?",
                "How do you handle low-light situations?",
                "Are you familiar with Telugu wedding traditions?",
                "Can we see client references or reviews?"
              ].map((question, idx) => (
                <div key={idx} className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="text-slate-700"><strong>Q{idx + 1}:</strong> {question}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-6">4. Budget Wisely</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              In Hyderabad, wedding photography packages typically range from ₹40,000 to ₹2,00,000+ depending on experience, coverage hours, and deliverables. Here's what affects pricing:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6 ml-4">
              <li>Photographer's experience and reputation</li>
              <li>Number of photographers and assistants</li>
              <li>Coverage hours (8 hours vs full day vs multi-day)</li>
              <li>Number of edited photos delivered</li>
              <li>Album
