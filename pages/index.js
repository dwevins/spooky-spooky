import { Screen, TVFrame } from '../components';
import { useWindowSize } from '../hooks/useWindowSize';

const Index = () => {
  const size = useWindowSize();
  console.log('size', size);

  return (
    <TVFrame>
      <Screen screenwidth={size.width} />
    </TVFrame>
  );
};

export default Index;
