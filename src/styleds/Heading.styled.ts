import tw from 'tailwind-styled-components';
import { IHeadingProps } from './../interfaces/heading-props.interface';

const HeadingStyled = tw.h4<IHeadingProps>`
    font-medium
    leading-tight
    text-2xl
    text-center
    ${props => props.textWhite ? 'text-white' : ''}
`;

export default HeadingStyled;