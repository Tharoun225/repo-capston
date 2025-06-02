// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="https://www.figma.com/community/resource/2666faf0-5570-454a-a5bf-82187247c74e/thumbnail" alt="Little Lemon Logo" />
        </div>

        <div className="footer-section">
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/reservations">Reservations</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li>123 Lemon St</li>
            <li>Chicago, IL</li>
            <li>(123) 456-7890</li>
            <li>hello@littlelemon.com</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Suivez-nous</h4>
          <ul className="social-icons">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="footer-copy">&copy; {new Date().getFullYear()} Little Lemon. Tous droits réservés.</p>
    </footer>
  );
}

export default Footer;
