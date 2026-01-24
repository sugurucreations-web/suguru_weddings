import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const BlogHome = () => {
  useEffect(() => {
    document.title = "Wedding Photography Blog - Suguru Weddings";
  }, []);

  return (
    <div className="blog-page container">
      <h1>Wedding Photography Blog</h1>
      <p>
        Tips, locations, and guides for wedding photography across Telangana and
        Andhra Pradesh.
      </p>

      <ul>
        <li>
          <Link to="/blog/best-wedding-photo-spots-hyderabad">
            Best Wedding Photo Spots in Hyderabad
          </Link>
        </li>
        <li>
          <Link to="/blog/telangana-pre-wedding-photoshoot-locations">
            Telangana Pre Wedding Photoshoot Locations
          </Link>
        </li>
        <li>
          <Link to="/blog/hiring-photographer-hyderabad">
            How to Hire a Wedding Photographer
          </Link>
        </li>
        <li>
          <Link to="/blog/luxury-wedding-photographer-worth">
            Is a Luxury Wedding Photographer Worth It?
          </Link>
        </li>
        <li>
          <Link to="/blog/top-andhra-pradesh-wedding-destinations">
            Top Wedding Destinations in Andhra Pradesh
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BlogHome;
