import ReservationList from '../ReservationList/ReservationList';
import ReservationInput from './../ReservationInput/ReservationInput';
import './style.css';

const ReservationContainer = () => {

    return (
        <div className="reservation-container">
            <div>
                <h5 className="reservation-header">Reservations</h5>
                <ReservationList />
            </div>
            <ReservationInput />
        </div>
    )
}

export default ReservationContainer