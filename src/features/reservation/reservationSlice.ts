import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IReservationState } from './../../interfaces/reservation-state.interface';

const initialState: IReservationState = {
    value: []
};

export const reservationsSlice = createSlice({
    name: 'reservations',
    initialState,
    reducers: {
        addReservation: (state, action: PayloadAction<string>): void => {
            state.value.push(action.payload);
        },
        removeReservation: (state, action: PayloadAction<number>): void => {
            state.value.splice(action.payload, 1);
        }
    }
});

export const {
    addReservation,
    removeReservation
} = reservationsSlice.actions;

export default reservationsSlice.reducer;