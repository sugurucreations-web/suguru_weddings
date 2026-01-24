import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin, Camera, Phone } from "lucide-react";

const VideographerVijayawada = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title =
      "Wedding Videographer in Vijayawada | Best Wedding Videography Vijayawada - Suguru Weddings";
  }, []);

  const venues = [
    "A Convention Center",
    "Kankipadu Function Halls",
    "Gollapudi Wedding Venues",
    "Kanaka Durga Temple Area",
    "MG Road Banquet Halls",
  ];

  const services = [
    "Wedding Videography",
    "Cinematic Wedding Films",
    "Traditional Video Coverage",
    "Drone Videography",
    "Same Day Edit",
    "Pre-Wedding Films",
  ];

  return (
    <div className="location-page">
      <section className="hero container">
        <h1>Wedding Videographer in Vijayawada</h1>
        <p>
          Professional wedding videography services in Vijayawada, Andhra
          Pradesh. Capturing timeless wedding films with cinematic storytelling.
        </p>
      </section>

      <section className="content-section container">
        <h2>Professional Wedding Videography in Vijayawada</h2>
        <p>
          Suguru Weddings offers premium wedding videography services in
          Vijayawada, combining cinematic visuals with traditional storytelling.
          We capture emotions, rituals, and celebrations beautifully.
        </p>
      </section>

      <section className="features-section container">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>No travel charges from Hyderabad</li>
          <li>Experienced Telugu wedding videographers</li>
          <li>Cinematic & traditional coverage</li>
          <li>High-quality editing & delivery</li>
        </ul>
      </section>

      <section className="pricing-cta container">
        <h2>Packages Starting from ₹55,000</h2>
        <p>Full wedding film, highlights, drone & same-day edit options</p>

        <div className="cta-buttons">
          <Link to="/contact" className="cta-button primary">Get Quote</Link>
          <a href="tel:+91XXXXXXXXXX" className="cta-button secondary">
            <Phone size={16} /> Call Now
          </a>
        </div>
      </section>

      <section className="venues-section container">
        <h2>Popular Wedding Venues in Vijayawada</h2>
        <ul>
          {venues.map((v, i) => (
            <li key={i}><MapPin size={16} /> {v}</li>
          ))}
        </ul>
      </section>

      <section className="services-section container">
        <h2>Our Videography Services</h2>
        <ul>
          {services.map((s, i) => (
            <li key={i}><Camera size={16} /> {s}</li>
          ))}
        </ul>
      </section>

      <section className="final-cta container">
        <h2>Book Your Vijayawada Wedding Videographer</h2>
        <p>Limited dates available. Book early to secure your wedding date.</p>
        <Link to="/contact" className="cta-button primary">
          Request Free Consultation
        </Link>
      </section>
    </div>
  );
};

export default VideographerVijayawada;
