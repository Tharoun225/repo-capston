import { render, screen, fireEvent } from '@testing-library/react';
import BookingPage from './BookingPage';

test('le formulaire peut être rempli et soumis', () => {
  render(<BookingPage />);

  const nameInput = screen.getByLabelText(/^nom\s*:/i);
  const emailInput = screen.getByLabelText(/^email\s*:/i);
  const dateInput = screen.getByLabelText(/^date\s*:/i);
  const timeSelect = screen.getByLabelText(/^heure\s*:/i);
  const guestsInput = screen.getByLabelText(/^nombre de personnes\s*:/i);
  const submitButton = screen.getByRole('button', { name: /réserver/i });

  fireEvent.change(nameInput, { target: { value: 'Jean Dupont' } });
  fireEvent.change(emailInput, { target: { value: 'jean@example.com' } });
  fireEvent.change(dateInput, { target: { value: '2025-05-01' } });
  fireEvent.change(timeSelect, { target: { value: '18:30' } });
  fireEvent.change(guestsInput, { target: { value: 3 } });

  fireEvent.click(submitButton);

  // Bonus : vérifier que l'alerte s'affiche ou que le formulaire est vidé (selon ton besoin)
});
