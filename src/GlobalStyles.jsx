import { createGlobalStyle } from 'styled-components';

export const PALLET = {
  imperialRed: '#E63946',
  honeyDew: '#F1FAEE',
  powderBlue: '#A8DADC',
  celadonBlue: '#457B9D',
  prussianBlue: '#1D3557',
  mintCream: '#F1F9F8',
  white: '#F8FCFC',
};

const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${PALLET.mintCream};
        font-family: 'Roboto', sans-serif;
        margin: 0;
    }

    h1, h2, h3, h4, h5 {
        font-family: 'Open Sans', sans-serif;
    }
`;

export default GlobalStyles;
