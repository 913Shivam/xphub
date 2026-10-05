import React from "react";
import { RxQuestionMarkCircled } from "react-icons/rx";
import logo from "../assets/Logo/logo.svg";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between bg-bgcolor border-b border-slate-100 shadow-md p-3 px-5 sticky top-0 backdrop-blur-[3px] z-10">
      <div className="flex items-center gap-0.5 cursor-pointer">
        <img src={logo} alt="Logo" />
        <div className="text-3xl font-semibold">XP-HUB</div>
      </div>
      <div className="hover-btn flex items-center gap-1 font-semibold">
        <div className="hover-btn flex items-center gap-1 font-semibold">
          <RxQuestionMarkCircled size={20} className="text-inherit" />
          <div className="text-inherit">Help</div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
