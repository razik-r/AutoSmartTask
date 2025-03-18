import React, { useState } from "react";

const ToggleView = ({ onViewChange }) => {
  const [selectedView, setSelectedView] = useState("List");

  const handleViewChange = (newView) => {
    setSelectedView(newView);
    onViewChange(newView); //
  };

  return (
    <div className=" relative border  border-gray-border text-xs py-1 pr-1 pl-1 gap-[11px] bg-[#F9F9F9] rounded-lg flex justify-center items-center ">
       <div
        className={`absolute  top-1 h-[calc(100%-8px)] w-[calc(50%-8px)]  rounded-[6px] transition-all duration-300 ease-in-out ${
          selectedView === "List" ? "translate-x-0 left-0 " : "translate-x-full left-3 bg-none shadowbox "
        }`}
      ></div>
    
      <button
        onClick={() => handleViewChange("List")}
        className={` box-border rounded-[6px] px-2 py-1 hover:cursor-pointer ${
          selectedView === "List"
            ? "bg-[#FFFFFF] text-[#212121]     border border-gray-border " // Active state
            : " text-[#B5B5B5] border border-transparent " // Inactive state
        } transition-all duration-300 ease-in-out transform  `}
      >
        <div className="flex justify-center items-center gap-1">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.94973 2.93994H6.04973C3.86973 2.93994 2.71973 4.08994 2.71973 6.26994V8.16994C2.71973 10.3499 3.86973 11.4999 6.04973 11.4999H7.94973C10.1297 11.4999 11.2797 10.3499 11.2797 8.16994V6.26994C11.2797 4.08994 10.1297 2.93994 7.94973 2.93994Z"
              fill={selectedView === "List" ? "#E14026" : "#B5B5B5"}
            />
            <path
              d="M14.2803 5.46973H21.2803"
              stroke={selectedView === "List" ? "#E14026" : "#B5B5B5"}
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M14.2803 8.96973H17.7803"
              stroke={selectedView === "List" ? "#E14026" : "#B5B5B5"}
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M7.94973 12.5H6.04973C3.86973 12.5 2.71973 13.65 2.71973 15.83V17.73C2.71973 19.91 3.86973 21.06 6.04973 21.06H7.94973C10.1297 21.06 11.2797 19.91 11.2797 17.73V15.83C11.2797 13.65 10.1297 12.5 7.94973 12.5Z"
              fill={selectedView === "List" ? "#E14026" : "#B5B5B5"}
            />
            <path
              d="M14.2803 15.0298H21.2803"
              stroke={selectedView === "List" ? "#E14026" : "#B5B5B5"}
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M14.2803 18.5298H17.7803"
              stroke={selectedView === "List" ? "#E14026" : "#B5B5B5"}
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
          List
        </div>
      </button>

      {/* grid Button */}
      <button
        onClick={() => handleViewChange("Grid")}
        className={`box-border rounded-[6px] px-2 py-1 hover:cursor-pointer ${
          selectedView === "Grid"
            ? "bg-[#FFFFFF] text-[#212121]     border border-gray-border    " // Active state
            : " text-[#B5B5B5] border border-transparent left-3  " // Inactive state
        } transition-all duration-300 ease-in-out left-0`}
      >
        <div className="flex justify-center items-center gap-1">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.47844 2.5H5.67346C3.59298 2.5 2.50049 3.59249 2.50049 5.66347V7.46846C2.50049 9.53944 3.59298 10.6319 5.66396 10.6319H7.46894C9.53993 10.6319 10.6324 9.53944 10.6324 7.46846V5.66347C10.6419 3.59249 9.54943 2.5 7.47844 2.5Z"
              fill={selectedView === "Grid" ? "#E14026" : "#B5B5B5"}
            />
            <path
              d="M18.3361 2.5H16.5311C14.4602 2.5 13.3677 3.59249 13.3677 5.66347V7.46846C13.3677 9.53944 14.4602 10.6319 16.5311 10.6319H18.3361C20.4071 10.6319 21.4996 9.53944 21.4996 7.46846V5.66347C21.4996 3.59249 20.4071 2.5 18.3361 2.5Z"
              fill={selectedView === "Grid" ? "#E14026" : "#B5B5B5"}
            />
            <path
              d="M18.3361 13.3584H16.5311C14.4602 13.3584 13.3677 14.4509 13.3677 16.5219V18.3269C13.3677 20.3978 14.4602 21.4903 16.5311 21.4903H18.3361C20.4071 21.4903 21.4996 20.3978 21.4996 18.3269V16.5219C21.4996 14.4509 20.4071 13.3584 18.3361 13.3584Z"
              fill={selectedView === "Grid" ? "#E14026" : "#B5B5B5"}
            />
            <path
              d="M7.47844 13.3584H5.67346C3.59298 13.3584 2.50049 14.4509 2.50049 16.5219V18.3269C2.50049 20.4073 3.59298 21.4998 5.66396 21.4998H7.46894C9.53993 21.4998 10.6324 20.4073 10.6324 18.3364V16.5314C10.6419 14.4509 9.54943 13.3584 7.47844 13.3584Z"
              fill={selectedView === "Grid" ? "#E14026" : "#B5B5B5"}
            />
          </svg>
          Grid
        </div>
      </button>
    </div>
  );
};

export default ToggleView;
