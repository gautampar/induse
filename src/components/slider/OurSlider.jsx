import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src="assets/our/arrow-right.svg" alt="" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src="assets/our/arrow-left.svg" alt="" />
    </div>
  );
}

function OurSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="flex sm:flex-row flex-col items-center justify-between">
        <div>
          <div className="flex gap-[10px] sm:items-end items-center sm:justify-start justify-center">
            <img src="assets/our/logo.png" alt="" />
            <p className="font-[Montserrat] font-[700] text-[36px] leading-[43.88px] text-[#FFFFFF]">
              Our Service
            </p>
          </div>
          <p className="font-[Outfit] mt-[10px] font-[400] text-[18px] sm:text-left text-center leading-[26px] text-[#FFFFFF]">
            Entrust us with your cargo for seamless door-to-door transport
            between India, Europe & US{" "}
          </p>
        </div>
        <div className="flex pb-[140px]">
          {/* <img src="assets/our/arrow-left.svg" alt="" />
          <img src="assets/our/arrow-right.svg" alt="" /> */}
        </div>
      </div>
      <div className="sm:mt-[66px] mt-[20px] our-slider">
        <Slider {...settings}>
          {data?.map((e, i) => {
            return (
              <>
                <div key={i}>
                  <div className="shop-card">
                    <Link to="">
                      <img
                        className="w-full"
                        src="assets/our/photo1.png"
                        alt=""
                      />
                    </Link>
                    <div className="shop-card-content">
                      <p className="font-[Montserrat] max-w-[189px] w-full mb-[12px] font-[500] text-[20px] leading-[24.2px] text-[#252B42]">
                        full Ground & Air Control
                      </p>
                      <p className="font-[Outfit] mb-[20px] font-[400] text-[18px] leading-[20.16px] text-[#7D7D7D]">
                        Outsource work during peak periods and tax seasons for
                        timely and efficient service delivery.
                      </p>
                      <div className="flex gap-[12px]">
                        <button className="text-[#2D8B38] underline font-[Outfit] font-[400] text-[18px] leading-[20.16px]">
                          View Deatil
                        </button>
                        <img src="assets/our/read-more.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default OurSlider;
