import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styled, { keyframes } from 'styled-components';

const Navigation = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);

  return (
    <>
      <HamburgerWrapper onClick={handleClick}>
        <FontAwesomeIcon icon={faBars} size="2x" />
      </HamburgerWrapper>
      {open && (
      <>
        <MenuWrapper>
          <MenuBackdrop onClick={handleClick} />
          <MenuSidebar>
            <MenuBrand>Playground</MenuBrand>
          </MenuSidebar>
        </MenuWrapper>
      </>
      )}
    </>
  );
};

const MenuWrapper = styled.div`
    z-index: 1;
`;

const slideIn = keyframes`
    0% { left: -300px }
    100% { left: 0 }
`;

const MenuSidebar = styled.div`
    position:fixed;
    width: 300px;
    height: 100vh;
    z-index: 10;
    animation: .4s ease-in-out ${slideIn}; 
    background-color: #FFF;
    padding: 15px;
    box-shadow: 1px 0px 10px #CCC;
`;

const MenuBrand = styled.h1`
    text-align: center;
`;

const fadeIn = keyframes`
    0% { background-color: transparent }
    100% { background-color: #000 }
`;

const MenuBackdrop = styled.div`
    position: fixed;
    top: 0px;
    bottom: 0px;
    right: 0px;
    left: 0px;
    background-color: #000;
    opacity: .3;
    z-index: 2;
    width: 100%;
    transition: background-color .3s;
    animation: ${fadeIn} ease-in .2s;
`;

const HamburgerWrapper = styled.div`
    position: fixed;
    left: 1.5rem;
    top: 1.5rem;
    cursor: pointer;
    padding: 1rem;
`;

export default Navigation;
