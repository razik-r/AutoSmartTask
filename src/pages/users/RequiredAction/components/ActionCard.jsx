import ProblemImg from "./Problemimg.png";
import Auditor from "./Auditor.png";

import React, { useState } from "react";
import ActionCardModal from "./ActionCardModal";

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
        className="max-w-[443.67px] w-auto flex-1 min-h-[264px] bg-[#FFFFFF] border border-gray-border1 rounded-[12px] p-4 mt-6 flex flex-col  gap-3 shadowbox "
      >
        <div className="flex flex-col gap-2  ">
          <div className="flex  justify-start  gap-2">
            <span>
              <svg
                width="8"
                height="13"
                viewBox="0 0 8 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="4" cy="9" r="4" fill="#E14026" />
              </svg>
            </span>
            <h1 className=" text-sm/4.5 font-medium  text=[#212121]">
              Is the fog machine functioning correctly?
            </h1>
          </div>
          <p className=" ml-4 text-sm/4.5 font-normal text-text-gray ">
            Is it well-maintained and free from clogs or leaks?
          </p>
        </div>

        <div className="flex flex-col max-w-[410px] min-h-[140px]  rounded-[8px] border border-gray-border p-3 gap-2 bg-[#F6F6F6]">
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
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M23.9166 11.8884H20.545C17.78 11.8884 15.5283 9.63671 15.5283 6.87171V3.50004C15.5283 2.85837 15.0033 2.33337 14.3616 2.33337H9.41496C5.82163 2.33337 2.91663 4.66671 2.91663 8.83171V19.1684C2.91663 23.3334 5.82163 25.6667 9.41496 25.6667H18.585C22.1783 25.6667 25.0833 23.3334 25.0833 19.1684V13.055C25.0833 12.4134 24.5583 11.8884 23.9166 11.8884Z"
                fill="#ED8F22"
              />
              <path
                d="M18.4334 2.57828C17.955 2.09995 17.1267 2.42662 17.1267 3.09162V7.16328C17.1267 8.86662 18.5734 10.2783 20.335 10.2783C21.4434 10.29 22.9834 10.29 24.3017 10.29C24.9667 10.29 25.3167 9.50828 24.85 9.04162C23.17 7.34995 20.16 4.30495 18.4334 2.57828Z"
                fill="#ED8F22"
              />
              <path
                d="M15.75 16.0416H8.75C8.27167 16.0416 7.875 15.645 7.875 15.1666C7.875 14.6883 8.27167 14.2916 8.75 14.2916H15.75C16.2283 14.2916 16.625 14.6883 16.625 15.1666C16.625 15.645 16.2283 16.0416 15.75 16.0416Z"
                fill="#ED8F22"
              />
              <path
                d="M13.4167 20.7084H8.75C8.27167 20.7084 7.875 20.3117 7.875 19.8334C7.875 19.355 8.27167 18.9584 8.75 18.9584H13.4167C13.895 18.9584 14.2917 19.355 14.2917 19.8334C14.2917 20.3117 13.895 20.7084 13.4167 20.7084Z"
                fill="#ED8F22"
              />
            </svg>
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
