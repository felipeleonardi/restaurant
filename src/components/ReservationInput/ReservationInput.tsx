import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addReservation } from '../../features/reservation/reservationSlice';
import './ReservationInput.css';

const ReservationInput = () => {
    const dispatch = useDispatch();

    const [reservationNameInput, setReservationNameInput] = useState('');

    const handleAddReservations = (): void => {
        if (reservationNameInput.length === 0) return;
        dispatch(addReservation(reservationNameInput));
        setReservationNameInput('');
    }
    
    return (
        <div 
            className="reservation-input-container" 
            data-testid="ReservationInput"
        >
            <input 
                value={ reservationNameInput }
                onChange={ (e: ChangeEvent<HTMLInputElement>) => setReservationNameInput(e.target.value) }
            />
            <button onClick={handleAddReservations}>Add</button>
        </div>
    )
}

export default ReservationInput;