import { useBox } from '@react-three/cannon';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

export default function Box(props) {
  const [ref] = useBox(() => ({
    position: [1, 2, 0],
    mass: 2,
    ...props,
  }));
  const [crate2] = useLoader(TextureLoader, ['crate-2.png']);
  return (
    <mesh ref={ref}>
      <boxGeometry args={[1, 1]} />

      <meshStandardMaterial map={crate2} />
    </mesh>
  );
}
