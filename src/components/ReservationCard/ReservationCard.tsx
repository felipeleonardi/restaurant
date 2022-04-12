import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { removeCustomer } from '../../features/customer/customerSlice';
import { removeReservation } from '../../features/reservation/reservationSlice';
import { IReservation } from './../../interfaces/reservation.interface';
import './style.css';

const ReservationCard: FC<{reservation: IReservation}> = ({ reservation }) => {
  const dispatch = useDispatch();

  const handleRemoveReservation = (): void => {
    dispatch(removeReservation(reservation.id));
    dispatch(removeCustomer(reservation.id));
  }

  return (
    <div 
      data-testid={ `reservation-${reservation.id}` } 
      key={ reservation.id }
    >
      <div className="reservation-card-container">
        { reservation.name }
      </div>
      <p 
        className='card-remove'
        data-testid="remove-reservation"
        onClick={ handleRemoveReservation }
      >X</p>
    </div>
  )
}

export default ReservationCard