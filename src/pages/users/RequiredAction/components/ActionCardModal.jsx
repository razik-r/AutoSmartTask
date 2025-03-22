import CloseIcon from "../assets/CloseIcon";
import DocumentIcon from "../assets/DocumentIcon";
import GreenCheckIcon from "../assets/GreeenCheckIcon";
import PurpleDocumentIcon from "../assets/PurpleDocumentIcon";
import RedCircle from "../assets/RedCircle";
import Auditor from "./Auditor.png";
import ProblemImg from "./ProblemImg.png";

import React, { useState } from "react";
export default function ActionCardModal({ onClose }) {

  return (
    <>
      <div className="flex  scale-80 sm:scale-100    p-4 border-2 border-[#F1F1F1] rounded-[24px] bg-[#FFFFFF] gap-4 items-center ">
        <div className="flex flex-col gap-0 sm:gap-6">

          <div className="flex">
            <h1 className="text-[16px]/5 font-medium">Problem</h1>

            <button
              onClick={onClose}
              className="  text-gray-500 hover:text-gray-700 hover:cursor-pointer transition-colors duration-200 ml-auto "
            >
             <CloseIcon/>
            </button>
          </div>

          <div className="flex flex-col gap-3  p-3 border border-gray-border1 rounded-[12px] bg-[#FCFCFC]  ">
            <div className="  after:content-[''] after:block after:w-full after:h-[1px] after:bg-[#F1F1F1] after:mt-3 mb-1">
              <div className="flex flex-col gap-2">
                <h1 className="text-sm/4.5 font-medium text-[#E14026] max-w-105 break-words  ">
                  Blocked nozzles or leaks can reduce performance and pose
                  safety risks.
                </h1>
                <p className="text-sm/4.5 text-[#84838A] max-w-105 break-words">
                  Clean nozzles, check for leaks, and use recommended fog fluid.
                </p>
              </div>

              <div className="flex mt-2 gap-2">
                <img className="size-[27px]" src={ProblemImg} />
                <img className="size-[27px]" src={ProblemImg} />
                <img className="size-[27px]" src={ProblemImg} />

             <DocumentIcon/>
             
             <DocumentIcon/>

             <DocumentIcon/>
               
              </div>
            </div>

            <div className="flex items-center justify-between gap-2 ">
              <div className="flex gap-2 items-center">
                <p className="text-xs/4 text-[#84838A]">Center Code</p>
                <div className="flex gap-0.5 items-center">
                
                 <GreenCheckIcon/>
                  <p className="text-xs/4 text-[#212121]">C12345</p>
                </div>
              </div>

              <div className="flex gap-3">
                <p className="text-xs/4 text-[#84838A]">Term</p>
                <p className="text-xs/4 text-[#212121]">Term 1 2025</p>
              </div>
            </div>

            <div className="flex gap-14 justify-space-between items-center">
              <p className="text-xs/4 ">PIC</p>

              <img className="size-6 " src={Auditor} />
            </div>
          </div>

          <div className="p-3 border border-gray-border1 rounded-[12px] bg-[#FCFCFC]">
            <div className="flex items-baseline gap-2 ">
              <RedCircle/>

              <div className="flex flex-col gap-2 ">
                <p className="text-xs/4.5 text-[#212121]">
                  Is the fog machine functioning correctly?
                </p>
                <p className="text-xs/4.5 text-[#84838A]">
                  Is it well-maintained and free from clogs or leaks?
                </p>
                <div className="flex items-center gap-1">
                <PurpleDocumentIcon/>

                  <p className="text-xs/4.5 text-[#212121]">Q12345</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex grow flex-col pb-30  bg-[#FCFCFC] gap-3 border border-gray-border1 rounded-[8px] p-3 ">
          <h1 className="flex text-xs/4">Remarks</h1>
          <div className="flex max-w-103.5  border border-gray-border1 rounded-[8px] px-2.5 py-3 ">
            <p className="text-sm/4.5 text-[#84838A]">
              Clean nozzles, check for leaks, and use recommended fog fluid.
              Clean nozzles, check for leaks, and use recommended fog fluid.
              Clean nozzles, check for leaks, and use recommended fog fluid.
              Clean nozzles, check for leaks, and use recommended fog fluid
            </p>
          </div>

          <div className="flex  gap-2">
            <img className="size-[27px]" src={ProblemImg} />
            <img className="size-[27px]" src={ProblemImg} />
            <img className="size-[27px]" src={ProblemImg} />

          <DocumentIcon/>
          <DocumentIcon/>
          <DocumentIcon/>
          </div>

          <div className="flex">
            <p className="text-text-gray text-xs/4">24 Jan, 2025</p>
          </div>
        </div>
      </div>
    </>
  );
}
