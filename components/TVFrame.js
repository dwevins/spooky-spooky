import styled from 'styled-components';

const Frame = styled.div`
  border-color: red;
  border-style: solid;
  border-width: 30px 80px 30px 30px;
  display: inline-block;
`;

const TVFrame = ({ children }) => <Frame>{children}</Frame>;

export default TVFrame;
