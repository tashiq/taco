import { Route, Routes, useLocation } from "react-router";
import Home from "./pages/HomePage/Home";
import About from "./pages/AboutPage/About";
import Career from "./pages/CareerPage/Career";
import Industry from "./pages/IndustryPage/Industry";
import Services from "./pages/ServicePage/Services";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound/NotFound";
import Loading from "./pages/Loading/Loading";
import { useEffect, useState } from "react";
const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true); // Start loading on route change

    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after a short delay
    }, 500); // Adjust delay as needed

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <div className="relative">
      <Navbar />
      {loading ? (
        <Loading /> // Show loading screen while changing routes
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/industry" element={<Industry />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
      <Footer />
    </div>
  );
};

export default App;
