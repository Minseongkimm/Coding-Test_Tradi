import React from 'react';
import styled from 'styled-components';

const HomeText = () => {
  return (
    <Slogan>
      <Slogan1>15% off for first order</Slogan1>
      <Slogan2>until October 30st </Slogan2>
    </Slogan>
  );
};

const Slogan = styled.span`
  font-weight: 800;
  z-index: 99999;
`;

const Slogan1 = styled.span`
  position: absolute;
  top: 70%;
  left: 10%;
  font-size: 4.5rem;
  @media (max-width: 900px) {
    font-size: 3.5rem;
  }
  @media (max-width: 700px) {
    font-size: 2.5rem;
  }
  color: white;
`;
const Slogan2 = styled.span`
  position: absolute;
  top: 82%;
  left: 10%;
  font-size: 4rem;
  @media (max-width: 900px) {
    font-size: 3rem;
  }
  @media (max-width: 700px) {
    font-size: 2rem;
  }
  color: orange;
`;

export default HomeText;
