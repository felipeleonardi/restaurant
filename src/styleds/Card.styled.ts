import tw from 'tailwind-styled-components';
import { ICardProps } from '../interfaces/card-props.interface';

const Card = tw.div<ICardProps>`
    flex
    rounded-lg
    p-2
    mb-2
    mt-2
    bg-white shadow-lg
    font-bold
    ${props => props.$flexDirection === 'col' ? 'flex-col' : 'flex-row'}
`;

Card.defaultProps = {
    $flexDirection: 'col'
};

export default Card;