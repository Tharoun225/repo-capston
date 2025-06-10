import React from 'react';

const AboutPage = () => {
  return (
    <section className="about-page">
      <div className="about-container">
        <div className="about-text">
          <h2>À propos de Little Lemon</h2>
          <p>
            Niché au cœur de la ville, Little Lemon est un restaurant méditerranéen familial qui vous offre les riches saveurs de la Méditerranée. Inspirés par des générations de recettes traditionnelles, nos plats sont élaborés avec amour, authenticité et à partir d'ingrédients frais.
          </p>
          <p>
            De nos plats signatures infusés au citron à notre atmosphère chaleureuse et accueillante, chaque détail est soigneusement pensé pour vous offrir une expérience culinaire unique. Que vous soyez ici pour un déjeuner décontracté, un dîner romantique ou une réunion de famille, nous mettons tout en œuvre pour rendre chaque visite mémorable.
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
