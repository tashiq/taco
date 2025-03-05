import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import BannerShipModel from "./BannerShipModel";
const Banner = () => {
  return (
    <div className="w-full lg:min-h-screen overflow-hidden relative  mt-8 px-4 lg:px-6 box-border">
      <div className="w-full">
        <div className="text-4xl lg:text-7xl font-normal w-full lg:w-7/12">
          Connecting Global Visions to Crafted Shipping Solutions
        </div>
      </div>
      <div className="w-full h-full block lg:flex justify-start">
        <div className="w-full lg:w-7/12 h-full">
          <Canvas className="w-full h-full ml-0 lg:-ml-8">
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <PerspectiveCamera makeDefault position={[-10, 10, -10]} />
              <BannerShipModel scale={2} />
              <ambientLight intensity={0.7} />
              <directionalLight position={[2, 5, 2]} />
            </Suspense>
          </Canvas>
        </div>
        <div className="lg:w-1/3 mt-4 lg:mt-24">
          {/* –MM SEAWAYS LTD streamlines global trade with expert Non-Vessel
          Operating Common Carrier (NVOCC) services. Backed by innovative
          logistics and a passionate team, we deliver seamless cargo solutions,
          ensuring reliability, precision, and success across international
          shipping routes */}
          At MM SEAWAYS LTD, based in Bangladesh, we redefine shipping by
          crafting seamless logistics solutions. As a trusted NVOCC, we tailor
          cargo services to meet your needs. With precision scheduling, reliable
          deliveries, and a global network, we connect businesses to
          opportunities worldwide, ensuring excellence and fostering growth in
          global trade
        </div>
      </div>
    </div>
  );
};

export default Banner;
