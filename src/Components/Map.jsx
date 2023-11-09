import React from "react";
import map1 from "../assets/images/map1.svg";
import map2 from "../assets/images/map2.svg";
import map3 from "../assets/images/map3.svg";

function Map() {
  return (
    <section className="py-32 bg-yellow-0">
      <div className="container flex flex-col justify-center items-center">
        <h1 className="text-white uppercase text-5xl font-bold font-ClashDisplayBold leading-10">
          roadmap
        </h1>
        <div className="grid w-full mt-32 grid-cols-1 lg:grid-cols-3 justify-between items-center gap-12">
          <img src={map1} alt="" />
          <img src={map2} alt="" />
          <img src={map3} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Map;
