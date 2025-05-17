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
              Authentic Mediterranean flavors in the heart of Chicago.
              Experience delicious meals made with love and tradition.
            </p>
            <Link to="/booking" className="hero-button">
              Reserve a Table
            </Link>
          </div>
          <div className="hero-image">
            <img src="/images/restauranfood.jpg" alt="Delicious Mediterranean Dish" />
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="highlights-section">
      {/* En-tête des promotions de la semaine */}
      <div className="highlights-header">
        <h2>This Week's Specials</h2>
        <Link to="/menu" className="menu-button">
          View Full Menu
        </Link>
      </div>

      {/* Cartes des plats en promotion */}
      <div className="highlight-cards">
        <div className="highlight-card">
          <img src="/images/greek salad.jpg" alt="Greek Salad" />
          <div className="card-content">
            <div className="card-header">
              <h3>Greek Salad</h3>
              <span className="price">$12.99</span>
            </div>
            <p>Fresh salad with tomatoes, cucumbers, onions, and feta cheese.</p>
            <button className="order-button">Order Now</button>
          </div>
        </div>

        <div className="highlight-card">
          <img src="/images/bruchetta.svg" alt="Bruschetta" />
          <div className="card-content">
            <div className="card-header">
              <h3>Bruschetta</h3>
              <span className="price">$9.49</span>
            </div>
            <p>Toasted bread with tomatoes, garlic, basil, and olive oil.</p>
            <button className="order-button">Order Now</button>
          </div>
        </div>

        <div className="highlight-card">
          <img src="/images/lemon dessert.jpg" alt="Lemon Dessert" />
          <div className="card-content">
            <div className="card-header">
              <h3>Lemon Dessert</h3>
              <span className="price">$6.99</span>
            </div>
            <p>Sweet and tangy lemon cake with a smooth finish.</p>
            <button className="order-button">Order Now</button>
          </div>
        </div>
      </div>
    </section>

  {/* Testimonials */}
<section className="testimonials-section">
  <h2 className="testimonials-title">What Our Customers Say</h2>
  <div className="testimonial-cards">
    {[
      {
        name: "Maria",
        stars: 5,
        photo: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80",
        feedback: "Amazing food and excellent service! I’ll be back for sure.",
      },
      {
        name: "James",
        stars: 4,
        photo: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80",
        feedback: "Loved the lemon dessert. The place is cozy and friendly.",
      },
      {
        name: "Aisha",
        stars: 5,
        photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=80&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        feedback: "The Greek salad was super fresh. Highly recommended!",
      },
      {
        name: "Leo",
        stars: 4,
        photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80",
        feedback: "Great service and authentic Mediterranean vibes.",
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
      <h2>About Little Lemon</h2>
      <p>Welcome to Little Lemon 🍋</p>
      <p>
        Little Lemon is a family-owned Mediterranean restaurant founded by Adrian and Mario.
        We are passionate about delivering delicious, healthy food with a warm and welcoming experience.
      </p>
    </div>
    <div className="about-images">
      <img src="/images/Mario and Adrian A.jpg" alt="Adrian - Co-founder"/>
      <img src="/images/Mario and Adrian b.jpg" alt="Mario - Co-founder"/>
      </div>
    </div>
  </section>
  </main>
  );
};

export default HomePage;
