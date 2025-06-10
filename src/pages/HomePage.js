import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Little Lemon</h1>
            <p className="location">Chicago</p>
            <p className="description">
              Savourez le goût d'une cuisine méditerranéenne authentique préparée avec passion et des ingrédients frais, le tout au cœur de Chicago.
            </p>
            <Link to="/booking" className="hero-button">
              Réservez une table
            </Link>
          </div>
          <div className="hero-image">
            <img
              src="https://media-cdn.tripadvisor.com/media/photo-m/1280/2a/33/db/6b/food-at-little-lemon.jpg"
              alt="Delicious Mediterranean Dish"
            />
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="highlights-section">
      {/* En-tête des promotions de la semaine */}
      <div className="highlights-header">
        <h2>Les spéciaux de la semaine</h2>
        <Link to="/menu" className="menu-button">
          Voir le menu complet
        </Link>
      </div>

      {/* Cartes des plats en promotion */}
      <div className="highlight-cards">
        <div className="highlight-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXYjkaG_bqoHCD2pSKT-H4uTE9NID6zml4QA&s" alt="Greek Salad" />
          <div className="card-content">
            <div className="card-header">
              <h3>Salade grecque</h3>
              <span className="price">$12.99</span>
            </div>
            <p>Salade fraîche avec tomates, concombres, oignons et fromage feta.</p>
            <button className="order-button">Commandez maintenant</button>
          </div>
        </div>

        <div className="highlight-card">
          <img src="https://cdn.loveandlemons.com/wp-content/uploads/2025/05/bruschetta-480x270.jpg" alt="Bruschetta" />
          <div className="card-content">
            <div className="card-header">
              <h3>Bruschettas</h3>
              <span className="price">$9.49</span>
            </div>
            <p>Pain grillé avec tomates, ail, basilic et huile d'olive.</p>
            <button className="order-button">Commandez maintenant</button>
          </div>
        </div>

        <div className="highlight-card">
          <img src="https://bakingamoment.com/wp-content/uploads/2017/05/IMG_3119-square.jpg" alt="Lemon Dessert" />
          <div className="card-content">
            <div className="card-header">
              <h3>Dessert au Citron</h3>
              <span className="price">$6.99</span>
            </div>
            <p>Gâteau au citron sucré et acidulé avec une finition onctueuse.</p>
            <button className="order-button">Commandez maintenant</button>
          </div>
        </div>
      </div>
    </section>

  {/* Testimonials */}
<section className="testimonials-section">
  <h2 className="testimonials-title">Ce que disent nos clients</h2>
  <div className="testimonial-cards">
    {[
      {
        name: "Maria",
        stars: 5,
        photo: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80",
        feedback: "Nourriture délicieuse et service excellent ! Je reviendrai, c'est sûr.",
      },
      {
        name: "James",
        stars: 4,
        photo: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80",
        feedback: "J'ai adoré le dessert au citron. L'endroit est chaleureux et convivial.",
      },
      {
        name: "Aisha",
        stars: 5,
        photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=80&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        feedback: "La salade grecque était super fraîche. Je la recommande vivement !",
      },
      {
        name: "Leo",
        stars: 4,
        photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80",
        feedback: "Excellent service et ambiance méditerranéenne authentique.",
      },
    ].map(({ name, stars, photo, feedback }) => (
      <div className="testimonial-card" key={name}>
        <div className="testimonial-stars">{"⭐".repeat(stars)}</div>
        <img src={photo} alt={name} className="user-photo" />
        <h4>{name}</h4>
        <p>"{feedback}"</p>
      </div>
    ))}
  </div>
</section>

{/* About */}
<section className="about-section">
  <div className="about-content">
    <div className="about-text">
      <h2>À propos de Little Lemon</h2>
      <p>Bienvenue à Little Lemon 🍋</p>
      <p>
        Little Lemon est un restaurant méditerranéen familial fondé par Adrian et Mario.
        Nous sommes passionnés par la livraison d'aliments délicieux et sains avec une expérience chaleureuse et accueillante.
      </p>
    </div>
    <div className="about-images">
      <img src="https://premierconstructionnews.com/wp-content/uploads/2024/01/lr-IMG_2635.jpg" alt="Adrian - Co-founder"/>
      <img src="https://businessplus.ie/wp-content/uploads/2023/08/little-lemon-image.jpg" alt="Mario - Co-founder"/>
      </div>
    </div>
  </section>
  </main>
  );
};

export default HomePage;
