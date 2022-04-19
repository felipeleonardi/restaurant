import ReservationList from '../ReservationList/ReservationList';
import ReservationInput from './../ReservationInput/ReservationInput';
import ReservationWrapper from './../../styleds/ReservationWrapper.style';

const ReservationContainer = () => {
    return (
        <ReservationWrapper>
            <ReservationInput />
            <ReservationList />
        </ReservationWrapper>
    )
}

export default ReservationContainer