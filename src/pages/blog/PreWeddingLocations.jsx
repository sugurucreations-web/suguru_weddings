import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin } from "lucide-react";

const PreWeddingLocations = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title =
      "Best Pre Wedding Photoshoot Locations in Telangana - Suguru Weddings";
  }, []);

  const locations = [
    "Durgam Cheruvu",
    "Ananthagiri Hills",
    "Qutub Shahi Tombs",
    "Ramoji Film City",
    "Shamirpet Lake",
    "Hyderabad Botanical Garden",
  ];

  return (
    <div className="blog-page">
      <div className="container">
        <Link to="/blog" className="back-link">
          <ArrowLeft size={18} /> Back to Blog
        </Link>

        <h1>Best Pre Wedding Photoshoot Locations in Telangana</h1>
        <p className="blog-meta">
          January 18, 2025 • Suguru Weddings • 7 min read
        </p>

        <p>
          Telangana offers stunning landscapes for pre-wedding photoshoots—from
          heritage monuments to lush green hills. Choosing the right location
          adds emotion, storytelling, and visual beauty to your pre-wedding
          album.
        </p>

        <h2>Top Pre Wedding Locations in Telangana</h2>
        <ul>
          {locations.map((loc, idx) => (
            <li key={idx}>
              <MapPin size={16} /> {loc}
            </li>
          ))}
        </ul>

        <h2>Tips for a Perfect Pre Wedding Shoot</h2>
        <ul>
          <li>Choose locations that match your personalities</li>
          <li>Plan outfits based on surroundings</li>
          <li>Schedule shoots during golden hour</li>
          <li>Hire experienced photographers</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          Telangana has endless options for beautiful pre-wedding photography.
          With the right planning and creative team, your shoot can become a
          timeless memory.
        </p>
      </div>
    </div>
  );
};

export default PreWeddingLocations;
