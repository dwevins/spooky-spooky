import { Screen, TVFrame } from '../components';
import { useWindowSize } from '../utils/useWindowSize';

const Index = () => {
  const size = useWindowSize();

  return (
    <TVFrame>
      <Screen screenwidth={size.width} />
    </TVFrame>
  );
};

export default Index;
