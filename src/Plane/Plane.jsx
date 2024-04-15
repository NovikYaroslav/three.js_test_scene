import { usePlane } from '@react-three/cannon';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

export default function Plane() {
  const grass = useLoader(TextureLoader, 'grass.jpeg');
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -3, -1],
  }));

  return (
    <mesh ref={ref}>
      <planeGeometry args={[15, 15]} />
      <meshStandardMaterial map={grass} />
    </mesh>
  );
}
