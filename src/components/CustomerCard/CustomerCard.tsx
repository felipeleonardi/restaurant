import { FC, useState, ChangeEvent } from 'react';
import { ICustomer } from '../../interfaces/customer.interface';
import './CustomerCard.css';
import { useDispatch } from 'react-redux';
import { addCustomerItem } from '../../features/customer/customerSlice';

const CustomerCard: FC<{customer: ICustomer}> = ({ customer }) => {
    const dispatch = useDispatch();
    const [item, setItem] = useState<string>('');

    const handleAddItem = (): void => {
        if (item.length === 0) return;
        dispatch(addCustomerItem({
            customerId: customer.id,
            itemName: item,
        }));
        setItem('');
    }

    return (
        <div 
            className="customer-food-card-container" 
            key={ customer.id }
            data-testid={ `CustomerCard-${ customer.id }` }
        >
            <p>{ customer.name }</p>
            <div className="customer-foods-container">
                <div className="customer-food" key={ `food-${customer.id}` }>
                    {customer.items.map((item: string, index: number) => <p data-testid="customer-items" key={ `item-${index}` }>{ item }</p>)}
                </div>
                <div className="customer-food-input-container">
                    <input 
                        type="text"
                        value={ item }
                        placeholder="add food"
                        onChange={ (e: ChangeEvent<HTMLInputElement>) => setItem(e.target.value) }
                    />
                    <button data-testid="add-item" onClick={ handleAddItem } >Add</button>
                </div>
            </div>
        </div>
    )
}

export default CustomerCard;