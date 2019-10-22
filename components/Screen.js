import styled from 'styled-components';

const VisibleScreen = styled.div`
  background-color: purple;
  overflow: hidden;
  padding-bottom: 75%;
`;

const Wrapper = styled.div`
  width: ${p => p.screenwidth * 0.4}px;
`;

const Screen = ({ screenwidth }) => (
  <Wrapper screenwidth={screenwidth}>
    <VisibleScreen />
  </Wrapper>
);

export default Screen;
