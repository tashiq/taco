import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
useGLTF.preload("/models/container_ship.glb");
import { useControls } from "leva";

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
            position={[300, 633.404, 388.893]}
            // position={[x, y, z]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={70}
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
            position={[-170, 475.961, -170.06]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={70}
          />
        </group>
      </group>
    </group>
  );
}
