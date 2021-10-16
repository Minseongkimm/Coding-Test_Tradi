import React from 'react';
import HomeVideo from './HomeVideo';
import HomeText from './HomeText';
import styled from 'styled-components';

const Home = () => {
  return (
    <>
      <HomeWrapper>
        <HomeVideo />
        <HomeText />
      </HomeWrapper>
    </>
  );
};

const HomeWrapper = styled.div``;

export default Home;
