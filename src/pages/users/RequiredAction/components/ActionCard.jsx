import ProblemImg from "./Problemimg.png";
import Auditor from "./Auditor.png";

import { useState } from "react";
import { motion as Motion } from "framer-motion";
import ActionCardModal from "./ActionCardModal";
import RedCircle from "../assets/RedCircle";
import DocumentIcon from "../assets/DocumentIcon";

export default function ActionCard({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Motion.button
        onClick={openPopup}
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.99 }}
        className="mt-0 flex w-full min-w-0 flex-col gap-3 rounded-[12px] border border-gray-border1 bg-[#FFFFFF] p-4 shadowbox hover:cursor-pointer"
      >
        <div className="flex min-w-0 flex-col gap-2">
          <div className="flex min-w-0 justify-start gap-2">
            <span>
              <RedCircle/>
            </span>
            <h1 className="min-w-0 break-words text-left text-sm/4.5 font-medium text-[#212121]">
              {item.title}
            </h1>
          </div>
          <p className="ml-3 break-words text-left text-sm/4.5 font-normal text-text-gray">
            {item.question}
          </p>
        </div>

        <div className="flex min-w-0 flex-col gap-2 rounded-[8px] border border-gray-border bg-[#F6F6F6] p-3">
          <div className="flex min-w-0 flex-col gap-2">
            <h1 className="break-words text-left text-sm/4.5 font-medium text-[#E14026]">
              {item.problem}
            </h1>
            <p className="break-words text-left text-sm/4.5 font-normal text-text-gray">
              {item.recommendation}
            </p>
          </div>

          <div className="flex gap-2">
            <img className="size-7 shrink-0" src={ProblemImg} />
           <DocumentIcon/>
          </div>
        </div>

        <div className="flex min-w-0 flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <p className="text-text-gray text-xs/4 font-normal">PIC</p>
            <img className="size-6 shrink-0" src={Auditor} />
          </div>
          <div className="flex min-w-0 flex-wrap gap-2 text-right">
            <p className="text-text-gray text-xs/4">Next Action On</p>
            <p className="text-[#212121] text-xs/4">{item.nextAction}</p>
          </div>
        </div>
      </Motion.button>

      {isOpen && (
        <div className="fixed inset-1  bg-gray bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50 ">
          <ActionCardModal onClose={closePopup} />
        </div>
      )}
    </>
  );
}
