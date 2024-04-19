import './App.css';
import { Canvas } from '@react-three/fiber';
import Box from '../Box/Box';
import Plane from '../Plane/Plane';
import { Physics } from '@react-three/cannon';
import { VRButton, XR, Controllers, Hands } from '@react-three/xr';
import { OrbitControls } from '@react-three/drei';
import { Sculpture } from '../Sculpture/Sculpture';
import { Tree2 } from '../Tree-2/Tree-2';
import GrassLine from '../Grass-line/Grass-line';

function App() {
  return (
    <div className='App'>
      <VRButton />
      <Canvas>
        <XR>
          <Controllers />
          <Hands />
          <OrbitControls />
          <Physics>
            <ambientLight intensity={0.3} />
            <directionalLight position={[10, 10, 10]} />
            <directionalLight position={[20, 10, 10]} />
            <Tree2 />
            <GrassLine />
            <Sculpture position={[0.25, -2.78, 0]} />
            <Plane />
          </Physics>
        </XR>
      </Canvas>
    </div>
  );
}

export default App;
