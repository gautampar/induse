import React from "react";
import "./footer.css";

function Footer() {
  return (
    <>
      <div className="bg-[#064372] flex flex-col justify-center sm:gap-[55px] gap-[20px] sm:px-[270px] px-[20px] py-[36px]">
        <p className="font-[Montserrat] font-[700] text-center sm:text-[36px] text-[20px] sm:leading-[43.88px] leading-[26px] text-[#FFFFFF]">
          Let’s Discuss Your Requirement, Reach Us At
        </p>
        <div className="max-w-[896px] m-auto flex sm:flex-row flex-col sm:gap-[60px] gap-[14px]">
          <div className="flex items-center gap-[10px]">
            <img src="assets/our/icon1.svg" className="sm:h-auto h-[30px]" alt="" />
            <div>
              <p className="font-[Poppins] pb-[3px] font-[600] sm:text-[20px] text-[14px] sm:leading-[30px] leading-[20px] text-[#FFFFFF]">
                Call Us
              </p>
              <p className="font-[Inter] font-[400] sm:text-[18px] text-[12px] sm:leading-[21.78px] leading-[16px] text-[#ECECEC]">
                +91 7898747967
              </p>
            </div>
          </div>
          <div className="flex items-center gap-[10px]">
            <img src="assets/our/icon2.svg" className="sm:h-auto h-[30px]" alt="" />
            <div>
              <p className="font-[Poppins] pb-[3px] font-[600] sm:text-[20px] text-[14px] sm:leading-[30px] leading-[20px] text-[#FFFFFF]">
                Mail Us
              </p>
              <p className="font-[Inter] font-[400] sm:text-[18px] text-[12px] sm:leading-[21.78px] leading-[16px] text-[#ECECEC]">
                Info@Indeus.com
              </p>
            </div>
          </div>
          <div className="flex items-center gap-[10px]">
            <img src="assets/our/icon3.svg" className="sm:h-auto h-[30px]" alt="" />
            <div>
              <p className="font-[Poppins] pb-[3px] font-[600] sm:text-[20px] text-[14px] sm:leading-[30px] leading-[20px] text-[#FFFFFF]">
                Location
              </p>
              <p className="font-[Inter] font-[400] sm:text-[18px] text-[12px] sm:leading-[21.78px] leading-[16px] text-[#ECECEC]">
                Ahmedabad -380006,India
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex w-full sm:justify-between items-center sm:px-[100px] px-[14px] bg-[#F8FAFF] py-[26px]">
          <div className="flex relative sm:justify-start justify-center flex-1">
            <img src="assets/home/logo.svg" className="sm:absolute relative top-0" alt="" />
          </div>
          <div className="flex items-end gap-[46px]"></div>
        </div>
        <div className="footer-line z-20 bg-[#F8FAFF]">
          <div className="sm:flex hidden flex-1"></div>
          <div className="flex flex-1 sm:justify-end justify-center items-center">
            <ul className="flex sm:flex-row flex-col items-center sm:gap-[20px] gap-[20px]grid max-w-[708px] w-full m-auto justify-center z-10 sm:mt-[14px] mt-0 grid-cols-2 gap-[10px] relative">
              <li className="border border-[#FFFFFF] rounded-[8px] py-[11px] px-[16px] flex gap-[8px] w-full items-center">
                <img src="assets/our/flag1.png" alt="" />
                <p className="font-[Inter] font-[700] leading-[15.73px] text-[13px] text-[#ffffff]">
                  +91 7898747967
                </p>
              </li>
              <li className="border border-[#FFFFFF] rounded-[8px] py-[11px] px-[16px] flex gap-[8px] w-full items-center">
                <img src="assets/our/flag1.png" alt="" />
                <p className="font-[Inter] font-[700] leading-[15.73px] text-[13px] text-[#ffffff]">
                  +91 7898747967
                </p>
              </li>
              <li className="border border-[#FFFFFF] rounded-[8px] py-[11px] px-[16px] flex gap-[8px] w-full items-center">
                <img src="assets/our/flag2.png" alt="" />
                <p className="font-[Inter] font-[700] leading-[15.73px] text-[13px] text-[#ffffff]">
                  +91 7898747967
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
