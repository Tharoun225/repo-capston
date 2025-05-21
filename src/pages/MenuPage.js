import React, { useState } from 'react';

// Liste des plats avec images, catégories, prix
const menuItems = [
  {
    id: 1,
    name: 'Bruschetta',
    category: 'Starter',
    price: '$6.00',
    image: 'https://static01.nyt.com/images/2020/05/12/dining/as-tomato-bruschetta/as-tomato-bruschetta-googleFourByThree-v2.jpg', // ← Assure-toi que cette image existe dans le dossier public/images
  },
  {
    id: 2,
    name: 'Greek Salad',
    category: 'Starter',
    price: '$5.50',
    image: 'https://hostessatheart.com/wp-content/uploads/2023/04/IG3.png',
  },
  {
    id: 3,
    name: 'Lemon Chicken',
    category: 'Main',
    price: '$14.00',
    image: 'https://www.seriouseats.com/thmb/32jSN6iigPUrGq1iPJymu0HNXrs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20241101-SEA-OneSkilletLemonChicken-MorganHuntGlaze-Hero2-10-109b1c056c1247f9b676698b408529d0.jpg',
  },
  {
    id: 4,
    name: 'Seafood Pasta',
    category: 'Main',
    price: '$17.50',
    image: 'https://playswellwithbutter.com/wp-content/uploads/2024/05/Shrimp-Pesto-Pasta-15.jpg',
  },
  {
    id: 5,
    name: 'Tiramisu',
    category: 'Dessert',
    price: '$7.00',
    image: 'https://www.momontimeout.com/wp-content/uploads/2023/07/lemon-tiramisu-dessert-square.jpeg',
  },
  {
    id: 6,
    name: 'Baklava',
    category: 'Dessert',
    price: '$6.50',
    image: 'https://www.tasteofbeirut.com/wp-content/uploads/2010/05/baklava-550x325.jpg',
  },
  {
    id: 7,
    name: 'Mint Lemonade',
    category: 'Drink',
    price: '$3.50',
    image: 'https://i0.wp.com/thetwobananas.com/wp-content/uploads/2022/06/lemonade01.jpg?ssl=1',
  },
  {
    id: 8,
    name: 'Espresso',
    category: 'Drink',
    price: '$2.50',
    image: 'https://pearllemoncatering.com/wp-content/uploads/2023/08/image21-1999x1125.jpg.webp',
  },
];

const categories = ['All', 'Starter', 'Main', 'Dessert', 'Drink'];

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filtrage des plats selon la catégorie choisie
  const filteredItems =
    selectedCategory === 'All'
      ? menuItems
      : menuItems.filter(item => item.category === selectedCategory);

  return (
    <section className="menu-page">
      <h2>Our Menu</h2>
      <p className="description">
        Explore our delicious Mediterranean dishes, made with love and fresh ingredients.
      </p>

      {/* Boutons de filtre */}
      <div className="category-filter">
        {categories.map(cat => (
          <button
            key={cat}
            className={selectedCategory === cat ? 'active' : ''}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Affichage des plats filtrés */}
      <div className="menu-grid">
        {filteredItems.map(item => (
          <div key={item.id} className="menu-card">
            {/* Affichage de l’image du plat */}
            <img src={item.image} alt={item.name} className="menu-image" />
            <h3>{item.name}</h3>
            <p className="category">{item.category}</p>
            <p className="price">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuPage;
