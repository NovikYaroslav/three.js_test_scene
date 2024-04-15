import './App.css';
import { Canvas } from '@react-three/fiber';
import Box from '../Box/Box';
import Plane from '../Plane/Plane';
import { Physics } from '@react-three/cannon';
import { VRButton, XR, Controllers, Hands } from '@react-three/xr';

function App() {
  return (
    <div className='App'>
      <VRButton />
      <Canvas>
        <XR>
          <Controllers />
          <Hands />
          <Physics>
            <ambientLight intensity={0.3} />
            <directionalLight position={[10, 10, 10]} />
            <directionalLight position={[20, 20, 5]} />
            <Box position={[-1, 2, 0]} />
            <Box position={[-3, 5, 0]} />
            <Box position={[-1, 7, 0]} />
            <Box position={[-2, 9, 0]} />
            <Box position={[-1, 11, 0]} />
            <Box position={[-1, 13, 0]} />
            <Box position={[-2, 15, 0]} />
            <Box position={[-2, 17, 0]} />
            <Box position={[-3, 11, 0]} />
            <Box position={[-5, 13, 0]} />
            <Box position={[-4, 15, 0]} />
            <Box position={[-5, 17, 0]} />
            <Box position={[4, 11, 0]} />
            <Box position={[4, 13, 0]} />
            <Box position={[4, 15, 0]} />
            <Box position={[5, 17, 0]} />
            <Plane />
          </Physics>
        </XR>
      </Canvas>
    </div>
  );
}

export default App;
