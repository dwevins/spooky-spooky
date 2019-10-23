import styled from 'styled-components';
import { Flicker } from '../utils/Flicker';

const AnimationWrapper = styled.div`
  animation: ${Flicker} 5s ease-in-out 0s infinite;
  height: 100%;
  left: 0;
  opacity: ${p => (p.tvOn ? `1` : `0`)};
  position: absolute;
  top: 0;
  width: 100%;
`;
const VisibleScreen = styled.div`
  background-color: #32ce97;
  border-color: black;
  border-radius: 80px;
  border-style: solid;
  border-width: 1px;
  box-shadow: inset 0 0 5px 5px #252e25;
  opacity: 1;
  overflow: hidden;
  padding-bottom: 75%;
  z-index: 1;
`;

const Wrapper = styled.div`
  background: radial-gradient(#888888, #252e25);
  padding: 10px;
  position: relative;
  width: ${p =>
    p.screenwidth > `1000` ? p.screenwidth * 0.55 : p.screenwidth * 0.9}px;
`;

const Screen = ({ screenwidth, tvOn }) => (
  <Wrapper screenwidth={screenwidth}>
    <VisibleScreen />
    <AnimationWrapper tvOn={tvOn} />
  </Wrapper>
);

export default Screen;
