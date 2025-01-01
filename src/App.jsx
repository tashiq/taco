import { Route, Routes } from "react-router";
import Home from "./pages/HomePage/Home";
import About from "./pages/AboutPage/About";
import Career from "./pages/CareerPage/Career";
import Industry from "./pages/IndustryPage/Industry";
import Services from "./pages/ServicePage/Services";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { useEffect, useRef } from "react";
const RippleEffectCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const handleMouseMove = (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      console.log("Mouse X:", mouseX, "Mouse Y:", mouseY);

      // You can now use mouseX and mouseY to create the ripple effect or other logic
    };
    canvas.addEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="h-screen w-full absolute top-0 left-0 pointer-events-none"
    />
  );
};
const App = () => {
  return (
    <>
      <div className="relative">
        <RippleEffectCanvas />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/industry" element={<Industry />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<h1>404: Page Not Found</h1>} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
