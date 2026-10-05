import React from "react";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-bgcolorsecond p-7.5 text-[13px] font-semibold  flex items-center justify-between text-textColor border-t border-slate-200">
      <div className="flex items-center gap-1">
        <FaRegCopyright size={11} />
        <span>2024</span>
        <span>XP-HUB.</span>
        <span>Real people.</span>
        <span>Real experience.</span>
      </div>
      <div className=" flex items-center gap-3">
        <span className="hover-btn">Privacy Policy</span>
        <span className="hover-btn">Terms of Service</span>
      </div>
    </div>
  );
};

export default Footer;
