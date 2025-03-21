import React, { useState } from "react";

export default function QuarterSelector() {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedOption, setSelectedOption] = useState("2025-Quarter 1");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option); //
    setIsOpen(false);
  };

  const options = [
    "2025-Quarter 1",
    "2025-Quarter 2",
    "2025-Quarter 3",
    "2025-Quarter 4",
    "2026-Quarter 1",
  ];

  return (
    <>
      <div className="relative ">
        <button
          className="border   border-gray-border1  rounded-[8px] flex    p-2 font-inter sm:justify-between items-center hover:cursor-pointer "
          onClick={toggleDropdown}
        >
          <div className="flex flex-col gap-1 justify-center items-start">
          <p className="text-text-gray text-[10px] font-normal ml-[1px] tracking-[-0.5%] leading-3">Select the term</p>
           
            <div className=" flex gap-2  justify-center items-center  ">
            <h1 className="font-medium text-xs leading-4 tracking-[-0.5%] ">
              {selectedOption}
            </h1>
            <svg width="46" height="16" viewBox="0 0 46 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="0.5" width="46" height="15" rx="4" fill="#3F9A26"/>
<path d="M4.88068 11.5V4.22727H7.33807C7.90625 4.22727 8.37263 4.32434 8.73722 4.51847C9.1018 4.71023 9.37169 4.97419 9.54688 5.31037C9.72206 5.64654 9.80966 6.02888 9.80966 6.45739C9.80966 6.88589 9.72206 7.26586 9.54688 7.5973C9.37169 7.92874 9.10298 8.18916 8.74077 8.37855C8.37855 8.56558 7.91572 8.65909 7.35227 8.65909H5.36364V7.86364H7.32386C7.71212 7.86364 8.02462 7.80682 8.26136 7.69318C8.50047 7.57955 8.6733 7.41856 8.77983 7.21023C8.88873 6.99953 8.94318 6.74858 8.94318 6.45739C8.94318 6.16619 8.88873 5.91169 8.77983 5.69389C8.67093 5.47609 8.49692 5.308 8.25781 5.18963C8.0187 5.06889 7.70265 5.00852 7.30966 5.00852H5.76136V11.5H4.88068ZM8.30398 8.23295L10.0938 11.5H9.07102L7.30966 8.23295H8.30398ZM14.551 9.26989V6.04545H15.3891V11.5H14.551V10.5767H14.4942C14.3664 10.8537 14.1675 11.0893 13.8976 11.2834C13.6277 11.4751 13.2868 11.571 12.8749 11.571C12.534 11.571 12.231 11.4964 11.9658 11.3473C11.7007 11.1958 11.4923 10.9685 11.3408 10.6655C11.1893 10.3601 11.1135 9.97538 11.1135 9.51136V6.04545H11.9516V9.45455C11.9516 9.85227 12.0629 10.1695 12.2854 10.4062C12.5103 10.643 12.7968 10.7614 13.1448 10.7614C13.3531 10.7614 13.565 10.7081 13.7804 10.6016C13.9982 10.495 14.1805 10.3317 14.3273 10.1115C14.4765 9.89134 14.551 9.6108 14.551 9.26989ZM17.7121 8.21875V11.5H16.8741V6.04545H17.6837V6.89773H17.7548C17.8826 6.62074 18.0767 6.3982 18.3371 6.23011C18.5976 6.05966 18.9337 5.97443 19.3457 5.97443C19.715 5.97443 20.0381 6.05019 20.3151 6.2017C20.5921 6.35085 20.8076 6.57812 20.9614 6.88352C21.1153 7.18655 21.1923 7.57008 21.1923 8.03409V11.5H20.3542V8.09091C20.3542 7.66241 20.2429 7.3286 20.0204 7.08949C19.7978 6.84801 19.4924 6.72727 19.1042 6.72727C18.8367 6.72727 18.5976 6.78527 18.3869 6.90128C18.1785 7.01728 18.014 7.18655 17.8933 7.40909C17.7725 7.63163 17.7121 7.90152 17.7121 8.21875ZM23.5118 8.21875V11.5H22.6737V6.04545H23.4833V6.89773H23.5544C23.6822 6.62074 23.8763 6.3982 24.1368 6.23011C24.3972 6.05966 24.7333 5.97443 25.1453 5.97443C25.5146 5.97443 25.8377 6.05019 26.1147 6.2017C26.3917 6.35085 26.6072 6.57812 26.761 6.88352C26.9149 7.18655 26.9919 7.57008 26.9919 8.03409V11.5H26.1538V8.09091C26.1538 7.66241 26.0425 7.3286 25.82 7.08949C25.5975 6.84801 25.2921 6.72727 24.9038 6.72727C24.6363 6.72727 24.3972 6.78527 24.1865 6.90128C23.9781 7.01728 23.8136 7.18655 23.6929 7.40909C23.5721 7.63163 23.5118 7.90152 23.5118 8.21875ZM28.4733 11.5V6.04545H29.3114V11.5H28.4733ZM28.8994 5.13636C28.7361 5.13636 28.5952 5.08073 28.4768 4.96946C28.3608 4.85819 28.3028 4.72443 28.3028 4.56818C28.3028 4.41193 28.3608 4.27817 28.4768 4.1669C28.5952 4.05563 28.7361 4 28.8994 4C29.0628 4 29.2025 4.05563 29.3185 4.1669C29.4368 4.27817 29.496 4.41193 29.496 4.56818C29.496 4.72443 29.4368 4.85819 29.3185 4.96946C29.2025 5.08073 29.0628 5.13636 28.8994 5.13636ZM31.6344 8.21875V11.5H30.7963V6.04545H31.606V6.89773H31.677C31.8049 6.62074 31.999 6.3982 32.2594 6.23011C32.5198 6.05966 32.856 5.97443 33.2679 5.97443C33.6373 5.97443 33.9604 6.05019 34.2374 6.2017C34.5144 6.35085 34.7298 6.57812 34.8837 6.88352C35.0376 7.18655 35.1145 7.57008 35.1145 8.03409V11.5H34.2765V8.09091C34.2765 7.66241 34.1652 7.3286 33.9426 7.08949C33.7201 6.84801 33.4147 6.72727 33.0265 6.72727C32.7589 6.72727 32.5198 6.78527 32.3091 6.90128C32.1008 7.01728 31.9363 7.18655 31.8155 7.40909C31.6948 7.63163 31.6344 7.90152 31.6344 8.21875ZM38.7977 13.6591C38.3928 13.6591 38.0448 13.607 37.7536 13.5028C37.4624 13.401 37.2198 13.2661 37.0256 13.098C36.8339 12.9323 36.6812 12.7547 36.5675 12.5653L37.2352 12.0966C37.3109 12.196 37.4068 12.3097 37.5228 12.4375C37.6388 12.5677 37.7974 12.6802 37.9987 12.7749C38.2022 12.8719 38.4686 12.9205 38.7977 12.9205C39.238 12.9205 39.6014 12.8139 39.8879 12.6009C40.1743 12.3878 40.3175 12.054 40.3175 11.5994V10.4915H40.2465C40.185 10.5909 40.0974 10.714 39.9837 10.8608C39.8725 11.0052 39.7115 11.1342 39.5008 11.2479C39.2924 11.3591 39.0107 11.4148 38.6556 11.4148C38.2153 11.4148 37.8199 11.3106 37.4695 11.1023C37.1215 10.8939 36.8457 10.5909 36.6421 10.1932C36.4409 9.79545 36.3403 9.3125 36.3403 8.74432C36.3403 8.18561 36.4385 7.6991 36.635 7.2848C36.8315 6.86813 37.1049 6.54616 37.4553 6.31889C37.8057 6.08925 38.2105 5.97443 38.6698 5.97443C39.0249 5.97443 39.3067 6.03362 39.515 6.15199C39.7257 6.26799 39.8867 6.40057 39.9979 6.54972C40.1116 6.6965 40.1992 6.81723 40.2607 6.91193H40.346V6.04545H41.1556V11.6562C41.1556 12.125 41.0491 12.5062 40.836 12.7997C40.6253 13.0956 40.3412 13.3123 39.9837 13.4496C39.6286 13.5893 39.2333 13.6591 38.7977 13.6591ZM38.7692 10.6619C39.1054 10.6619 39.3895 10.585 39.6215 10.4311C39.8535 10.2772 40.0299 10.0559 40.1506 9.76705C40.2714 9.47822 40.3317 9.13258 40.3317 8.73011C40.3317 8.33712 40.2726 7.99029 40.1542 7.68963C40.0358 7.38897 39.8606 7.15341 39.6286 6.98295C39.3966 6.8125 39.1102 6.72727 38.7692 6.72727C38.4141 6.72727 38.1182 6.81723 37.8815 6.99716C37.6471 7.17708 37.4707 7.41856 37.3523 7.72159C37.2363 8.02462 37.1783 8.3608 37.1783 8.73011C37.1783 9.1089 37.2375 9.44389 37.3559 9.73509C37.4766 10.0239 37.6542 10.2512 37.8886 10.4169C38.1253 10.5803 38.4189 10.6619 38.7692 10.6619Z" fill="white"/>
</svg>


{!isOpen ? (
            <svg
              width="16"
              height="16"
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
              width="16"
              height="16"
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



            </div>
          </div>
         
        </button>

      
          <div className={` absolute   w-full mt-1 border rounded-lg bg-[#FFFFFF] border-gray-border1  z-999 shadowbox1 transition-all duration-200 ease-in-out transform origin-top ${
            isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
          } overflow-hidden`}  >
            <div className=" flex flex-col  gap-4 ">
              {/* <div
                className="flex flex-col gap-1 px-3 -mt-2 py-2    bg-[#F6F6F6]  text-sm/4.5 text-[#212121] font-medium text-nowrap"
                onClick={() => handleOptionClick(selectedOption)}
              >
                <h1> {selectedOption}</h1>
                <svg
                  width="46"
                  height="16"
                  viewBox="0 0 46 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="46" height="16" rx="3" fill="#D7EECA" />
                  <path
                    d="M4.88068 11V3.72727H7.33807C7.90625 3.72727 8.37263 3.82434 8.73722 4.01847C9.1018 4.21023 9.37169 4.47419 9.54688 4.81037C9.72206 5.14654 9.80966 5.52888 9.80966 5.95739C9.80966 6.38589 9.72206 6.76586 9.54688 7.0973C9.37169 7.42874 9.10298 7.68916 8.74077 7.87855C8.37855 8.06558 7.91572 8.15909 7.35227 8.15909H5.36364V7.36364H7.32386C7.71212 7.36364 8.02462 7.30682 8.26136 7.19318C8.50047 7.07955 8.6733 6.91856 8.77983 6.71023C8.88873 6.49953 8.94318 6.24858 8.94318 5.95739C8.94318 5.66619 8.88873 5.41169 8.77983 5.19389C8.67093 4.97609 8.49692 4.808 8.25781 4.68963C8.0187 4.56889 7.70265 4.50852 7.30966 4.50852H5.76136V11H4.88068ZM8.30398 7.73295L10.0938 11H9.07102L7.30966 7.73295H8.30398ZM14.551 8.76989V5.54545H15.3891V11H14.551V10.0767H14.4942C14.3664 10.3537 14.1675 10.5893 13.8976 10.7834C13.6277 10.9751 13.2868 11.071 12.8749 11.071C12.534 11.071 12.231 10.9964 11.9658 10.8473C11.7007 10.6958 11.4923 10.4685 11.3408 10.1655C11.1893 9.86009 11.1135 9.47538 11.1135 9.01136V5.54545H11.9516V8.95455C11.9516 9.35227 12.0629 9.66951 12.2854 9.90625C12.5103 10.143 12.7968 10.2614 13.1448 10.2614C13.3531 10.2614 13.565 10.2081 13.7804 10.1016C13.9982 9.99503 14.1805 9.83168 14.3273 9.61151C14.4765 9.39134 14.551 9.1108 14.551 8.76989ZM17.7121 7.71875V11H16.8741V5.54545H17.6837V6.39773H17.7548C17.8826 6.12074 18.0767 5.8982 18.3371 5.73011C18.5976 5.55966 18.9337 5.47443 19.3457 5.47443C19.715 5.47443 20.0381 5.55019 20.3151 5.7017C20.5921 5.85085 20.8076 6.07812 20.9614 6.38352C21.1153 6.68655 21.1923 7.07008 21.1923 7.53409V11H20.3542V7.59091C20.3542 7.16241 20.2429 6.8286 20.0204 6.58949C19.7978 6.34801 19.4924 6.22727 19.1042 6.22727C18.8367 6.22727 18.5976 6.28527 18.3869 6.40128C18.1785 6.51728 18.014 6.68655 17.8933 6.90909C17.7725 7.13163 17.7121 7.40152 17.7121 7.71875ZM23.5118 7.71875V11H22.6737V5.54545H23.4833V6.39773H23.5544C23.6822 6.12074 23.8763 5.8982 24.1368 5.73011C24.3972 5.55966 24.7333 5.47443 25.1453 5.47443C25.5146 5.47443 25.8377 5.55019 26.1147 5.7017C26.3917 5.85085 26.6072 6.07812 26.761 6.38352C26.9149 6.68655 26.9919 7.07008 26.9919 7.53409V11H26.1538V7.59091C26.1538 7.16241 26.0425 6.8286 25.82 6.58949C25.5975 6.34801 25.2921 6.22727 24.9038 6.22727C24.6363 6.22727 24.3972 6.28527 24.1865 6.40128C23.9781 6.51728 23.8136 6.68655 23.6929 6.90909C23.5721 7.13163 23.5118 7.40152 23.5118 7.71875ZM28.4733 11V5.54545H29.3114V11H28.4733ZM28.8994 4.63636C28.7361 4.63636 28.5952 4.58073 28.4768 4.46946C28.3608 4.35819 28.3028 4.22443 28.3028 4.06818C28.3028 3.91193 28.3608 3.77817 28.4768 3.6669C28.5952 3.55563 28.7361 3.5 28.8994 3.5C29.0628 3.5 29.2025 3.55563 29.3185 3.6669C29.4368 3.77817 29.496 3.91193 29.496 4.06818C29.496 4.22443 29.4368 4.35819 29.3185 4.46946C29.2025 4.58073 29.0628 4.63636 28.8994 4.63636ZM31.6344 7.71875V11H30.7963V5.54545H31.606V6.39773H31.677C31.8049 6.12074 31.999 5.8982 32.2594 5.73011C32.5198 5.55966 32.856 5.47443 33.2679 5.47443C33.6373 5.47443 33.9604 5.55019 34.2374 5.7017C34.5144 5.85085 34.7298 6.07812 34.8837 6.38352C35.0376 6.68655 35.1145 7.07008 35.1145 7.53409V11H34.2765V7.59091C34.2765 7.16241 34.1652 6.8286 33.9426 6.58949C33.7201 6.34801 33.4147 6.22727 33.0265 6.22727C32.7589 6.22727 32.5198 6.28527 32.3091 6.40128C32.1008 6.51728 31.9363 6.68655 31.8155 6.90909C31.6948 7.13163 31.6344 7.40152 31.6344 7.71875ZM38.7977 13.1591C38.3928 13.1591 38.0448 13.107 37.7536 13.0028C37.4624 12.901 37.2198 12.7661 37.0256 12.598C36.8339 12.4323 36.6812 12.2547 36.5675 12.0653L37.2352 11.5966C37.3109 11.696 37.4068 11.8097 37.5228 11.9375C37.6388 12.0677 37.7974 12.1802 37.9987 12.2749C38.2022 12.3719 38.4686 12.4205 38.7977 12.4205C39.238 12.4205 39.6014 12.3139 39.8879 12.1009C40.1743 11.8878 40.3175 11.554 40.3175 11.0994V9.99148H40.2465C40.185 10.0909 40.0974 10.214 39.9837 10.3608C39.8725 10.5052 39.7115 10.6342 39.5008 10.7479C39.2924 10.8591 39.0107 10.9148 38.6556 10.9148C38.2153 10.9148 37.8199 10.8106 37.4695 10.6023C37.1215 10.3939 36.8457 10.0909 36.6421 9.69318C36.4409 9.29545 36.3403 8.8125 36.3403 8.24432C36.3403 7.68561 36.4385 7.1991 36.635 6.7848C36.8315 6.36813 37.1049 6.04616 37.4553 5.81889C37.8057 5.58925 38.2105 5.47443 38.6698 5.47443C39.0249 5.47443 39.3067 5.53362 39.515 5.65199C39.7257 5.76799 39.8867 5.90057 39.9979 6.04972C40.1116 6.1965 40.1992 6.31723 40.2607 6.41193H40.346V5.54545H41.1556V11.1562C41.1556 11.625 41.0491 12.0062 40.836 12.2997C40.6253 12.5956 40.3412 12.8123 39.9837 12.9496C39.6286 13.0893 39.2333 13.1591 38.7977 13.1591ZM38.7692 10.1619C39.1054 10.1619 39.3895 10.085 39.6215 9.93111C39.8535 9.77723 40.0299 9.55587 40.1506 9.26705C40.2714 8.97822 40.3317 8.63258 40.3317 8.23011C40.3317 7.83712 40.2726 7.49029 40.1542 7.18963C40.0358 6.88897 39.8606 6.65341 39.6286 6.48295C39.3966 6.3125 39.1102 6.22727 38.7692 6.22727C38.4141 6.22727 38.1182 6.31723 37.8815 6.49716C37.6471 6.67708 37.4707 6.91856 37.3523 7.22159C37.2363 7.52462 37.1783 7.8608 37.1783 8.23011C37.1783 8.6089 37.2375 8.94389 37.3559 9.23509C37.4766 9.52391 37.6542 9.75118 37.8886 9.9169C38.1253 10.0803 38.4189 10.1619 38.7692 10.1619Z"
                    fill="#3F9A26"
                  />
                </svg>
              </div> */}
              <div className=" flex flex-col      mt-2 max-w-fit sm:max-w-73        ">
                {options
                  .filter((option) => option !== selectedOption) 
                  .map((option, index) => (
                    <div
                      key={index}
                      href="#"
                      className=" hover:py-2 px-3 hover:cursor-pointer   hover:mb-2 group text-sm/4.5 hover:bg-[#F6F6F6] flex flex-col  gap-1  text-nowrap transition-all duration-200 ease-in-out transform  "
                      onClick={() => handleOptionClick(option)}
                    >
                     <h1 className="text-text-gray group-hover:text-[#212121] group-hover:font-medium ">{option}</h1>
                     <svg
                     className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  width="46"
                  height="16"
                  viewBox="0 0 46 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"

                >
                  <rect width="46" height="16" rx="3" fill="#D7EECA" />
                  <path
                    d="M4.88068 11V3.72727H7.33807C7.90625 3.72727 8.37263 3.82434 8.73722 4.01847C9.1018 4.21023 9.37169 4.47419 9.54688 4.81037C9.72206 5.14654 9.80966 5.52888 9.80966 5.95739C9.80966 6.38589 9.72206 6.76586 9.54688 7.0973C9.37169 7.42874 9.10298 7.68916 8.74077 7.87855C8.37855 8.06558 7.91572 8.15909 7.35227 8.15909H5.36364V7.36364H7.32386C7.71212 7.36364 8.02462 7.30682 8.26136 7.19318C8.50047 7.07955 8.6733 6.91856 8.77983 6.71023C8.88873 6.49953 8.94318 6.24858 8.94318 5.95739C8.94318 5.66619 8.88873 5.41169 8.77983 5.19389C8.67093 4.97609 8.49692 4.808 8.25781 4.68963C8.0187 4.56889 7.70265 4.50852 7.30966 4.50852H5.76136V11H4.88068ZM8.30398 7.73295L10.0938 11H9.07102L7.30966 7.73295H8.30398ZM14.551 8.76989V5.54545H15.3891V11H14.551V10.0767H14.4942C14.3664 10.3537 14.1675 10.5893 13.8976 10.7834C13.6277 10.9751 13.2868 11.071 12.8749 11.071C12.534 11.071 12.231 10.9964 11.9658 10.8473C11.7007 10.6958 11.4923 10.4685 11.3408 10.1655C11.1893 9.86009 11.1135 9.47538 11.1135 9.01136V5.54545H11.9516V8.95455C11.9516 9.35227 12.0629 9.66951 12.2854 9.90625C12.5103 10.143 12.7968 10.2614 13.1448 10.2614C13.3531 10.2614 13.565 10.2081 13.7804 10.1016C13.9982 9.99503 14.1805 9.83168 14.3273 9.61151C14.4765 9.39134 14.551 9.1108 14.551 8.76989ZM17.7121 7.71875V11H16.8741V5.54545H17.6837V6.39773H17.7548C17.8826 6.12074 18.0767 5.8982 18.3371 5.73011C18.5976 5.55966 18.9337 5.47443 19.3457 5.47443C19.715 5.47443 20.0381 5.55019 20.3151 5.7017C20.5921 5.85085 20.8076 6.07812 20.9614 6.38352C21.1153 6.68655 21.1923 7.07008 21.1923 7.53409V11H20.3542V7.59091C20.3542 7.16241 20.2429 6.8286 20.0204 6.58949C19.7978 6.34801 19.4924 6.22727 19.1042 6.22727C18.8367 6.22727 18.5976 6.28527 18.3869 6.40128C18.1785 6.51728 18.014 6.68655 17.8933 6.90909C17.7725 7.13163 17.7121 7.40152 17.7121 7.71875ZM23.5118 7.71875V11H22.6737V5.54545H23.4833V6.39773H23.5544C23.6822 6.12074 23.8763 5.8982 24.1368 5.73011C24.3972 5.55966 24.7333 5.47443 25.1453 5.47443C25.5146 5.47443 25.8377 5.55019 26.1147 5.7017C26.3917 5.85085 26.6072 6.07812 26.761 6.38352C26.9149 6.68655 26.9919 7.07008 26.9919 7.53409V11H26.1538V7.59091C26.1538 7.16241 26.0425 6.8286 25.82 6.58949C25.5975 6.34801 25.2921 6.22727 24.9038 6.22727C24.6363 6.22727 24.3972 6.28527 24.1865 6.40128C23.9781 6.51728 23.8136 6.68655 23.6929 6.90909C23.5721 7.13163 23.5118 7.40152 23.5118 7.71875ZM28.4733 11V5.54545H29.3114V11H28.4733ZM28.8994 4.63636C28.7361 4.63636 28.5952 4.58073 28.4768 4.46946C28.3608 4.35819 28.3028 4.22443 28.3028 4.06818C28.3028 3.91193 28.3608 3.77817 28.4768 3.6669C28.5952 3.55563 28.7361 3.5 28.8994 3.5C29.0628 3.5 29.2025 3.55563 29.3185 3.6669C29.4368 3.77817 29.496 3.91193 29.496 4.06818C29.496 4.22443 29.4368 4.35819 29.3185 4.46946C29.2025 4.58073 29.0628 4.63636 28.8994 4.63636ZM31.6344 7.71875V11H30.7963V5.54545H31.606V6.39773H31.677C31.8049 6.12074 31.999 5.8982 32.2594 5.73011C32.5198 5.55966 32.856 5.47443 33.2679 5.47443C33.6373 5.47443 33.9604 5.55019 34.2374 5.7017C34.5144 5.85085 34.7298 6.07812 34.8837 6.38352C35.0376 6.68655 35.1145 7.07008 35.1145 7.53409V11H34.2765V7.59091C34.2765 7.16241 34.1652 6.8286 33.9426 6.58949C33.7201 6.34801 33.4147 6.22727 33.0265 6.22727C32.7589 6.22727 32.5198 6.28527 32.3091 6.40128C32.1008 6.51728 31.9363 6.68655 31.8155 6.90909C31.6948 7.13163 31.6344 7.40152 31.6344 7.71875ZM38.7977 13.1591C38.3928 13.1591 38.0448 13.107 37.7536 13.0028C37.4624 12.901 37.2198 12.7661 37.0256 12.598C36.8339 12.4323 36.6812 12.2547 36.5675 12.0653L37.2352 11.5966C37.3109 11.696 37.4068 11.8097 37.5228 11.9375C37.6388 12.0677 37.7974 12.1802 37.9987 12.2749C38.2022 12.3719 38.4686 12.4205 38.7977 12.4205C39.238 12.4205 39.6014 12.3139 39.8879 12.1009C40.1743 11.8878 40.3175 11.554 40.3175 11.0994V9.99148H40.2465C40.185 10.0909 40.0974 10.214 39.9837 10.3608C39.8725 10.5052 39.7115 10.6342 39.5008 10.7479C39.2924 10.8591 39.0107 10.9148 38.6556 10.9148C38.2153 10.9148 37.8199 10.8106 37.4695 10.6023C37.1215 10.3939 36.8457 10.0909 36.6421 9.69318C36.4409 9.29545 36.3403 8.8125 36.3403 8.24432C36.3403 7.68561 36.4385 7.1991 36.635 6.7848C36.8315 6.36813 37.1049 6.04616 37.4553 5.81889C37.8057 5.58925 38.2105 5.47443 38.6698 5.47443C39.0249 5.47443 39.3067 5.53362 39.515 5.65199C39.7257 5.76799 39.8867 5.90057 39.9979 6.04972C40.1116 6.1965 40.1992 6.31723 40.2607 6.41193H40.346V5.54545H41.1556V11.1562C41.1556 11.625 41.0491 12.0062 40.836 12.2997C40.6253 12.5956 40.3412 12.8123 39.9837 12.9496C39.6286 13.0893 39.2333 13.1591 38.7977 13.1591ZM38.7692 10.1619C39.1054 10.1619 39.3895 10.085 39.6215 9.93111C39.8535 9.77723 40.0299 9.55587 40.1506 9.26705C40.2714 8.97822 40.3317 8.63258 40.3317 8.23011C40.3317 7.83712 40.2726 7.49029 40.1542 7.18963C40.0358 6.88897 39.8606 6.65341 39.6286 6.48295C39.3966 6.3125 39.1102 6.22727 38.7692 6.22727C38.4141 6.22727 38.1182 6.31723 37.8815 6.49716C37.6471 6.67708 37.4707 6.91856 37.3523 7.22159C37.2363 7.52462 37.1783 7.8608 37.1783 8.23011C37.1783 8.6089 37.2375 8.94389 37.3559 9.23509C37.4766 9.52391 37.6542 9.75118 37.8886 9.9169C38.1253 10.0803 38.4189 10.1619 38.7692 10.1619Z"
                    fill="#3F9A26"
                  />
                </svg>
                    </div>
                  ))}
              </div>
            </div>
          </div>
      
      </div>
    </>
  );
}


