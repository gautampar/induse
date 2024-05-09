import React from "react";
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

function WhoSlider() {
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
      <Slider {...settings}>
        {data?.map((e, i) => {
          return (
            <>
              <div key={i}>
                <div className="max-w-[284.78px] relative w-full rounded-[10px] bg-[#F8F8F8]">
                  <img src="assets/our/photo2.png" alt="" />
                  <div className="absolute bottom-[1px] rounded-b-[10px] max-w-[281.47px] left-[50%] translate-x-[-50%] bg-[#F8F8F8] pt-[14px] px-[22px] w-full">
                    <h6 className="font-[Montserrat] font-[700] text-[14.9px] leading-[23.18px] text-[#000000] mb-[7px]">
                      Andrey
                    </h6>
                    <p className="font-[Inter] font-[500] text-[11.59px] leading-[20.7px] text-[#2D903E] mb-[14px]">
                      Loreum Ipsum
                    </p>
                    <p className="font-[Outfit] font-[400] text-[14px] leading-[20.7px] text-[#545454] pb-[11px]">
                      Enjoys adventurous travel, seeks new cultures and offbeat
                      destinations
                    </p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </Slider>
    </>
  );
}

export default WhoSlider;
