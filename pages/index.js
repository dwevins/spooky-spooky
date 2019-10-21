import { Room, Screen, TVFrame } from '../components';
import { useWindowSize } from '../hooks/useWindowSize';

const Index = () => {
  const size = useWindowSize();
  console.log('size', size);

  return (
    <Room screenwidth={size.width}>
      <TVFrame>
        <Screen screenwidth={size.width} />
      </TVFrame>
    </Room>
  );
};

export default Index;
