import React from "react";
import Hero from "./Hero";
import About from "./Components/About";
import Mics from "./Components/Mics";
import Map from "./Components/Map";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0C00FA] text-whit relative font-ClashDisplayReg text-white">
      <Hero />
      <About />
      <Mics />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
