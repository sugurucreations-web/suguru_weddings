import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin } from "lucide-react";

const TopDestinations = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title =
      "Top Wedding Destinations in Andhra Pradesh - Suguru Weddings";
  }, []);

  const destinations = [
    "Visakhapatnam Beach Resorts",
    "Araku Valley",
    "Tirupati Temple Surroundings",
    "Vijayawada Convention Centers",
    "Kurnool Heritage Venues",
  ];

  return (
    <div className="blog-page">
      <div className="container">
        <Link to="/blog" className="back-link">
          <ArrowLeft size={18} /> Back to Blog
        </Link>

        <h1>Top Wedding Destinations in Andhra Pradesh</h1>
        <p className="blog-meta">
          January 10, 2025 • Suguru Weddings • 7 min read
        </p>

        <p>
          Andhra Pradesh offers beautiful wedding destinations—from beaches and
          hills to temples and luxury resorts—perfect for destination weddings.
        </p>

        <h2>Best Wedding Destinations</h2>
        <ul>
          {destinations.map((place, idx) => (
            <li key={idx}>
              <MapPin size={16} /> {place}
            </li>
          ))}
        </ul>

        <h2>Why Choose Andhra Pradesh for Destination Weddings?</h2>
        <ul>
          <li>Diverse locations</li>
          <li>Affordable luxury venues</li>
          <li>Rich culture and traditions</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          Andhra Pradesh is an ideal choice for couples seeking scenic,
          meaningful, and memorable destination weddings.
        </p>
      </div>
    </div>
  );
};

export default TopDestinations;
