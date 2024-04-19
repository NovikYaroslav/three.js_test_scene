import { useGLTF } from '@react-three/drei';

export function Tree2(props) {
  const { nodes, materials } = useGLTF('/tree/scene.gltf');
  return (
    <group {...props} dispose={null}>
      <group position={[1.5, -2, -0.5]} scale={0.1} rotation={[0, 5, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree_Mesh_Tree_Trunk_Mat_0.geometry}
          material={materials.Tree_Trunk_Mat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree_Mesh_Tree_Leaves_Mat_0.geometry}
          material={materials.Tree_Leaves_Mat}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/tree/scene.gltf');
