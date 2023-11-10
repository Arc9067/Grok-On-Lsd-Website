import React from "react";
import foot from "../assets/images/footerImg.svg";
import logo from "../assets/logo3.webp";
import telegram from "../assets/images/icons/telegram.svg";
import twitter from "../assets/images/icons/twitter.svg";
import chart from "../assets/images/icons/chart.svg";

function Footer() {
  return (
    <footer className="py-9 bg-[#1F1F1F]">
      <div className="container flex flex-col justify-center items-center">
        <img src={foot} alt="" />

        <div className="flex justify-between items-center flex-col lg:flex-row w-full lg:grid-cols-3 justify-between items-center gap-6 mt-16">
          <a
            href=""
            className="logo text-white flex items-center gap-2 font-ClashDisplayMed capitalize text-xl"
          >
            <img src={logo} alt="" className="w-[4rem]" />
            <h2 className="hin">GROKonLSD</h2>
          </a>
          <p className="text-white text-sm font-normal font-['Clash Display'] leading-relaxed">
            Copyright © {new Date().getFullYear()} Israel All Rights Reserved.
          </p>
          <div className="flex items-center gap-3">
            <a href="">
              <img src={telegram} alt="telegram icon" />
            </a>
            <a href="https://twitter.com/GROKonLSD">
              <img src={twitter} alt="telegram icon" />
            </a>
            <a href="">
              <img src={chart} alt="telegram icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
