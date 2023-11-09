import React from "react";
import arrow from "../assets/images/icons/arrow.svg";
import Handleft from "../assets/images/Handleft.svg";
import HandB from "../assets/images/HandB.svg";
import DrugR from "../assets/images/DrugR.svg";
import BottleB from "../assets/images/Bottleb.svg";
import About from "./About";

function Main() {
  return (
    <section
      className="py-32 w-full h-screen flex justify-center items-center"
      id="main"
    >
      <img
        src={Handleft}
        alt=""
        className="absolute pointer-events-none top-0 left-0 w-[10rem] lg:w-fit"
      />
      <img
        src={BottleB}
        alt=""
        className="absolute pointer-events-none bottom-0 left-0 w-[10rem] lg:w-fit"
      />
      <img
        src={DrugR}
        alt=""
        className="absolute pointer-events-none top-0 right-0 w-[10rem] lg:w-fit"
      />
      <img
        src={HandB}
        alt=""
        className="absolute pointer-events-none bottom-0 right-0 w-[10rem] lg:w-fit"
      />
      {/* <img src={Bg3} alt="" className=" top-0 w-full absolute" /> */}
      <div className="container gap-5 flex-col flex justify-center items-center">
        <h1 className="text-[#FFCB14] text-5xl md:text-8xl font-ClashDisplayBold capitalize strokeit">
          grok on lsd
        </h1>
        <div className="relative transition hover:scale-90">
          <div className="w-full h-full bg-black rounded-xl absolute -bottom-1" />
          <a
            href=""
            className="bg-yellow-0 relative px-12 flex z-20 items-center gap-4 font-ClashDisplayBold capitalize rounded-xl text-black py-4"
          >
            buy now <img src={arrow} alt="" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Main;
