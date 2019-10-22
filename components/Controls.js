import styled from 'styled-components';

const Button = styled.button`
  background: red;
  border: 1px solid red;
  border-radius: 50%;
  cursor: pointer;
  height: 30px;
  margin-top: 10px;
  width: 30px;
`;

const Wrapper = styled.div`
  background-color: black;
  display: flex;
  height: 120px;
  justify-content: center;
  position: absolute;
  right: -85px;
  top: 0px;
  width: 60px;
`;

const Controls = () => (
  <Wrapper>
    <Button onClick={() => console.log('click')} />
  </Wrapper>
);

export default Controls;
