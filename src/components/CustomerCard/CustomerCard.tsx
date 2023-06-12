import { FC, useState, ChangeEvent } from 'react';
import { ICustomer } from '../../interfaces/customer.interface';
import { useDispatch } from 'react-redux';
import { addCustomerItem } from '../../features/customer/customerSlice';
import Card from '../../styleds/Card.styled';
import CardTitle from '../../styleds/CardTitle.styled';
import InputStyled from '../../styleds/Input.styled';

const CustomerCard: FC<{customer: ICustomer}> = ({ customer }) => {
    const dispatch = useDispatch();
    const [item, setItem] = useState<string>('');

    const handleAddItem = (e: any): void => {
        if (item.length === 0 || e.key !== 'Enter') return;
        dispatch(addCustomerItem({
            customerId: customer.id,
            itemName: item,
        }));
        setItem('');
    }

    return (
        <Card
            key={ customer.id }
            data-testid={ `CustomerCard-${ customer.id }` }
        >
            <CardTitle>{ customer.name }</CardTitle>
            <div>
                <div className='flex flex-row flex-wrap' key={ `food-${customer.id}` }>
                    {customer.items.map((item: string, index: number) => (
                        <div className='px-1 py-1 bg-slate-400 text-white rounded-md mr-2 mb-2' key={index}>
                            <p
                                data-testid="customer-items" 
                                key={ `item-${index}` }
                            >{ item }</p>
                        </div>
                    ))}
                </div>
                <div className='w-2/4 mr-0 ml-auto'>
                    <InputStyled 
                        type="text"
                        value={ item }
                        placeholder="enter to add food"
                        onChange={ (e: ChangeEvent<HTMLInputElement>) => setItem(e.target.value) }
                        onKeyDown={handleAddItem}
                    />
                </div>
            </div>
        </Card>
    )
}

export default CustomerCard;