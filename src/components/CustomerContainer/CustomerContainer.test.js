import { render, screen } from '@testing-library/react';
import CustomerContainer from './CustomerContainer';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import * as redux from 'react-redux';

const MockCustomerContainer = () => (
	<Provider store={store}>
		<CustomerContainer />
	</Provider>
);


describe('CustomerContainer', () => {
	test('It should mount', async () => {
		render(<MockCustomerContainer />);
		const customerContainerElement = await screen.findByTestId('customer-container');
		expect(customerContainerElement).toBeInTheDocument();
	});

	test('should list customers', async () => {
		const spy = jest.spyOn(redux, 'useSelector');
		spy.mockReturnValue([
			{
				id: 'sdafe2354',
				name: 'Tais',
				items: []
			}
		]);
		render(<MockCustomerContainer />);
		const customersElement = await screen.findAllByTestId(/CustomerCard-/i);
		expect(customersElement.length).toBe(1);
	})
})