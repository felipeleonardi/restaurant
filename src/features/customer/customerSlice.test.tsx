import customersReducer, { addCustomer, addCustomerItem, removeCustomer } from './customerSlice';
import { ICustomer } from './../../interfaces/customer.interface';

describe('customerSlice', () => {
    test('should add customer', () => {
        const customer: ICustomer = {
            id: 'sdafe2354',
            name: 'Tais',
            items: []
        };
        expect(customersReducer(
            { value: [] },
            addCustomer(customer)
        )).toEqual({ value: [customer] });
    });

    test('should add customer item', () => {
        const food1 = {
            customerId: 'sdafe2354',
            itemName: 'agua',
        };
        const food2 = {
            customerId: 'sdafe2354',
            itemName: 'sopa',
        };
        const customer: ICustomer = {
            id: 'sdafe2354',
            name: 'Tais',
            items: [food1.itemName]
        };
        const state = customersReducer(
            { value: [customer] },
            addCustomerItem(food2)
        );
        expect(state.value[0].items.length).toBe(2);
    });

    test('should not add customer item with worng id', () => {
        const food1 = {
            customerId: 'sdafe2354',
            itemName: 'agua',
        };
        const food2 = {
            customerId: 'sdafe23',
            itemName: 'sopa',
        };
        const customer: ICustomer = {
            id: 'sdafe2354',
            name: 'Tais',
            items: [food1.itemName]
        };
        const state = customersReducer(
            { value: [customer] },
            addCustomerItem(food2)
        );
        expect(state.value[0].items.length).toBe(1);
    });

    test('should remove customer', () => {
        const customer = {
            id: 'sdafe2354',
            name: 'Tais',
            items: []
        };
        const state = customersReducer(
            { value: [customer] },
            removeCustomer(customer.id)
        );
        expect(state.value.length).toBe(0);
    })
})