import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IReservationState } from './../../interfaces/reservation-state.interface';
import { IReservation } from './../../interfaces/reservation.interface';

const initialState: IReservationState = {
    value: []
};

export const reservationsSlice = createSlice({
    name: 'reservations',
    initialState,
    reducers: {
        addReservation: (state, action: PayloadAction<IReservation>): void => {
            state.value.push(action.payload);
        },
        removeReservation: (state, action: PayloadAction<string>): void => {
            const newReservations = state.value.filter((reservation: IReservation) => reservation.id !== action.payload);
            state.value = Object.assign([], newReservations);
        }
    }
});

export const {
    addReservation,
    removeReservation
} = reservationsSlice.actions;

export default reservationsSlice.reducer;