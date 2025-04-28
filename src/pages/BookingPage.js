import React, { useState, useEffect } from 'react';
import { fetchAPI, submitAPI } from '../services/api';
import { useNavigate } from 'react-router-dom';

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
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Le nom est requis.';
    if (!formData.email.trim()) newErrors.email = 'L\'email est requis.';
    if (!formData.date) newErrors.date = 'La date est requise.';
    if (!formData.time) newErrors.time = 'L\'heure est requise.';
    if (formData.guests < 1 || formData.guests > 20) newErrors.guests = 'Le nombre de personnes doit être entre 1 et 20.';
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

      <form className="booking-form" onSubmit={handleSubmit} noValidate>
        <label>
          Nom :
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name && <span role="alert">{errors.name}</span>}
        </label>

        <label>
          Email :
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && <span role="alert">{errors.email}</span>}
        </label>

        <label>
          Date :
          <input 
            type="date" 
            name="date" 
            value={formData.date} 
            onChange={handleChange} 
            required 
            aria-invalid={errors.date ? "true" : "false"}
          />
          {errors.date && <span role="alert">{errors.date}</span>}
        </label>

        <label>
          Heure :
          <select 
            name="time" 
            value={formData.time} 
            onChange={handleChange} 
            required
            aria-invalid={errors.time ? "true" : "false"}
          >
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
          {errors.time && <span role="alert">{errors.time}</span>}
        </label>

        <label>
          Nombre de personnes :
          <input 
            type="number" 
            name="guests" 
            min="1" 
            max="20" 
            value={formData.guests} 
            onChange={handleChange} 
            required 
            aria-invalid={errors.guests ? "true" : "false"}
          />
          {errors.guests && <span role="alert">{errors.guests}</span>}
        </label>

        <button type="submit">Réserver</button>
      </form>
    </section>
  );
};

export default BookingPage;
