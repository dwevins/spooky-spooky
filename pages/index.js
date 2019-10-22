import { useState } from 'react';
import { Screen, TVFrame } from '../components';
import { useWindowSize } from '../utils/useWindowSize';

const Index = () => {
  const size = useWindowSize();
  const [tvOn, toggleTVOn] = useState(false);

  return (
    <TVFrame toggleTVOn={toggleTVOn} tvOn={tvOn}>
      <Screen screenwidth={size.width} tvOn={tvOn} />
    </TVFrame>
  );
};

export default Index;
