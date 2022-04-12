
import { IReservation } from './../../interfaces/reservation.interface';
import ReservationCard from './ReservationCard';
import { render, screen, fireEvent } from '../../utils/test-utils';
import * as reservationSlice from '../../features/reservation/reservationSlice';

const reservation: IReservation = {
    id: 'wrdasr32',
    name: 'Felipe',
}

describe('ReservationCard', () => {
    test('It should mount', async () => {
        render(<ReservationCard reservation={reservation} />);
        const reservationCardElement = await screen.findByTestId(`reservation-${reservation.id}`);
        expect(reservationCardElement).toBeInTheDocument();
    });

    test('should remove reservation', async () => {
        const spy = jest.spyOn(reservationSlice, 'removeReservation');
        render(<ReservationCard reservation={reservation} />);
        const buttonElement = await screen.findByTestId('remove-reservation');
        await fireEvent.click(buttonElement);
        expect(spy).toBeCalled()
    });
})