import styled from 'styled-components';

import Controls from './Controls';

const Frame = styled.div`
  box-shadow: 0 50px 100px 10px rgba(255, 255, 255, 0.6),
    0 100px 50px 10px rgba(255, 255, 255, 0.75);
  border-color: #2d372f;
  border-style: solid;
  border-width: 30px 80px 30px 30px;
  display: inline-block;
  margin: 0 auto;
  position: relative;
`;

const Room = styled.div`
  height: 100vh;
  width: 100vw;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const TVFrame = ({ children }) => (
  <Room>
    <Frame>
      {children}
      <Controls />
    </Frame>
  </Room>
);

export default TVFrame;
