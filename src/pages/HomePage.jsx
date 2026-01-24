import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import Contact from '../components/Contact';

const HomePage = ({ content }) => {
  return (
    <>
      <Hero slides={content.heroSlides} />
      <Services services={content.services} />
      <Portfolio items={content.portfolio} />
      <Testimonials testimonials={content.testimonials} />
      <About about={content.about} />
      <Contact contact={content.contact} />
    </>
  );
};

export default HomePage;
