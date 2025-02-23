import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import BannerShipModel from "./BannerShipModel";
const Banner = () => {
  return (
    <div className="w-full h-screen overflow-hidden relative">
      <div className="w-full">
        <div className="text-7xl font-normal w-1/2">
          Connecting Global Visions to Crafted Shipping Solutions
        </div>
      </div>
      <div className="w-full h-full flex justify-start">
        <div className="w-7/12 h-full">
          <Canvas className="w-full h-full -ml-8">
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <PerspectiveCamera makeDefault position={[-10, 10, -10]} />
              <BannerShipModel scale={1} />
              <ambientLight intensity={0.7} />
              <directionalLight position={[2, 5, 2]} />
            </Suspense>
          </Canvas>
        </div>
        <div className="w-1/3 mt-24">
          –MM SEAWAYS LTD streamlines global trade with expert Non-Vessel
          Operating Common Carrier (NVOCC) services. Backed by innovative
          logistics and a passionate team, we deliver seamless cargo solutions,
          ensuring reliability, precision, and success across international
          shipping routes
        </div>
      </div>
    </div>
  );
};

export default Banner;
