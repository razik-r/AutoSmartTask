import React, { useState } from "react";

export default function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="font-inter flex w-auto border max-h-10 max-w-35 sm:min-w-35 py-2.5 pr-2.5 pl-3 border-gray-border rounded-[8px] mt-3 gap-2 justify-between items-center hover:bg-neutral-50 hover:shadow"
      >
        <h1 className="text-[#212121] font-normal text-xs/4">{props.text}</h1>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 7.5L10 12.5L5 7.5"
            stroke="#E14026"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="absolute mt-2 min-w-35 rounded-[12px] border-2 bg-[#FFFFFF] border-gray-border1 shadowbox">
          <div className="p-2">
            <a
              href="#"
              className="block px-4 py-2 text-sm rounded-lg text-gray-700 hover:bg-gray-100"
            >
              Option 1
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm rounded-lg text-gray-700 hover:bg-gray-100"
            >
              Option 2
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm rounded-lg text-gray-700 hover:bg-gray-100"
            >
              Option 3
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
