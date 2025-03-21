
import React, { useState } from "react";

export default function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option); // Update the selected option
     // Close the dropdown
  };

  const options = [
    {id:1, value:"Dropdown Value"},
    {id:2, value:"Dropdown Value"},
    {id:3, value:"Dropdown Value"},
    {id:4, value:"Dropdown Value"},
    {id:5, value:"Dropdown Value"},
    {id:6, value:"Dropdown Value"}
  
    
  ];

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="font-inter flex w-auto border   py-2.5 pr-2.5 pl-3 border-gray-border rounded-[8px] mt-3 gap-2 justify-between items-center hover:border-[#FFCCC5] hover:shadow hover:cursor-pointer"
      >
        <h1 className="text-[#84838A] font-normal text-xs/4">{props.text}</h1>
        {!isOpen ? (
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
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 12.5L10 7.5L5 12.5"
                stroke="#E14026"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          )}
      </button>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="absolute mt-2 flex flex-col max-w-60 sm:min-w-60   rounded-lg border border-gray-border1     text-xs/4 bg-[#FFFFFF] z-999 shadowbox1 hover:cursor-pointer ">
        {options.map((option) => (
          <div
            key={option.id}
            className={`flex items-center  py-2.5 px-4 group text-nowrap hover:bg-[#F6F6F6] pr-3.5 gap-2 justify-between
            `
          }
            onClick={() => handleOptionClick(option.id)}
          >
            <p className="  text-xs/4 transition-transform duration-200 ease-in-out transform group-hover:text-[#212121] ">{option.value}</p>
            <svg
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-1"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.0625 6.5625L4.6875 9.1875L9.9375 3.5625"
                  stroke="#E14026"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

           
          </div>
        ))}
      </div>
      )}
    </div>
  );
}
