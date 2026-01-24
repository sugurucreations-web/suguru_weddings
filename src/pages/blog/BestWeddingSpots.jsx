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
      image: "/images/spots/taj-falaknuma.jpg",
      type: "Luxury Heritage Palace",
      why: "Royal architecture, regal interiors, panoramic city views",
      best: "Luxury weddings & golden hour portraits",
      rating: "★★★★★",
    },
    {
      name: "Ramoji Film City",
      image: "/images/spots/ramoji-film-city.jpg",
      type: "Film Studio",
      why: "Multiple themed sets, palaces, gardens & European streets",
      best: "Cinematic wedding photography",
      rating: "★★★★★",
    },
    {
      name: "Golconda Fort",
      image: "/images/spots/golconda-fort.jpg",
      type: "Historical Monument",
      why: "Ancient architecture & dramatic sunset views",
      best: "Epic sunset & heritage shots",
      rating: "★★★★☆",
    },
    {
      name: "Qutub Shahi Tombs",
      image: "/images/spots/qutub-shahi-tombs.jpg",
      type: "Heritage Site",
      why: "Indo-Persian domes & peaceful atmosphere",
      best: "Morning soft-light photography",
      rating: "★★★★☆",
    },
    {
      name: "Hussain Sagar Lake",
      image: "/images/spots/hussain-sagar.jpg",
      type: "Lakefront",
      why: "Waterfront views with Buddha statue backdrop",
      best: "Romantic sunset portraits",
      rating: "★★★★☆",
    },
    {
      name: "Durgam Cheruvu",
      image: "/images/spots/durgam-cheruvu.jpg",
      type: "Natural Lake",
      why: "Unique rock formations & serene environment",
      best: "Nature-inspired pre-wedding shoots",
      rating: "★★★★☆",
    },
    {
      name: "Botanical Garden",
      image: "/images/spots/botanical-garden.jpg",
      type: "Gardens",
      why: "Lush greenery & colorful floral backdrops",
      best: "Fresh daylight photography",
      rating: "★★★★☆",
    },
    {
      name: "Shamirpet Lake",
      image: "/images/spots/shamirpet-lake.jpg",
      type: "Lake & Hills",
      why: "Scenic landscapes away from the city",
      best: "Outdoor & pre-wedding sessions",
      rating: "★★★★☆",
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
      {/* INTRO */}
      <p className="text-xl leading-relaxed">
        Hyderabad offers a perfect blend of heritage, royal architecture,
        modern landmarks, and natural beauty—making it one of the best cities
        in India for wedding photography.
      </p>

      <h2>Why Location Matters for Wedding Photography</h2>
      <p>
        The right location can elevate wedding photos from ordinary to
        extraordinary. A strong backdrop adds emotion, scale, and timeless
        storytelling to every frame.
      </p>

      <hr className="my-20" />

      <h2>Top Wedding Photo Locations in Hyderabad</h2>

      {/* SPOTS */}
      {spots.map((spot, idx) => (
        <div
          key={idx}
          className="not-prose grid md:grid-cols-2 gap-10 items-center my-24"
        >
          <img
            src={spot.image}
            alt={spot.name}
            className="w-full h-[420px] object-cover rounded-3xl shadow-xl"
            loading="lazy"
          />

          <div>
            <h3 className="text-3xl font-semibold mb-3">
              {idx + 1}. {spot.name}
            </h3>

            <div className="text-rose-600 text-lg mb-5">
              {spot.rating}
            </div>

            <p className="mb-3">
              <strong>Type:</strong> {spot.type}
            </p>
            <p className="mb-3">
              <strong>Why we love it:</strong> {spot.why}
            </p>
            <p>
              <strong>Best for:</strong> {spot.best}
            </p>
          </div>
        </div>
      ))}

      <hr className="my-24" />

      <h2>Pro Tips for Shooting at These Locations</h2>
      <ul>
        <li>Apply for permits well in advance for heritage sites</li>
        <li>Schedule shoots during early mornings or golden hours</li>
        <li>Scout locations beforehand to plan compositions</li>
        <li>Work with experienced local photographers</li>
      </ul>

      <h2>Choosing the Right Location for Your Wedding Style</h2>
      <ul>
        <li><strong>Traditional weddings:</strong> Golconda Fort, Qutub Shahi Tombs</li>
        <li><strong>Luxury weddings:</strong> Taj Falaknuma Palace</li>
        <li><strong>Nature-loving couples:</strong> Shamirpet Lake, Durgam Cheruvu</li>
        <li><strong>Cinematic shoots:</strong> Ramoji Film City</li>
      </ul>

      {/* CTA */}
      <div className="not-prose bg-rose-600 text-white rounded-3xl p-12 mt-28 text-center">
        <h3 className="text-3xl font-bold mb-4">
          Planning Your Wedding in Hyderabad?
        </h3>
        <p className="text-lg mb-8 opacity-90">
          Suguru Weddings has photographed luxury and traditional weddings
          across all these locations.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-white text-rose-600 px-10 py-4 rounded-full font-semibold"
        >
          Book a Consultation
        </Link>
      </div>

      <h2 className="mt-24">Final Thoughts</h2>
      <p>
        Hyderabad offers unmatched diversity in wedding photography locations.
        With the right venue and the right photographer, your wedding memories
        become truly timeless.
      </p>
    </BlogLayout>
  );
};

export default BestWeddingSpots;
