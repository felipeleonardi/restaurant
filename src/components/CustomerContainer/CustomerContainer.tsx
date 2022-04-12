import CustomerCard from '../CustomerCard';
import './CustomerContainer.css';
import { ICustomer } from './../../interfaces/customer.interface';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

const CustomerContainer = () => {
    const customers: ICustomer[] = useSelector(
        (state: RootState) => state.customers.value
    );
    return (
        <div className="customer-food-container" data-testid="customer-container">
            {customers.map((customer: ICustomer) => (
                <CustomerCard customer={ customer } key={`customer-card-${customer.id}`}/>
            ))}
        </div>
    )
}

export default CustomerContainer;