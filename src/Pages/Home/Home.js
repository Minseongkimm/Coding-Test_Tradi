import React from 'react';
import Nav from '../../Components/Nav/Nav';
import HomeVideo from './HomeVideo';
import HomeText from './HomeText';
import styled from 'styled-components';

const Home = () => {
  return (
    <>
      <Nav />
      <HomeWrapper>
        <HomeVideo />
        <HomeText />
      </HomeWrapper>
    </>
  );
};

const HomeWrapper = styled.div``;

export default Home;
