import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "../../styles/shaders.css";
import * as THREE from "three";

const ShaderImageEffect = ({ imageSrc, width, height }) => {
  const imageContainerRef = useRef(null);
  const imageElementRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const planeMeshRef = useRef(null);

  let easeFactor = 0.02;
  let mousePosition = { x: 0.5, y: 0.5 };
  const targetMousePositionRef = useRef({ x: 0.5, y: 0.5 });
  let aberrationIntensity = 0.2;
  let prevPosition = { x: 0.5, y: 0.5 };
  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

  const fragmentShader = `
    varying vec2 vUv;
    uniform sampler2D u_texture;    
    uniform vec2 u_mouse;
    uniform vec2 u_prevMouse;
    uniform float u_aberrationIntensity;

    void main() {
        vec2 gridUV = floor(vUv * vec2(20.0, 20.0)) / vec2(20.0, 20.0);
        vec2 centerOfPixel = gridUV + vec2(1.0/20.0, 1.0/20.0);
        
        vec2 mouseDirection = u_mouse - u_prevMouse;
        
        vec2 pixelToMouseDirection = centerOfPixel - u_mouse;
        float pixelDistanceToMouse = length(pixelToMouseDirection);
        float strength = smoothstep(0.3, 0.0, pixelDistanceToMouse);
 
        vec2 uvOffset = strength * - mouseDirection * 0.2;
        vec2 uv = vUv - uvOffset;

        vec4 colorR = texture2D(u_texture, uv + vec2(strength * u_aberrationIntensity * 0.01, 0.0));
        vec4 colorG = texture2D(u_texture, uv);
        vec4 colorB = texture2D(u_texture, uv - vec2(strength * u_aberrationIntensity * 0.01, 0.0));

        gl_FragColor = vec4(colorR.r, colorG.g, colorB.b, 1.0);
    }
`;

  useEffect(() => {
    const initializeScene = (texture) => {
      const scene = new THREE.Scene();
      sceneRef.current = scene;
      const camera = new THREE.PerspectiveCamera(
        80,
        imageElementRef.current.offsetWidth /
          imageElementRef.current.offsetHeight,
        0.01,
        10
      );
      camera.position.z = 1;
      cameraRef.current = camera;
      const shaderUniforms = {
        u_mouse: { type: "v2", value: new THREE.Vector2() },
        u_prevMouse: { type: "v2", value: new THREE.Vector2() },
        u_aberrationIntensity: { type: "f", value: 0.0 },
        u_texture: { type: "t", value: texture },
      };
      const planeMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(2, 2),
        new THREE.ShaderMaterial({
          uniforms: shaderUniforms,
          vertexShader,
          fragmentShader,
        })
      );
      scene.add(planeMesh);
      planeMeshRef.current = planeMesh;
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(
        imageElementRef.current.offsetWidth,
        imageElementRef.current.offsetHeight
      );
      rendererRef.current = renderer;
      imageContainerRef.current.appendChild(renderer.domElement);
    };
    const animateScene = () => {
      requestAnimationFrame(animateScene);
      mousePosition.x +=
        (targetMousePositionRef.current.x - mousePosition.x) * easeFactor;
      mousePosition.y +=
        (targetMousePositionRef.current.y - mousePosition.y) * easeFactor;
      planeMeshRef.current.material.uniforms.u_mouse.value.set(
        mousePosition.x,
        1.0 - mousePosition.y
      );
      planeMeshRef.current.material.uniforms.u_prevMouse.value.set(
        prevPosition.x,
        1.0 - prevPosition.y
      );
      aberrationIntensity = Math.max(0.0, aberrationIntensity - 0.05);
      planeMeshRef.current.material.uniforms.u_aberrationIntensity.value =
        aberrationIntensity;
      rendererRef.current.render(sceneRef.current, cameraRef.current);
    };
    const handleMouseMove = (event) => {
      easeFactor = 0.02;
      const rect = imageContainerRef.current.getBoundingClientRect();
      prevPosition = { ...targetMousePositionRef.current };
      targetMousePositionRef.current.x =
        (event.clientX - rect.left) / rect.width;
      targetMousePositionRef.current.y =
        (event.clientY - rect.top) / rect.height;
      aberrationIntensity = 1;
    };
    const handleMouseEnter = (event) => {
      easeFactor = 0.02;
      const rect = imageContainerRef.current.getBoundingClientRect();
      mousePosition.x = targetMousePositionRef.current.x =
        (event.clientX - rect.left) / rect.width;
      mousePosition.y = targetMousePositionRef.current.y =
        (event.clientY - rect.top) / rect.height;
    };
    const handleMouseLeave = () => {
      easeFactor = 0.05;
      targetMousePositionRef.current = { ...prevPosition };
    };
    const texture = new THREE.TextureLoader().load(imageSrc);
    initializeScene(texture);
    animateScene();
    const container = imageContainerRef.current;
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      rendererRef.current.dispose();
      sceneRef.current.dispose();
    };
  }, [imageSrc]);

  return (
    <div
      ref={imageContainerRef}
      id="imageContainer"
      style={{ width: width, height: height }}
      className="rounded-lg overflow-hidden"
    >
      <img
        ref={imageElementRef}
        id="myImage"
        src={imageSrc}
        height="100%"
        width="auto"
      />
    </div>
  );
};
ShaderImageEffect.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default ShaderImageEffect;
