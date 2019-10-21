import styled from 'styled-components';

const Wrapper = styled.div`
  width: 500px;
`;
const VisibleScreen = styled.div`
  background-color: purple;
  height: 0;
  overflow: hidden;
  padding-bottom: 75%;
`;

const Screen = () => (
  <Wrapper>
    <VisibleScreen />
  </Wrapper>
);

export default Screen;
