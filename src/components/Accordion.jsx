import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function Accordions() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const renderIcon = (value) => {
    return open === value ? "-" : "+";
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between ">
        <div className="w-full  md:w-6/12 px-2">
          <Accordion
            open={open === 1}
            className="mb-5 rounded-[10px] bg-white p-2 lg:p-[12px] "
          >
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="border-b-0 transition-colors flex justify-start items-center w-full text-left text-[14px] lg:text-[16px] font-medium"
            >
              <span className="text-[20px] lg:text-2xl me-2 mb-[5px] lg:mb-2  lg:me-5">{renderIcon(1)}</span>
              Frequently Asked Questions?
            </AccordionHeader>
            <AccordionBody className="mt-2 text-[12px] lg:text-[14px] text-gray-600 font-inter leading-[17px] ms-[18px] lg:ms-7" >
              Lorem ipsum dolor sit amet consectetur. Imperdiet vulputate enim
              tortor nulla facilisi magna. Aenean ac commodo nisi vitae. In
              volutpat placerat urna consectetur sollicitudin maecenas viverra.
              Viverra egestas amet sed arcu eu. Faucibus enim potenti viverra a
              auctor quis ipsum integer placerat.
            </AccordionBody>
          </Accordion>

          <Accordion
            open={open === 2}
            className="mb-5 rounded-[10px] bg-white p-2 lg:p-3 "
          >
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className="border-b-0 transition-colors flex justify-start items-center w-full text-left text-[14px] lg:text-[16px] font-medium"
            >
              <span className="text-[20px] lg:text-2xl me-2 mb-[5px] lg:mb-2  lg:me-5">{renderIcon(2)}</span>
              Frequently Asked Questions?
            </AccordionHeader>
            <AccordionBody className="mt-2 text-[12px] lg:text-[14px] text-gray-600 font-inter leading-[17px] ms-[18px] lg:ms-7">
              Lorem ipsum dolor sit amet consectetur. Imperdiet vulputate enim
              tortor nulla facilisi magna. Aenean ac commodo nisi vitae. In
              volutpat placerat urna consectetur sollicitudin maecenas viverra.
              Viverra egestas amet sed arcu eu. Faucibus enim potenti viverra a
              auctor quis ipsum integer placerat.
            </AccordionBody>
          </Accordion>
        </div>
        <div className="w-full md:w-6/12 px-3">
        <Accordion
            open={open === 3}
            className="mb-5 rounded-[10px] bg-white p-2 lg:p-3 "
          >
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className="border-b-0 transition-colors flex justify-start items-center w-full text-left text-[14px] lg:text-[16px] font-medium"
            >
              <span className="text-[20px] lg:text-2xl me-2 lg:mb-2 mb-[5px] lg:me-5">{renderIcon(3)}</span>
              Frequently Asked Questions?
            </AccordionHeader>
            <AccordionBody className="mt-2 text-[12px] lg:text-[14px] text-gray-600 font-inter leading-[17px] ms-[18px] lg:ms-7">
              Lorem ipsum dolor sit amet consectetur. Imperdiet vulputate enim
              tortor nulla facilisi magna. Aenean ac commodo nisi vitae. In
              volutpat placerat urna consectetur sollicitudin maecenas viverra.
              Viverra egestas amet sed arcu eu. Faucibus enim potenti viverra a
              auctor quis ipsum integer placerat.
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 4}
            className="mb-5 rounded-[10px] bg-white p-2 lg:p-3 "
          >
            <AccordionHeader
              onClick={() => handleOpen(4)}
              className="border-b-0 transition-colors flex justify-start items-center w-full text-left text-[14px] lg:text-[16px] font-medium"
            >
              <span className="text-[20px] lg:text-2xl me-2 mb-[5px] lg:mb-2  lg:me-5">{renderIcon(4)}</span>
              Frequently Asked Questions?
            </AccordionHeader>
            <AccordionBody className="mt-2 text-[12px] lg:text-[14px] text-gray-600 font-inter leading-[17px] ms-[18px] lg:ms-7">
              Lorem ipsum dolor sit amet consectetur. Imperdiet vulputate enim
              tortor nulla facilisi magna. Aenean ac commodo nisi vitae. In
              volutpat placerat urna consectetur sollicitudin maecenas viverra.
              Viverra egestas amet sed arcu eu. Faucibus enim potenti viverra a
              auctor quis ipsum integer placerat.
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 5}
            className=" rounded-[10px] bg-white p-2 lg:p-3 "
          >
            <AccordionHeader
              onClick={() => handleOpen(5)}
              className="border-b-0 transition-colors flex justify-start items-center w-full text-left text-[14px] lg:text-[16px] font-medium"
            >
              <span className="text-[20px] lg:text-2xl me-2 mb-[5px] lg:mb-2  lg:me-5">{renderIcon(5)}</span>
              Frequently Asked Questions?
            </AccordionHeader>
            <AccordionBody className="mt-2 text-[12px] lg:text-[14px] text-gray-600 font-inter leading-[17px] ms-[18px] lg:ms-7">
              Lorem ipsum dolor sit amet consectetur. Imperdiet vulputate enim
              tortor nulla facilisi magna. Aenean ac commodo nisi vitae. In
              volutpat placerat urna consectetur sollicitudin maecenas viverra.
              Viverra egestas amet sed arcu eu. Faucibus enim potenti viverra a
              auctor quis ipsum integer placerat.
            </AccordionBody>
          </Accordion>
        </div>
      </div>
    </>
  );
}
