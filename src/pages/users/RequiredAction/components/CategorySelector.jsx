import React, { useState } from "react";

export default function CategorySelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null); // Track the selected option

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option); // Update the selected option
     // Close the dropdown
  };

  const options = [
    {id:1, value:"Category Value"},
    {id:2, value:"Category Value"},
    {id:3, value:"Category Value"},
    {id:4, value:"Category Value"},
    {id:5, value:"Category Value"},
    {id:6, value:"Category Value"}
  
    
  ];

  return (
    <div className="relative">
      {/* Dropdown Button */}
      <div className="flex w-full  items-center justify-between py-2.5 pr-2.5 pl-3 border border-[#FFCCC5] rounded-lg">
        <h1 className="text-xs/4 text-text-gray">Category Select</h1>
        <button onClick={toggleDropdown} className="hover:cursor-pointer">
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
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0  min-w-2/4 flex flex-col   rounded-lg border border-gray-border1  text-text-gray   text-xs/4 bg-[#FFFFFF] shadowbox1 hover:cursor-pointer">
          {options.map((option) => (
            <div
              key={option.id}
              className={`flex items-center justify-start py-2.5 px-4  text-nowrap ${
                selectedOption === option.id ? "bg-neutral-100 text-[#212121] gap-2" : ""
              }`}
              onClick={() => handleOptionClick(option.id)}
            >
              <p className="  text-xs/4">{option.value}</p>
              {selectedOption === option.id && (
                <svg
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
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}