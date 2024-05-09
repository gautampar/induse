import React, { useState } from "react";
import "./header.css";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const path = useLocation();
  const pathName = path?.pathname;
  const [toggleSideBar, setSidebarToggle] = useState(false);

  function openSidebar() {
    setSidebarToggle(!toggleSideBar);
  }
  return (
    <>
      <div
        className="overlay"
        onClick={() => {
          openSidebar();
        }}
        style={toggleSideBar ? { top: 0 } : { top: "100%" }}
      ></div>
      <div className="flex w-full sm:overflow-visible overflow-auto justify-between z-50 fixed top-0 items-center sm:px-[100px] px-[14px] bg-[#F8FAFF] py-[14px]">
        <div className="flex relative flex-1">
          <img
            src="assets/home/logo.svg"
            className="sm:absolute relative top-0"
            alt=""
          />
        </div>
        <div className="flex flex-1 sm:hidden justify-end gap-[46px]">
          <button onClick={() => openSidebar()} className="bras-btn">
            <i className="fa fa-regular fa-bars"></i>
          </button>
        </div>
        <div className="sm:flex hidden items-end gap-[46px]">
          <div className="flex items-center gap-[9px]">
            <img src="assets/our/flag.svg" alt="" />
            <p className="font-[Poppins] font-[400] leading-[24px] text-[16px] text-[#000000]">
              English
            </p>
          </div>
          <div className="flex items-center gap-[6.8px]">
            <Link
              to="https://www.instagram.com/indeus.aero/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="assets/home/instagram.svg" alt="" />
            </Link>
            <Link
              to="https://www.facebook.com/profile.php?id=61559701790624"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="assets/home/facebook.svg" alt="" />
            </Link>
            <Link
              to="https://twitter.com/IndeusAero"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="assets/home/twiter.svg" alt="" />
            </Link>
            <Link
              to="http://www.linkedin.com/in/INDEUS"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="assets/home/linkdin.svg" alt="" />
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`sub-header fixed w-[200px] sm:bg-[#F8FAFF] sm:rounded-none rounded-t-[20px] bg-[#130B46] bg-opacity-25 ${
          toggleSideBar ? "bottom-[-350px]" : "bottom-[-100vh] sm:top-0"
        }`}
      >
        <div className="sm:flex hidden flex-1"></div>
        <div className="flex flex-1 sm:justify-end justify-center sm:items-center items-start sm:pt-0 pt-[30px]">
          <ul className="flex sm:flex-row flex-col items-center sm:gap-[50px] gap-[30px]">
            <li className="list-item">
              <Link
                onClick={() => setSidebarToggle(false)}
                className={`${
                  pathName === "/" ? "active" : ""
                } font-[Poppins] font-[400] leading-[24px] text-[16px] text-[#ffffff]`}
              >
                Home
              </Link>
            </li>
            <li className="list-item">
              <a
                href="#about-us"
                onClick={() => setSidebarToggle(false)}
                className="font-[Poppins] font-[400] leading-[24px] text-[16px] text-[#ffffff]"
              >
                About Us
              </a>
            </li>
            <li className="list-item">
              <a
                onClick={() => setSidebarToggle(false)}
                href="#services"
                className="font-[Poppins] font-[400] leading-[24px] text-[16px] text-[#ffffff]"
              >
                Services
              </a>
            </li>
            <li className="list-item" onClick={() => setSidebarToggle(false)}>
              <a
                href="#team"
                className="font-[Poppins] font-[400] leading-[24px] text-[16px] text-[#ffffff]"
              >
                Team
              </a>
            </li>
            <li className="list-item">
              <button className="font-[Outfit] font-[500] leading-[24px] text-[16px] duration-300 ease-in text-[#1C6F4D] hover:text-[#FFFFFF] hover:bg-[#1C6F4D] bg-[#FFFFFF] py-[10px] px-[42px] rounded-[30px] border hover:border-[#FFFFFF] border-transparent">
                Contact Us
              </button>
            </li>
            <div className="sm:hidden block">
              <Link to="/">
                <img
                  src="assets/home/logo.svg"
                  className="sm:absolute relative top-0"
                  alt=""
                />
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
