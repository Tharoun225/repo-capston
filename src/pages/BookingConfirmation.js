import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Home, ArrowLeft, Calendar, Clock, Users, Mail, User } from 'lucide-react';

const BookingConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingDetails = location.state;

  if (!bookingDetails) {
    return (
      <section className="confirmation-page">
        <h2>Réservation introuvable</h2>
        <button onClick={() => navigate('/booking')}>
          <ArrowLeft size={16} /> Retour à la réservation
        </button>
      </section>
    );
  }

  return (
    <section className="confirmation-page">
      <h2>Merci pour votre réservation ! 🎉</h2>
      <div className="confirmation-details">
        <p><User size={16} /> <strong>Nom :</strong> {bookingDetails.name}</p>
        <p><Mail size={16} /> <strong>Email :</strong> {bookingDetails.email}</p>
        <p><Calendar size={16} /> <strong>Date :</strong> {bookingDetails.date}</p>
        <p><Clock size={16} /> <strong>Heure :</strong> {bookingDetails.time}</p>
        <p><Users size={16} /> <strong>Nombre de personnes :</strong> {bookingDetails.guests}</p>
      </div>

      <div className="confirmation-buttons">
        <button onClick={() => navigate('/')}>
          <Home size={16} /> Retour à l'accueil
        </button>
        <button onClick={() => navigate('/booking')}>
          <ArrowLeft size={16} /> Nouvelle réservation
        </button>
      </div>
    </section>
  );
};

export default BookingConfirmation;
