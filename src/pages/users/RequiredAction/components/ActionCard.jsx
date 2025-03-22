import ProblemImg from "./Problemimg.png";
import Auditor from "./Auditor.png";

import React, { useState } from "react";
import ActionCardModal from "./ActionCardModal";
import RedCircle from "../assets/RedCircle";
import DocumentIcon from "../assets/DocumentIcon";

export default function ActionCard() {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={openPopup}
        className=" w-auto   bg-[#FFFFFF] border border-gray-border1 rounded-[12px] p-4 mt-6 flex flex-col  gap-3 shadowbox hover:cursor-pointer "
      >
        <div className="flex flex-col gap-2  ">
          <div className="flex  justify-start  gap-2">
            <span>
              <RedCircle/>
            </span>
            <h1 className=" text-sm/4.5 font-medium  text=[#212121]">
              Is the fog machine functioning correctly?
            </h1>
          </div>
          <p className=" ml-3 text-sm/4.5 font-normal text-text-gray ">
            Is it well-maintained and free from clogs or leaks?
          </p>
        </div>

        <div className="flex flex-col   rounded-[8px] border border-gray-border p-3 gap-2 bg-[#F6F6F6]">
          <div className="flex flex-col gap-2 ">
            <h1 className="text-sm/4.5 font-medium text-[#E14026] text-left">
              Blocked nozzles or leaks can reduce performance and pose safety
              risks.
            </h1>
            <p className="text-sm/4.5 font-normal text-text-gray text-left">
              Clean nozzles, check for leaks, and use recommended fog fluid.
            </p>
          </div>

          <div className="flex gap-2">
            <img className="size-7" src={ProblemImg} />
           <DocumentIcon/>
          </div>
        </div>

        <div className="flex gap-2 items-center justify-between ">
          <div className="flex gap-2 items-center">
            <p className="text-text-gray text-xs/4 font-normal">PIC</p>
            <img className="size-6" src={Auditor} />
          </div>
          <div className="flex gap-2">
            <p className="text-text-gray text-xs/4 ">Next Action On </p>
            <p className="text-[#212121] text-xs/4">03 sep 2024</p>
          </div>
        </div>
      </button>

      {isOpen && (
        <div className="fixed inset-1  bg-gray bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50 ">
          <ActionCardModal onClose={closePopup} />
        </div>
      )}
    </>
  );
}
