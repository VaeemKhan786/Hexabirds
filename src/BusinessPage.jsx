import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeaderSide from "./assets/img/headerSide.png";
import YellowArrow from "./assets/img/YellowArrow.png";
import GroupImg from "./assets/img/GroupImg.webp";
import BusinessSideImg from "./assets/img/BusinessSideImg.png";
import Man from "./assets/img/Man.webp";
import {
  OurExperties,
  TechExperts,
  AppDevelopmentIcon,
  FronEndDevelopment,
  BackEndDevelopment,
  Design,
  MEETOURCLIENTS,
  slides,
  icons,
} from "./components/Helper";
import "./App.css";
import Projectimg1 from "./assets/img/Projectimg1.webp";
import Projectimg2 from "./assets/img/Projectimg2.webp";
import Projectimg3 from "./assets/img/Projectimg3.webp";
import Projectimg4 from "./assets/img/Projectimg4.webp";
import Projectimg6 from "./assets/img/Projectimg6.webp";
import Slider from "react-slick/lib/slider";
import Accordions from "./components/Accordion";
import Twitter from "./assets/img/icons/Twitter.png";
import Browser from "./assets/img/icons/Browser.png";
import Facebook from "./assets/img/icons/Facebook.png";
import FrequentlyImg1 from "./assets/img/FrequentlyImg1.png";
import FrequentlyImg2 from "./assets/img/FrequentlyImg2.png";
import FrequentlyImg3 from "./assets/img/FrequentlyImg3.png";
export default function BusinessPage() {
  const settings = {
    dots: false,
    arrows: false,
    autoplaySpeed: 1000,
    cssEase: "ease-in-out",
    infinite: true,
    speed: 500,
    slidesToShow: 3,

    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <main>
      {/* Hero Section */}
      <header className="bg-custom-pattern bg-cover bg-center ">
        <div className=" xl:max-w-[1360px] container mx-auto px-4 lg:px-10">
          <div className="flex-col-reverse lg:flex-row  flex items-center justify-center lg:justify-between min-h-[70vh]">
            <div className=" w-full lg:w-6/12 text-center lg:text-start ">
              <p className="text-[#C04000] font-jomolhari text-[18px] xl:text-[20px] font-normal mt-7 xl:mt-0">
                Hexabirds for your Business Growth
              </p>
              <h1 className="text-[30px] leading-[35px] md:text-[35px] md:leading-[45px] lg:text-[50px] lg:leading-[70px]  xl:text-[72px]  font-normal text-[#000000] xl:leading-[89px] font-jomolhari mt-4 xl:mt-[30px]">
                Promoting
                <span className="bg-[#C04000] text-white px-2">Business</span>
                In Various Strategies
              </h1>
              <p className="text-[14px] xl:text-[16px] font-normal font-inter text-[#00000099] mt-4 xl:mt-[30px] xl:border-s-4 border-[#FF9800] xl:ps-[17px] leading-[19px] max-w-[500px] mx-auto lg:mx-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard.
              </p>

              <div className="relative">
                <button className="bg-[#C04000]  font-inter text-white  px-[23px] py-2 rounded-[50px] text-[16px] mt-4 xl:mt-[30px]">
                  More Details
                </button>
                <img
                  className="absolute left-[150px] top-4 hidden lg:block"
                  src={YellowArrow}
                />
              </div>
            </div>

            <div className=" w-10/12 md:w-8/12  lg:w-5/12 px-6 mt-4 ">
              <img
                className="w-[100%] sm:w-6/12 md:w-8/12 lg:w-full mx-auto"
                src={HeaderSide}
              />
            </div>
          </div>
        </div>
      </header>
      {/* OUR SERVICES Section */}
      <section>
        <div className="xl:max-w-[1360px] container mx-auto px-4 lg:px-10 py-[40px] lg:py-[100px]">
          <div className="text-center">
            <h1 className="text-[14px] lg:text-[20px]">MEET OUR CLIENTS</h1>
            <h1 className="text-[25px]  lg:text-[35px] xl:text-[48px] font-jomolhari font-normal text-[#C04000] lg:mt-[15px] xl:mt-[30px]  xl:leading-[62px] ">
              Trusted by Leading Brand
            </h1>
            <p className=" text-[12px] lg:text-[14px] font-inter  lg:leading-[18px]  mt-3  xl:mt-[30px] w-full xl:w-[50%] mx-auto text-[#00000099]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry
            </p>
          </div>
          <div className="flex items-center justify-center lg:px-[70px] flex-wrap flex-col sm:flex-row mx-[-12px] mt-[20px] lg:mt-[30px]">
            {icons.map((item, index) => (
              <div
                key={index}
                className="w-full lg:w-4/12 xl:w-3/12 md:w-4/12 sm:w-6/12 px-3 mt-[20px] lg:mt-[30px]"
              >
                <div className="bg-white  rounded-lg overflow-hidden p-3 xl:p-5   border border-[#0000004D] text-center">
                  <img
                    className="w-[50px] h-[50px] mx-auto mb-4"
                    src={item.icon}
                    alt={item.name}
                  />
                  <h1 className="text-[14px] lg:text-[16px] xl:text-[20px]  font-semibold text-[#333] mb-2 font-outfit">
                    {item.name}
                  </h1>
                  <p className="text-[14px] font-medium text-[#C04000] font-inter">
                    Read More...  
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Business Section */}
      <section className="bg-Business-Coaching bg-cover ">
        <div className="xl:max-w-[1360px] container mx-auto px-4 lg:px-10 ">
          <div className="flex-col lg:flex-row  flex items-center justify-center lg:justify-between pt-5">
            <div className="w-10/12 md:w-6/12  lg:w-5/12 px-6 mt-4 relative">
              <img
                className="w-[95%] h-full sm:w-6/12 md:w-8/12 lg:w-full mx-auto"
                src={GroupImg}
                alt="GroupImg"
              />
              <img
                className="absolute top-[120px] left-0 w-[55px] h-[27px] hidden lg:block"
                src={BusinessSideImg}
                alt="BusinessSideImg"
              />
            </div>
            <div className="w-full lg:w-7/12 xl:w-6/12 text-center lg:text-start mb-6 lg:mb-0">
              <p className="text-[#C04000]  font-jomolhari text-[20px] sm:text-[30px] leading-[30px] lg:text-[35px] xl:text-[48px] lg:leading-[40px] xl:leading-[62px] font-normal mt-5 xl:mt-0">
                How Business Coaching Can Help you?
              </p>
              <p className=" text-[14px] lg:text-[16px] xl:text-[18px] font-outfit mt-2 xl:mt-[30px] ">
                We have lot of great service that can enough to help you
              </p>
              <p className=" text-[12px] lg:text-[14px] font-outfit mt-2 xl:mt-[30px] text-[#00000099]">
                Lorem ipsum dolor sit amet consectetur. Imperdiet vulputate enim
                tortor nulla facilisi magna. Aenean ac commodo nisi vitae. In
                volutpat placerat urna consectetur sollicitudin maecenas
                viverra.
              </p>

              <div className="flex flex-wrap justify-between items-center mt-2 xl:mt-[30px] gap-y-6">
                <div className="w-6/12  sm:w-4/12  lg:text-left border-e-[0.5px] border-[#0000004D]">
                  <h2 className="text-[20px] sm:text-[30px] md:text-[40px] xl:text-[48px] font-bold text-[#C04000] font-outfit">
                    18
                    <sub className="text-[12px] sm:text-[16px] text-[#00000099] ms-1">
                      Years
                    </sub>
                  </h2>
                  <h2 className=" ps-[7px] text-[10px] md:text-[14px]  lg:mt-[-10px] xl:text-[18px] font-outfit">
                    Experience
                  </h2>
                </div>

                <div className="w-6/12 sm:w-4/12 lg:mx-auto  lg:text-left mx-auto   sm:border-e-[0.5px] border-[#0000004D] ">
                  <h2 className="text-[20px] sm:text-[30px] md:text-[40px] xl:text-[48px] font-bold lg:text-center text-[#C04000] font-outfit  lg:ms-0">
                    20
                    <sub className="text-[12px] sm:text-[16px]text-[#00000099] ms-1">
                      K
                    </sub>
                  </h2>
                  <h2 className="text-[10px] md:text-[14px]  lg:mt-[-10px] xl:text-[18px] font-outfit lg:text-center ">
                    Happy Clients
                  </h2>
                </div>

                <div className="w-full sm:w-4/12  lg:text-left">
                  <h2 className="text-[20px] sm:text-[30px] md:text-[40px] xl:text-[48px] font-bold text-[#C04000] font-outfit lg:text-end ">
                    1200+
                    <sub className="text-[12px] sm:text-[16px] text-[#00000099] ms-1">
                      Years
                    </sub>
                  </h2>
                  <h2 className="lg:mt-[-10px] text-[10px] md:text-[14px]   xl:text-[18px]  font-outfit lg:text-center lg:ms-[-10px] ">
                    Projects Done
                  </h2>
                </div>
              </div>

              <button className="bg-[#C04000] font-inter text-[12px] lg:mb-6 xl:mb-0  text-white px-4 py-2  lg:px-[23px] lg:py-2 rounded-[50px] lg:text-[16px] mt-6 xl:mt-[30px]">
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Tech Experts Section */}
      <section className="bg-Business-Coaching bg-cover py-[50px] lg:py-[100px] ">
        <div className="xl:max-w-[1360px] container mx-auto px-4 lg:px-10">
          <div className="text-center">
            <h1 className="text-[30px] lg:text-[48px] font-jomolhari font-normal text-[#C04000] leading-10">
              Our Tech Experts
            </h1>
            <p className="text-[14px] lg:text-[16px] font-inter sm:w-[70%] lg:max-w-[40%] mx-auto text-[#00000099] mt-3 lg:mt-[30px]">
              From foundation courses that lay the groundwork for your
              educational journey to advanced specialization
            </p>
          </div>
          <div className="flex flex-wrap justify-center  lg:justify-between lg:gap-0 mt-3 lg:mt-[30px]">
            {TechExperts.map((item, index) => (
              <div
                key={index}
                className="w-[70%] md:w-6/12 lg:w-3/12 text-center px-[10px]    "
              >
                <div className=" group overflow-hidden   transition-colors duration-300 mt-5">
                  <div className="relative overflow-hidden">
                    <div
                      className="absolute -bottom-full  w-full h-full group-hover:left-0 group-hover:bottom-[0px]  duration-300 flex items-end pb-[32px] justify-center gap-4"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(192, 64, 0, 0) 0%, rgba(192, 64, 0, 0.88) 67.07%)",
                      }}
                    >
                      <img src={Browser} alt="Browser" />
                      <img src={Twitter} alt="Twitter" />
                      <img src={Facebook} alt="Facebook" />
                    </div>
                    <img
                      src={item.img}
                      alt="Tech Expert"
                      className="w-full h-auto shadow-md rounded-t-[13px] a"
                    />
                  </div>
                  <div className="p-5 bg-white rounded-b-[10px]">
                    <p className="lg:text-[20px] font-medium text-[#C04000]">
                      {item.name}
                    </p>
                    <p className="lg:text-[16px] text-[#00000099] mt-1">
                      {item.role}
                    </p>
                    {/* <Internet/> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US Section */}
      <section>
        <div className="bg-[#F5F5F5] py-[50px] lg:py-[100px]">
          <div className="xl:max-w-[1360px] container mx-auto px-4 lg:px-10 ">
            <div className="text-center">
              <p className="text-[16px] lg:text-[20px] font-inter">
                WHY CHOOSE US
              </p>
              <h1 className="text-[25px] lg:text-[48px] font-jomolhari font-normal text-[#C04000] xl:mt-[30px]">
                The Reason we Are Different in Business
              </h1>
              <p className="text-[18px] lg:text-[24px] font-outfit text-[#00000099] mt-[10px] xl:mt-[30px]">
                Trust, Diligence, Succeed
              </p>
              <p className="text-[12px] lg:text-[14px] font-inter text-[#00000099] w-[90%]  mt-[10px]  xl:mt-[30px] lg:max-w-[53%] mx-auto">
                Our Courses are meticulously crafted with insights from numerous
                job descriptions and industry experts, ensuring you acquire
                skills relevant to the current job market.
              </p>
            </div>
            <div className="flex mx-[-8px] items-center justify-between flex-wrap lg:flex-nowrap  mt-5">
              {/* App Development */}
              <div className="w-full sm:w-[48%] lg:w-4/12 lg:px-2   ">
                <h1 className="text-[16px] lg:text-[20px] font-outfit">
                  App Development
                </h1>
                <div className="bg-white pb-5 rounded-[10px] mt-[10px]">
                  <div className="flex items-center justify-between flex-wrap ">
                    {AppDevelopmentIcon.map((item, index) => (
                      <div key={index} className="w-4/12 text-center mt-[20px]">
                        <img className="mx-auto" src={item.img} />
                        <p className="xl:text-[16px] text-[14px] font-outfit  mt-3">
                          {item.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Front-End */}
              <div className="w-full sm:w-[48%]  lg:w-4/12 lg:mx-2  mt-4 sm:mt-0 ">
                <h1 className="text-[16px] lg:text-[20px] font-outfit">
                  Front-End
                </h1>
                <div className="bg-white pb-5  rounded-[10px] mt-[10px]">
                  <div className="flex items-center justify-between flex-wrap ">
                    {FronEndDevelopment.map((item, index) => (
                      <div key={index} className="w-4/12 text-center mt-[20px]">
                        <img className="mx-auto" src={item.img} />
                        <p className="xl:text-[16px] text-[14px] font-outfit  mt-3">
                          {item.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Back-End */}
              <div className=" w-full  lg:w-4/12 mx-auto lg:mx-2   mt-4 sm:mt-7 lg:mt-0 ">
                <div className="flex items-center justify-between flex-col sm:flex-row lg:flex-col mx-[-8px]">
                  <div className="w-full sm:6/12 px-2 ">
                    <h1 className="text-[16px] lg:text-[20px] font-outfit">
                      Back-End
                    </h1>
                    <div className="bg-white pb-5 xl:mb-[20px] pe-[6px] rounded-[10px] mt-[10px]">
                      <div className="flex items-center justify-between flex-wrap ">
                        {BackEndDevelopment.map((item, index) => (
                          <div
                            key={index}
                            className="w-4/12 text-center mt-[20px]"
                          >
                            <img className="mx-auto" src={item.img} />
                            <p className="xl:text-[16px] text-[13px] font-outfit  mt-3">
                              {item.name}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="w-full sm:6/12 px-2 lg:mt-[20px] xl:mt-[0px]">
                    <h1 className="text-[16px] lg:text-[20px] font-outfit">
                      UI/UX Design
                    </h1>
                    <div className="bg-white pb-5  pe-[6px] rounded-[10px] mt-[10px]">
                      <div className="flex items-center justify-between flex-wrap ">
                        {Design.map((item, index) => (
                          <div
                            key={index}
                            className="w-4/12 text-center mt-[20px]"
                          >
                            <img className="mx-auto" src={item.img} />
                            <p className="xl:text-[16px] text-[13px] font-outfit  mt-3">
                              {item.name}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* OUR EXPERTIES Section */}
      <section>
        <div className="bg-white py-[50px] lg:py-[100px]">
          <div className="xl:max-w-[1360px] container mx-auto px-4 lg:px-10 ">
            <div className="flex mx-[-8px] items-center justify-between flex-col lg:flex-row">
              <div className="w-full sm:w-[48%] md:w-7/12 lg:w-[45%] lg:px-4 ">
                <img
                  className="xl:w-[90%] w-full md:w-[90%] lg:w-[90%]  mx-auto lg:mx-0"
                  src={Man}
                  alt="Man"
                />
              </div>
              <div className="w-full   lg:w-7/12 lg:px-2 text-center lg:text-start">
                <p className="text-[16px] lg:text-[18px] font-inter xl:text-[20px] leading-[24px] mt-5 xl:mt-0">
                  OUR EXPERTIES
                </p>
                <h1 className="text-[25px] w-full lg:text-[35px] xl:text-[48px] font-jomolhari font-normal text-[#C04000] lg:mt-[15px] xl:mt-[30px]  xl:leading-[62px] lg:w-[70%]">
                  We Provide Features For Your Business Website
                </h1>
                <p className=" text-[12px] lg:text-[14px] font-inter  lg:leading-[18px]  mt-3  xl:mt-[30px] ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <p className=" text-[12px] lg:text-[14px] font-inter  lg:leading-[18px]  mt-3 xl:mt-[30px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry. Lorem Ipsum has
                  been the industry's standard Lorem Ipsum is simply dummy text
                  of the printing and typesetting industry.
                </p>
              </div>
            </div>
            <div className="flex mx-[-8px] items-center justify-between mt-[30px] flex-wrap">
              {OurExperties.map((item, index) => (
                <div
                  key={index}
                  className="w-full sm:w-6/12 lg:w-4/12  px-2 mt-5 sm:mx-auto"
                >
                  <div className="p-5  border-[0.5px] border-[#0000004D] rounded-[10px]">
                    {item.img}
                    <h1 className="text-[14px]  lg:text-[20px] font-outfit mt-[14px]">
                      {item.name}
                    </h1>
                    <p className="text-[12px] lg:text-[14px] font-inter mt-[14px] leading-[17px]">
                      {item.titel}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* MEET OUR CLIENTS Section */}
      <section className="bg-[#F5F5F5] py-[50px] lg:py-[100px]">
        <div className="xl:max-w-[1360px] container mx-auto px-4 lg:px-10 ">
          <div className="text-center">
            <h1 className="text-[14px] lg:text-[20px]">MEET OUR CLIENTS</h1>
            <h1 className="text-[25px]  lg:text-[35px] xl:text-[48px] font-jomolhari font-normal text-[#C04000] lg:mt-[15px] xl:mt-[30px]  xl:leading-[62px] ">
              Trusted by Leading Brand
            </h1>
            <p className=" text-[12px] lg:text-[14px] font-inter  lg:leading-[18px]  mt-3  xl:mt-[30px] w-full xl:w-[50%] mx-auto text-[#00000099]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry
            </p>
          </div>
          <div className="flex items-center justify-center lg:px-[70px] flex-wrap mx-[-12px] mt-[20px] lg:mt-[30px]">
            {MEETOURCLIENTS.map((item, index) => (
              <div
                key={index}
                className="lg:w-3/12  w-full sm:w-6/12 mb-6  px-3"
              >
                <div className="bg-white p-[26px] shadow-lg rounded-lg flex items-center justify-center   h-[132px]">
                  <img className={`  h-full `} src={item.img} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS Section */}
      <section className="py-[50px] lg:py-[100px]">
        <div className="w-[1360] mx-auto px-4 lg:px-10">
          <h1 className="text-[14px] lg:text-[20px]">PROJECTS</h1>
          <h1 className="text-[25px] lg:text-[35px] xl:text-[48px] font-jomolhari font-normal text-[#C04000] lg:mt-[15px] xl:mt-[30px] xl:leading-[62px]">
            Best Work Showcase
          </h1>
          <p className="text-[12px] lg:text-[14px] font-inter lg:leading-[16px] text-[#00000099] mt-2 xl:mt-[30px] w-full sm:w-[50%] lg:w-[35%]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard Lorem
          </p>
          <div className="grid_container mt-5">
            <div className="item1">
              <img
                src={Projectimg1}
                alt="Project Image"
                className="w-full h-[470px] object-cover"
              />
              <div className="py-[14px]">
                <button className="text-white text-[12px] lg:text-[14px] font-inter font-medium  bg-[#C04000] py-[5px] px-[10px] rounded-md  hover:bg-orange-700">
                  Namo Prime Services
                </button>
                <p className="text-gray-500 mt-2 text-[12px] font-inter">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the...
                </p>
              </div>
            </div>
            <div className="item2">
              <img
                src={Projectimg2}
                alt="Project Image"
                className="w-full h-[373px] object-cover"
              />
              <div className="py-[14px]">
                <button className="text-white text-[12px] lg:text-[14px] font-inter font-medium  bg-[#C04000] py-[5px] px-[10px] rounded-md  hover:bg-orange-700">
                  Namo Prime Services
                </button>
                <p className="text-gray-500 mt-2 text-[12px] font-inter">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the...
                </p>
              </div>
            </div>
            <div className="item3">
              <img
                src={Projectimg3}
                alt="Project Image"
                className="w-full h-[470px] object-cover"
              />
              <div className="py-[14px]">
                <button className="text-white text-[12px] lg:text-[14px] font-inter font-medium  bg-[#C04000] py-[5px] px-[10px] rounded-md  hover:bg-orange-700">
                  Namo Prime Services
                </button>
                <p className="text-gray-500 mt-2 text-[12px] font-inter">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the...
                </p>
              </div>
            </div>
            <div className="item4">
              <img
                src={Projectimg4}
                alt="Project Image"
                className="w-full h-[373px] object-cover"
              />
              <div className="py-[14px]">
                <button className="text-white text-[12px] lg:text-[14px] font-inter font-medium  bg-[#C04000] py-[5px] px-[10px] rounded-md  hover:bg-orange-700">
                  Namo Prime Services
                </button>
                <p className="text-gray-500 mt-2 text-[12px] font-inter">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the...
                </p>
              </div>
            </div>
            <div className="item5">
              <img
                src={Projectimg1}
                alt="Project Image"
                className="w-full h-[532px] object-cover"
              />
              <div className="py-[14px]">
                <button className="text-white text-[12px] lg:text-[14px] font-inter font-medium  bg-[#C04000] py-[5px] px-[10px] rounded-md  hover:bg-orange-700">
                  Namo Prime Services
                </button>
                <p className="text-gray-500 mt-2 text-[12px] font-inter">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the...
                </p>
              </div>
            </div>
            <div className="item6">
              <img
                src={Projectimg6}
                alt="Project Image"
                className="w-full h-[373px] object-cover"
              />
              <div className="py-[14px]">
                <button className="text-white text-[12px] lg:text-[14px] font-inter font-medium  bg-[#C04000] py-[5px] px-[10px] rounded-md  hover:bg-orange-700">
                  Namo Prime Services
                </button>
                <p className="text-gray-500 mt-2 text-[12px] font-inter">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* TESTIMONIAL Section */}
      <section className="bg-slider-img bg-cover   bg-center lg:bg-top py-[50px] xl:py-[100px] ">
        <div className="xl:max-w-[1360px] container mx-auto px-4 lg:px-10">
          <div className="text-white text-center">
            <h1 className="text-[14px] lg:text-[20px] font-normal">
              TESTIMONIAL
            </h1>
            <h1 className="text-[25px] lg:text-[35px] xl:text-[48px] font-jomolhari font-normal lg:mt-[15px] xl:mt-[30px] xl:leading-[62px]">
              What Our Clients Says
            </h1>
            <p className="text-[12px] lg:text-[14px] font-inter lg:leading-[16px] text-[#FFFFFF99] mt-2 xl:mt-[30px] w-full sm:w-[50%] lg:w-[58%] mx-auto">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <Slider className="mt-5 lg:mt-[30px]" {...settings}>
            {slides.map((item, index) => (
              <div key={index} className=" lg:w-4/12 px-5">
                <div className=" bg-white  p-5 rounded-[7px] ">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                      <img className="w-[60px]" src={item.img} />
                      <div>
                        <p className="text-[12px] lg:text-[14px] font-inter font-semibold">
                          {item.name}
                        </p>
                        <p className="text-[12px] lg:text-[14px] font-inter font-normal text-[#00000099]">
                          {item.role}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-[10px]">
                      <p className="text-[14px] font-inter text-[#00000099]">
                        {item.rating}
                      </p>
                      <img src={item.img2} />
                    </div>
                  </div>
                  <p className="text-[14px] font-inter leading-[17px] mt-[10px]">
                    {item.title}
                  </p>
                  <p className="text-[14px] font-inter leading-[17px] text-[#C04000] mt-[10px]">
                    {item.ReadMore}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      {/* Frequently Ask Questions Section */}
      <section className="bg-Business-Coaching bg-cover py-[50px] lg:py-[100px] ">
        <div className="xl:max-w-[1360px] container mx-auto px-4 lg:px-10  relative">
          <img
            className="absolute xxl:top-[-50px] xxl:left-[-40px] xl:top-[-50px] xl:left-[40px] hidden xl:block"
            src={FrequentlyImg1}
          />
          <img
            className="absolute  xxl:bottom-[-30px] xxl:left-[-100px] xl:bottom-[-30px] xl:left-[50px] hidden xl:block"
            src={FrequentlyImg2}
          />
          <img
            className="absolute xl:top-[50px] xl:right-[60px] h-[93px] hidden xl:block"
            src={FrequentlyImg3}
          />

          <div className="max-w-4xl mx-auto text-center ">
            <h1 className="text-[25px] lg:text-[35px] xl:text-[48px] text-[#C04000] font-jomolhari font-normal xl:leading-[62px]">
              Frequently Ask Questions
            </h1>
            <button className="text-[14px] lg:text-[16px] font-inter text-[#00000099] mt-3 ">
              How can we help?
            </button>
          </div>
          <div className="py-[40px] lg:py-[80px]">
            <Accordions />
          </div>
        </div>
      </section>
    </main>
  );
}
