import reservationsReducer, { addReservation, removeReservation } from './reservationSlice';
import { IReservation } from './../../interfaces/reservation.interface';

describe('reservationSlice', () => {

    test('should add reservation', () => {
        const reservation: IReservation = {
            id: 'fsdf52345',
            name: 'Tais',
        };
        expect(reservationsReducer(
            { value: [] },
            addReservation(reservation))
        ).toEqual({ value: [reservation] });
    });

    test('should remove reservation', () => {
        const reservation: IReservation = {
            id: 'fsdf52345',
            name: 'Tais',
        };
        expect(reservationsReducer({ value: [reservation] }, removeReservation(reservation.id))).toEqual({ value: [] });
    });
});