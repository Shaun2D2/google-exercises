import React, { useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';

import { PALLET } from '../GlobalStyles';

const Home = () => {
  const history = useHistory();

  const handleClick = useCallback(() => history.push('/playground'));

  return (
    <Container>
      <Welcome>Welcome to Playground</Welcome>
      <CallToAction onClick={handleClick}>
        Click to Start
        {' '}
        <FontAwesomeIcon icon={faArrowRight} color={PALLET.imperialRed} />
      </CallToAction>

    </Container>
  );
};

const cursor = keyframes`
  0% {
    border-right: .5rem solid ${PALLET.imperialRed};
  }
  50% {
    border-right: .5rem solid white;
  }
  100% {
    border-right: .5rem solid ${PALLET.imperialRed};
  }
`;

const typing = keyframes`
    0% { max-width: 0% }
    100% { max-width: 100% }
`;

const fadeIn = keyframes`
    0% { opacity: 0 }
    100% { opacity: 1}
`;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Welcome = styled.h1`
    font-size: 3.5em;
    padding-right: .5rem;
    overflow: hidden;
    white-space: nowrap;
    animation: ${cursor} ease-in 1s infinite, ${typing} 3.5s steps(40, end);
    margin-top: 0px;
`;

const CallToAction = styled.a`
    margin-top: 1.5rem;
    font-size: 2rem;
    opacity: 0;
    animation: ${fadeIn} .3s;
    animation-delay: 2s;
    animation-fill-mode: forwards;
    cursor: pointer;
    transition: color .5s;
    svg {
      opacity: 1;
      transform: translateX(0px);
      transition: transform 1s, opacity 1s;
    }
    &:hover {
      color: ${PALLET.imperialRed};
      svg{
        opacity: 0;
        transform: translateX(200px);
        transition: transform 1s, opacity 1s;
      }        
    }
`;

export default Home;
