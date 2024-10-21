import React, { useState } from "react";
import InformationNav from "./components/InformationNav";
import Video from "./assets/Video/videoplayback.mp4";
import AllStar from "./assets/img/Star.png";
import Man from "./assets/img/Man.png";
import { RightArrow } from "./components/Icon";
import { sections } from "./components/Helper";
export default function CourseDetails() {
  const [openSectionIndex, setOpenSectionIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenSectionIndex(openSectionIndex === index ? null : index);
  };
  return (
    <section>
      <div className="bg-[rgb(231,231,231)]  shadow-lg py-[22px]">
        <div className=" xl:max-w-[1360px] container mx-auto px-4 lg:px-10">
          <InformationNav />
        </div>
      </div>
      <div className=" xl:max-w-[1360px] container mx-auto px-4 lg:px-8 mt-5">
        <div className="flex flex-wrap  justify-between mx-[-12px]">
          <div className="w-full lg:w-8/12 relative px-3">
            <video controls className="w-full">
              <source src={Video} />
            </video>
            <div className="flex items-center justify-between mt-5">
              <p className="text-[#C04000] font-outfit text-2xl">
                Course Overview
              </p>
              <svg
                width="4"
                height="19"
                viewBox="0 0 4 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 0.75C0.9 0.75 0 1.65 0 2.75C0 3.85 0.9 4.75 2 4.75C3.1 4.75 4 3.85 4 2.75C4 1.65 3.1 0.75 2 0.75ZM2 14.75C0.9 14.75 0 15.65 0 16.75C0 17.85 0.9 18.75 2 18.75C3.1 18.75 4 17.85 4 16.75C4 15.65 3.1 14.75 2 14.75ZM2 7.75C0.9 7.75 0 8.65 0 9.75C0 10.85 0.9 11.75 2 11.75C3.1 11.75 4 10.85 4 9.75C4 8.65 3.1 7.75 2 7.75Z"
                  fill="black"
                />
              </svg>
            </div>
            <p className="font-jomolhari text-[32px] mt-5">
              The Complete 2024 Web Development Bootcamp
            </p>
            <div className="flex items-center mt-5">
              <span className="text-sm font-inter text-[#00000099] me-[10px]">
                (4.2)
              </span>
              <img src={AllStar} />
              <span className="text-sm font-inter text-[#00000099] ms-[35px]">
                3.4K Students
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-[500px] sm:min-w-full mt-5 ">
                <tbody>
                  <tr className="hover:bg-gray-100">
                    <td className="text-base font-inter p-2 ">Published on:</td>
                    <td className="text-base font-inter p-2">01 Sept, 2024</td>
                    <td className="text-base font-inter p-2">Language:</td>
                    <td className="text-base font-inter p-2">Hindi, English</td>
                  </tr>
                  <tr>
                    <td colSpan="4" className="h-5"></td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="text-base font-inter p-2">Videos:</td>
                    <td className="text-base font-inter p-2">
                      167 (54 total hours)
                    </td>
                    <td className="text-base font-inter p-2">Skill Level:</td>
                    <td className="text-base font-inter p-2">Expert</td>
                  </tr>
                  <tr>
                    <td colSpan="4" className="h-5"></td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="text-base font-inter p-2">Platform:</td>
                    <td className="text-base font-inter p-2">
                      Website, Desktop
                    </td>
                    <td className="text-base font-inter p-2">Instructor:</td>
                    <td className="text-base font-inter p-2">Vikash Boora</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className=" border-[#00000033] border rounded-[10px] p-[14px] mt-5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-inter font-medium text-[#6F6F6F]">
                  Your Current Progress
                </p>
                <p className="text-sm font-inter font-medium text-[#6F6F6F]">
                  67%
                </p>
              </div>
              <div className="bg-[#FF980033] h-[10px] w-full rounded-[64px] mt-2">
                <div className="bg-[#FF9800] h-full w-[30.7%] rounded-[64px] "></div>
              </div>
            </div>
            <p className="font-jomolhari lg:text-2xl text-[#C04000] mt-5">
              Description
            </p>
            <p className="text-sm lg:text-base font-inter mt-5">
              Welcome to the Complete Web Development Bootcamp, the only course
              you need to learn to code and become a full-stack web developer.
              With 150,000+ ratings and a 4.8 average, my Web Development course
              is one of the HIGHEST RATED courses in the history of Udemy!{" "}
            </p>
            <p className="text-sm lg:text-base font-inter">
              {" "}
              At 62+ hours, this Web Development course is without a doubt the
              most comprehensive web development course available online. Even
              if you have zero programming experience, this course will take you
              from beginner to mastery. Here's why:
            </p>
            <div className="ms-10">
              <ul className="list-disc ">
                <li className="text-sm lg:text-base font-inter">
                  The course is taught by the lead instructor at the App
                  Brewery, London's leading in-person programming bootcamp.
                </li>
                <li className="text-sm lg:text-base font-inter">
                  The course has been updated to be 2024 ready and you'll be
                  learning the latest tools and technologies used at large
                  companies such as Apple, Google and Netflix.
                </li>
                <li className="text-sm lg:text-base font-inter">
                  This course doesn't cut any corners, there are
                  beautiful animated explanation videos and tens of real-world
                  projects which you will get to build.
                </li>
                <li className="text-sm lg:text-base font-inter">
                  The curriculum was developed over a period of four years, with
                  comprehensive student testing and feedback.
                </li>
                <li className="text-sm lg:text-base font-inter">
                  We've taught over a million students how to code and many have
                  gone on to change their lives by becoming professional
                  developers or starting their own tech startup
                </li>
                <li className="text-sm lg:text-base font-inter">
                  You'll save yourself over 12,000 USD by enrolling, but still
                  get access to the same teaching materials and learn from the
                  same instructor and curriculum as our in-person programming
                  bootcamp.
                </li>
                <li className="text-sm lg:text-base font-inter">
                  The course is constantly updated with new content, with new
                  projects and modules determined by students - that's you!
                </li>
              </ul>
            </div>
            <p className="text-sm lg:text-base font-inter mt-8">
              We'll take you step-by-step through engaging video tutorials and
              teach you everything you need to know to succeed as a web
              developer.
            </p>
            <p className="text-sm mt-1 ">
              The course includes over 62 hours of HD video tutorials and builds
              your programming knowledge while making real-world websites and
              web apps
            </p>
            <hr className="bg-[#00000033] mt-5 h-[0.5px]" />
            <div className="flex items-center justify-between flex-wrap md:flex-none">
              <div>
                <p className="font-jomolhari lg:text-2xl text-[#C04000] mt-5">
                  Students Q&A
                </p>
                <p className="text-xs lg:text-sm mt-1">
                  Questions asked by students in this course. (14 questions)
                </p>
              </div>
              <button className="px-[21px] py-[7px] border border-[#C04000] rounded-[50px] hover:bg-[#C04000] hover:text-white duration-200 text-sm lg:text-base font-inter mt-4 md:mt-0">
                View all Question
              </button>
            </div>
            <div className="flex flex-col md:flex-row  justify-between mx-[-12px] mt-5">
              <div className=" md:w-3/12">
                <div className="flex items-center gap-5">
                  <img src={Man} alt="man" />
                  <div>
                    <p className="text-sm md:text-base font-semibold font-inter">
                      John Doe
                    </p>
                    <p className="text-xs font-inter mt-1">
                      Lecture 28 ✦ 2 days ago
                    </p>
                  </div>
                </div>
              </div>
              <div className=" md:w-9/12 px-3 mt-3 ms-10 md:mt-0 md:ms-0">
                <p className="text-sm amd:text-base font-semibold font-inter">
                  How to setup vscode environment?
                </p>
                <p className="text-xs md:text-sm font-inter mt-1">
                  Lorem ipsum dolor sit amet consectetur. Imperdiet vulputate
                  enim tortor nulla facilisi magna. Aenean ac commodo nisi
                  vitae. Lorem ipsum dolor sit amet consectetur. Imperdiet
                  vulputate enim tortor nulla facilisi magna. Aenean ac commodo
                  nisi vitae.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row  justify-between mx-[-12px] mt-5">
              <div className=" md:w-3/12">
                <div className="flex items-center gap-5">
                  <img src={Man} alt="man" />
                  <div>
                    <p className="text-sm md:text-base font-semibold font-inter">
                      John Doe
                    </p>
                    <p className="text-xs font-inter mt-1">
                      Lecture 28 ✦ 2 days ago
                    </p>
                  </div>
                </div>
              </div>
              <div className=" md:w-9/12 px-3 mt-3 ms-10 md:mt-0 md:ms-0">
                <p className="text-sm amd:text-base font-semibold font-inter">
                  How to setup vscode environment?
                </p>
                <p className="text-xs md:text-sm font-inter mt-1">
                  Lorem ipsum dolor sit amet consectetur. Imperdiet vulputate
                  enim tortor nulla facilisi magna. Aenean ac commodo nisi
                  vitae. Lorem ipsum dolor sit amet consectetur. Imperdiet
                  vulputate enim tortor nulla facilisi magna. Aenean ac commodo
                  nisi vitae.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row  justify-between mx-[-12px] mt-5">
              <div className=" md:w-3/12">
                <div className="flex items-center gap-5">
                  <img src={Man} alt="man" />
                  <div>
                    <p className="text-sm md:text-base font-semibold font-inter">
                      John Doe
                    </p>
                    <p className="text-xs font-inter mt-1">
                      Lecture 28 ✦ 2 days ago
                    </p>
                  </div>
                </div>
              </div>
              <div className=" md:w-9/12 px-3 mt-3 ms-10 md:mt-0 md:ms-0">
                <p className="text-sm amd:text-base font-semibold font-inter">
                  How to setup vscode environment?
                </p>
                <p className="text-xs md:text-sm font-inter mt-1">
                  Lorem ipsum dolor sit amet consectetur. Imperdiet vulputate
                  enim tortor nulla facilisi magna. Aenean ac commodo nisi
                  vitae. Lorem ipsum dolor sit amet consectetur. Imperdiet
                  vulputate enim tortor nulla facilisi magna. Aenean ac commodo
                  nisi vitae.
                </p>
              </div>
            </div>
            <hr className="bg-[#00000033] mt-5 h-[0.5px]" />

            <p className="font-jomolhari lg:text-2xl text-[#C04000] mt-5">
              Reviews
            </p>
            <div className="flex items-start  justify-between mx-[-12px] mt-5 flex-wrap sm:flex-row ">
              <div className="w-6/12 md:w-4/12 px-3 text-center md:text-start">
                <p className="text-base font-inter font-semibold">
                  Total Reviews
                </p>
                <p className="text-2xl font-inter font-semibold mt-1 text-[#C04000]">
                  1.3k
                </p>
                <p className="text-xs font-inter  mt-1 ">
                  12% growth in reviews on this year
                </p>
              </div>
              <div className="w-6/12 md:w-4/12 px-3 text-center  md:text-start ">
                <p className="text-base font-inter font-semibold">
                  Average Rating
                </p>
                <div className="flex items-center gap-3 justify-center md:justify-start ">
                  <p className="text-2xl font-inter  font-semibold mt-1 text-[#C04000]">
                    4.2
                  </p>
                  <img className="" src={AllStar} alt="allstar" />
                </div>
                <p className="text-xs font-inter  mt-1 ">
                  Average rating on this year
                </p>
              </div>
              <div className="w-6/12 md:w-4/12 px-3 text-center  mt-5 mx-auto md:text-start md:mt-0">
                <p className="text-base font-inter font-semibold">
                  Total Reviews
                </p>
                <p className="text-2xl font-inter font-semibold mt-1 text-[#C04000]">
                  1.3k
                </p>
                <p className="text-xs font-inter  mt-1 ">
                  12% growth in reviews on this year
                </p>
              </div>
            </div>
            <hr className="bg-[#00000033] mt-5 h-[0.5px]" />

            <div className="flex items-center justify-between mx-[-12px] flex-wrap mt-5">
              <div className="w-full md:w-6/12 px-3 ">
                <div className="border border-[#00000033] rounded-[7px] p-5">
                  <div className="flex items-center gap-5">
                    <img src={Man} alt="man" />
                    <div>
                      <p className="text-base font-semibold font-inter">
                        John Doe
                      </p>
                      <div className="flex items-center mt-1">
                        <span className="text-sm font-inter text-[#00000099] me-[10px]">
                          (4.2)
                        </span>
                        <img src={AllStar} alt="allstar" />
                      </div>
                    </div>
                  </div>
                  <p className="text-sm font-inter mt-2">
                    Lorem ipsum dolor sit amet consectetur. Imperdiet vulputate
                    enim tortor nulla facilisi magna. Aenean ac commodo nisi
                    vitae. In volutpat placerat urna consectetur sollicitudin
                    maecenas viverra. Viverra egestas amet sed arcu eu. Faucibus
                    enim potenti viverra a auctor quis ipsum integer placerat.
                  </p>
                  <p className="text-sm font-inter text-[#00000099] text-end mt-1">
                    2 days ago
                  </p>
                </div>
              </div>
              <div className="w-full  md:w-6/12 px-3 mt-6 md:mt-0">
                <div className="border border-[#00000033] rounded-[7px] p-5">
                  <div className="flex items-center gap-5">
                    <img src={Man} alt="man" />
                    <div>
                      <p className="text-base font-semibold font-inter">
                        John Doe
                      </p>
                      <div className="flex items-center mt-1">
                        <span className="text-sm font-inter text-[#00000099] me-[10px]">
                          (4.2)
                        </span>
                        <img src={AllStar} alt="allstar" />
                      </div>
                    </div>
                  </div>
                  <p className="text-sm font-inter mt-2">
                    Lorem ipsum dolor sit amet consectetur. Imperdiet vulputate
                    enim tortor nulla facilisi magna. Aenean ac commodo nisi
                    vitae. In volutpat placerat urna consectetur sollicitudin
                    maecenas viverra. Viverra egestas amet sed arcu eu. Faucibus
                    enim potenti viverra a auctor quis ipsum integer placerat.
                  </p>
                  <p className="text-sm font-inter text-[#00000099] text-end mt-1">
                    2 days ago
                  </p>
                </div>
              </div>
              <div className="w-full md:w-6/12 px-3 mt-6">
                <div className="border border-[#00000033] rounded-[7px] p-5">
                  <div className="flex items-center gap-5">
                    <img src={Man} alt="man" />
                    <div>
                      <p className="text-base font-semibold font-inter">
                        John Doe
                      </p>
                      <div className="flex items-center mt-1">
                        <span className="text-sm font-inter text-[#00000099] me-[10px]">
                          (4.2)
                        </span>
                        <img src={AllStar} alt="allstar" />
                      </div>
                    </div>
                  </div>
                  <p className="text-sm font-inter mt-2">
                    Lorem ipsum dolor sit amet consectetur. Imperdiet vulputate
                    enim tortor nulla facilisi magna. Aenean ac commodo nisi
                    vitae. In volutpat placerat urna consectetur sollicitudin
                    maecenas viverra. Viverra egestas amet sed arcu eu. Faucibus
                    enim potenti viverra a auctor quis ipsum integer placerat.
                  </p>
                  <p className="text-sm font-inter text-[#00000099] text-end mt-1">
                    2 days ago
                  </p>
                </div>
              </div>
              <div className="w-full md:w-6/12 px-3 mt-6">
                <div className="border border-[#00000033] rounded-[7px] p-5">
                  <div className="flex items-center gap-5">
                    <img src={Man} alt="man" />
                    <div>
                      <p className="text-base font-semibold font-inter">
                        John Doe
                      </p>
                      <div className="flex items-center mt-1">
                        <span className="text-sm font-inter text-[#00000099] me-[10px]">
                          (4.2)
                        </span>
                        <img src={AllStar} alt="allstar" />
                      </div>
                    </div>
                  </div>
                  <p className="text-sm font-inter mt-2">
                    Lorem ipsum dolor sit amet consectetur. Imperdiet vulputate
                    enim tortor nulla facilisi magna. Aenean ac commodo nisi
                    vitae. In volutpat placerat urna consectetur sollicitudin
                    maecenas viverra. Viverra egestas amet sed arcu eu. Faucibus
                    enim potenti viverra a auctor quis ipsum integer placerat.
                  </p>
                  <p className="text-sm font-inter text-[#00000099] text-end mt-1">
                    2 days ago
                  </p>
                </div>
              </div>
            </div>
            <button className="px-[21px] py-[7px] border border-[#C04000] rounded-[50px] hover:bg-[#C04000] hover:text-white duration-200 text-sm lg:text-base font-inter mt-5 ">
              Read All Reviews
            </button>
          </div>
          <div className="w-full lg:w-4/12 px-3 mt-10 lg:mt-0">
            {sections.map((item, index) => (
              <div key={index}>
                <div
                  onClick={() => handleToggle(index)}
                  className="flex justify-between items-center px-5 py-[12px] cursor-pointer  bg-[#F4F4F4] border"
                >
                  <div className="flex items-center space-x-2 ">
                    <span
                      className={`transition-transform duration-300 ${
                        openSectionIndex === index ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <svg
                        width="16"
                        height="10"
                        viewBox="0 0 16 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.0599 9.05989C8.77865 9.34079 8.3974 9.49857 7.9999 9.49857C7.6024 9.49857 7.22115 9.34079 6.9399 9.05989L1.2819 3.40389C1.00064 3.12249 0.84268 2.74089 0.842773 2.34304C0.842867 1.94518 1.00101 1.56365 1.2824 1.28239C1.56379 1.00113 1.9454 0.843168 2.34325 0.843262C2.74111 0.843356 3.12264 1.00149 3.4039 1.28289L7.9999 5.87889L12.5959 1.28289C12.8787 1.00952 13.2575 0.858143 13.6508 0.861374C14.0441 0.864605 14.4204 1.02218 14.6986 1.30016C14.9769 1.57815 15.1348 1.95429 15.1384 2.34759C15.142 2.74088 14.991 3.11986 14.7179 3.40289L9.0609 9.06089L9.0599 9.05989Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                    <p className="text-xs sm:text-base font-inter">{item.title}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-xs sm:text-sm font-inter">{item.time}</p>
                    <span>
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 21C12.3135 21.0016 13.6143 20.7437 14.8278 20.2411C16.0412 19.7384 17.1434 19.0009 18.071 18.071C19.0009 17.1434 19.7384 16.0412 20.2411 14.8278C20.7437 13.6143 21.0016 12.3135 21 11C21.0016 9.68655 20.7437 8.38572 20.2411 7.17225C19.7384 5.95878 19.0009 4.85659 18.071 3.92901C17.1434 2.99909 16.0412 2.26162 14.8278 1.75897C13.6143 1.25631 12.3135 0.998388 11 1.00001C9.68655 0.998388 8.38572 1.25631 7.17225 1.75897C5.95878 2.26162 4.85659 2.99909 3.92901 3.92901C2.99909 4.85659 2.26162 5.95878 1.75897 7.17225C1.25631 8.38572 0.998388 9.68655 1.00001 11C0.998388 12.3135 1.25631 13.6143 1.75897 14.8278C2.26162 16.0412 2.99909 17.1434 3.92901 18.071C4.85659 19.0009 5.95878 19.7384 7.17225 20.2411C8.38572 20.7437 9.68655 21.0016 11 21Z"
                          stroke="black"
                          stroke-opacity="0.5"
                          stroke-width="2"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7 11L10 14L16 8"
                          stroke="black"
                          stroke-opacity="0.5"
                          stroke-width="2"
                          strokeLinecap="round"
                          strokeLnejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                {openSectionIndex === index && (
                  <div className="">
                    {item.lessons.map((lesson, lessonIndex) => (
                      <div
                        key={`${index}-${lessonIndex}`}
                        className="  gap-[10px] py-[14px] ps-[45px] pe-5 "
                      >
                        <div className="flex  justify-between">
                       <div className="flex">
                       <p className="text-xs sm:text-base font-inter">{lessonIndex + 1}.</p>
                          <div className="ms-[10px]">
                            <p className="text-xs sm:text-sm font-inter">{lesson.title}</p>

                           <div className="flex items-center">
                           <div className="flex items-center gap-[10px] mt-1">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7.99723 14.6654C11.6791 14.6654 14.6639 11.6806 14.6639 7.9987C14.6639 4.3168 11.6791 1.33203 7.99723 1.33203C4.31533 1.33203 1.33057 4.3168 1.33057 7.9987C1.33057 11.6806 4.31533 14.6654 7.99723 14.6654Z"
                                  stroke="#C04000"
                                  stroke-width="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M6.33057 6.33203L8.6639 8.66536M10.6639 5.33203L7.33057 8.66536"
                                  stroke="#C04000"
                                  stroke-width="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>

                              <p className="text-xs text-[#00000099] font-inter ">
                                {lesson.time}
                              </p>
                            </div>
                            {/* <button className="text-xs font-inter text-[#C04000] ms-16 py-[2px] border border-[#00000080] px-[14px]">{lesson.btn}</button> */}
                           </div>
                          </div>
                       </div>
                          <span>
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11 21C12.3135 21.0016 13.6143 20.7437 14.8278 20.2411C16.0412 19.7384 17.1434 19.0009 18.071 18.071C19.0009 17.1434 19.7384 16.0412 20.2411 14.8278C20.7437 13.6143 21.0016 12.3135 21 11C21.0016 9.68655 20.7437 8.38572 20.2411 7.17225C19.7384 5.95878 19.0009 4.85659 18.071 3.92901C17.1434 2.99909 16.0412 2.26162 14.8278 1.75897C13.6143 1.25631 12.3135 0.998388 11 1.00001C9.68655 0.998388 8.38572 1.25631 7.17225 1.75897C5.95878 2.26162 4.85659 2.99909 3.92901 3.92901C2.99909 4.85659 2.26162 5.95878 1.75897 7.17225C1.25631 8.38572 0.998388 9.68655 1.00001 11C0.998388 12.3135 1.25631 13.6143 1.75897 14.8278C2.26162 16.0412 2.99909 17.1434 3.92901 18.071C4.85659 19.0009 5.95878 19.7384 7.17225 20.2411C8.38572 20.7437 9.68655 21.0016 11 21Z"
                            stroke="black"
                            stroke-opacity="0.5"
                            stroke-width="2"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M7 11L10 14L16 8"
                            stroke="black"
                            stroke-opacity="0.5"
                            stroke-width="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
