import { useState } from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import { JumpScare, TVFrame } from '../components';
import { useWindowSize } from '../utils/useWindowSize';
import { Flicker } from '../utils/Flicker';

const AnimationWrapper = styled.div`
  animation: ${Flicker} 5s ease-in-out 0s infinite;
  height: 100%;
  left: 0;
  opacity: ${p => (p.tvOn ? `1` : `0`)};
  position: absolute;
  top: 0;
  width: 100%;
`;

const ScreenWithoutSSR = dynamic(() => import('../components/Screen'), {
  ssr: false
});

const Index = () => {
  const size = useWindowSize();
  const [tvOn, toggleTVOn] = useState(false);
  const [jumpScare, setJumpScare] = useState(false);

  return (
    <TVFrame
      jumpScare={jumpScare}
      setJumpScare={setJumpScare}
      toggleTVOn={toggleTVOn}
      tvOn={tvOn}
    >
      <AnimationWrapper tvOn={tvOn} />
      <ScreenWithoutSSR screenwidth={size.width} tvOn={tvOn} />
      {jumpScare && <JumpScare />}
    </TVFrame>
  );
};

export default Index;
