import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const BlogHome = () => {
  useEffect(() => {
    document.title = "Wedding Photography Blog - Suguru Weddings";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50">
      {/* Spacer for fixed header */}
      <div className="pt-28 pb-16 container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">
          Wedding Photography Blog
        </h1>

        <p className="text-lg text-gray-600 mb-10 max-w-3xl">
          Expert tips, wedding locations, photography guides, and inspiration
          from Suguru Weddings across Telangana and Andhra Pradesh.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <BlogCard
            title="Best Wedding Photo Spots in Hyderabad"
            link="/blog/best-wedding-photo-spots-hyderabad"
          />
          <BlogCard
            title="Telangana Pre Wedding Photoshoot Locations"
            link="/blog/telangana-pre-wedding-photoshoot-locations"
          />
          <BlogCard
            title="How to Hire a Wedding Photographer"
            link="/blog/hiring-photographer-hyderabad"
          />
          <BlogCard
            title="Is a Luxury Wedding Photographer Worth It?"
            link="/blog/luxury-wedding-photographer-worth"
          />
          <BlogCard
            title="Top Wedding Destinations in Andhra Pradesh"
            link="/blog/top-andhra-pradesh-wedding-destinations"
          />
        </div>
      </div>
    </div>
  );
};

const BlogCard = ({ title, link }) => (
  <Link
    to={link}
    className="block bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
  >
    <h2 className="text-xl font-semibold text-gray-900 mb-2">
      {title}
    </h2>
    <span className="text-rose-600 font-medium">
      Read article →
    </span>
  </Link>
);

export default BlogHome;
