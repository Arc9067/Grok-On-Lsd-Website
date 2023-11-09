import React from "react";
import pattern1 from "../assets/images/icons/pattern1.svg";
import pattern2 from "../assets/images/icons/pattern2.svg";
import img1 from "../assets/images/img1.svg";
import img2 from "../assets/images/img2.svg";
import img3 from "../assets/images/img3.svg";

function Mics() {
  return (
    <section className="py-32 bg-[#1F1F1F] text-white relative">
      <img src={pattern1} alt="" className="absolute top-8 left-0 lg:left-8" />
      <img
        src={pattern2}
        alt=""
        className="absolute top-8 right-0 lg:right-8"
      />
      <div className="container flex flex-col justify-center items-center">
        <article className="flex w-max flex-col justify-center items-center gap-6">
          <h3 className="text-white text-5xl font-bold font-ClashDisplayBold leading-10">
            our
          </h3>
          <h1 className="text-white uppercase text-5xl font-bold font-ClashDisplayBold leading-10">
            tokenomics
          </h1>
        </article>

        <div className="grid w-full mt-32 grid-cols-1 lg:grid-cols-3 justify-between items-center gap-12">
          <article className="h-[300px] gap-2.5 py-7 rounded-2xl flex flex-col justify-between items-center bg-[#FA8700]">
            <img src={img1} alt="" />
            <h1 className="text-white text-3xl font-bold font-ClashDisplayBold leading-10">
              Locked
            </h1>
          </article>
          <article className="h-[300px] gap-2.5 py-7 rounded-2xl flex flex-col justify-between items-center bg-[#0074C9]">
            <img src={img2} alt="" />
            <h1 className="text-white text-3xl font-bold font-ClashDisplayBold leading-10">
              Renounced
            </h1>
          </article>{" "}
          <article className="h-[300px] gap-2.5 py-7 rounded-2xl flex flex-col justify-between items-center bg-[#00C968]">
            <img src={img3} alt="" />
            <h1 className="text-white text-3xl font-bold font-ClashDisplayBold leading-10">
              Tax 0/0
            </h1>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Mics;
