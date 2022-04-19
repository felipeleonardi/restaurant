import CustomerCard from '../CustomerCard';
import { ICustomer } from './../../interfaces/customer.interface';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import CustomerWrapper from './../../styleds/CustomerWrapper.styled';

const CustomerContainer = () => {
    const customers: ICustomer[] = useSelector(
        (state: RootState) => state.customers.value
    );
    return (
        <CustomerWrapper data-testid="customer-container">
            {customers.map((customer: ICustomer) => (
                <CustomerCard customer={ customer } key={`customer-card-${customer.id}`}/>
            ))}
        </CustomerWrapper>
    )
}

export default CustomerContainer;