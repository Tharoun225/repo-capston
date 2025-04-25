import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BookingConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingDetails = location.state;

  if (!bookingDetails) {
    return (
      <section className="confirmation-page">
        <h2>Réservation introuvable</h2>
        <button onClick={() => navigate('/booking')}>Retour à la réservation</button>
      </section>
    );
  }

  return (
    <section className="confirmation-page">
      <h2>Merci pour votre réservation ! 🎉</h2>
      <p><strong>Nom :</strong> {bookingDetails.name}</p>
      <p><strong>Email :</strong> {bookingDetails.email}</p>
      <p><strong>Date :</strong> {bookingDetails.date}</p>
      <p><strong>Heure :</strong> {bookingDetails.time}</p>
      <p><strong>Nombre de personnes :</strong> {bookingDetails.guests}</p>

      <button onClick={() => navigate('/')}>Retour à l'accueil</button>
    </section>
  );
};

export default BookingConfirmation;
