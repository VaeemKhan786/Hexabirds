import React from "react";
import LearningCardImg from "./assets/img/LearningCardImg.png";
import Man from "./assets/img/man.png";
import Card from "./components/Card";
import AllCard from "./components/AllCard";
import { HtmlCards, RecentlyAddedCourses } from "./components/Helper";
import SideNav from "./components/SideNav";

export default function ELearning() {
  //  console.log(OneCard,"dsfk");

  return (
    <main>
      {/* Continue Watching */}
      <section className="bg-Business-Coaching bg-cover py-[50px] lg:py-[100px]">
        <div className="xl:max-w-[1360px] container mx-auto px-4 lg:px-10 ">
          <div className="text-center xl:text-start">
            <h1 className="text-[24px] lg:text-[28px] font-jomolhari text-[#C04000] leading-[36px]">
              Continue Watching
            </h1>
            <p className="text-[12px] lg:text-[14px] font-inter text-[#00000099] mt-2 xl:mt-5 xl:max-w-[536px]">
              From foundation courses that lay the groundwork for your
              educational journey to advanced specialization
            </p>
          </div>
          <div className="flex items-center flex-col xl:flex-row justify-between mx-[-12px] mt-5">
            <div className="w-full lg:w-8/12 mx-auto xl:mx-0 xl:w-6/12 px-5 lg:px-2 ">
              <div className="bg-white p-[14px] flex items-start justify-between gap-[20px] flex-col sm:flex-row rounded-[14px] shadow-[0_4px_30px_0_rgba(0,0,0,0.1)]">
                <img
                  className="w-[90%] mx-auto sm:w-[34%] md:w-[28%] lg:w-[40%]"
                  src={LearningCardImg}
                />
                <div>
                  <span className="text-[#569468] font-semibold text-[12px] font-inter bg-[#5694681A] py-[6px] px-[14px] rounded-[50px]">
                    UI/UX DESIGN
                  </span>
                  <p className="text-[15px] lg:text-[20px] xl:text-[24px] font-outfit  mt-[10px] lg:leading-[28px]">
                    Complete HTML, CSS and JavaScript Course
                  </p>
                  <div className="flex items-center gap-3 lg:gap-5 mt-[10px]">
                    <div className="flex items-center gap-[2px] lg:gap-[10px]">
                      <svg
                        width="14"
                        height="11"
                        viewBox="0 0 14 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.99999 2.02091C8.01561 1.46776 8.5238 1.19043 10.0476 1.19043C11.0635 1.19043 12.0794 1.46726 13.0952 2.02091V9.57138C12.0796 9.06319 11.5714 8.80948 10.0476 8.80948C9.03174 8.80948 8.01587 9.06345 6.99999 9.57138M6.99999 2.02091V9.57138M6.99999 2.02091C5.98412 1.46726 4.96825 1.19043 3.95237 1.19043C2.42856 1.19043 1.92037 1.46776 0.904755 2.02091V9.57138C1.92063 9.06345 2.9365 8.80948 3.95237 8.80948C5.47618 8.80948 5.98437 9.06319 6.99999 9.57138"
                          stroke="#C04000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span className=" text-[10px] lg:text-[12px] font-inter text-[#00000099]">
                        10 Lesson
                      </span>
                    </div>
                    <div className="flex items-center gap-[2px] lg:gap-[10px]">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.00016 14.6663C11.6821 14.6663 14.6668 11.6816 14.6668 7.99967C14.6668 4.31778 11.6821 1.33301 8.00016 1.33301C4.31826 1.33301 1.3335 4.31778 1.3335 7.99967C1.3335 11.6816 4.31826 14.6663 8.00016 14.6663Z"
                          stroke="#C04000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6.3335 6.33301L8.66683 8.66634M10.6668 5.33301L7.3335 8.66634"
                          stroke="#C04000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <span className="text-[10px] lg:text-[12px]  font-inter text-[#00000099]">
                        1 h 30 min
                      </span>
                    </div>
                  </div>
                  <div className="h-[3px] rounded-[5px] bg-[#D9D9D9] w-full mt-[10px]">
                    <div className="bg-[#569468] w-[69%] h-full rounded-[5px]"></div>
                  </div>
                  <p className="text-[10px] lg:text-[12px] xl:text-[14px] text-[#00000099] font-inter leading-[17px] mt-[10px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industr...
                  </p>
                  <div className="flex items-center gap-[10px] mt-3">
                    <img className="w-[36px]" src={Man} />
                    <div>
                      <p className="text-[12px] font-inter text-[#C04000]">
                        Jhon Deo
                      </p>
                      <p className="text-[10px] font-inter text-[#00000099] ">
                        Mentor
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-8/12 mx-auto xl:mx-0 xl:w-6/12 px-5 lg:px-2 mt-5 xl:mt-0">
              <div className="bg-white p-[14px] flex items-start justify-between gap-[20px] flex-col sm:flex-row rounded-[14px] shadow-[0_4px_30px_0_rgba(0,0,0,0.1)]">
                <img
                  className="w-[90%] mx-auto sm:w-[34%] md:w-[28%] lg:w-[40%]"
                  src={LearningCardImg}
                />
                <div>
                  <span className="text-[#569468] font-semibold text-[12px] font-inter bg-[#5694681A] py-[6px] px-[14px] rounded-[50px]">
                    UI/UX DESIGN
                  </span>
                  <p className="text-[15px] lg:text-[20px] xl:text-[24px] font-outfit  mt-[10px] lg:leading-[28px]">
                    Complete HTML, CSS and JavaScript Course
                  </p>
                  <div className="flex items-center gap-3 lg:gap-5 mt-[10px]">
                    <div className="flex items-center gap-[2px] lg:gap-[10px]">
                      <svg
                        width="14"
                        height="11"
                        viewBox="0 0 14 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.99999 2.02091C8.01561 1.46776 8.5238 1.19043 10.0476 1.19043C11.0635 1.19043 12.0794 1.46726 13.0952 2.02091V9.57138C12.0796 9.06319 11.5714 8.80948 10.0476 8.80948C9.03174 8.80948 8.01587 9.06345 6.99999 9.57138M6.99999 2.02091V9.57138M6.99999 2.02091C5.98412 1.46726 4.96825 1.19043 3.95237 1.19043C2.42856 1.19043 1.92037 1.46776 0.904755 2.02091V9.57138C1.92063 9.06345 2.9365 8.80948 3.95237 8.80948C5.47618 8.80948 5.98437 9.06319 6.99999 9.57138"
                          stroke="#C04000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span className=" text-[10px] lg:text-[12px] font-inter text-[#00000099]">
                        10 Lesson
                      </span>
                    </div>
                    <div className="flex items-center gap-[2px] lg:gap-[10px]">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.00016 14.6663C11.6821 14.6663 14.6668 11.6816 14.6668 7.99967C14.6668 4.31778 11.6821 1.33301 8.00016 1.33301C4.31826 1.33301 1.3335 4.31778 1.3335 7.99967C1.3335 11.6816 4.31826 14.6663 8.00016 14.6663Z"
                          stroke="#C04000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6.3335 6.33301L8.66683 8.66634M10.6668 5.33301L7.3335 8.66634"
                          stroke="#C04000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <span className="text-[10px] lg:text-[12px]  font-inter text-[#00000099]">
                        1 h 30 min
                      </span>
                    </div>
                  </div>
                  <div className="h-[3px] rounded-[5px] bg-[#D9D9D9] w-full mt-[10px]">
                    <div className="bg-[#569468] w-[69%] h-full rounded-[5px]"></div>
                  </div>
                  <p className="text-[10px] lg:text-[12px] xl:text-[14px] text-[#00000099] font-inter leading-[17px] mt-[10px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industr...
                  </p>
                  <div className="flex items-center gap-[10px] mt-3">
                    <img className="w-[36px]" src={Man} />
                    <div>
                      <p className="text-[12px] font-inter text-[#C04000]">
                        Jhon Deo
                      </p>
                      <p className="text-[10px] font-inter text-[#00000099] ">
                        Mentor
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="w-full lg:w-6/12  px-3 ">
              <div className="bg-white p-[14px] flex items-start justify-between gap-[20px] rounded-[14px] shadow-[0_4px_30px_0_rgba(0,0,0,0.1)]">
                <img className="w-[38.5%]" src={LearningCardImg} />
                <div>
                  <span className="text-[#569468] font-semibold text-[12px] font-inter bg-[#5694681A] py-[6px] px-[14px] rounded-[50px]">
                    UI/UX DESIGN
                  </span>
                  <p className="text-[24px] font-outfit leading-[28px]">
                    Complete HTML, CSS and JavaScript Course
                  </p>
                  <div className="flex items-center gap-5 mt-[10px]">
                    <div className="flex items-center gap-[10px]">
                      <svg
                        width="14"
                        height="11"
                        viewBox="0 0 14 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.99999 2.02091C8.01561 1.46776 8.5238 1.19043 10.0476 1.19043C11.0635 1.19043 12.0794 1.46726 13.0952 2.02091V9.57138C12.0796 9.06319 11.5714 8.80948 10.0476 8.80948C9.03174 8.80948 8.01587 9.06345 6.99999 9.57138M6.99999 2.02091V9.57138M6.99999 2.02091C5.98412 1.46726 4.96825 1.19043 3.95237 1.19043C2.42856 1.19043 1.92037 1.46776 0.904755 2.02091V9.57138C1.92063 9.06345 2.9365 8.80948 3.95237 8.80948C5.47618 8.80948 5.98437 9.06319 6.99999 9.57138"
                          stroke="#C04000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span className="text-[12px] font-inter text-[#00000099]">
                        10 Lesson
                      </span>
                    </div>
                    <div className="flex items-center gap-[10px]">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.00016 14.6663C11.6821 14.6663 14.6668 11.6816 14.6668 7.99967C14.6668 4.31778 11.6821 1.33301 8.00016 1.33301C4.31826 1.33301 1.3335 4.31778 1.3335 7.99967C1.3335 11.6816 4.31826 14.6663 8.00016 14.6663Z"
                          stroke="#C04000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6.3335 6.33301L8.66683 8.66634M10.6668 5.33301L7.3335 8.66634"
                          stroke="#C04000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <span className="text-[12px] font-inter text-[#00000099]">
                        1 h 30 min
                      </span>
                    </div>
                  </div>
                  <div className="h-[3px] rounded-[5px] bg-[#D9D9D9] w-full mt-[10px]">
                    <div className="bg-[#569468] w-[69%] h-full rounded-[5px]"></div>
                  </div>
                  <p className="text-[14px] text-[#00000099] font-inter leading-[17px] mt-[10px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industr...
                  </p>
                  <div className="flex items-center gap-[10px] mt-3">
                    <img src={Man} />
                    <div>
                      <p className="text-[12px] font-inter text-[#C04000]">
                        Jhon Deo
                      </p>
                      <p className="text-[10px] font-inter text-[#00000099] ">
                        Mentor
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* Top Rated Courses for You */}
      <section className="bg-white lg:py-[100px] py-[50px]">
        <div className="xl:max-w-[1360px] container mx-auto px-4 lg:px-10 ">
          <div className="text-center xl:text-start">
            <h1 className="text-[24px] lg:text-[28px] font-jomolhari text-[#C04000] leading-[36px]">
              Top Rated Courses for You
            </h1>
            <p className="text-[12px] lg:text-[14px] font-inter text-[#00000099] mt-2 xl:mt-5 xl:max-w-[536px]">
              From foundation courses that lay the groundwork for your
              educational journey to advanced specialization
            </p>
          </div>
          <AllCard OneCard={HtmlCards} />
        </div>
      </section>

      {/* Recently Added Courses */}
      <section className="bg-custom-pattern bg-cover bg-center  lg:py-[100px] py-[50px]">
        <div className="xl:max-w-[1360px] container mx-auto px-4 lg:px-10 ">
          <div className="text-center xl:text-start">
            <h1 className="text-[24px] lg:text-[28px] font-jomolhari text-[#C04000] leading-[36px]">
              Recently Added Courses
            </h1>
            <p className="text-[12px] lg:text-[14px] font-inter text-[#00000099] mt-2 xl:mt-5 xl:max-w-[536px]">
              From foundation courses that lay the groundwork for your
              educational journey to advanced specialization
            </p>
          </div>
          <AllCard OneCard={RecentlyAddedCourses} />
        </div>
      </section>

      <section className="py-[50px]  lg:py-[100px]">
        <div className="xl:max-w-[1360px] container mx-auto px-4 lg:px-10 ">
          <div className="text-center xl:text-start">
            <p className="text-[24px] lg:text-[28px] font-jomolhari leading-[36px]">
              10,000 results for{" "}
              <span className="text-[#C04000]"> “Courses”</span>
            </p>
            <p className="text-[12px] lg:text-[14px] font-inter text-[#00000099] mt-2 xl:mt-5 xl:max-w-[536px]">
              From foundation courses that lay the groundwork for your
              educational journey to advanced specialization
            </p>
          </div>
          <div className="flex items-center justify-between mx--3">
            <div className="w-[300px] mx-3">
              <SideNav />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
