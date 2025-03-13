import Auditor from './Auditor.png'
import ProblemImg from './ProblemImg.png'

import React, { useState } from 'react';
export default function ActionCardModal({onClose}){
     const [isOpen, setIsOpen] = useState(false);

    const openPopup = () => {
      setIsOpen(true);
    };
  
    const closePopup = () => {
      setIsOpen(false);
    };
    return(




<>

<div className="flex flex-wrap sm:flex-nowrap  max-w-[922px] h-full  sm:h-[412px]  p-4 border-2 border-[#F1F1F1] rounded-[24px] bg-[#FFFFFF] gap-0 sm:gap-4 items-center ">




<div className="flex flex-col gap-0 sm:gap-[24px]">
<div className="flex">
<h1 className='text-[16px]/5 font-medium'>Problem</h1>

<button
        onClick={onClose}
        className="  text-gray-500 hover:text-gray-700 transition-colors duration-200 ml-auto "
      >
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#F3F3F3"/>
<path d="M11.0599 10.0004L13.3599 7.70035C13.6499 7.41035 13.6499 6.93035 13.3599 6.64035C13.0699 6.35035 12.5899 6.35035 12.2999 6.64035L9.99986 8.94035L7.69986 6.64035C7.40986 6.35035 6.92986 6.35035 6.63986 6.64035C6.34986 6.93035 6.34986 7.41035 6.63986 7.70035L8.93986 10.0004L6.63986 12.3004C6.34986 12.5904 6.34986 13.0704 6.63986 13.3604C6.78986 13.5104 6.97986 13.5804 7.16986 13.5804C7.35986 13.5804 7.54986 13.5104 7.69986 13.3604L9.99986 11.0604L12.2999 13.3604C12.4499 13.5104 12.6399 13.5804 12.8299 13.5804C13.0199 13.5804 13.2099 13.5104 13.3599 13.3604C13.6499 13.0704 13.6499 12.5904 13.3599 12.3004L11.0599 10.0004Z" fill="#84838A"/>
</svg>

      </button>
</div>

    <div className="flex flex-col gap-3 max-w-[437px] h-[220px] p-3 border border-gray-border1 rounded-[12px] bg-[#FCFCFC]  ">
       <div className="  after:content-[''] after:block after:w-full after:h-[1px] after:bg-[#F1F1F1] after:mt-3 mb-1">
       
        <div className="flex flex-col gap-2">
        <h1 className="text-sm/4.5 font-medium text-[#E14026] ">Blocked nozzles or leaks can reduce performance and pose safety risks.</h1>
        <p className="text-sm/4.5 text-[#84838A]" >Clean nozzles, check for leaks, and use recommended fog fluid.</p>
        </div>


        <div className="flex mt-2 gap-2">
        <img  className="size-[27px]" src={ProblemImg}/>
        <img  className="size-[27px]" src={ProblemImg}/>
        <img  className="size-[27px]" src={ProblemImg}/>

        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M23.9165 11.8883H20.5448C17.7798 11.8883 15.5282 9.63658 15.5282 6.87158V3.49992C15.5282 2.85825 15.0032 2.33325 14.3615 2.33325H9.41484C5.8215 2.33325 2.9165 4.66659 2.9165 8.83159V19.1683C2.9165 23.3333 5.8215 25.6666 9.41484 25.6666H18.5848C22.1782 25.6666 25.0832 23.3333 25.0832 19.1683V13.0549C25.0832 12.4133 24.5582 11.8883 23.9165 11.8883Z" fill="#ED8F22"/>
<path d="M18.4331 2.57841C17.9548 2.10007 17.1265 2.42674 17.1265 3.09174V7.16341C17.1265 8.86674 18.5731 10.2784 20.3348 10.2784C21.4431 10.2901 22.9831 10.2901 24.3015 10.2901C24.9665 10.2901 25.3165 9.50841 24.8498 9.04174C23.1698 7.35007 20.1598 4.30507 18.4331 2.57841Z" fill="#ED8F22"/>
<path d="M15.75 16.0417H8.75C8.27167 16.0417 7.875 15.6451 7.875 15.1667C7.875 14.6884 8.27167 14.2917 8.75 14.2917H15.75C16.2283 14.2917 16.625 14.6884 16.625 15.1667C16.625 15.6451 16.2283 16.0417 15.75 16.0417Z" fill="#ED8F22"/>
<path d="M13.4167 20.7083H8.75C8.27167 20.7083 7.875 20.3116 7.875 19.8333C7.875 19.3549 8.27167 18.9583 8.75 18.9583H13.4167C13.895 18.9583 14.2917 19.3549 14.2917 19.8333C14.2917 20.3116 13.895 20.7083 13.4167 20.7083Z" fill="#ED8F22"/>
</svg>
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M23.9165 11.8883H20.5448C17.7798 11.8883 15.5282 9.63658 15.5282 6.87158V3.49992C15.5282 2.85825 15.0032 2.33325 14.3615 2.33325H9.41484C5.8215 2.33325 2.9165 4.66659 2.9165 8.83159V19.1683C2.9165 23.3333 5.8215 25.6666 9.41484 25.6666H18.5848C22.1782 25.6666 25.0832 23.3333 25.0832 19.1683V13.0549C25.0832 12.4133 24.5582 11.8883 23.9165 11.8883Z" fill="#ED8F22"/>
<path d="M18.4331 2.57841C17.9548 2.10007 17.1265 2.42674 17.1265 3.09174V7.16341C17.1265 8.86674 18.5731 10.2784 20.3348 10.2784C21.4431 10.2901 22.9831 10.2901 24.3015 10.2901C24.9665 10.2901 25.3165 9.50841 24.8498 9.04174C23.1698 7.35007 20.1598 4.30507 18.4331 2.57841Z" fill="#ED8F22"/>
<path d="M15.75 16.0417H8.75C8.27167 16.0417 7.875 15.6451 7.875 15.1667C7.875 14.6884 8.27167 14.2917 8.75 14.2917H15.75C16.2283 14.2917 16.625 14.6884 16.625 15.1667C16.625 15.6451 16.2283 16.0417 15.75 16.0417Z" fill="#ED8F22"/>
<path d="M13.4167 20.7083H8.75C8.27167 20.7083 7.875 20.3116 7.875 19.8333C7.875 19.3549 8.27167 18.9583 8.75 18.9583H13.4167C13.895 18.9583 14.2917 19.3549 14.2917 19.8333C14.2917 20.3116 13.895 20.7083 13.4167 20.7083Z" fill="#ED8F22"/>
</svg>
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M23.9165 11.8883H20.5448C17.7798 11.8883 15.5282 9.63658 15.5282 6.87158V3.49992C15.5282 2.85825 15.0032 2.33325 14.3615 2.33325H9.41484C5.8215 2.33325 2.9165 4.66659 2.9165 8.83159V19.1683C2.9165 23.3333 5.8215 25.6666 9.41484 25.6666H18.5848C22.1782 25.6666 25.0832 23.3333 25.0832 19.1683V13.0549C25.0832 12.4133 24.5582 11.8883 23.9165 11.8883Z" fill="#ED8F22"/>
<path d="M18.4331 2.57841C17.9548 2.10007 17.1265 2.42674 17.1265 3.09174V7.16341C17.1265 8.86674 18.5731 10.2784 20.3348 10.2784C21.4431 10.2901 22.9831 10.2901 24.3015 10.2901C24.9665 10.2901 25.3165 9.50841 24.8498 9.04174C23.1698 7.35007 20.1598 4.30507 18.4331 2.57841Z" fill="#ED8F22"/>
<path d="M15.75 16.0417H8.75C8.27167 16.0417 7.875 15.6451 7.875 15.1667C7.875 14.6884 8.27167 14.2917 8.75 14.2917H15.75C16.2283 14.2917 16.625 14.6884 16.625 15.1667C16.625 15.6451 16.2283 16.0417 15.75 16.0417Z" fill="#ED8F22"/>
<path d="M13.4167 20.7083H8.75C8.27167 20.7083 7.875 20.3116 7.875 19.8333C7.875 19.3549 8.27167 18.9583 8.75 18.9583H13.4167C13.895 18.9583 14.2917 19.3549 14.2917 19.8333C14.2917 20.3116 13.895 20.7083 13.4167 20.7083Z" fill="#ED8F22"/>
</svg>
</div>
</div>

<div className="flex items-center justify-between gap-2 ">

    
    <div className="flex gap-2 items-center">
    <p className='text-xs/4 text-[#84838A]'>Center Code</p>
       <div className="flex gap-0.5 items-center"> <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M7 13.5C10.5899 13.5 13.5 10.5899 13.5 7C13.5 3.41015 10.5899 0.5 7 0.5C3.41015 0.5 0.5 3.41015 0.5 7C0.5 10.5899 3.41015 13.5 7 13.5Z" fill="#3F9A26"/>
<path d="M4.94158 3.75C4.75605 3.75 4.58017 3.83265 4.46175 3.97547L3.18633 5.51379C2.94575 5.80396 3.15212 6.24315 3.52906 6.24315H10.4714C10.8483 6.24315 11.0547 5.80397 10.8141 5.51379L9.53872 3.97547C9.42033 3.83265 9.24442 3.75 9.05889 3.75H4.94158ZM3.79464 6.7774V9.35959C3.79464 9.85135 4.19329 10.25 4.68505 10.25H9.31519C9.80695 10.25 10.2056 9.85135 10.2056 9.35959V6.7774H3.79464ZM5.93163 8.11301C5.93163 8.35891 5.7323 8.55822 5.48642 8.55822C5.24054 8.55822 5.04122 8.35891 5.04122 8.11301C5.04122 7.86712 5.24054 7.66781 5.48642 7.66781C5.7323 7.66781 5.93163 7.86712 5.93163 8.11301ZM7.00012 8.55822C6.75422 8.55822 6.55491 8.35891 6.55491 8.11301C6.55491 7.86712 6.75422 7.66781 7.00012 7.66781C7.24602 7.66781 7.44533 7.86712 7.44533 8.11301C7.44533 8.35891 7.24602 8.55822 7.00012 8.55822ZM8.95902 8.11301C8.95902 8.35891 8.75971 8.55822 8.51382 8.55822C8.26792 8.55822 8.06861 8.35891 8.06861 8.11301C8.06861 7.86712 8.26792 7.66781 8.51382 7.66781C8.75971 7.66781 8.95902 7.86712 8.95902 8.11301Z" fill="#3F9A26"/>
</svg>
<p className='text-xs/4 text-[#212121]' >C12345</p></div></div>

<div className="flex gap-3">
<p className='text-xs/4 text-[#84838A]'>Term</p>
<p className='text-xs/4 text-[#212121]'>Term 1 2025</p>
</div>


</div>

<div className="flex gap-14 justify-space-between items-center">

            <p className='text-xs/4 '>PIC</p>

            <img className="size-6 "src={Auditor}/>

</div>

    </div>

    <div className=" max-w-[437px] h-[92px]  p-3 border border-gray-border1 rounded-[12px] bg-[#FCFCFC]">
        <div className="flex items-baseline gap-2 ">

        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="4" cy="4" r="4" fill="#E14026"/>
</svg>


<div className="flex flex-col gap-2 ">
        <p className='text-xs/4.5 text-[#212121]'>Is the fog machine functioning correctly?</p>
        <p className='text-xs/4.5 text-[#84838A]'>Is it well-maintained and free from clogs or leaks?</p>
        <div className="flex items-center gap-1">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M10.7935 1.33337H5.20683C2.78016 1.33337 1.3335 2.78004 1.3335 5.20671V10.7867C1.3335 13.22 2.78016 14.6667 5.20683 14.6667H10.7868C13.2135 14.6667 14.6602 13.22 14.6602 10.7934V5.20671C14.6668 2.78004 13.2202 1.33337 10.7935 1.33337Z" fill="#805EC5"/>
<path d="M12.5468 7.0533C12.8135 7.0533 13.0335 6.8333 13.0335 6.56663C13.0335 6.29997 12.8135 6.07997 12.5468 6.07997H10.1401L10.4001 3.74663C10.4268 3.47997 10.2401 3.23997 9.9668 3.20663C9.70013 3.17997 9.46013 3.36663 9.4268 3.63997L9.15346 6.07997H7.2668L7.5268 3.74663C7.55346 3.47997 7.3668 3.23997 7.09346 3.20663C6.8268 3.17997 6.5868 3.36663 6.55346 3.63997L6.2868 6.07997H3.93346C3.6668 6.07997 3.4468 6.29997 3.4468 6.56663C3.4468 6.8333 3.6668 7.0533 3.93346 7.0533H6.18013L5.9668 8.9533H3.45346C3.1868 8.9533 2.9668 9.1733 2.9668 9.43997C2.9668 9.70663 3.1868 9.92663 3.45346 9.92663H5.86013L5.60013 12.26C5.57346 12.5266 5.76013 12.7666 6.03346 12.8C6.05346 12.8 6.0668 12.8 6.0868 12.8C6.33346 12.8 6.54013 12.6133 6.57346 12.3666L6.8468 9.92663H8.74013L8.48013 12.26C8.45346 12.5266 8.64013 12.7666 8.91346 12.8C8.93346 12.8 8.9468 12.8 8.9668 12.8C9.21346 12.8 9.42013 12.6133 9.45346 12.3666L9.7268 9.92663H12.0801C12.3468 9.92663 12.5668 9.70663 12.5668 9.43997C12.5668 9.1733 12.3468 8.9533 12.0801 8.9533H9.83346L10.0468 7.0533H12.5468ZM8.84013 8.94663H6.9468L7.16013 7.04663H9.05346L8.84013 8.94663Z" fill="#805EC5"/>
</svg>


        <p className='text-xs/4.5 text-[#212121]'>Q12345</p>
        </div>

       
      
    </div>

        </div>
   

    </div>


</div>




<div className="flex flex-col w-[437px] h-[380px] bg-[#FCFCFC] gap-3 border border-gray-border1 rounded-[8px] p-3 ">
<h1 className='flex text-xs/4'>Remarks</h1>
    <div className="flex max-w-[413px] border border-gray-border1 rounded-[8px] px-2.5 py-3 ">
        <p className='text-sm/4.5 text-[#84838A]'>Clean nozzles, check for leaks, and use recommended fog fluid. Clean nozzles, check for leaks, and use recommended fog fluid. Clean nozzles, check for leaks, and use recommended fog fluid. Clean nozzles, check for leaks, and use recommended fog fluid</p>

    </div>

    <div className="flex  gap-2">
        <img  className="size-[27px]" src={ProblemImg}/>
        <img  className="size-[27px]" src={ProblemImg}/>
        <img  className="size-[27px]" src={ProblemImg}/>

        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M23.9165 11.8883H20.5448C17.7798 11.8883 15.5282 9.63658 15.5282 6.87158V3.49992C15.5282 2.85825 15.0032 2.33325 14.3615 2.33325H9.41484C5.8215 2.33325 2.9165 4.66659 2.9165 8.83159V19.1683C2.9165 23.3333 5.8215 25.6666 9.41484 25.6666H18.5848C22.1782 25.6666 25.0832 23.3333 25.0832 19.1683V13.0549C25.0832 12.4133 24.5582 11.8883 23.9165 11.8883Z" fill="#ED8F22"/>
<path d="M18.4331 2.57841C17.9548 2.10007 17.1265 2.42674 17.1265 3.09174V7.16341C17.1265 8.86674 18.5731 10.2784 20.3348 10.2784C21.4431 10.2901 22.9831 10.2901 24.3015 10.2901C24.9665 10.2901 25.3165 9.50841 24.8498 9.04174C23.1698 7.35007 20.1598 4.30507 18.4331 2.57841Z" fill="#ED8F22"/>
<path d="M15.75 16.0417H8.75C8.27167 16.0417 7.875 15.6451 7.875 15.1667C7.875 14.6884 8.27167 14.2917 8.75 14.2917H15.75C16.2283 14.2917 16.625 14.6884 16.625 15.1667C16.625 15.6451 16.2283 16.0417 15.75 16.0417Z" fill="#ED8F22"/>
<path d="M13.4167 20.7083H8.75C8.27167 20.7083 7.875 20.3116 7.875 19.8333C7.875 19.3549 8.27167 18.9583 8.75 18.9583H13.4167C13.895 18.9583 14.2917 19.3549 14.2917 19.8333C14.2917 20.3116 13.895 20.7083 13.4167 20.7083Z" fill="#ED8F22"/>
</svg>
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M23.9165 11.8883H20.5448C17.7798 11.8883 15.5282 9.63658 15.5282 6.87158V3.49992C15.5282 2.85825 15.0032 2.33325 14.3615 2.33325H9.41484C5.8215 2.33325 2.9165 4.66659 2.9165 8.83159V19.1683C2.9165 23.3333 5.8215 25.6666 9.41484 25.6666H18.5848C22.1782 25.6666 25.0832 23.3333 25.0832 19.1683V13.0549C25.0832 12.4133 24.5582 11.8883 23.9165 11.8883Z" fill="#ED8F22"/>
<path d="M18.4331 2.57841C17.9548 2.10007 17.1265 2.42674 17.1265 3.09174V7.16341C17.1265 8.86674 18.5731 10.2784 20.3348 10.2784C21.4431 10.2901 22.9831 10.2901 24.3015 10.2901C24.9665 10.2901 25.3165 9.50841 24.8498 9.04174C23.1698 7.35007 20.1598 4.30507 18.4331 2.57841Z" fill="#ED8F22"/>
<path d="M15.75 16.0417H8.75C8.27167 16.0417 7.875 15.6451 7.875 15.1667C7.875 14.6884 8.27167 14.2917 8.75 14.2917H15.75C16.2283 14.2917 16.625 14.6884 16.625 15.1667C16.625 15.6451 16.2283 16.0417 15.75 16.0417Z" fill="#ED8F22"/>
<path d="M13.4167 20.7083H8.75C8.27167 20.7083 7.875 20.3116 7.875 19.8333C7.875 19.3549 8.27167 18.9583 8.75 18.9583H13.4167C13.895 18.9583 14.2917 19.3549 14.2917 19.8333C14.2917 20.3116 13.895 20.7083 13.4167 20.7083Z" fill="#ED8F22"/>
</svg>
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M23.9165 11.8883H20.5448C17.7798 11.8883 15.5282 9.63658 15.5282 6.87158V3.49992C15.5282 2.85825 15.0032 2.33325 14.3615 2.33325H9.41484C5.8215 2.33325 2.9165 4.66659 2.9165 8.83159V19.1683C2.9165 23.3333 5.8215 25.6666 9.41484 25.6666H18.5848C22.1782 25.6666 25.0832 23.3333 25.0832 19.1683V13.0549C25.0832 12.4133 24.5582 11.8883 23.9165 11.8883Z" fill="#ED8F22"/>
<path d="M18.4331 2.57841C17.9548 2.10007 17.1265 2.42674 17.1265 3.09174V7.16341C17.1265 8.86674 18.5731 10.2784 20.3348 10.2784C21.4431 10.2901 22.9831 10.2901 24.3015 10.2901C24.9665 10.2901 25.3165 9.50841 24.8498 9.04174C23.1698 7.35007 20.1598 4.30507 18.4331 2.57841Z" fill="#ED8F22"/>
<path d="M15.75 16.0417H8.75C8.27167 16.0417 7.875 15.6451 7.875 15.1667C7.875 14.6884 8.27167 14.2917 8.75 14.2917H15.75C16.2283 14.2917 16.625 14.6884 16.625 15.1667C16.625 15.6451 16.2283 16.0417 15.75 16.0417Z" fill="#ED8F22"/>
<path d="M13.4167 20.7083H8.75C8.27167 20.7083 7.875 20.3116 7.875 19.8333C7.875 19.3549 8.27167 18.9583 8.75 18.9583H13.4167C13.895 18.9583 14.2917 19.3549 14.2917 19.8333C14.2917 20.3116 13.895 20.7083 13.4167 20.7083Z" fill="#ED8F22"/>
</svg>
</div>

<div className="flex"><p className='text-text-gray text-xs/4'>24 Jan, 2025</p></div>

</div>


</div>


</>



    )
}