import { useDispatch } from 'react-redux';
import { removeReservation } from '../../features/reservation/reservationSlice';
import { IReservationCard } from '../../interfaces/reservation-card.interface';
import './style.css';

const ReservationCard = ({ name, index }: IReservationCard) => {
  const dispatch = useDispatch();

  const handleRemoveReservation = (): void => {
    dispatch(removeReservation(index))
  }

  return (
    <>
      <div className="reservation-card-container">
        { name }
      </div>
      <p 
        className='card-remove'
        onClick={ handleRemoveReservation }
      >X</p>
    </>
  )
}

export default ReservationCard