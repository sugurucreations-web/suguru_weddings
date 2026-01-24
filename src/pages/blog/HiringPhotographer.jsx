import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const HiringPhotographer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title =
      "How to Hire the Best Wedding Photographer in Hyderabad - Suguru Weddings";
  }, []);

  return (
    <div className="blog-page">
      <div className="container">
        <Link to="/blog" className="back-link">
          <ArrowLeft size={18} /> Back to Blog
        </Link>

        <h1>How to Hire the Best Wedding Photographer</h1>
        <p className="blog-meta">
          January 15, 2025 • Suguru Weddings • 6 min read
        </p>

        <p>
          Choosing the right wedding photographer is one of the most important
          decisions for your wedding. Your photos will preserve emotions,
          rituals, and memories for a lifetime.
        </p>

        <h2>Key Things to Check Before Hiring</h2>
        <ul>
          <li>Portfolio and consistency</li>
          <li>Experience with similar weddings</li>
          <li>Editing style and delivery timeline</li>
          <li>Clear pricing and contracts</li>
        </ul>

        <h2>Questions You Must Ask</h2>
        <ul>
          <li>Have you shot at our venue before?</li>
          <li>What is included in the package?</li>
          <li>How many photographers will cover the event?</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          A great photographer doesn’t just take photos—they tell your story.
          Choose someone who understands your vision and wedding culture.
        </p>
      </div>
    </div>
  );
};

export default HiringPhotographer;
