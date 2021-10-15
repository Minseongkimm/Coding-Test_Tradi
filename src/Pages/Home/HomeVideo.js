import React from 'react';
import styled from 'styled-components';
import Cheers from './Video/Cheers.mp4';

function HomeVideo() {
  return (
    <>
      <Video
        autoPlay
        muted
        loop
        src={Cheers}
        type="video/mp4"
        className="mainVideo"
      />
    </>
  );
}

const Video = styled.video`
  position: fixed;
  width: 87rem;
`;

export default HomeVideo;
