import { configureStore } from '@reduxjs/toolkit';
import reservationsReducer from '../features/reservation/reservationSlice';
import customerReducer from '../features/customer/customerSlice';

export const store = configureStore({
  reducer: {
    reservations: reservationsReducer,
    customers: customerReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
