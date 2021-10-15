import React from 'react';
import styled from 'styled-components';
import BeerHouseLogo from '../Logo/BeerHouseLogo.png';
import { Link } from 'react-router-dom';

function NavLogo() {
  return (
    <Link to="/home">
      <Logo src={BeerHouseLogo} />
    </Link>
  );
}

const Logo = styled.img`
  width: 5.5rem;
  height: 6rem;
`;

export default NavLogo;
