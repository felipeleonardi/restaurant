import { render, screen } from '@testing-library/react';
import ReservationInput from './ReservationInput';

describe('ReservationInput', () => {
  test('It should mount', async () => {
    render(<ReservationInput />);
    const reservationInputElement = await screen.findByTestId('ReservationInput');
    expect(reservationInputElement).toBeInTheDocument();
  });
})