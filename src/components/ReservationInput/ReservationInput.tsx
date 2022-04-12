import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addReservation } from '../../features/reservation/reservationSlice';
import './ReservationInput.css';
import { IReservation } from './../../interfaces/reservation.interface';
import { addCustomer } from '../../features/customer/customerSlice';

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
            className="reservation-input-container" 
            data-testid="reservation-input"
        >
            <input 
                value={ reservation.name }
                onChange={ (e: ChangeEvent<HTMLInputElement>) => setReservation({...reservation, name: e.target.value}) }
            />
            <button onClick={handleAddReservations}>Add</button>
        </div>
    )
}

export default ReservationInput;