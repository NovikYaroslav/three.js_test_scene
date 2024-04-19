import { useGLTF } from '@react-three/drei';

export function Grass(props) {
  const { nodes, materials } = useGLTF('/grass/scene.gltf');
  return (
    <group {...props} dispose={null} scale={0.002}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials['None_mud.tif']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.None}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.None}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.None}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.None}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/grass/scene.gltf');
