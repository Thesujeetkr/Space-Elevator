import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { IoIosArrowRoundForward, IoIosArrowUp } from "react-icons/io";
import logo from "../assets/logo.png";

export default function Footer() {
  const navLinks = {
    Products: ["Lorem", "Lorem", "Lorem", "Lorem"],
    Insights: ["Lorem", "Lorem", "Lorem", "Lorem"],
    Services: [
      "Professional Services",
      "Managed Service",
      "Information Security",
      "Consulting Services",
    ],
  };

  const socialLinks = [
    { icon: <FaFacebookF size={20} />, href: "#" },
    { icon: <FaInstagram size={20} />, href: "#" },
    { icon: <FaXTwitter size={20} />, href: "#" },
    { icon: <FaYoutube size={20} />, href: "#" },
  ];

  const [expanded, setExpanded] = useState(false);

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-black to-[#050a1a] text-gray-300 z-10">
      <div className="circle-shadow1"></div>
      <div className="circle-shadow2"></div>
      <div className="circle-shadow3"></div>
      <div className=" md:px-12 lg:px-20 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-30">
          {/* Logo + Description */}
          <div className="flex-1 max-w-md ">
            <img src={logo} alt="Space Elevators" className="h-14 mb-4" />
            <p className="text-sm leading-relaxed">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia amet minim mollit non deserunt ullamco
              est sit aliqua dolor.
            </p>
            <div className="mt-6">
              <a
                href="/"
                className="group flex justify-between items-center h-[60px] gap-2 border-[1px] border-[#313131] pl-2 pr-7 text-white w-80 py-2 rounded-full text-sm font-medium transition-all relative overflow-hidden cursor-pointer"
              >
                {/* Gradient span */}
                <span
                  className={`text-lg py-2 rounded-full flex justify-center bg-gradient-to-r from-[#1A78F4] to-[#004096] transition-all duration-500 w-20 group-hover:absolute group-hover:left-0 group-hover:top-0 group-hover:w-full group-hover:h-full`}
                >
                  {/* Show arrow only before hover */}
                  <IoIosArrowRoundForward className="text-3xl group-hover:opacity-0 transition-opacity duration-300" />
                </span>

                {/* Text */}
                <span
                  className={`transition-all duration-500 group-hover:absolute group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:z-10 whitespace-nowrap`}
                >
                  Subscribe to our newsletter
                </span>
              </a>
            </div>
          </div>

          {/* Dynamic Nav Sections */}
          <div className="flex flex-1 flex-col sm:flex-row justify-between gap-8">
            {Object.entries(navLinks).map(([title, items], idx) => (
              <div key={idx}>
                <h3 className="text-white font-semibold mb-4">
                  {title.toUpperCase()}
                </h3>
                <ul className="space-y-2 text-sm">
                  {items.map((item, i) => (
                    <li key={i} className="hover:text-white cursor-pointer">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex items-center justify-center w-full border-t border-gray-700">
        <div className="footerbtt w-full max-w-7xl py-10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          <p className="text-[16px]">© Copyright 2025. All Rights Reserved.</p>

          <div className="socialIcons flex items-center gap-8 ">
            {socialLinks.map((s, i) => (
              <div
                key={i}
                className="socialIcon w-9 h-9 flex justify-center items-center"
              >
                <a
                  href={s.href}
                  className=" hover:text-white p-2 bg-[#13192C] rounded-full"
                >
                  {s.icon}
                </a>
              </div>
            ))}
          </div>

          <p className="text-[16px]">Powered by Doors Studio</p>
        </div>
      </div>

      {/* Scroll to Top */}
      <div className="fixed bottom-6 right-6">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="socialIcon bg-[#13192C] hover:bg-gray-700 text-white h-[46px] w-[46px] rounded-full shadow-md transition-all flex justify-center items-center cursor-pointer "
        >
          <IoIosArrowUp className="text-2xl" />
        </button>
      </div>
    </footer>
  );
}
