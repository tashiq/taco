import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import CanvasLoader from "./CanvasLoader";
import BannerShipModel from "./BannerShipModel";
const Banner = () => {
  return (
    <div className="w-full h-screen overflow-hidden relative border-2 border-red-500">
      <div className="text-7xl font-normal w-1/2 absolute z-20 h-full flex justify-center items-center ">
        Connecting Global Visions to Crafted Shipping Solutions
      </div>
      <div className="w-full h-full inset-0 mt-12 ml-44">
        <Canvas className="w-full h-full">
          {/* <Suspense fallback={<CanvasLoader />}> */}
          <Suspense fallback={null}>
            <OrbitControls enableZoom={false} />
            <PerspectiveCamera makeDefault position={[-7, 10, 10]} />
            <BannerShipModel scale={0.8} />
            <ambientLight intensity={0.7} />
            <directionalLight position={[2, 5, 2]} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Banner;
