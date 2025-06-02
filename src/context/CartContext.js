// src/context/CartContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

// Récupère les données du localStorage avec gestion d'erreur
const getInitialCart = () => {
  try {
    const saved = localStorage.getItem('littleLemonCart');
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error("Erreur de parsing du localStorage :", error);
    return [];
  }
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getInitialCart);

  // Mise à jour du localStorage à chaque changement du panier
  useEffect(() => {
    localStorage.setItem('littleLemonCart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Ajouter un produit au panier
  const addToCart = (item) => {
    setCartItems(prev =>
      prev.some(i => i.id === item.id)
        ? prev.map(i =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          )
        : [...prev, { ...item, quantity: 1 }]
    );
  };

  // Retirer complètement un produit
  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // Diminuer la quantité d’un article (au minimum 1)
  const decreaseQuantity = (id) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  // Vider le panier
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('littleLemonCart');
  };

  // Total du panier
  const getTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', '').replace(',', '.'));
      return total + price * item.quantity;
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart: cartItems,
        addToCart,
        removeFromCart,
        decreaseQuantity,
        clearCart,
        getTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte
export const useCart = () => useContext(CartContext);
