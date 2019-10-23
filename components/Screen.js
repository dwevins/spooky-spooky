import styled from 'styled-components';

const Player = styled.iframe`
  border-color: black;
  border-radius: 80px;
  border-style: solid;
  border-width: 1px;
  box-shadow: inset 0 0 5px 5px #252e25;
  height: ${p => p.screenwidth * 0.5 * 0.75}px;
  opacity: 1;
  overflow: hidden;
  width: ${p => p.screenwidth * 0.5}px;
  z-index: 10;
`;

const Wrapper = styled.div`
  background: radial-gradient(#888888, #252e25);
  padding: 10px;
  position: relative;
  width: ${p =>
    p.screenwidth > `1000` ? p.screenwidth * 0.55 : p.screenwidth * 0.9}px;
`;

const Screen = ({ screenwidth }) => (
  <Player
    frameBorder="0"
    screenwidth={screenwidth}
    src="https://player.twitch.tv/?channel=dcastkid&autoplay=1&muted=1"
  />
);

export default Screen;
