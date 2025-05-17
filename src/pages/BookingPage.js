import React, { useState, useEffect } from 'react';
import { fetchAPI, submitAPI } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Calendar, Clock, Users } from 'lucide-react';

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

  const [errors, setErrors] = useState({});
  const [availableTimes, setAvailableTimes] = useState([]);

  useEffect(() => {
    if (formData.date) {
      const selectedDate = new Date(formData.date);
      fetchAPI(selectedDate)
        .then(setAvailableTimes)
        .catch((error) => console.error('Erreur de récupération des heures :', error));
    }
  }, [formData.date]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Le nom est requis.';
    if (!formData.email.trim()) newErrors.email = 'L\'email est requis.';
    if (!formData.date) newErrors.date = 'La date est requise.';
    if (!formData.time) newErrors.time = 'L\'heure est requise.';
    if (formData.guests < 1 || formData.guests > 20) newErrors.guests = '1 à 20 personnes.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    submitAPI(formData)
      .then((response) => {
        if (response) {
          navigate('/booking-confirmation', { state: formData });
          setFormData({ name: '', email: '', date: '', time: '', guests: 1 });
        } else {
          alert('Désolé, une erreur est survenue.');
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

      <form className="booking-form" onSubmit={handleSubmit} noValidate>
        {/* Nom */}
        <div className="form-group">
          <label htmlFor="name"><User size={16} /> Nom</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            aria-invalid={!!errors.name}
            className={errors.name ? 'invalid' : ''}
            placeholder="Votre nom complet"
          />
          {errors.name && <span role="alert">{errors.name}</span>}
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email"><Mail size={16} /> Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            aria-invalid={!!errors.email}
            className={errors.email ? 'invalid' : ''}
            placeholder="adresse@email.com"
          />
          {errors.email && <span role="alert">{errors.email}</span>}
        </div>

        {/* Date */}
        <div className="form-group">
          <label htmlFor="date"><Calendar size={16} /> Date</label>
          <input
            id="date"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            aria-invalid={!!errors.date}
            className={errors.date ? 'invalid' : ''}
          />
          {errors.date && <span role="alert">{errors.date}</span>}
        </div>

        {/* Heure */}
        <div className="form-group">
          <label htmlFor="time"><Clock size={16} /> Heure</label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            aria-invalid={!!errors.time}
            className={errors.time ? 'invalid' : ''}
          >
            <option value="">-- Choisir une heure --</option>
            {(availableTimes.length ? availableTimes : generateTimeSlots()).map((slot) => (
              <option key={slot} value={slot}>{slot}</option>
            ))}
          </select>
          {errors.time && <span role="alert">{errors.time}</span>}
        </div>

        {/* Nombre de personnes */}
        <div className="form-group">
          <label htmlFor="guests"><Users size={16} /> Nombre de personnes</label>
          <input
            id="guests"
            type="number"
            name="guests"
            min="1"
            max="20"
            value={formData.guests}
            onChange={handleChange}
            aria-invalid={!!errors.guests}
            className={errors.guests ? 'invalid' : ''}
          />
          {errors.guests && <span role="alert">{errors.guests}</span>}
        </div>

        <button type="submit">Réserver</button>
      </form>
    </section>
  );
};

export default BookingPage;
