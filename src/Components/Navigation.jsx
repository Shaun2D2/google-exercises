import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styled, { keyframes } from 'styled-components';

const Navigation = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <HamburgerWrapper onClick={handleClick}>
        <FontAwesomeIcon icon={faBars} size="2x" />
      </HamburgerWrapper>
      <CSSTransition in={open} timeout={300}>
        <MenuBackdrop onClick={handleClick} />
      </CSSTransition>

      <CSSTransition in={open} timeout={500}>
        <MenuSidebar>
          <MenuBrand>Playground</MenuBrand>
        </MenuSidebar>
      </CSSTransition>
    </>
  );
};

const slideIn = keyframes`
    0% { left: -350px }
    100% { left: 0px }
`;

const slideOut = keyframes`
    0% { left: 0px }
    100% { left: -350px }
`;

/**
 * need to look over this animation, does not run super well
 * 
 */
const MenuSidebar = styled.div`
    position:fixed;
    width: 300px;
    height: 100vh;
    z-index: 10;
    background-color: #FFF;
    padding: 15px;
    box-shadow: 1px 0px 10px #CCC;
    left: -350px;

    &.enter-active {
      animation: ${slideIn} .5s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    &.enter-done {
      left: 0;
    }

    &.exit-active {
      animation: ${slideOut} .5s cubic-bezier(0.075, 0.82, 0.165, 1);;
    }
`;

const MenuBrand = styled.h1`
    text-align: center;
`;

const fadeIn = keyframes`
    0% { background-color: transparent }
    100% { background-color: #000 }
`;

const fadeOut = keyframes`
    0% { background-color: #000 }
    100% { background-color: transparent }
`;

const MenuBackdrop = styled.div`
    position: fixed;
    top: 0px;
    bottom: 0px;
    right: 0px;
    left: 0px;
    background-color: #000;
    opacity: 0;
    transition: opacity .2s;
    z-index: 2;
    width: 100%;
    transition: background-color .3s;

    /* animation: ${({ state }) => (state === 'exiting' ? fadeOut : fadeIn)} ease-in .2s; */
    // enter from

    // enter to
    &.enter {
      opacity: 0;
    }

    &.enter-done {
      opacity: .3 !important;
    }

    &.enter-active {
      opacity: .3 !important;
      transition: opacity 200ms;
    }

    // exit from
    &.exit {
      opacity: .3;
    }

    // exit to 
    &.exit-active {
      opacity: 0;
      transition: opacity 200ms;
    }

    &.exit-done {
      display:none;
    }
`;

const HamburgerWrapper = styled.div`
    position: fixed;
    left: 1.5rem;
    top: 1.5rem;
    cursor: pointer;
    padding: 1rem;
`;

export default Navigation;
