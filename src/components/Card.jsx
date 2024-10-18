import React from "react";
import LearningCardImg from "../assets/img/LearningCardImg.png";
import Man from "../assets/img/man.png";
import Star from "../assets/img/Star.png";
import CardStar from "../assets/img/CardStar.png";

export default function Card({AllCard}) {
    console.log();
    
  return (
    <>
      {AllCard.map((item,index)=>(
        <div className="w-full sm:w-6/12 xl:w-3/12 px-2 mt-4">
        <div className="bg-white p-[10px] rounded-[10px] shadow-[0_4px_30px_0_rgba(0,0,0,0.1)] relative  border-[0.5px] border-[#00000033]">
        <div className="relative">
        <div className={`flex items-center gap-[10px] bg-white py-[5px] px-[14px] rounded-[50px]  absolute top-[22px] right-4 ${item.overlayStyling}`}>
              <p className="text-[#00000099] font-inter text-[12px]">(4.2)</p>
              <img src={item.ratingStar} />
            </div>
          <img className="" src={item.img} />
          <div className={`bg-[#FF9800]  py-[5px] px-[20px] rounded-[50px]  absolute bottom-[8px] left-[10px] ${item.overlayStyling}`}>
              <p className="text-white font-inter text-[12px]">{item.newcard}</p>
             
            </div>
        </div>
          
         
          <p className="text-[16px] font-inter mt-2">
           {item.titel}
          </p>
          <div className={`flex items-center justify-between mt-2 ${item.star}`}>
            <div className="flex items-center gap-[10px]">
              <p className="text-[#00000099] font-inter text-[12px]">{item.rating}</p>
              <img className={`${item.star}`} src={Star} />
            </div>
            <span className="text-[#00000099] font-inter text-[12px]">
             {item.students}
            </span>
          </div>
          <hr className="bg-[#0000004D] h-[0.1px] mt-3" />
          <div className="flex items-center gap-5 mt-3">
            <p className="text-[20px] font-inter">{item.price}</p>
            <p className="text-[16px] font-inter font-light ">{item.notprice}</p>
            <p className="text-[12px] font-inter font-light text-[#00000080]">
             {item.offervalid}
            </p>
          </div>
          <div className="flex items-center gap-3 lg:gap-5 mt-[10px]">
            <div className="flex items-center gap-[2px] lg:gap-[10px]">
              {item.study}
              <spna className=" text-[10px] lg:text-[12px] font-inter text-[#00000099]">
               {item.lesson}
              </spna>
            </div>
            <div className="flex items-center gap-[2px] lg:gap-[10px]">
              {item.time}

              <spna className="text-[10px] lg:text-[12px]  font-inter text-[#00000099]">
               {item.times}
              </spna>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <span className={`text-[#C04000] font-normal text-[12px] font-inter bg-[#C040001A] py-[6px] px-[14px] rounded-[50px] ${item.star}`}>
             {item.Beginners}
            </span>
            <span className={`text-[#FF9800] font-normal  text-[12px] font-inter bg-[#FF98001A] py-[6px] px-[14px] rounded-[50px] ${item.star}`}>
              {item.Bestseller}
            </span>
          </div>
          <hr className="bg-[#0000004D] h-[0.1px] mt-3" />
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-[10px] mt-3">
              <img className="w-[36px]" src={item.man} />
              <div>
                <p className="text-[12px] font-inter text-[#C04000]">
                {item.name}
                </p>
                <p className="text-[10px] font-inter text-[#00000099] ">
                 {item.role}
                </p>
              </div>
            </div>
            <button className="text-[16px] font-inter px-[20px] py-[10px] bg-[#C04000] rounded-[50px] text-white">
            {item.btn}
            </button>
          </div>
        </div>
      </div>
      ))}
    </>
  );
}
