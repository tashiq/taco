import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
useGLTF.preload("/models/container_ship.glb");

export default function BannerShipModel(props) {
  const { nodes, materials } = useGLTF("/models/container_ship.glb");
  const containerRef = useRef();
  useFrame(() => {
    containerRef.current.rotation.y += 0.003;
  });
  return (
    <group {...props} dispose={null} ref={containerRef}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.29}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group
            position={[585.693, 633.404, 388.893]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.Ship_Bridge_0.geometry}
              material={materials.Bridge}
            />
            <mesh
              geometry={nodes.Ship_Bridge_0_1.geometry}
              material={materials.Bridge}
            />
            <mesh
              geometry={nodes.Ship_Hull_0.geometry}
              material={materials.Hull}
            />
            <mesh
              geometry={nodes.Ship_Hull_0_1.geometry}
              material={materials.Hull}
            />
          </group>
          <mesh
            geometry={nodes.Containers_Containers_0.geometry}
            material={materials.Containers}
            position={[-47.17, 475.961, -412.06]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={102.184}
          />
        </group>
      </group>
    </group>
  );
}
