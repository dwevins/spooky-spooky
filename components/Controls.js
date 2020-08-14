import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { PowerButton } from './svg/PowerButton';
import { ChannelButtonUp } from './svg/ChannelButtonUp';
import { ChannelButtonDown } from './svg/ChannelButtonDown';

const Button = styled.button`
  background: ${p => (p.on ? `linear-gradient(red, 65%, pink)` : `grey`)};
  border: none;
  border-radius: 50%;
  box-shadow: ${p => (p.on ? `0 0 15px 5px rgba(255, 0, 0, 0.4)` : `none`)};
  cursor: ${p => (p.on ? `pointer` : `default`)};
  height: 15px;
  margin-top: 10px;
  width: 15px;

  :focus {
    outline: none;
  }
`;
const Channel = styled.p`
  bottom: 135px;
  color: cyan;
  font-family: terminal-grotesque;
  font-size: 60px;
  position: absolute;
  right: 50px;
  text-shadow: 0 0 16px cyan;
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
  width: 100%;
`;

const Controls = ({ jumpScare, setJumpScare, toggleTVOn, tvOn }) => {
  const [channel, changeChannel] = useState(0);

  const display = ['4', '8', '15', '16', '23', '42'];

  const url = 'http://65.105.181.42:9000';
  const request = {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrer: 'no-referrer',
    body: JSON.stringify(channel)
  };

  useEffect(() => {
    if (channel > 5) {
      changeChannel(0);
    } else if (channel < 0) {
      changeChannel(5);
    }
  }, [channel]);

  return (
    <Wrapper>
      <Button
        onClick={() => {
          () => fetch(url, request);
          () => setJumpScare(!jumpScare);
          console.log('jumpScare', jumpScare);
        }}
        on={tvOn}
      />
      <div>
        <Text>power</Text>
        <PowerButton onClick={() => toggleTVOn(!tvOn)} />
      </div>
      <div>
        <TextMarginless>channel</TextMarginless>
        <ChannelButtonUp onClick={() => changeChannel(channel + 1)} />
        <ChannelButtonDown onClick={() => changeChannel(channel - 1)} />
      </div>
      {tvOn && <Channel>{display[channel]}</Channel>}
    </Wrapper>
  );
};
export default Controls;
