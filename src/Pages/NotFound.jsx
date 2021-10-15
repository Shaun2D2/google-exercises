import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PALLET } from '../GlobalStyles';

const NotFound = () => (
  <NotFoundWrapper>
    <NotFoundMessage>
      <h1>404 Not Found</h1>
      <p>
        oh good!  We found you!
        <Link to="/">Click here</Link>
        {' '}
        to go home.
        {' '}
      </p>
    </NotFoundMessage>
  </NotFoundWrapper>
);

const NotFoundMessage = styled.div`
    padding-left: 1.5rem;
    border-left: 5px solid ${PALLET.imperialRed};
`;

const NotFoundWrapper = styled.div`
    display: flex;
    flex-direction: center;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
`;

export default NotFound;
