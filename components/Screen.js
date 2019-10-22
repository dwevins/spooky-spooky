import styled from 'styled-components';

const VisibleScreen = styled.div`
  background-color: #32ce97;
  border: 1px solid #32ce97;
  border-radius: 45px;
  opacity: 1;
  overflow: hidden;
  padding-bottom: 75%;
  z-index: 1;
`;

const Wrapper = styled.div`
  background: #252e25;
  width: ${p => p.screenwidth * 0.5}px;
`;

const Screen = ({ screenwidth }) => (
  <Wrapper screenwidth={screenwidth}>
    <VisibleScreen />
  </Wrapper>
);

export default Screen;
