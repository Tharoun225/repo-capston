// src/App.js
import './App.css';
import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Helmet>
          {/* Meta Description */}
          <meta
            name="description"
            content="Little Lemon est un restaurant méditerranéen proposant une cuisine fraîche, authentique et pleine de saveurs."
          />
          <title>Little Lemon - Restaurant Méditerranéen</title>

          {/* Open Graph */}
          <meta property="og:title" content="Little Lemon - Restaurant Méditerranéen" />
          <meta property="og:description" content="Venez découvrir les saveurs authentiques de la Méditerranée chez Little Lemon." />
          <meta property="og:image" content="https://example.com/images/preview.jpg" />
          <meta property="og:url" content="https://littlelemon.com" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="fr_FR" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Little Lemon - Restaurant Méditerranéen" />
          <meta name="twitter:description" content="Venez découvrir les saveurs méditerranéennes chez Little Lemon." />
          <meta name="twitter:image" content="https://example.com/images/preview.jpg" />
        </Helmet>

        {/* Global layout */}
        <div className="app-container">
          <Header />
          <Nav />
          <Main />
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
