import React from 'react';
import styled from 'styled-components';
import NavLogo from './NavLogo';
import NavMenu from './NavMenu';

function Nav() {
  return (
    <Background>
      <NavWrapper>
        <NavLogo />
        <NavMenu />
      </NavWrapper>
    </Background>
  );
}

const Background = styled.div`
  position: fixed;
  padding: 0 5rem;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;
  background-color: #000;
  opacity: 0.7;
  z-index: 100;
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Nav;
