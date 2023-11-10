import React from "react";
import logo from "../assets/logo3.webp";
import telegram from "../assets/images/icons/telegram.svg";
import twitter from "../assets/images/icons/twitter.svg";
import chart from "../assets/images/icons/chart.svg";

function Header() {
  return (
    <header className="py-3 w-full absolute top-0 z-50">
      <nav className="container ">
        <div className="w-full py-4 lg:px-20 rounded-3xl h-full bg-white flex justify-between items-center px-8">
          <a
            href=""
            className="logo text-black flex items-center gap-2 font-ClashDisplayMed capitalize text-xl"
          >
            <img src={logo} alt="" className="w-[4rem]" />
            <h2 className="hidden md:block">GROKonLSD</h2>
          </a>
          <div className="flex items-center gap-3">
            <a href="">
              <img src={telegram} alt="telegram icon" />
            </a>
            <a href="">
              <img src={twitter} alt="telegram icon" />
            </a>
            <a href="">
              <img src={chart} alt="telegram icon" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
