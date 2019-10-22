import styled from 'styled-components';

const Frame = styled.div`
  border-color: red;
  border-style: solid;
  border-width: 30px 80px 30px 30px;
  display: inline-block;
  margin: 0 auto;
`;

const Room = styled.div`
  display: flex;
`;

const TVFrame = ({ children }) => (
  <Room>
    <Frame>{children}</Frame>
  </Room>
);

export default TVFrame;
