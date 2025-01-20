import React from "react";
import LeftSide from "./LeftSide";
import MidRight from "./MidRight";

function LandingPage({isMenuOpen}) {
  return (
    <div id="main-section" className="flex min-h-screen w-full">
      <LeftSide isMenuOpen={isMenuOpen} />
      <MidRight />
    </div>
  );
}

export default LandingPage;
