import React, { useEffect, useState } from "react";
import LandingPage from "./Component/LandingPage";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";

function useWindowSize() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 992 && width <= 1600) {
        setScale(0.9);
      } else if (width >= 700 && width <= 767) {
        setScale(0.8);
      } else if (width >= 600 && width < 700) {
        setScale(0.75);
      } else if (width <= 600) {
        setScale(0.5);
      } else {
        setScale(1);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return scale;
}

function App() {
  const scale = useWindowSize();
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  return (
    <>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div
        style={{ transform: `scale(${scale})`, transformOrigin: "top center" }}
      >
        <LandingPage isMenuOpen={isMenuOpen}/>
        <Footer />
      </div>
    </>
  );
}

export default App;
