// import React, { useState } from 'react';
import styled from 'styled-components';

function Nav() {
  return (
    <>
      <Wrapper></Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background: rgba(0, 0, 0, 0.8);
  z-index: 900;
`;

export default Nav;
