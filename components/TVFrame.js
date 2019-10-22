import styled from 'styled-components';

import Controls from './Controls';
import { Flicker } from '../utils/Flicker';

const Frame = styled.div`
  border-color: #2d372f;
  border-style: solid;
  border-width: 50px 100px 50px 50px;
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

const Wrapper = styled.div`
  animation: ${Flicker} 5s ease-in-out 0s infinite;
`;

const TVFrame = ({ children }) => (
  <Room>
    <Wrapper>
      <Frame>
        {children}
        <Controls />
      </Frame>
    </Wrapper>
  </Room>
);

export default TVFrame;
