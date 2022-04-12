import { render, screen, fireEvent } from '../../utils/test-utils';
import ReservationInput from './ReservationInput';
import * as reservationsSlice from './../../features/reservation/reservationSlice';
import * as customersSlice from './../../features/customer/customerSlice';

describe('ReservationInput', () => {
  test('It should mount', async () => {
    render(<ReservationInput />);
    const reservationInputElement = await screen.findByTestId('reservation-input');
    expect(reservationInputElement).toBeInTheDocument();
  });

  test('should add reservation', async () => {
    render(<ReservationInput />);
    const inputElement = screen.getByRole('textbox');
    const buttonElement = screen.getByRole('button');
    const spyAddReservation = jest.spyOn(reservationsSlice, 'addReservation');
    const spyAddCustomer = jest.spyOn(customersSlice, 'addCustomer');
    await fireEvent.change(inputElement, {
      target: {
        value: 'Felipe'
      }
    });
    fireEvent.click(buttonElement);
    expect(spyAddReservation).toBeCalled();
    expect(spyAddCustomer).toBeCalled();
  });

  test('should not add reservation when input is empty', async () => {
    render(<ReservationInput />);
    const buttonElement = screen.getByRole('button');
    const spyAddReservation = jest.spyOn(reservationsSlice, 'addReservation');
    const spyAddCustomer = jest.spyOn(customersSlice, 'addCustomer');
    fireEvent.click(buttonElement);
    expect(spyAddReservation).not.toBeCalled();
    expect(spyAddCustomer).not.toBeCalled();
  })
})