import styled from 'styled-components';

import Controls from './Controls';

const Frame = styled.div`
  background: radial-gradient(#888888, #252e25);
  border-color: #2d372f;
  border-style: solid;
  border-width: 50px 50px 150px 50px;
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

const TVFrame = ({ children, toggleTVOn, tvOn }) => (
  <Room>
    <Frame>
      {children}
      <Controls toggleTVOn={toggleTVOn} tvOn={tvOn} />
    </Frame>
  </Room>
);

export default TVFrame;
