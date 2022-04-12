import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import ReservationCard from '../ReservationCard/ReservationCard';
import { IReservation } from './../../interfaces/reservation.interface';
import './style.css';

const ReservationList = () => {
    const reservations: IReservation[] = useSelector((state: RootState) => state.reservations.value);

    return (
        <div className="reservation-cards-container" data-testid="reservation-list">
            {reservations.map((reservation: IReservation) => (
               <ReservationCard reservation={ reservation } key={`ReservationCard-${reservation.id}`} />
            ))}
        </div>
    )
}

export default ReservationList