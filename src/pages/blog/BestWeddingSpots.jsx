import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin, Camera, ArrowLeft } from "lucide-react";
import BlogLayout from "../../components/BlogLayout";

const BestWeddingSpots = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title =
      "Best Wedding Photo Spots in Hyderabad 2025 - Suguru Weddings";
  }, []);

  const spots = [
    {
      name: "Taj Falaknuma Palace",
      type: "Luxury Hotel",
      why: "Grand architecture, royal interiors, panoramic city views",
      best: "Evening golden hour shots, palace exteriors, royal halls",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Ramoji Film City",
      type: "Film Studio",
      why: "Multiple themed sets, gardens, palaces, European streets",
      best: "All day - diverse backdrops available",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Golconda Fort",
      type: "Historical Monument",
      why: "Ancient architecture, stunning sunset views, dramatic backdrops",
      best: "Sunset photography, architectural shots",
      rating: "⭐⭐⭐⭐",
    },
    {
      name: "Qutub Shahi Tombs",
      type: "Heritage Site",
      why: "Indo-Persian architecture, beautiful domes, peaceful atmosphere",
      best: "Morning soft light, architectural photography",
      rating: "⭐⭐⭐⭐",
    },
    {
      name: "Hussain Sagar Lake",
      type: "Lakefront",
      why: "Waterfront views, Buddha statue backdrop, city skyline",
      best: "Sunset shots, romantic evening photography",
      rating: "⭐⭐⭐⭐",
    },
    {
      name: "Durgam Cheruvu (Secret Lake)",
      type: "Natural Lake",
      why: "Unique rock formations, serene waters, less crowded",
      best: "Sunrise and sunset, nature photography",
      rating: "⭐⭐⭐⭐",
    },
    {
      name: "Botanical Garden",
      type: "Gardens",
      why: "Lush greenery, flower gardens, variety of backdrops",
      best: "Morning light, garden photography",
      rating: "⭐⭐⭐⭐",
    },
    {
      name: "Shamirpet Lake",
      type: "Lake & Hills",
      why: "Peaceful location, scenic landscapes, less urban",
      best: "Pre-wedding shoots, outdoor sessions",
      rating: "⭐⭐⭐⭐",
    },
  ];

  return (
    <div className="blog-page">
      {/* Back Link */}
      <div className="container">
        <Link to="/blog" className="back-link">
          <ArrowLeft size={18} /> Back to Blog
        </Link>
      </div>

      {/* Header */}
      <header className="blog-header container">
        <h1>Best Wedding Photo Spots in Hyderabad (2025 Guide)</h1>

        <p className="blog-meta">
          January 20, 2025 • By Suguru Weddings Team • 8 min read
        </p>
      </header>

      {/* Content */}
      <main className="blog-content container">
        <p>
          Hyderabad offers a perfect blend of heritage, modern architecture, and
          natural beauty—making it an ideal city for stunning wedding
          photography. As professional wedding photographers who've shot at
          500+ locations across the city, we're sharing our top picks for the
          best wedding photo spots in Hyderabad.
        </p>

        <h2>Why Location Matters for Wedding Photography</h2>
        <p>
          The right location can transform your wedding photos from ordinary to
          extraordinary. A beautiful backdrop adds depth, character, and visual
          interest to your images. Whether you prefer historic monuments, luxury
          hotels, or natural landscapes, Hyderabad has it all.
        </p>

        <h2>Top 8 Wedding Photo Locations in Hyderabad</h2>

        <div className="spots-list">
          {spots.map((spot, idx) => (
            <div key={idx} className="spot-card">
              <h3>
                {idx + 1}. {spot.name} {spot.rating}
              </h3>
              <p>
                <strong>Type:</strong> {spot.type}
              </p>
              <p>
                <strong>Why we love it:</strong> {spot.why}
              </p>
              <p>
                <strong>Best for:</strong> {spot.best}
              </p>
            </div>
          ))}
        </div>

        <h2>Pro Tips for Shooting at These Locations</h2>
        <ul>
          <li>Get permits: Many heritage sites require photography permits.</li>
          <li>
            Visit at the right time: Golden hours give the best natural light.
          </li>
          <li>
            Scout beforehand: Visit locations before the wedding day to plan
            shots.
          </li>
          <li>
            Hire professionals: Local photographers know these locations
            inside-out.
          </li>
        </ul>

        <h2>Choosing the Right Location for Your Wedding Style</h2>
        <ul>
          <li>
            <strong>Traditional Telugu Wedding:</strong> Qutub Shahi Tombs,
            Golconda Fort
          </li>
          <li>
            <strong>Luxury Modern Wedding:</strong> Taj Falaknuma Palace
          </li>
          <li>
            <strong>Nature-Loving Couples:</strong> Shamirpet Lake, Durgam
            Cheruvu, Botanical Garden
          </li>
          <li>
            <strong>Cinematic Shoots:</strong> Ramoji Film City
          </li>
        </ul>

        <section className="cta-box">
          <h2>Need Help Planning Your Wedding Photography?</h2>
          <p>
            At Suguru Weddings, we've photographed weddings at all these
            locations. We handle permits, timing, and create a customized shot
            list for every couple.
          </p>
          <Link to="/contact" className="cta-button">
            Book a Consultation
          </Link>
        </section>

        <h2>Conclusion</h2>
        <p>
          Hyderabad is blessed with incredible diversity in wedding photography
          locations—from royal palaces to serene lakes and historic monuments.
          Choose locations that resonate with your story and work with
          experienced photographers who know how to make the most of them.
        </p>

        <div className="final-cta">
          <h3>Ready to start planning your wedding photography?</h3>
          <Link to="/contact" className="cta-button">
            Contact Suguru Weddings
          </Link>
        </div>
      </main>
    </div>
  );
};

export default BestWeddingSpots;
