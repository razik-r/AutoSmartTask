

import React, { useState } from 'react';

export default function ReportDetailedSwitch({ onTabChange }){
const [selectedTab, setSelectedTab] = useState("Report");


    const handleTabChange = (newTab) => {
        setSelectedTab(newTab);
        onTabChange(newTab); // 
      };



    return (
        <div className="flex justify-center items-center ">
          
          <button
            onClick={() => handleTabChange('Report')}
            className={`w-[89px] h-9 p-2  text-sm/4.5 font-medium ${
              selectedTab === 'Report'
                ? 'bg-[#FFFFFF] text-[#E14026]     border-b-[1.5px] border-[#FF0000]' // Active state
                : ' text-[#B5B5B5] border-b border-[#F1F1F1] ' // Inactive state
            } transition-normal duration-150 ease-out `}
          >
    
            <div className="flex justify-center items-center gap-1">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">

         <path d="M13.4916 1.66675H6.50829C3.47496 1.66675 1.66663 3.47508 1.66663 6.50841V13.4917C1.66663
          16.5251 3.47496 18.3334 6.50829 18.3334H13.4916C16.525 18.3334 18.3333 16.5251 18.3333 13.4917V6.50841C18.3333
           3.47508 16.525 1.66675 13.4916 1.66675ZM8.30829 12.4167L6.43329 14.2917C6.30829 14.4167 6.14996 14.4751 5.99163
            14.4751C5.83329 14.4751 5.66663 14.4167 5.54996 14.2917L4.92496 13.6667C4.67496 13.4251 4.67496 13.0251 4.92496 12.7834C5.16663 
            12.5417 5.55829 12.5417 5.80829 12.7834L5.99163 12.9667L7.42496 11.5334C7.66663 11.2917 8.05829 11.2917 8.30829 11.5334C8.54996 11.7751 8.54996
             12.1751 8.30829 12.4167ZM8.30829 6.58341L6.43329 8.45841C6.30829 8.58341 6.14996 8.64175 5.99163 8.64175C5.83329 8.64175 5.66663 8.58341 5.54996 8.45841L4.92496
              7.83341C4.67496 7.59175 4.67496 7.19175 4.92496 6.95008C5.16663 6.70841 5.55829 6.70841 5.80829 6.95008L5.99163 7.13341L7.42496 5.70008C7.66663 5.45841 8.05829
               5.45841 8.30829 5.70008C8.54996 5.94175 8.54996 6.34175 8.30829 6.58341ZM14.6333 13.8501H10.2583C9.91663 13.8501 9.63329 13.5667 9.63329 13.2251C9.63329 12.8834 9.91663
                12.6001 10.2583 12.6001H14.6333C14.9833 12.6001 15.2583 12.8834 15.2583 13.2251C15.2583 13.5667 14.9833 13.8501 14.6333 13.8501ZM14.6333 8.01675H10.2583C9.91663 8.01675 
                9.63329 7.73341 9.63329 7.39175C9.63329 7.05008 9.91663 6.76675 10.2583 6.76675H14.6333C14.9833 6.76675 15.2583 7.05008 15.2583 7.39175C15.2583 7.73341 14.9833 8.01675 
                14.6333 8.01675Z" fill={selectedTab === 'Report' ? '#E14026' : '#B5B5B5'}/>
</svg>

    
    
            Report
    
            </div>
           
          </button>
    
          {/* grid Button */}
          <button
            onClick={() => handleTabChange('Detailed')} 
            className={`w-[136px] h-9 p-2   text-sm/4.5 font-medium ${
              selectedTab === 'Detailed'
                ? 'bg-[#FFFFFF] text-[#E14026] text-nowrap    border-b-[1.5px] border-[#FF0000]' // Active state
                : ' text-[#B5B5B5] border-b border-[#F1F1F1]' // Inactive state
            } transition-normal duration-150 ease-linear`}
          >
    
            <div className="flex justify-center items-center gap-1">
             <div className="size-5">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.7583 12.2501L9.0083 13.5001L12.3416 10.1667" stroke={selectedTab === 'Detailed' ? '#E14026' : '#B5B5B5'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.33329 5.00008H11.6666C13.3333 5.00008 13.3333 4.16675 13.3333 3.33341C13.3333 1.66675 12.5 1.66675 11.6666 1.66675H8.33329C7.49996 1.66675 6.66663 1.66675 6.66663 3.33341C6.66663 5.00008 7.49996 5.00008 8.33329 5.00008Z" stroke={selectedTab === 'Detailed' ? '#E14026' : '#B5B5B5'} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.3333 3.3501C16.1083 3.5001 17.5 4.5251 17.5 8.33343V13.3334C17.5 16.6668 16.6667 18.3334 12.5 18.3334H7.5C3.33333 18.3334 2.5 16.6668 2.5 13.3334V8.33343C2.5 4.53343 3.89167 3.5001 6.66667 3.3501" stroke={selectedTab === 'Detailed' ? '#E14026' : '#B5B5B5'} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>

      
            Detailed Page
    
            </div>
           
          </button>
        </div>
      );
    };