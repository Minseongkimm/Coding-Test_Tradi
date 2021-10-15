import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavMenu = () => {
  return (
    <Wrapper>
      <Menu to="/story">Story</Menu>
      <Menu to="/beerlist">BeerList</Menu>
      <Menu to="/about">About</Menu>
      <Menu to="Help">Help</Menu>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: 3.3rem 1.25rem 1.1rem;
  line-height: 1rem;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.07rem;
`;

const Menu = styled(Link)`
  margin-left: 2.5rem;
`;

export default NavMenu;
