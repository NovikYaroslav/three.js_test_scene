import { useGLTF } from '@react-three/drei';

export function Sculpture(props) {
  const { nodes, materials } = useGLTF('/infancia_de_caim/scene.gltf');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials.main}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials.main}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_7.geometry}
        material={materials.main}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials.main}
      />
    </group>
  );
}

useGLTF.preload('/infancia_de_caim/scene.gltf');
