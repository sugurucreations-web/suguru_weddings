import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const LuxuryPhotographer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title =
      "Is a Luxury Wedding Photographer Worth It? - Suguru Weddings";
  }, []);

  return (
    <div className="blog-page">
      <div className="container">
        <Link to="/blog" className="back-link">
          <ArrowLeft size={18} /> Back to Blog
        </Link>

        <h1>Is a Luxury Wedding Photographer Worth the Investment?</h1>
        <p className="blog-meta">
          January 12, 2025 • Suguru Weddings • 6 min read
        </p>

        <p>
          Luxury wedding photography goes beyond just cameras—it’s about
          storytelling, creative vision, and premium experience.
        </p>

        <h2>What Makes Luxury Photography Different?</h2>
        <ul>
          <li>Experienced senior photographers</li>
          <li>High-end equipment and backups</li>
          <li>Editorial-style editing</li>
          <li>Personalized storytelling approach</li>
        </ul>

        <h2>Why Couples Choose Premium Photographers</h2>
        <p>
          Couples investing in luxury photography want timeless visuals that
          feel cinematic, emotional, and magazine-worthy.
        </p>

        <h2>Conclusion</h2>
        <p>
          Your wedding happens once, but photos last forever. Investing in
          premium photography ensures your memories are preserved beautifully.
        </p>
      </div>
    </div>
  );
};

export default LuxuryPhotographer;
