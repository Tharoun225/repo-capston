import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src="https://www.figma.com/community/resource/2666faf0-5570-454a-a5bf-82187247c74e/thumbnail" alt="Little Lemon Logo" />
      </div>

      <div className="footer-nav">
        <div className="footer-section">
          <h4>Doormat Navigation</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/reservations">Reservations</a></li>
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
          <h4>Social Media Links</h4>
          <ul className="social-icons" style={{ display: 'flex', gap: '15px', listStyle: 'none', paddingLeft: 0 }}>
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="social-link"
              >
                <FaFacebookF size={20} />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="social-link"
              >
                <FaTwitter size={20} />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="social-link"
              >
                <FaInstagram size={20} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
