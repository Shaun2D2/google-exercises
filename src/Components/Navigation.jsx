import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { slideIn, slideOut } from './Animations';

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

const MenuSidebar = styled.div`
    position:fixed;
    width: 300px;
    height: 100vh;
    z-index: 10;
    background-color: #FFF;
    padding: 15px;
    box-shadow: 1px 0px 10px #CCC;
    left: -350px;
    top: 0px;

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
    display: none;
    &.enter {
      opacity: 0;
      display: block !important;
    }
    &.enter-done {
      opacity: .3 !important;
      display: block !important;
    }
    &.enter-active {
      opacity: .3 !important;
      transition: opacity 200ms;
      display: block !important;
    }
    &.exit {
      opacity: .3;
      display: block !important;
    }
    &.exit-active {
      opacity: 0;
      transition: opacity 200ms;
      display: block !important;
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
