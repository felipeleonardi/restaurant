import { ICustomerState } from './../../interfaces/customer-state.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICustomer } from '../../interfaces/customer.interface';
import { ICustomerItemAction } from './../../interfaces/customer-item-action.interface';

const initialState: ICustomerState = {
    value: []
};

export const customersSlice = createSlice({
    name: 'customers',
    initialState,
    reducers: {
        addCustomer: (state: ICustomerState, action: PayloadAction<ICustomer>): void => {
            state.value.push(action.payload);
        },
        addCustomerItem: (state: ICustomerState, action: PayloadAction<ICustomerItemAction>): void => {
            state.value.forEach((customer: ICustomer, index: number) => {
                if (customer.id === action.payload.customerId) {
                    state.value[index].items.push(action.payload.itemName);
                }
            })
        },
        removeCustomer: (state: ICustomerState, action: PayloadAction<string>): void => {
            const newCustomers = state.value.filter((customer: ICustomer) => customer.id !== action.payload);
            state.value = Object.assign([], newCustomers);
        }
    }
});

export const {
    addCustomer,
    addCustomerItem,
    removeCustomer
} = customersSlice.actions;

export default customersSlice.reducer;