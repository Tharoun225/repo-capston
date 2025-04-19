import React from 'react';

function Footer(){
    return(
        <footer className="footer">
            <div className="footer-logo">
                <img src="/images/logo.svg" alt="Little Lemon Logo" />
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
                        <ul>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Twitter</a></li>
                        </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;