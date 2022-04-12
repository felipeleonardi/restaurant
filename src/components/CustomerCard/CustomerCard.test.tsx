import { screen, render, fireEvent } from '@testing-library/react';
import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import CustomerCard from './CustomerCard';
import '@testing-library/jest-dom'
import { ICustomer } from './../../interfaces/customer.interface';

const MockCustomerCard: FC<{ customer: ICustomer }> = ({ customer }) => (
  <React.StrictMode>
    <Provider store={store}>
        <CustomerCard customer={customer} />
    </Provider>
  </React.StrictMode>
)

describe('CustomerCard', () => {
  test('It should mount', async () => {
    const customer = {
      id: 'sdafe2354',
      name: 'Tais',
      items: []
    };
    render(<MockCustomerCard customer={customer} />);
    const customerCardElement = await screen.findByTestId(`CustomerCard-${customer.id}`);
    expect(customerCardElement).toBeInTheDocument();
  });

  test('should add item', () => {
    const customer = {
      id: 'sdafe2354',
      name: 'Tais',
      items: []
    };
    render(<MockCustomerCard customer={customer} />);
    const inputElement = screen.getByPlaceholderText('add food');
    const buttonElement = screen.getByTestId('add-item');
    fireEvent.click(inputElement);
    fireEvent.change(inputElement, {
      target: {
        value: 'melancia'
      }
    });
    fireEvent.click(buttonElement);
    expect(inputElement.getAttribute('value')).toBe('');
  });

  test('should already have itens', async () => {
    const customer = {
      id: 'sdafe2354',
      name: 'Tais',
      items: ['water', 'soup']
    };
    render(<MockCustomerCard customer={customer} />);
    const itensElement = await screen.findAllByTestId('customer-items');
    expect(itensElement.length).toBe(2);
  });

  test('should not add items', async () => {
    const customer = {
      id: 'sdafe2354',
      name: 'Tais',
      items: []
    };
    render(<MockCustomerCard customer={customer} />);
    const buttonElement = screen.getByTestId('add-item');
    const itensElement = screen.queryAllByTestId('customer-items');
    fireEvent.click(buttonElement);
    expect(itensElement.length).toBe(0);
  });
})