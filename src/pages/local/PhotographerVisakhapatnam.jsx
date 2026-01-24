import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin, Camera, Phone } from "lucide-react";

const PhotographerVisakhapatnam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title =
      "Wedding Photographer in Visakhapatnam | Best Wedding Photography Vizag - Suguru Weddings";
  }, []);

  const venues = [
    "Beach Road Wedding Resorts",
    "Rushikonda Resorts",
    "Novotel Vizag",
    "Convention Centers",
    "Temple Wedding Venues",
  ];

  const services = [
    "Wedding Photography",
    "Candid Photography",
    "Traditional Photography",
    "Pre-Wedding Shoots",
    "Drone Photography",
    "Photo Albums",
  ];

  return (
    <div className="location-page">
      <section className="hero container">
        <h1>Wedding Photographer in Visakhapatnam</h1>
        <p>
          Destination-style wedding photography in Visakhapatnam. Perfect for
          beach weddings and luxury celebrations.
        </p>
      </section>

      <section className="content-section container">
        <h2>Destination Wedding Photography in Vizag</h2>
        <p>
          Suguru Weddings specializes in beach and destination wedding
          photography in Visakhapatnam, capturing stunning visuals with natural
          light and scenic backdrops.
        </p>
      </section>

      <section className="features-section container">
        <h2>Why Couples Choose Us</h2>
        <ul>
          <li>Experience with beach weddings</li>
          <li>Candid & storytelling photography</li>
          <li>Premium editing & albums</li>
          <li>Trusted across Andhra Pradesh</li>
        </ul>
      </section>

      <section className="pricing-cta container">
        <h2>Packages Starting from ₹60,000</h2>
        <p>Full wedding coverage with premium photo albums</p>

        <div className="cta-buttons">
          <Link to="/contact" className="cta-button primary">Get Quote</Link>
          <a href="tel:+91XXXXXXXXXX" className="cta-button secondary">
            <Phone size={16} /> Call Now
          </a>
        </div>
      </section>

      <section className="venues-section container">
        <h2>Popular Wedding Venues in Visakhapatnam</h2>
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
        <h2>Book Your Vizag Wedding Photographer</h2>
        <Link to="/contact" className="cta-button primary">
          Request Free Consultation
        </Link>
      </section>
    </div>
  );
};

export default PhotographerVisakhapatnam;
