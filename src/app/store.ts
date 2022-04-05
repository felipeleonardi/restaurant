import { configureStore } from '@reduxjs/toolkit';
import reservationsReducer from '../features/reservation/reservationSlice';

export const store = configureStore({
  reducer: {
    reservations: reservationsReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
