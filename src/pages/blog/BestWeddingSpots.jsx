import React, { useEffect } from "react";
import { Link } from "react-router-dom";
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
      best: "All day – diverse backdrops available",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Golconda Fort",
      type: "Historical Monument",
      why: "Ancient architecture, stunning sunset views",
      best: "Sunset photography, architectural shots",
      rating: "⭐⭐⭐⭐",
    },
    {
      name: "Qutub Shahi Tombs",
      type: "Heritage Site",
      why: "Indo-Persian architecture, peaceful atmosphere",
      best: "Morning soft light, architectural photography",
      rating: "⭐⭐⭐⭐",
    },
    {
      name: "Hussain Sagar Lake",
      type: "Lakefront",
      why: "Waterfront views, Buddha statue backdrop",
      best: "Romantic sunset photography",
      rating: "⭐⭐⭐⭐",
    },
    {
      name: "Durgam Cheruvu",
      type: "Natural Lake",
      why: "Unique rock formations, less crowded",
      best: "Sunrise & sunset shoots",
      rating: "⭐⭐⭐⭐",
    },
    {
      name: "Botanical Garden",
      type: "Gardens",
      why: "Lush greenery & flowers",
      best: "Morning natural light",
      rating: "⭐⭐⭐⭐",
    },
    {
      name: "Shamirpet Lake",
      type: "Lake & Hills",
      why: "Scenic landscapes, peaceful vibe",
      best: "Pre-wedding outdoor sessions",
      rating: "⭐⭐⭐⭐",
    },
  ];

  return (
    <BlogLayout
      title="Best Wedding Photo Spots in Hyderabad (2025 Guide)"
      date="January 20, 2025"
      author="Suguru Weddings Team"
      readTime="8 min read"
      image="/images/blog/hyderabad-wedding.jpg"
    >
      <p>
        Hyderabad offers a perfect blend of heritage, modern architecture,
        and natural beauty—making it one of the best cities in India for
        wedding photography.
      </p>

      <h2>Why Location Matters for Wedding Photography</h2>
      <p>
        The right location can transform your wedding photos from ordinary
        to extraordinary. A beautiful backdrop adds depth, emotion, and
        storytelling to every frame.
      </p>

      <h2>Top Wedding Photo Locations in Hyderabad</h2>

      {spots.map((spot, idx) => (
        <div key={idx}>
          <h3>
            {idx + 1}. {spot.name} {spot.rating}
          </h3>
          <ul>
            <li><strong>Type:</strong> {spot.type}</li>
            <li><strong>Why we love it:</strong> {spot.why}</li>
            <li><strong>Best for:</strong> {spot.best}</li>
          </ul>
        </div>
      ))}

      <h2>Pro Tips for Shooting at These Locations</h2>
      <ul>
        <li>Get permits early for heritage locations</li>
        <li>Plan shoots during golden hours</li>
        <li>Visit locations in advance</li>
        <li>Hire experienced local photographers</li>
      </ul>

      <h2>Choosing the Right Location for Your Wedding Style</h2>
      <ul>
        <li><strong>Traditional weddings:</strong> Golconda Fort, Qutub Shahi Tombs</li>
        <li><strong>Luxury weddings:</strong> Taj Falaknuma Palace</li>
        <li><strong>Nature lovers:</strong> Shamirpet, Durgam Cheruvu</li>
        <li><strong>Cinematic shoots:</strong> Ramoji Film City</li>
      </ul>

      <div className="mt-12 p-6 bg-rose-50 rounded-xl">
        <h3>Need Help Planning Your Wedding Photography?</h3>
        <p>
          Suguru Weddings has photographed weddings at all these locations.
          We manage permits, timelines, and personalized shot lists.
        </p>
        <Link to="/contact" className="text-rose-600 font-semibold">
          Book a consultation →
        </Link>
      </div>

      <h2>Final Thoughts</h2>
      <p>
        Hyderabad is blessed with incredible diversity in wedding photography
        locations. Choosing the right venue and the right photographer
        ensures timeless wedding memories.
      </p>
    </BlogLayout>
  );
};

export default BestWeddingSpots;
