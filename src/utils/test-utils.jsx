import { configureStore } from '@reduxjs/toolkit';
import reservationsReducer from '../features/reservation/reservationSlice';
import customerReducer from '../features/customer/customerSlice';
import { Provider } from 'react-redux';
import { render as rtlRender } from '@testing-library/react';

function render(
    ui,
    {
        preloadedState,
        store = configureStore({
            reducer: {
                reservations: reservationsReducer,
                customers: customerReducer,
            }, preloadedState
        }),
        ...renderOptions
    } = {}
) {
    function Wrapper({ children }) {
        return <Provider store={store}>{ children }</Provider>
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export * from '@testing-library/react';
export { render }