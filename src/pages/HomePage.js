import React from 'react';

const HomePage = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Little Lemon</h1>
            <p>
              Authentic Mediterranean flavors in the heart of Chicago.
              Experience delicious meals made with love and tradition.
            </p>
            <button>Reserve a Table</button>
          </div>
          <div className="hero-image">
            <img src="/images/restauranfood.jpg" alt="Delicious Mediterranean Dish" />
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="highlights-section">
        <div className="highlights-header">
          <h2>This Week's Specials</h2>
          <div className="menu-link">
            <span>Online Menu</span>
            <button>View Full Menu</button>
          </div>
        </div>

        <div className="highlight-cards">
          <div className="highlight-card">
            <img src="/images/greek salad.jpg" alt="Greek Salad" />
            <h3>Greek Salad</h3>
            <p>Fresh salad with tomatoes, cucumbers, onions, and feta cheese.</p>
          </div>
          <div className="highlight-card">
            <img src="/images/bruchetta.svg" alt="Bruschetta" />
            <h3>Bruschetta</h3>
            <p>Toasted bread with tomatoes, garlic, basil, and olive oil.</p>
          </div>
          <div className="highlight-card">
            <img src="/images/lemon dessert.jpg" alt="Lemon Dessert" />
            <h3>Lemon Dessert</h3>
            <p>Sweet and tangy lemon cake with a smooth finish.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <img src="/images/user1.jpg" alt="Maria" className="user-photo" />
            <h4>Maria</h4>
            <p>"Amazing food and excellent service! I’ll be back for sure."</p>
          </div>
          <div className="testimonial-card">
            <div className="stars">⭐⭐⭐⭐</div>
            <img src="/images/user2.jpg" alt="James" className="user-photo" />
            <h4>James</h4>
            <p>"Loved the lemon dessert. The place is cozy and friendly."</p>
          </div>
          <div className="testimonial-card">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <img src="/images/user3.jpg" alt="Aisha" className="user-photo" />
            <h4>Aisha</h4>
            <p>"The Greek salad was super fresh. Highly recommended!"</p>
          </div>
          <div className="testimonial-card">
            <div className="stars">⭐⭐⭐⭐</div>
            <img src="/images/user4.jpg" alt="Leo" className="user-photo" />
            <h4>Leo</h4>
            <p>"Great service and authentic Mediterranean vibes."</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about-section">
        <div className="about-content">
          <div className="about-text">
            <h2>About Little Lemon</h2>
            <p>
              Little Lemon is a family-owned Mediterranean restaurant founded by Adrian and Mario.
              We are passionate about delivering delicious, healthy food with a warm and welcoming experience.
            </p>
          </div>
          <div className="about-images">
            <img src="/images/Mario and Adrian A.jpg" alt="Adrian - Co-founder" />
            <img src="/images/Mario and Adrian b.jpg" alt="Mario - Co-founder" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;