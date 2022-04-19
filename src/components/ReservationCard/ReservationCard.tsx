import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { removeCustomer } from '../../features/customer/customerSlice';
import { removeReservation } from '../../features/reservation/reservationSlice';
import { IReservation } from './../../interfaces/reservation.interface';
import Card from '../../styleds/Card.styled';
import CardTitle from '../../styleds/CardTitle.styled';
import RemoveIconStyled from '../../styleds/RemoveIcon.styled';

const ReservationCard: FC<{reservation: IReservation}> = ({ reservation }) => {
  const dispatch = useDispatch();

  const handleRemoveReservation = (): void => {
    dispatch(removeReservation(reservation.id));
    dispatch(removeCustomer(reservation.id));
  }

  return (
    <Card $flexDirection='row'>
		<div className="flex-1">
			<CardTitle>{ reservation.name }</CardTitle>
		</div>
		<div className="flex-3">
			<RemoveIconStyled 
				data-testid="remove-reservation"
				onClick={ handleRemoveReservation }
			>X</RemoveIconStyled>
		</div>
	</Card>
  )
}

export default ReservationCard