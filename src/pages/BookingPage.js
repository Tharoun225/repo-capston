import React, { useState } from 'react';

const generateTimeSlots = (start = 17, end = 22, step = 30) => {
    const slots = [];
    for (let hour = start; hour < end; hour++) {
      slots.push(`${String(hour).padStart(2, '0')}:00`);
      slots.push(`${String(hour).padStart(2, '0')}:30`);
    }
    return slots;
  };

const BookingPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        time: '',
        guests: 1,
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
    
        setFormData(prevData => ({
          ...prevData,
          [name]: value,
        }));

      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Ici, tu pourrais envoyer les données vers un backend
        console.log('Réservation envoyée:', formData);
        alert('Merci ! Votre réservation a été prise en compte.');
        // Réinitialiser le formulaire
        setFormData({
          name: '',
          email: '',
          date: '',
          time: '',
          guests: 1,
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
                    {generateTimeSlots().map((slot) => (
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
