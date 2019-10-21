import styled from 'styled-components';

const Border = styled.div`
  width: ${p => p.screenwidth}px;
`;

const Wall = styled.div`
  display: inline-block;
  margin: 0 auto;
`;

const Room = ({ children, screenwidth }) => (
  <Border screenwidth={screenwidth}>
    <Wall>{children}</Wall>
  </Border>
);

export default Room;
