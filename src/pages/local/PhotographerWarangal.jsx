import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin, Camera, Phone } from "lucide-react";

const PhotographerWarangal = ({ content }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title =
      "Wedding Photographer in Warangal | Best Wedding Photography Warangal - Suguru Weddings";
  }, []);

  const venues = [
    "Haritha Kakatiya Hotel",
    "Kakatiya Function Hall",
    "Sri Sai Lakshmi Kalyana Mandapam",
    "Heritage Wedding Venues",
    "Warangal Fort Area",
    "Bhadrakali Temple Surroundings",
  ];

  const services = [
    "Wedding Photography",
    "Wedding Videography",
    "Pre-Wedding Shoots",
    "Candid Photography",
    "Traditional Photography",
    "Drone Coverage",
    "Same Day Editing",
    "Photo Albums",
  ];

  return (
    <div className="location-page">
      {/* Hero Section */}
      <section className="hero container">
        <h1>Wedding Photographer in Warangal</h1>
        <p className="hero-subtitle">
          Professional wedding photography services in Warangal, Telangana.
          Capturing beautiful moments across Warangal’s heritage locations and
          modern venues.
        </p>
      </section>

      {/* Intro */}
      <section className="content-section container">
        <h2>Trusted Wedding Photographers Serving Warangal</h2>
        <p>
          Based in Hyderabad and serving Warangal, Suguru Weddings brings premium
          wedding photography services to one of Telangana’s most historic
          cities. We understand the cultural significance of Warangal weddings
          and specialize in capturing traditional Telugu ceremonies.
        </p>
        <p>
          Whether your wedding is at heritage hotels like Haritha Kakatiya Hotel,
          grand banquet halls, or traditional venues, we travel to Warangal to
          document your special day with the same quality and dedication as our
          Hyderabad clients.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="features-section container">
        <h2>Why Choose Us for Warangal Weddings?</h2>
        <ul className="features-list">
          <li>No travel charges within 100km of Hyderabad</li>
          <li>Familiar with Warangal wedding venues</li>
          <li>Experienced in Telugu wedding traditions</li>
          <li>Same premium quality as Hyderabad weddings</li>
        </ul>
      </section>

      {/* Pricing CTA */}
      <section className="pricing-cta container">
        <h2>Packages Starting from ₹50,000</h2>
        <p>Full day coverage, professional editing, online gallery</p>

        <div className="cta-buttons">
          <Link to="/contact" className="cta-button primary">
            Get Quote
          </Link>
          <a href="tel:+91XXXXXXXXXX" className="cta-button secondary">
            <Phone size={16} /> Call Now
          </a>
        </div>
      </section>

      {/* Venues */}
      <section className="venues-section container">
        <h2>Popular Wedding Venues in Warangal</h2>
        <ul className="venue-list">
          {venues.map((venue, idx) => (
            <li key={idx}>
              <MapPin size={16} /> {venue}
            </li>
          ))}
        </ul>
      </section>

      {/* Services */}
      <section className="services-section container">
        <h2>Our Services in Warangal</h2>
        <ul className="services-list">
          {services.map((service, idx) => (
            <li key={idx}>
              <Camera size={16} /> {service}
            </li>
          ))}
        </ul>
      </section>

      {/* Final CTA */}
      <section className="final-cta container">
        <h2>Book Your Warangal Wedding Photographer</h2>
        <p>
          Limited dates available. Contact us today to discuss your wedding
          photography needs in Warangal.
        </p>

        <Link to="/contact" className="cta-button primary">
          Request Free Consultation
        </Link>
      </section>
    </div>
  );
};

export default PhotographerWarangal;
