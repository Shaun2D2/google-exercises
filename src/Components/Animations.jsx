import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
    0% { background-color: transparent }
    100% { background-color: #000 }
`;

export const fadeOut = keyframes`
    0% { background-color: #000 }
    100% { background-color: transparent }
`;

export const slideIn = keyframes`
    0% { left: -350px }
    100% { left: 0px }
`;

export const slideOut = keyframes`
    0% { left: 0px }
    100% { left: -350px }
`;
