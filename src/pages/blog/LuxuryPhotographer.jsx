import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, Camera, Award, ArrowLeft } from 'lucide-react';

const LuxuryPhotographer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "What Makes a Luxury Wedding Photographer Worth ₹50,000+ - Suguru Weddings";
  }, []);

  return (
    <div className="min-h-screen mt-16 py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/blog" className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>

        <article>
          <img 
            src="https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1200"
            alt="Luxury Wedding Photographer Worth"
            className="w-full h-96 object-cover rounded-2xl mb-8"
          />

          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            What Makes a Luxury Wedding Photographer Worth ₹50,000+?
          </h1>
          
          <div className="flex items-center gap-4 text-slate-600 mb-8 pb-8 border-b">
            <span>January 12, 2025</span>
            <span>•</span>
            <span>By Suguru Weddings Team</span>
            <span>•</span>
            <span>6 min read</span>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-slate-700 leading-relaxed mb-6">
              When planning a wedding in Hyderabad, photography costs can range from ₹20,000 to over ₹2,00,000. It's natural to wonder: what exactly makes premium photographers charge ₹50,000 or more? Is it really worth the investment? Let's break down what you're actually paying for.
            </p>

            <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-6">Understanding the Premium Price Tag</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Premium wedding photography isn't just about pressing a button. It's about years of experience, professional equipment, artistic vision, and countless hours of work before and after your wedding day.
            </p>

            <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-6">1. Professional-Grade Equipment</h2>
            <div className="bg-slate-50 rounded-xl p-6 my-6">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Camera className="h-6 w-6 text-rose-600" />
                Equipment Investment: ₹5-10 Lakhs+
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li><strong>Primary Cameras:</strong> 2-3 full-frame DSLRs/Mirrorless (₹2-3L each)</li>
                <li><strong>Backup Cameras:</strong> Additional bodies for redundancy</li>
                <li><strong>Professional Lenses:</strong> 5-8 lenses covering 16mm to 200mm+ (₹50K-3L each)</li>
                <li><strong>Lighting Equipment:</strong> Professional flashes, LED panels, reflectors</li>
                <li><strong>Drones:</strong> For aerial shots (₹1-2L)</li>
                <li><strong>Gimbals & Stabilizers:</strong> For smooth video</li>
                <li><strong>Memory Cards:</strong> High-speed professional grade (₹10K+ each)</li>
                <li><strong>Computer & Storage:</strong> High-end editing workstations, backup drives</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-6">2. Years of Experience & Skill</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              A premium photographer has typically:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6 ml-4">
              <li>Shot 200+ weddings (5+ years experience)</li>
              <li>Mastered lighting in any condition</li>
              <li>Can anticipate moments before they happen</li>
              <li>Knows exactly where to be at the right time</li>
              <li>Handles unexpected situations professionally</li>
              <li>Understands cultural traditions and rituals</li>
            </ul>

            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6 my-8 border border-amber-200">
              <p className="text-slate-700 italic">
                "An amateur photographer focuses on equipment. A professional photographer focuses on light. A luxury photographer focuses on emotion and storytelling."
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-6">3. The Hidden Hours You Don't See</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              For a typical wedding day, the photographer's work includes:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="font-bold mb-3">Before Wedding Day:</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• Consultation meetings (2-3 hours)</li>
                  <li>• Location scouting (4-6 hours)</li>
                  <li>• Shot list preparation</li>
                  <li>• Timeline coordination</li>
                  <li>• Equipment preparation & backup</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="font-bold mb-3">Wedding Day:</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• 12-16 hours shooting</li>
                  <li>• Managing multiple photographers</li>
                  <li>• Coordinating with vendors</li>
                  <li>• Handling equipment</li>
                  <li>• Managing family photos</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="font-bold mb-3">After Wedding Day:</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• Backing up files (4-6 hours)</li>
                  <li>• Culling 3000+ photos to 500-800</li>
                  <li>• Color correction & editing (40-60 hours)</li>
                  <li>• Album design (10-15 hours)</li>
                  <li>• Printing & delivery coordination</li>
                </ul>
              </div>
              
              <div className="bg-rose-50 p-6 rounded-xl">
                <h3 className="font-bold mb-3">Total Time Investment:</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• <strong>80-100+ hours</strong> per wedding</li>
                  <li>• Assistant/second shooter costs</li>
                  <li>• Software subscriptions</li>
                  <li>• Storage & backup systems</li>
                  <li>• Business overhead</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-6">4. Professional Editing Makes the Difference</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Raw photos are just the beginning. Professional editing includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6 ml-4">
              <li>Color correction and grading for consistency</li>
              <li>Exposure and lighting adjustments</li>
              <li>Skin tone correction</li>
              <li>Removing distractions from backgrounds</li>
              <li>Creative retouching while keeping it natural</li>
              <li>Ensuring all photos match your wedding's aesthetic</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-6">5. Reliability & Professionalism</h2>
            <div className="bg-slate-50 rounded-xl p-6 my-6">
              <p className="text-slate-700 mb-4">Premium photographers offer:</p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-rose-600 mt-1 flex-shrink-0" />
                  <span><strong>Legal contracts</strong> protecting both parties</span>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-rose-600 mt-1 flex-shrink-0" />
                  <span><strong>Insurance coverage</strong> for equipment and liability</span>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-rose-600 mt-1 flex-shrink-0" />
                  <span><strong>Backup photographers</strong> in case of emergency</span>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-rose-600 mt-1 flex-shrink-0" />
                  <span><strong>Guaranteed delivery timeline</strong> with penalties for delays</span>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-rose-600 mt-1 flex-shrink-0" />
                  <span><strong>Professional communication</strong> and project management</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-6">6. Quality Control & Consistency</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Budget photographers might give you 100 great shots and 400 mediocre ones. Premium photographers ensure every single photo meets professional standards. You're paying for consistency and quality across your entire collection.
            </p>

            <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-6">The Real Cost Breakdown</h2>
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 my-8">
              <h3 className="font-bold text-xl mb-6">For a ₹85,000 Wedding Photography Package:</h3>
              <div className="space-y-3 text-slate-700">
                <div className="flex justify-between pb-2 border-b">
                  <span>Equipment depreciation & maintenance</span>
                  <span className="font-semibold">₹15,000</span>
                </div>
                <div className="flex justify-between pb-2 border-b">
                  <span>Assistant/second shooter fees</span>
                  <span className="font-semibold">₹12,000</span>
                </div>
                <div className="flex justify-between pb-2 border-b">
                  <span>Editing time (60 hours @ ₹500/hr)</span>
                  <span className="font-semibold">₹30,000</span>
                </div>
                <div className="flex justify-between pb-2 border-b">
                  <span>Album printing & materials</span>
                  <span className="font-semibold">₹8,000</span>
                </div>
                <div className="flex justify-between pb-2 border-b">
                  <span>Business overhead (studio, software, storage)</span>
                  <span className="font-semibold">₹10,000</span>
                </div>
                <div className="flex justify-between pb-2 border-b">
                  <span>Marketing & business development</span>
                  <span className="font-semibold">₹5,000</span>
                </div>
                <div className="flex justify-between pt-3 font-bold text-lg border-t-2">
                  <span>Photographer's actual earnings</span>
                  <span className="text-rose-600">₹5,000</span>
                </div>
              </div>
              <p className="text-sm text-slate-500 mt-4 italic">
                *This is why true professionals charge what they do - the actual profit margin is much smaller than people think!
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-6">Is Premium Photography Worth It?</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Consider this: You'll spend months planning your wedding and thousands on decorations that last one day. Your photographs are the only thing that lasts forever.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              Premium photographers don't just document your wedding - they create heirloom-quality art that you'll proudly display, share with family, and cherish for generations.
            </p>

            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-8 my-12 border border-rose-200">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Ready to Invest in Quality?</h3>
              <p className="text-slate-700 mb-6">
                At Suguru Weddings, we're transparent about our pricing and what you get. Every rupee you invest goes toward creating photographs you'll treasure forever. See our packages and decide for yourself.
              </p>
              <Link 
                to="/#contact"
                className="inline-block bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-full font-semibold transition"
              >
                View Our Packages
              </Link>
            </div>

            <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-6">Conclusion</h2>
            <p className="text-slate-700 leading-relaxed">
              Premium wedding photography is an investment in memories. You're not just paying for someone to show up with a camera - you're paying for years of expertise, professional equipment, artistic vision, and countless hours of work. When you look at your wedding photos 20 years from now, you'll be glad you chose quality over savings. Because while the flowers wilt and the cake gets eaten, your photographs last forever.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default LuxuryPhotographer;
