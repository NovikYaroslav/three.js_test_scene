import './App.css';
import { Canvas } from '@react-three/fiber';
import Plane from '../Plane/Plane';
import { Physics } from '@react-three/cannon';
import { VRButton, XR, Controllers, Hands } from '@react-three/xr';
import { OrbitControls } from '@react-three/drei';
import { Sculpture } from '../Sculpture/Sculpture';
import Tree from '../Tree/Tree';
import GrassLine from '../Grass-line/Grass-line';
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Vignette,
} from '@react-three/postprocessing';

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

            <Tree />
            <GrassLine />
            <Sculpture position={[0.25, -2.78, 0]} />
            <Plane />
          </Physics>
        </XR>
        <EffectComposer>
          <DepthOfField
            focusDistance={0}
            focalLength={0.02}
            bokehScale={2}
            height={480}
          />
          <Bloom luminanceThreshold={0} luminanceSmoothing={1} height={600} />
          <Vignette eskil={false} offset={0.1} darkness={0.9} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

export default App;
