import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";

function Hero() {
  return (
    <div className="min-h-screen w-full relative" id="hero">
      <Header />
      <Main />
    </div>
  );
}

export default Hero;
