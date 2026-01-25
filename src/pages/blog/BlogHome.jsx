import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogHome = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Wedding Photography Blog | Tips & Guides - Suguru Weddings Hyderabad";
  }, []);

  const posts = [
    {
      title: "Best Wedding Photo Spots in Hyderabad",
      excerpt: "Discover the most stunning locations for wedding photography in Hyderabad. From heritage monuments to modern venues.",
      slug: "best-wedding-photo-spots-hyderabad",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800",
      date: "Jan 20, 2025",
      readTime: "8 min read"
    },
    {
      title: "Telangana Pre-Wedding Photoshoot Locations",
      excerpt: "Top 15 romantic locations for pre-wedding shoots across Telangana including Ramoji Film City and hidden gems.",
      slug: "telangana-pre-wedding-photoshoot-locations",
      image: "https://images.unsplash.com/photo-1530047625168-4b29bfbbe1fc?w=800",
      date: "Jan 18, 2025",
      readTime: "10 min read"
    },
    {
      title: "Things to Know Before Hiring a Photographer in Hyderabad",
      excerpt: "Essential tips and questions to ask when choosing the perfect wedding photographer for your big day.",
      slug: "hiring-photographer-hyderabad",
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800",
      date: "Jan 15, 2025",
      readTime: "7 min read"
    },
    {
      title: "What Makes a Luxury Wedding Photographer Worth ₹50,000+",
      excerpt: "Understanding the value of premium wedding photography services and why they're worth the investment.",
      slug: "luxury-wedding-photographer-worth",
      image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800",
      date: "Jan 12, 2025",
      readTime: "6 min read"
    },
    {
      title: "Top Andhra Pradesh Wedding Destinations",
      excerpt: "Beautiful wedding venues across Andhra Pradesh for destination weddings - from beaches to temples.",
      slug: "top-andhra-pradesh-wedding-destinations",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800",
      date: "Jan 10, 2025",
      readTime: "9 min read"
    }
  ];

  return (
    <div className="min-h-screen mt-16 py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-800 mb-4">
            Wedding Photography Blog
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Tips, guides, and inspiration for your wedding photography in Hyderabad and Telangana
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <Link 
            to={`/blog/${posts[0].slug}`}
            className="block bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition group"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-96 md:h-auto overflow-hidden">
                <img 
                  src={posts[0].image}
                  alt={posts[0].title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute top-4 left-4 bg-rose-600 text-white px-4 py-2 rounded-full font-semibold">
                  Featured
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {posts[0].date}
                  </span>
                  <span>•</span>
                  <span>{posts[0].readTime}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    Suguru Team
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-slate-800 mb-4 group-hover:text-rose-600 transition">
                  {posts[0].title}
                </h2>
                <p className="text-slate-600 mb-6 text-lg leading-relaxed">{posts[0].excerpt}</p>
                <span className="text-rose-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read More <ArrowRight className="h-5 w-5" />
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post, idx) => (
            <Link 
              key={idx}
              to={`/blog/${post.slug}`}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-rose-600 transition">
                  {post.title}
                </h2>
                <p className="text-slate-600 mb-4">{post.excerpt}</p>
                <span className="text-rose-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read More <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-rose-600 to-pink-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Your Wedding Photographer?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
            Get expert photography for your wedding in Hyderabad. Contact us for a free consultation.
          </p>
          <Link 
            to="/#contact"
            className="inline-block bg-white text-rose-600 px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition"
          >
            Get Free Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogHome;
