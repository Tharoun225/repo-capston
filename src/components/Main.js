import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import BookingPage from '../pages/BookingPage';
import AboutPage from '../pages/AboutPage';
import MenuPage from '../pages/MenuPage';
import OrderPage from '../pages/OrderPage';
import LoginPage from '../pages/LoginPage';
import BookingConfirmation from '../pages/BookingConfirmation';
// Tu ajouteras les autres pages plus tard comme BookingPage, AboutPage, etc.

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/booking-confirmation" element={<BookingConfirmation />} />
      </Routes>
    </main>
  );
};

export default Main;