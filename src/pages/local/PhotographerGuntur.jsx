import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin, Camera, Phone } from "lucide-react";

const PhotographerGuntur = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title =
      "Wedding Photographer in Guntur | Best Wedding Photography Guntur - Suguru Weddings";
  }, []);

  const venues = [
    "City Convention Halls",
    "Traditional Kalyana Mandapams",
    "Temple Wedding Venues",
    "Outskirts Wedding Resorts",
  ];

  const services = [
    "Wedding Photography",
    "Candid Photography",
    "Traditional Coverage",
    "Pre-Wedding Shoots",
    "Drone Photography",
    "Photo Albums",
  ];

  return (
    <div className="location-page">
      <section className="hero container">
        <h1>Wedding Photographer in Guntur</h1>
        <p>
          Trusted wedding photography services in Guntur, capturing authentic
          Telugu wedding traditions with creativity.
        </p>
      </section>

      <section className="content-section container">
        <h2>Wedding Photography Services in Guntur</h2>
        <p>
          Suguru Weddings provides professional wedding photography in Guntur,
          focusing on cultural rituals, candid moments, and timeless portraits.
        </p>
      </section>

      <section className="features-section container">
        <h2>Why Choose Suguru Weddings</h2>
        <ul>
          <li>Expertise in traditional weddings</li>
          <li>Natural & candid photography style</li>
          <li>High-quality editing</li>
          <li>Affordable premium packages</li>
        </ul>
      </section>

      <section className="pricing-cta container">
        <h2>Packages Starting from ₹45,000</h2>
        <p>Complete wedding coverage with album options</p>

        <div className="cta-buttons">
          <Link to="/contact" className="cta-button primary">Get Quote</Link>
          <a href="tel:+91XXXXXXXXXX" className="cta-button secondary">
            <Phone size={16} /> Call Now
          </a>
        </div>
      </section>

      <section className="venues-section container">
        <h2>Popular Wedding Venues in Guntur</h2>
        <ul>
          {venues.map((v, i) => (
            <li key={i}><MapPin size={16} /> {v}</li>
          ))}
        </ul>
      </section>

      <section className="services-section container">
        <h2>Our Photography Services</h2>
        <ul>
          {services.map((s, i) => (
            <li key={i}><Camera size={16} /> {s}</li>
          ))}
        </ul>
      </section>

      <section className="final-cta container">
        <h2>Book Your Guntur Wedding Photographer</h2>
        <Link to="/contact" className="cta-button primary">
          Request Free Consultation
        </Link>
      </section>
    </div>
  );
};

export default PhotographerGuntur;
