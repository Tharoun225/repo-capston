import React, { useState, useEffect } from 'react';
import { fetchAPI, submitAPI } from '../services/api'; // Importation du fichier local
import { useNavigate } from 'react-router-dom';

// Fonction de génération d'heures
const generateTimeSlots = (start = 17, end = 22, step = 30) => {
  const slots = [];
  for (let hour = start; hour < end; hour++) {
    slots.push(`${String(hour).padStart(2, '0')}:00`);
    slots.push(`${String(hour).padStart(2, '0')}:30`);
  }
  return slots;
};

const BookingPage = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: 1,
  });

  const [availableTimes, setAvailableTimes] = useState([]);  // Pour stocker les heures disponibles

  useEffect(() => {
    // Lorsque la date change, récupérer les heures disponibles pour cette date
    if (formData.date) {
      const selectedDate = new Date(formData.date); // ✅ Conversion string → Date
      fetchAPI(selectedDate)
        .then((times) => setAvailableTimes(times))
        .catch((error) => console.error('Erreur de récupération des heures :', error));
    }
  }, [formData.date]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Soumettre les données via submitAPI
    submitAPI(formData)
      .then((response) => {
        if (response) {
          console.log('Réservation envoyée:', formData);
          navigate('/booking-confirmation', { state: formData });
          // Réinitialiser le formulaire
          setFormData({
            name: '',
            email: '',
            date: '',
            time: '',
            guests: 1,
          });
        } else {
          alert('Désolé, il y a eu une erreur lors de la soumission.');
        }
      })
      .catch((error) => {
        console.error('Erreur lors de la soumission:', error);
        alert('Une erreur est survenue lors de la soumission.');
      });
  };

  return (
    <section className="booking-page">
      <h2>Réserver une Table</h2>

      <form className="booking-form" onSubmit={handleSubmit}>
        <label>
          Nom :
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>

        <label>
          Email :
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>

        <label>
          Date :
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </label>

        <label>
          Heure :
          <select name="time" value={formData.time} onChange={handleChange} required>
            <option value="">-- Sélectionner une heure --</option>
            {availableTimes.length > 0
              ? availableTimes.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))
              : generateTimeSlots().map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
          </select>
        </label>

        <label>
          Nombre de personnes :
          <input type="number" name="guests" min="1" max="20" value={formData.guests} onChange={handleChange} required />
        </label>

        <button type="submit">Réserver</button>
      </form>
    </section>
  );
};

export default BookingPage;
