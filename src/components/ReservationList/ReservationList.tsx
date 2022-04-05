import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import ReservationCard from '../ReservationCard/ReservationCard';
import './style.css';

const ReservationList = () => {
    const reservations: string[] = useSelector((state: RootState) => state.reservations.value);

    return (
        <div className="reservation-cards-container">
            {reservations.map((name: string, index: number) => (
               <ReservationCard 
                    name={ name } 
                    index={ index }
                    key={ index } 
                />
            ))}
        </div>
    )
}

export default ReservationList