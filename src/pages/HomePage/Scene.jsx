import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";

function VideoPlane({ videoRef }) {
  const meshRef = useRef();

  const uniforms = useRef({
    map: { value: null },
    time: { value: 0.0 },
  });

  useEffect(() => {
    if (videoRef.current) {
      uniforms.current.map.value = new THREE.VideoTexture(videoRef.current);
    }
  }, [videoRef]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    uniforms.current.time.value = time;
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[20, 9]} />
      <meshBasicMaterial>
        <videoTexture
          attach="map"
          args={[videoRef.current]}
          magFilter={THREE.LinearFilter}
          minFilter={THREE.LinearFilter}
        />
      </meshBasicMaterial>
    </mesh>
  );
}

VideoPlane.propTypes = {
  videoRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    .isRequired,
};

export default function ReelVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    // check if scrolling
    const handleScroll = (e) => {};

    // Add the event listener
    window.addEventListener("wheel", handleScroll);

    if (videoRef.current) {
      videoRef.current.play();
    }
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        src="/reel.mp4"
        crossOrigin="anonymous"
        loop
        muted
        style={{ display: "none" }} // Hide the video element
      />
      <Canvas className="w-full">
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />
        <VideoPlane videoRef={videoRef} />
      </Canvas>
    </>
  );
}
