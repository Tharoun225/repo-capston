import React from 'react';

const AboutPage = () => {
  return (
    <section className="about-page">
      <div className="about-container">
        <div className="about-text">
          <h2>About Little Lemon</h2>
          <p>
            Nestled in the heart of the city, Little Lemon is a family-owned Mediterranean restaurant that brings the rich flavors of the Mediterranean to your plate. Inspired by generations of traditional recipes, our dishes are crafted with love, authenticity, and the freshest ingredients.
          </p>
          <p>
            From our signature lemon-infused dishes to our warm, inviting atmosphere, every detail is thoughtfully designed to offer a unique dining experience. Whether you're here for a casual lunch, a romantic dinner, or a family gathering, we strive to make every visit memorable.
          </p>
        </div>
        <div className="about-image">
          <img
            src="https://www.littlelemon.ie/wp-content/uploads/IMG_2588-1600x1196.jpg"
            alt="Little Lemon Restaurant"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
