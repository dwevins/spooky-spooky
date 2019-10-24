import styled from 'styled-components';

const Player = styled.iframe`
  border-color: black;
  border-radius: 40px;
  border-style: solid;
  border-width: 1px;
  box-shadow: inset 0 0 5px 5px #252e25;
  height: ${p => p.screenwidth * 0.5 * 0.75}px;
  opacity: ${p => (p.tvOn ? 1 : 0)};
  overflow: hidden;
  width: ${p => p.screenwidth * 0.5}px;
  z-index: 10;
`;

const Screen = ({ screenwidth, tvOn }) => (
  <Player
    frameBorder="0"
    screenwidth={screenwidth}
    src="https://player.twitch.tv/?channel=dcastkid&autoplay=1&muted=1"
    tvOn={tvOn}
  />
);

export default Screen;
