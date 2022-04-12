import { render, screen } from '../../utils/test-utils';
import ReservationList from './ReservationList';
import * as redux from 'react-redux';

describe('ReservationList', () => {
    test('should It should mount', () => {
        render(<ReservationList />);
        const reservationListElement = screen.getByTestId('reservation-list');
        expect(reservationListElement).toBeInTheDocument();
    });

    test('should list reservations', async () => {
        const reservation = {
            id: 'ewrf32',
            name: 'Felipe',
        };
        jest.spyOn(redux, 'useSelector').mockReturnValue([reservation]);
        render(<ReservationList />);
        const reservationCardElement = await screen.findByTestId(`reservation-${reservation.id}`);
        expect(reservationCardElement).toBeInTheDocument();
    })
})