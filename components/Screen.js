import styled from 'styled-components';

const VisibleScreen = styled.div`
  background-color: #32ce97;
  border: 1px solid #32ce97;
  border-radius: 45px;
  overflow: hidden;
  padding-bottom: 75%;
`;

const Wrapper = styled.div`
  background: #808080;
  width: ${p => p.screenwidth * 0.6}px;
`;

const Screen = ({ screenwidth }) => (
  <Wrapper screenwidth={screenwidth}>
    <VisibleScreen />
  </Wrapper>
);

export default Screen;
