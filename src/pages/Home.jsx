import React, { useEffect } from "react";
import Header from "../components/header/Header";
import OurSlider from "../components/slider/OurSlider";
import WhoSlider from "../components/slider/WhoSlider";
import Footer from "../components/footer/Footer";
import Horizontal from "./Horizontal";
import styled, { createGlobalStyle } from "styled-components";

function Home() {
  const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: sans-serif;
  }
`;

  const Main = styled.main``;

  const HorizontalSection = styled.section`
    position: relative;
    width: 100%;
    min-height: 805px;
    background: url(assets/home/photo3.svg);
    background-attachment: fixed;
    background-repeat: no-repeat;
    width: 100%;
    background-size: cover;
  `;

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const sectionId = hash.substring(1);
      scrollToSection(sectionId);
    }
  }, []);
  return (
    <>
      <Header />
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="font-[Montserrat mb-[27px] font-[700] text-[48px] leading-[58.51px] text-[#FFFFFF]">
            Welcome to INDEUS
          </h1>
          <p className="font-[Outfit] mb-[53px] font-[500] text-[18px] leading-[26px] text-[#FFFFFF]">
            Your Gateway to Seamless Logistics Solutions!
          </p>
          <div className="flex sm:items-center items-start sm:flex-row flex-col gap-[26px]">
            <button className="font-[Outfit] font-[400] leading-[24px] text-[16px] duration-300 ease-in text-[#ffffff] hover:text-[#2D903E] hover:bg-[#ffffff] bg-[#2D903E] py-[10px] px-[42px] rounded-[30px] border border-[#FFFFFF] hover:border-transparent">
              Get Started
            </button>
            <p className="font-[Outfit] font-[400] flex items-center gap-[14px] text-[18px] leading-[22.68px] text-[#FFFFFF]">
              Read More <img src="assets/home/read-more.svg" alt="" />
            </p>
          </div>
        </div>
        {/* <div className="hero-items">
          <div className="flex gap-[15px]">
            <img src="assets/home/icon1.svg" alt="" />
            <div>
              <h6 className="font-[Montserrat] font-[700] text-[24px] leading-[32px] text-[#252B42]">
                5+
              </h6>
              <p className="font-[Montserrat] font-[600] text-[14px] leading-[24px] text-[#737373]">
                Year Of Experience
              </p>
            </div>
          </div>
          <div className="bg-[#A7A7A7] w-[1px] h-full"></div>
          <div className="flex gap-[15px]">
            <img src="assets/home/icon2.svg" alt="" />
            <div>
              <h6 className="font-[Montserrat] font-[700] text-[24px] leading-[32px] text-[#252B42]">
                1200+
              </h6>
              <p className="font-[Montserrat] font-[600] text-[14px] leading-[24px] text-[#737373]">
                Happy Client’s
              </p>
            </div>
          </div>
        </div> */}
      </div>
      <div className="map-section">
        <div className="absolute flex justify-center items-center flex-col top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
          <button className="who-btn py-[4px] px-[27px] font-[Montserrat] font-[700] text-[18px] leading-[32px] text-center text-[#FFFFFF] mb-[18px]">
            Who are we
          </button>
          <p className="font-[Montserrat] font-[700] sm:text-[36px] text-[18px] sm:leading-[32px] leading-[24px] text-center text-[#000000]">
            Ground Handling Partners
          </p>
        </div>
        <div className="absolute flex flex-row gap-[10px] sm:gap-[120px] sm:bottom-[-144px] bottom-[-76px] left-[50%] translate-x-[-50%] ">
          <div className="w-full">
            <img src="assets/home/item1.png" alt="" />
          </div>
          <div className="w-full">
            <img src="assets/home/item2.png" alt="" />
          </div>
        </div>
      </div>
      <img src="assets/home/photo2.png" alt="" />
      <div className="bg-[#FFFFFF] overflow-hidden relative pt-[103px] sm:px-[160px] px-[14px] pb-[90px]">
        <img
          src="assets/home/wrap1.png"
          className="absolute right-[-114px] bottom-[60px]"
          alt=""
        />
        <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-[102px] gap-[50px]">
          <div className="grid grid-cols-2 gap-[19px] relative">
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <img src="assets/home/wrap1.svg" alt="" />
            </div>
            <div className="flex flex-col gap-[58px]">
              <div className="relative bg-[#064372] sm:h-[185px] h-[240px] border border-[#CFCFCF] rounded-[6.39px] pt-[77px] pb-[48px] px-[12px]">
                <div className="absolute top-[-44px] left-[50%] translate-x-[-50%]  border-[3px] p-[14px] border-[#FFFFFF] bg-[#064372] rounded-full">
                  <img src="assets/home/icon6.svg" alt="" />
                </div>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-center text-[#FFFFFF]">
                  Joining forces with two local heroes, we leverage their
                  complementary expertise to deliver unparalleled service.
                </p>
              </div>
              <div className="relative bg-[#FFFFFF] sm:h-[185px] h-[240px] border border-[#CFCFCF] rounded-[6.39px] pt-[77px] pb-[48px] px-[12px]">
                <div className="absolute top-[-44px] left-[50%] translate-x-[-50%]  border-[3px] p-[14px] border-[#FFFFFF] bg-[#000000] rounded-full">
                  <img src="assets/home/icon4.svg" alt="" />
                </div>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-center text-[#000000]">
                  Enjoy peace of mind with our fully controlled door-to-door
                  corridor spanning India, Europe, and the US.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[58px]">
              <div className="relative bg-[#FFFFFF] sm:h-[185px] h-[240px] border border-[#CFCFCF] rounded-[6.39px] pt-[77px] pb-[48px] px-[12px]">
                <div className="absolute top-[-44px] left-[50%] translate-x-[-50%]  border-[3px] p-[14px] border-[#FFFFFF] bg-[#000000] rounded-full">
                  <img src="assets/home/icon3.svg" alt="" />
                </div>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-center text-[#000000]">
                  Our premium cargo solution seamlessly integrates every step of
                  the process for maximum efficiency.
                </p>
              </div>
              <div className="relative bg-[#FFFFFF] sm:h-[185px] h-[240px] border border-[#CFCFCF] rounded-[6.39px] pt-[77px] pb-[48px] px-[12px]">
                <div className="absolute top-[-44px] left-[50%] translate-x-[-50%]  border-[3px] p-[14px] border-[#FFFFFF] bg-[#000000] rounded-full">
                  <img src="assets/home/icon5.svg" alt="" />
                </div>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-center text-[#000000]">
                  Get the best value for your money with our competitive rates
                  and superior service quality.
                </p>
              </div>
            </div>
          </div>
          <div>
            <button className="who-btn py-[4px] mb-[22px] px-[27px] font-[Montserrat] font-[700] text-[18px] leading-[32px] text-center text-[#FFFFFF]">
              What are our USPs
            </button>
            <p className="font-[Montserrat] mb-[18px] font-[700] sm:text-[36px] text-[18px] sm:leading-[43.88px] leading-[26px] text-[#000000]">
              We are the world's leading shipping service provider
            </p>
            <p className="font-[Outfit] mb-[18px] font-[400] text-[18px] leading-[24px] text-[#737373]">
              We strive to become pioneer in the felt providing effective
              scicendo them. 20 In the shipping and try our strength, which
              sport at to deliver our promise to our customers
            </p>
            <p className="font-[Outfit] mb-[18px] font-[400] text-[18px] leading-[24px] text-[#737373]">
              We strive to become pioneer in the felt providing effective
              scicendo them. 20 In the shipping and try our strength, which
              sport at to deliver our promise to our customersWe strive to
              become pioneer in the felt providing.
            </p>
          </div>
        </div>
      </div>
      <GlobalStyle />
      <Main>
        <HorizontalSection>
          <h6 className="font-[Montserrat] font-[700] text-[36px] leading-[43.88px] text-center text-[#FFFFFF] pt-[85px] sm:pb-0 pb-[60px]">
            What do we do?
          </h6>
          <Horizontal>
            <div className="card-container">
              <div className="flex flex-col gap-[83px] items-start">
                <div className="flex items-center gap-[225px]">
                  <img src="assets/our/text1.svg" className="" alt="" />
                  <img src="assets/our/text3.svg" className="" alt="" />
                  <img src="assets/our/text6.svg" className="" alt="" />
                  <img src="assets/our/text8.svg" className="" alt="" />
                </div>
                <div className="bg-[#6095BD] relative h-[2px] w-[1820px]">
                  <div className="flex gap-[137px] top-[50%] left-0 translate-y-[-50%] absolute">
                    <img src="assets/our/icon4.svg" alt="" />
                    <img src="assets/our/icon5.svg" alt="" />
                    <img src="assets/our/icon6.svg" alt="" />
                    <img src="assets/our/icon7.svg" alt="" />
                    <img src="assets/our/icon8.svg" alt="" />
                    <img src="assets/our/icon9.svg" alt="" />
                    <img src="assets/our/icon10.svg" alt="" />
                  </div>
                  <img
                    src="assets/our/text5.svg"
                    className="top-[50%] right-0 translate-y-[-50%] absolute"
                    alt=""
                  />
                </div>
                <div className="flex items-center pl-[230px] gap-[225px] ">
                  <img src="assets/our/text2.svg" className="" alt="" />
                  <img src="assets/our/text4.svg" className="" alt="" />
                  <img src="assets/our/text7.svg" className="" alt="" />
                </div>
              </div>
            </div>
          </Horizontal>
        </HorizontalSection>
      </Main>
      <div className="benefits-section">
        <h6 className="font-[Montserrat] font-[700] text-[36px] leading-[43.88px] text-center text-[#FFFFFF] mb-[18px]">
          Your Benefits
        </h6>
        <p className="max-w-[486px] w-full m-auto font-[Outfit] font-[400] text-[18px] leading-[24px] text-center text-[#FFFFFF]">
          We are not only a logistics company; we are the embodiment of
          reliability, innovation, and excellence."
        </p>
        <div className="grid sm:max-w-[508px] max-w-[350px] w-full m-auto justify-center z-10 items-center mt-[94px] grid-cols-2 gap-[10px] relative">
          <div className="absolute top-[-51px] left-[-41px]">
            <img src="assets/home/wrap2.svg" alt="" />
          </div>
          <div className="absolute bottom-[-49px] sm:block hidden rotate-180 z-[-1] right-[-31px]">
            <img src="assets/home/wrap2.svg" alt="" />
          </div>
          <div className="flex b-1 flex-col gap-[24px]">
            <div className="flex justify-center sm:mt-[38px] mt-[14px]">
              <img
                src="assets/home/icon7.svg"
                className="sm:h-full h-[27px]"
                alt=""
              />
            </div>
            <p className="sm:pl-[35px] sm:pr-[22px] pl-[6px] pr-[6px] font-[Outfit] font-[500] sm:text-[17.36px] text-[12px] sm:leading-[21px] leading-[14px] text-center text-[#FFFFFF]">
              Bridging two economic powerhouses, our air cargo integrator
              facilitates seamless trade between India and Germany.
            </p>
          </div>
          <div className="flex b-2 flex-col gap-[24px]">
            <div className="flex justify-center sm:mt-[38px] mt-[14px]">
              <img
                src="assets/home/icon8.svg"
                className="sm:h-full h-[27px]"
                alt=""
              />
            </div>
            <p className="sm:pl-[35px] sm:pr-[22px] pl-[6px] pr-[6px] font-[Outfit] font-[500] sm:text-[17.36px] text-[12px] sm:leading-[21px] leading-[14px] text-center text-[#FFFFFF]">
              Leveraging optimal routes and efficient operations, we ensure
              swift transportation, reducing transit times significantly.
            </p>
          </div>
          <div className="flex b-4 flex-col gap-[24px]">
            <div className="flex justify-center sm:mt-[38px] mt-[14px]">
              <img
                src="assets/home/icon9.svg"
                className="sm:h-full h-[27px]"
                alt=""
              />
            </div>
            <p className="sm:pl-[35px] sm:pr-[22px] pl-[6px] pr-[6px] font-[Outfit] font-[500] sm:text-[17.36px] text-[12px] sm:leading-[21px] leading-[14px] text-center text-[#FFFFFF]">
              Serving major cities and industrial hubs in both countries, our
              network offers extensive reach and accessibility.
            </p>
          </div>
          <div className="flex b-3 flex-col gap-[24px]">
            <div className="flex justify-center sm:mt-[38px] mt-[14px]">
              <img
                src="assets/home/icon10.svg"
                className="sm:w-[62px] w-[31px] sm:h-[52px] h-[27px] object-cover"
                alt=""
              />
            </div>
            <p className="sm:pl-[35px] sm:pr-[22px] pl-[6px] pr-[6px] font-[Outfit] font-[500] sm:text-[17.36px] text-[12px] sm:leading-[21px] leading-[14px] text-center text-[#FFFFFF]">
              Utilizing state-of-the-art tracking systems and digital solutions,
              we provide real-time visibility and control over your shipments.
            </p>
          </div>
        </div>
      </div>
      <div
        id="services"
        style={{ backgroundImage: "url(assets/our/bg.png)" }}
        className="w-full bg-cover sm:px-[100px] px-[14px] sm:pb-[174px] pb-[50px] pt-[43px]"
      >
        <OurSlider />
      </div>

      <div id="team" className="bg-[#f8faff] pt-[98px] sm:px-[110px] px-[20px]">
        <div className="flex justify-center items-center flex-col">
          <button className="who-btn  py-[4px] px-[27px] font-[Montserrat] font-[700] text-[18px] leading-[32px] text-center text-[#FFFFFF] mb-[23px]">
            Our Team
          </button>
          <h6 className="font-[Montserrat] font-[700] text-[36px] leading-[43.88px] text-center text-[#000000] mb-[23px]">
            WHO ARE WE
          </h6>
          <p className="max-w-[732px] w-full m-auto font-[Outfit] font-[400] text-[18px] leading-[22.68px] text-center text-[#545454] mb-[57px]">
            TBD for now just keep 3 boxes open. Is it possible to hide this
            until Monday?
          </p>
        </div>
        <div className="who-slider">
          <WhoSlider />
        </div>
      </div>
      <div
        id="about-us"
        className="bg-[#FFFFFF] overflow-hidden sm:py-[83px] py-[20px]"
      >
        <div className="flex justify-center mb-[90px] gap-[10px] items-end">
          <img src="assets/our/logo2.png" alt="" />
          <p className="font-[Montserrat] font-[700] text-[36px] leading-[43.88px] text-[#252B42]">
            Our Founders
          </p>
        </div>
        <div className="flex flex-col sm:gap-[80px] gap-[20px]">
          <div className="flex gap-[62px] flex-col justify-center items-start">
            <div className="flex sm:flex-row flex-col justify-center w-full sm:bg-transparent bg-[#F8F8F8] sm:border-transparent border border-[#000000] sm:pb-0 pb-[20px] rounded-[24px]">
              <div className="relative sm:left-[-84px] left-0">
                <img src="assets/home/item1.svg" className="" alt="" />
              </div>
              <div className="sm:pl-[106px] sm:pt-0 pt-[20px] pl-[14px]">
                <p className="font-[Montserrat] font-[700] text-[36px] leading-[43.88px] mb-[12px] text-[#252B42]">
                  Stefan Bazant
                </p>
                <img src="assets/our/logo4.png" alt="" />
                <p className="font-[Montserrat] font-[500] text-[17.04px] leading-[20.78px] mb-[27px] text-[#252B42]">
                  Owner and Founder
                </p>
                <p className="font-[Outfit] font-[400] text-[20px] leading-[26px] max-w-[504px] w-full text-[#252B42]">
                  “INDEUS embodies a paradigm shift within the landscape of
                  logistical solutions. We empower businesses to navigate the
                  complexities of global trade with confidence by ensuring
                  timely, secure and reliable transportation of goods as never
                  done before.”
                </p>
              </div>
            </div>
            <div className="flex sm:flex-row flex-col-reverse justify-center w-full sm:bg-transparent bg-[#F8F8F8] sm:border-transparent border border-[#000000] sm:pb-0 pb-[20px] rounded-[24px]">
              <div className="sm:pl-[106px] sm:pt-0 pt-[20px] pl-[20px]">
                <p className="font-[Montserrat] font-[700] text-[36px] leading-[43.88px] mb-[12px] text-[#252B42]">
                  Tushar Jani
                </p>
                <img src="assets/our/logo3.png" alt="" />
                <p className="font-[Montserrat] font-[500] text-[17.04px] leading-[20.78px] mb-[27px] text-[#252B42]">
                  CARGO SERVICE CENTER Chairman and Owner
                </p>
                <p className="font-[Outfit] font-[400] text-[20px] leading-[26px] max-w-[504px] w-full text-[#252B42]">
                  “Our commitment to innovation, customer-centricity and
                  unwavering reliability defines us as trusted partner for
                  cross-continental logistics excellence.”
                </p>
              </div>
              <div className="relative sm:right-[-84px] right-0">
                <img src="assets/our/photo4.png" className="" alt="" />
              </div>
            </div>
          </div>
          {/* <div className="flex gap-[62px] sm:flex-row flex-col justify-center items-center"></div> */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
