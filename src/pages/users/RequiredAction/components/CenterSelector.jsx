import React, { useState } from "react";
import CategorySelector from "./CategorySelector";
import ChevronDown from "../../../../assets/ChevronDown";
import ChevronUp from "../../../../assets/ChevronUp";
import Search from "../../../../assets/Search";


export default function CenterSelector() {
  const [searchInput, setSearchInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
 
  const [selectedOption, setSelectedOption] = useState({
    id: 1,
    value: "Al Naseem Center (TH)",
    indicator: "Not Submitted",
    bgcolor: "bg-[#FFECD6]",
    textcolor: "text-[#ED8F22]",
  });
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleOptionClick = (option) => {
    setSelectedOption(option); 
    setIsOpen(false);
  };
  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };
 
  const options = [
    {
      id: 1,
      value: "Al Naseem Center (TH)",
      indicator: "Not Submitted",
      bgcolor: "bg-[#FFECD6]",
      textcolor: "text-[#ED8F22]",
    },
    {
      id: 2,
      value: "Dubai 1 - Diera",
      indicator: "Not Submitted",
      bgcolor: "bg-[#FFECD6]",
      textcolor: "text-[#ED8F22]",
    },
    {
      id: 3,
      value: "Ras Al Khaima",
      indicator: "Not Submitted",
      bgcolor: "bg-[#FFECD6]",
      textcolor: "text-[#ED8F22]",
    },
    {
      id: 4,
      value: "Fujairah",
      indicator: "Score 98",
      bgcolor: "bg-[#C5E2F1]",
      textcolor: "text-[#138CC9]",
    },
    {
      id: 5,
      value: "Karbala",
      indicator: "Not Submitted",
      bgcolor: "bg-[#FFECD6]",
      textcolor: "text-[#ED8F22]",
    },
    {
      id: 6,
      value: "Karbala",
      indicator: "Not Submitted",
      bgcolor: "bg-[#FFECD6]",
      textcolor: "text-[#ED8F22]",
    },
  ];

  const filteredOptions = options.filter((option) =>
    option.value.toLowerCase().includes(searchInput.toLowerCase())
  );


  return (
    <>
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="border sm:min-w-73 border-gray-border1 rounded-[8px] flex    p-2 font-inter   sm:justify-between items-center hover:cursor-pointer "
        >
          <div className="flex flex-col gap-1 justify-center items-start">
            <h1 className="font-medium text-xs leading-4 tracking-[-0.5%]">
              {selectedOption.value}
              {console.log(selectedOption.value)}
            </h1>

            <div className="flex gap-2">
              <div
                className={`bg-[#FCECEA] rounded-sm p-1 max-h-[15px] min-w-15.25 flex justify-center items-center`}
              >
                <h2 className="text-[10px] text-[#E14026] font-normal leading-3">
                  7 problems
                </h2>
              </div>

              <div
                className={`${selectedOption.bgcolor} rounded-[4px] p-1 min-w-15.25 max-h-[15px] flex justify-center items-center`}
              >
                <h2
                  className={`${selectedOption.textcolor} text-[10px] text-nowrap font-normal leading-3`}
                >
                  {selectedOption.indicator}
                </h2>
              </div>
            </div>
          </div>
          {!isOpen ? (
            <ChevronDown/>
          ) : (
            <ChevronUp/>
          )}
        </button>
        
          <div className={`absolute p-4 w-full  mt-1 border border-gray-border1 flex flex-col z-999 bg-[#FFFFFF] rounded-lg overflow-y-scroll  shadowbox1 transition-all duration-200 ease-in-out transform origin-top ${
            isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
          } overflow-hidden`}>
            <div className="flex px-2.5 py-3 justify-between rounded-lg border border-gray-border -mt-2 mb-2 gap-2">
              <Search/>

              <input
                type="text"
                placeholder="Search Centers"
                className="text-xs bg-transparent outline-none placeholder-[#84838A] font-normal text-gray-600 w-full "
                value={searchInput}
                onChange={handleSearchInputChange}

              />
            </div>

            <CategorySelector />

            <div className="flex flex-col pt-2 gap-4">
              

              {filteredOptions
                .filter((option) => option.id !== selectedOption.id)
                .map((option) => (
                  <div
                    key={option.id}
                    href="#"
                    onClick={() => handleOptionClick(option)}
                    className="flex flex-col gap-1 justify-center items-start hover:cursor-pointer transition-transform  duration-200 ease-in-out transform group hover:scale-105 "
                  >
                    <h1 className="font-normal text-sm text-text-gray leading-4 tracking-[-0.5%] hover:font-medium group-hover:text-[#212121]  
                    ">
                      {option.value}
                    </h1>

                    <div className="flex gap-2.5 ">
                      <div className="bg-[#FCECEA] rounded-[4px] p-1  max-h-4  flex justify-center items-center">
                        <h2 className="text-[10px] text-[#E14026] font-normal leading-3 text-nowrap">
                          7 problems
                        </h2>
                      </div>

                      <div
                        className={`${option.bgcolor} rounded-[4px] p-1 max-h-4 flex justify-center items-center`}
                      >
                        <h2
                          className={`${option.textcolor} text-[10px] text-nowrap font-normal leading-3`}
                        >
                          {option.indicator}
                        </h2>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
       
      </div>
    </>
  );
}
