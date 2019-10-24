import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { PowerButton } from './svg/PowerButton';
import { ChannelButtonUp } from './svg/ChannelButtonUp';
import { ChannelButtonDown } from './svg/ChannelButtonDown';

const TerminalGrotesque = {};

const Button = styled.button`
  background: ${p => (p.on ? `linear-gradient(red, 65%, pink)` : `grey`)};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  height: 15px;
  margin-top: 10px;
  width: 15px;

  :focus {
    outline: none;
  }
`;
const Channel = styled.p`
  font-family: terminal-grotesque;
  user-select: none;
`;

const TextMarginless = styled.p`
  color: #fff;
  font-family: Helvetica;
  font-size: 14px;
  letter-spacing: 4px;
  font-weight: 700;
  margin: 28px 0 0 0;
  text-align: center;
  text-transform: uppercase;
  user-select: none;
`;

const Text = styled.p`
  color: #fff;
  font-family: Helvetica;
  font-size: 14px;
  letter-spacing: 4px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  user-select: none;
`;

const Wrapper = styled.div`
  align-items: center;
  background-color: transparent;
  display: flex;
  height: 120px;
  justify-content: space-around;
  position: absolute;
  width: 400px;
`;

const Controls = ({ toggleTVOn, tvOn }) => {
  const [channel, changeChannel] = useState(0);

  useEffect(() => {
    if (channel > 6) {
      changeChannel(1);
    } else if (channel < 1) {
      changeChannel(6);
    }
  }, [channel]);

  return (
    <Wrapper>
      <Button on={tvOn} />
      <div>
        <Text>power</Text>
        <PowerButton onClick={() => toggleTVOn(!tvOn)} />
      </div>
      <div>
        <TextMarginless>channel</TextMarginless>
        <ChannelButtonUp onClick={() => changeChannel(channel + 1)} />
        <ChannelButtonDown onClick={() => changeChannel(channel - 1)} />
      </div>
      <Channel>{channel}</Channel>
    </Wrapper>
  );
};
export default Controls;
