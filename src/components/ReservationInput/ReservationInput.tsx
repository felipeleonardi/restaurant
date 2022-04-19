import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addReservation } from '../../features/reservation/reservationSlice';
import { IReservation } from './../../interfaces/reservation.interface';
import { addCustomer } from '../../features/customer/customerSlice';
import InputStyled from '../../styleds/Input.styled';
import ButtonStyled from '../../styleds/Button.styled';

const ReservationInput = () => {
    const dispatch = useDispatch();
    const defaultReservation: IReservation = {
        id: (Math.random() * 10).toString(),
        name: ''
    };
    const [reservation, setReservation] = useState<IReservation>(defaultReservation);

    const handleAddReservations = (): void => {
        if (reservation.name.length === 0) return;
        dispatch(addReservation(reservation));
        dispatch(addCustomer({
            id: reservation.id,
            name: reservation.name,
            items: [],
        }));
        setReservation(defaultReservation);
    }
    
    return (
        <div 
            className="w-full py-2" 
            data-testid="reservation-input"
        >
            <InputStyled
                type="text"
                placeholder='name of the client'
                value={ reservation.name }
                onChange={ (e: ChangeEvent<HTMLInputElement>) => setReservation({...reservation, name: e.target.value}) }
            />
            <ButtonStyled onClick={handleAddReservations}>Add</ButtonStyled>
        </div>
    )
}

export default ReservationInput;