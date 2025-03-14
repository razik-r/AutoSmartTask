import React, { useState } from "react";
import CategorySelector from "./CategorySelector";

export default function CenterSelector() {

  const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState({id:1, value:"Al Naseem Center (TH)",indicator:"Not Submitted", bgcolor:"bg-[#FFECD6]", textcolor:"text-[#ED8F22]"});
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleOptionClick = (option) => {
    setSelectedOption(option); // 
    setIsOpen(false); 
  };

  const options = [
    {id:1, value:"Al Naseem Center (TH)",indicator:"Not Submitted", bgcolor:"bg-[#FFECD6]", textcolor:"text-[#ED8F22]"},
    {id:2, value:"Dubai 1 - Diera",indicator:"Not Submitted", bgcolor:"bg-[#FFECD6]", textcolor:"text-[#ED8F22]"},
    {id:3, value:"Ras Al Khaima",indicator:"Not Submitted", bgcolor:"bg-[#FFECD6]", textcolor:"text-[#ED8F22]"},
    {id:4, value:"Fujairah",indicator:"Score 98", bgcolor:"bg-[#C5E2F1]" ,textcolor:"text-[#138CC9]"},
    {id:5, value:"Karbala", indicator:"Not Submitted",bgcolor:"bg-[#FFECD6]", textcolor:"text-[#ED8F22]"},
    {id:6, value:"Karbala", indicator:"Not Submitted",bgcolor:"bg-[#FFECD6]", textcolor:"text-[#ED8F22]"},
 
   
 
   

   
  

  ];

  return (
    <>
    <div className="relative">
    <button onClick={toggleDropdown} className="border max-w-73 sm:min-w-73 border-gray-border1 rounded-[8px] flex   max-h-14 p-2 font-inter   sm:justify-between items-center">
        <div className="flex flex-col gap-1 justify-center items-start">
          <h1 className="font-medium text-xs leading-4 tracking-[-0.5%]">
            {selectedOption.value}
           { console.log(selectedOption.value)}
          </h1>

          <div className="flex gap-2">
            <div className={`bg-[#FCECEA] rounded-[4px] p-1 min-w-15.25 h-[15px] flex justify-center items-center`}>
              <h2 className="text-[10px] text-[#E14026] font-normal leading-3">
                7 problems
              </h2>
            </div>

            <div className={`${selectedOption.bgcolor} rounded-[4px] p-1 min-w-15.25 h-[15px] flex justify-center items-center`}>
              <h2 className={`${selectedOption.textcolor} text-[10px]  font-normal leading-3`}>
                {selectedOption.indicator}
              </h2>
            </div>
          </div>
        </div>
        {!isOpen?( <svg
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
        </svg> ):<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 12.5L10 7.5L5 12.5" stroke="#E14026" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
}
        
      </button>
      {isOpen && (<div className="absolute p-4 min-w-73 mt-1 border border-gray-border1 flex flex-col z-999 bg-[#FFFFFF] rounded-lg overflow-y-scroll max-h-[calc(100vh-200px)]  ">

        <div className="flex px-2.5 py-3 justify-between rounded-lg border border-gray-border -mt-2 mb-2 gap-2">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.66671 13.9999C11.1645 13.9999 14 11.1644 14 7.66659C14 4.16878 11.1645 1.33325 7.66671 1.33325C4.1689 1.33325 1.33337 4.16878 1.33337 7.66659C1.33337 11.1644 4.1689 13.9999 7.66671 13.9999Z" stroke="#E14026" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.6667 14.6666L13.3334 13.3333" stroke="#E14026" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


        <input
      type="text"
      placeholder="Search Centers"
      className="text-xs bg-transparent outline-none placeholder-[#84838A] font-normal text-gray-600 w-full "
    />

        </div>
       
          <CategorySelector/>
      

        <div className="flex flex-col pt-2 gap-4">

        <div 
                
               
                
        className="flex flex-col gap-1 justify-center items-start"
        
        >
          <h1 className="font-medium text-sm text-[#212121] leading-4 tracking-[-0.5%]">
            {selectedOption.value}
          </h1>

          <div className="flex gap-2">
            <div className={`bg-[#FCECEA] rounded-[4px] p-1 min-w-15.25 h-[15px] flex justify-center items-center`}>
              <h2 className="text-[10px] text-[#E14026] font-normal leading-3">
                7 problems
              </h2>
            </div>

            <div className={`${selectedOption.bgcolor} rounded-[4px] p-1 min-w-15.25 h-[15px] flex justify-center items-center`} >
              <h2 className={`${selectedOption.textcolor} text-[10px]  font-normal leading-3`}>
                {selectedOption.indicator}
              </h2>
            </div>
          </div>
        </div>

        {options
            .filter((option) => option.id !== selectedOption.id) 
            .map((option) => (
              <div  key={option.id}
                href="#"
               
                onClick={() => handleOptionClick(option)}
        className="flex flex-col gap-1 justify-center items-start "
        
        >
          <h1 className="font-normal text-sm text-text-gray leading-4 tracking-[-0.5%]">
            {option.value}
          </h1>

          <div className="flex gap-2">
            <div className="bg-[#FCECEA] rounded-[4px] p-1 min-w-15.25 h-[15px] flex justify-center items-center">
              <h2 className="text-[10px] text-[#E14026] font-normal leading-3">
                7 problems
              </h2>
            </div>

            <div className={`${option.bgcolor} rounded-[4px] p-1 min-w-15.25 h-[15px] flex justify-center items-center`}>
              <h2 className={`${option.textcolor} text-[10px]  font-normal leading-3`}>
                {option.indicator}
              </h2>
            </div>
          </div>
        </div>
            ))}

        </div>

       



      </div>

      )}
    </div>
    </>
  );
}
