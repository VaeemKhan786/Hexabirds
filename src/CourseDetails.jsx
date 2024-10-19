import React from "react";
import InformationNav from "./components/InformationNav";
import Video from "./assets/Video/videoplayback.mp4";
import AllStar from "./assets/img/Star.png";
import Man from "./assets/img/Man.png";
export default function CourseDetails() {
  return (
    <section>
      <div className="bg-[#E7E7E7]  shadow-lg py-[22px]">
        <div className=" xl:max-w-[1360px] container mx-auto px-4 lg:px-10">
          <InformationNav />
        </div>
      </div>
      <div className=" xl:max-w-[1360px] container mx-auto px-4 lg:px-10 mt-5">
        <div className="flex items-center justify-between mx-[-12px]">
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
        <td className="text-base font-inter p-2">167 (54 total hours)</td>
        <td className="text-base font-inter p-2">Skill Level:</td>
        <td className="text-base font-inter p-2">Expert</td>
      </tr>
      <tr>
        <td colSpan="4" className="h-5"></td>
      </tr>
      <tr className="hover:bg-gray-100">
        <td className="text-base font-inter p-2">Platform:</td>
        <td className="text-base font-inter p-2">Website, Desktop</td>
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
            <p className="text-sm lg:text-base font-inter">
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
            <p>
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
            <div className="flex  justify-between mx-[-12px] mt-5">
              <div className="w-3/12">
                <div className="flex items-center gap-5">
                  <img src={Man} alt="man" />
                  <div>
                    <p className="text-base font-semibold font-inter">
                      John Doe
                    </p>
                    <p className="text-xs font-inter mt-1">
                      Lecture 28 ✦ 2 days ago
                    </p>
                  </div>
                </div>
              </div>
              <div className=" w-9/12 px-3">
                <p className="text-base font-semibold font-inter">
                  How to setup vscode environment?
                </p>
                <p className="text-sm font-inter mt-1">
                  Lorem ipsum dolor sit amet consectetur. Imperdiet vulputate
                  enim tortor nulla facilisi magna. Aenean ac commodo nisi
                  vitae. Lorem ipsum dolor sit amet consectetur. Imperdiet
                  vulputate enim tortor nulla facilisi magna. Aenean ac commodo
                  nisi vitae.
                </p>
              </div>
            </div>
            <div className="flex  justify-between mx-[-12px] mt-5">
              <div className="w-3/12">
                <div className="flex items-center gap-5">
                  <img src={Man} alt="man" />
                  <div>
                    <p className="text-base font-semibold font-inter">
                      John Doe
                    </p>
                    <p className="text-xs font-inter mt-1">
                      Lecture 28 ✦ 2 days ago
                    </p>
                  </div>
                </div>
              </div>
              <div className=" w-9/12 px-3">
                <p className="text-base font-semibold font-inter">
                  How to setup vscode environment?
                </p>
                <p className="text-sm font-inter mt-1">
                  Lorem ipsum dolor sit amet consectetur. Imperdiet vulputate
                  enim tortor nulla facilisi magna. Aenean ac commodo nisi
                  vitae. Lorem ipsum dolor sit amet consectetur. Imperdiet
                  vulputate enim tortor nulla facilisi magna. Aenean ac commodo
                  nisi vitae.
                </p>
              </div>
            </div>
            <div className="flex  justify-between mx-[-12px] mt-5">
              <div className="w-3/12">
                <div className="flex items-center gap-5">
                  <img src={Man} alt="man" />
                  <div>
                    <p className="text-base font-semibold font-inter">
                      John Doe
                    </p>
                    <p className="text-xs font-inter mt-1">
                      Lecture 28 ✦ 2 days ago
                    </p>
                  </div>
                </div>
              </div>
              <div className=" w-9/12 px-3">
                <p className="text-base font-semibold font-inter">
                  How to setup vscode environment?
                </p>
                <p className="text-sm font-inter mt-1">
                  Lorem ipsum dolor sit amet consectetur. Imperdiet vulputate
                  enim tortor nulla facilisi magna. Aenean ac commodo nisi
                  vitae. Lorem ipsum dolor sit amet consectetur. Imperdiet
                  vulputate enim tortor nulla facilisi magna. Aenean ac commodo
                  nisi vitae.
                </p>
              </div>
            </div>
            <hr className="bg-[#00000033] mt-5 h-[0.5px]" />
            <div>
              <p className="font-jomolhari lg:text-2xl text-[#C04000] mt-5">
                Reviews
              </p>
              <div className="flex items-center justify-between mx-[-12px] mt-5 flex-wrap sm:flex-row ">
                <div className="w-6/12 md:w-4/12 px-3 text-center">
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
                <div className="w-6/12 md:w-4/12 px-3 text-center mt-3">
                  <p className="text-base font-inter font-semibold">
                    Average Rating
                  </p>
                  <div className="flex items-center gap-3 justify-center ">
                    <p className="text-2xl font-inter  font-semibold mt-1 text-[#C04000]">
                      4.2
                    </p>
                    <img className="" src={AllStar} alt="allstar" />
                  </div>
                  <p className="text-xs font-inter  mt-1 ">
                    Average rating on this year
                  </p>
                </div>
                <div className="w-6/12 md:w-4/12 px-3 text-center mt-5 mx-auto ">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
