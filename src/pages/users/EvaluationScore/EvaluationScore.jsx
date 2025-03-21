import { useState } from "react";
import Searchcomponent from "./components/Searchcomponent";
import Dropdown from "./components/Dropdown";
import Tablecontent from "./components/Tablecontent";
// import TermComponent from './components/TermComponent'
import QuarterSelector from "./components/QuarterSelector";
import Pending from "./assets/Pending";
import Ongoing from "./assets/Ongoing";
import Approval from "./assets/Approval";



import {
  Bolt,
  CircleAlert,
  CircleCheck,
  ChevronsUpDown,
  Trophy,
  CircleEllipsis,
} from "lucide-react";

const data = [
  {
    name: "Ebrahim Khalil kano",
    id: "#C1234",
    value: "12",
    className: "bg-[#C5E2F1] text-[#138CC9]",
    btntext: "Pending",
    color: "text-[#E14026]",
    color2: "text-[#805EC5]",
    color3: "text-[#3F9A26]",
  },
  {
    name: "Alolya Jeddah",
    id: "#C2345",
    value: "12",
    className: "bg-[#FFECD6] text-[#ED8F22]",
    btntext: "Ongoing",
    color: "text-[#138CC9]",
    color3: "text-[#212121]",
  },
  {
    name: "Ebrahim Khalil kano",
    id: "#C1234",
    value: "12",
    className: "bg-[#EBDEEF] text-[#805EC5]",
    btntext: "Approval",
    color3: "text-[#E14026]",
  },
  {
    name: "Ebrahim Khalil kano",
    id: "#C1234",
    value: "12",
    className: "bg-[#D7EECA] text-[#3F9A26]",
    btntext: "Submitted",
    color: "text-[#805EC5]",
    color2: "text-[#3F9A26]",
    color3: "text-[#E14026]",
  },
];

export default function EvaluationScore() {
  const [items, setItems] = useState(data);
  return (
    <>
      <div className="min-h-full bg-[#FCFCFC] px-6 py-4 ">
        <div className="min-w-full min-h-17 py-3 flex items-center size-11 bg-[#FFFFFF] mb-3 border border-gray-border1 rounded-[12px] shadowbox">
          <div className=" ml-3  ">
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="43"
                height="43"
                rx="7.5"
                fill="#FCECEA"
              />
              <rect
                x="0.5"
                y="0.5"
                width="43"
                height="43"
                rx="7.5"
                stroke="#FFCCC5"
              />
              <path
                d="M21.25 28.25H19C17.9 28.25 17 29.15 17 30.25V30.5H16C15.59 30.5 15.25 30.84 15.25 31.25C15.25 31.66 15.59 32 16 32H28C28.41 32 28.75 31.66 28.75 31.25C28.75 30.84 28.41 30.5 28 30.5H27V30.25C27 29.15 26.1 28.25 25 28.25H22.75V25.96C22.5 25.99 22.25 26 22 26C21.75 26 21.5 25.99 21.25 25.96V28.25Z"
                fill="#E14026"
              />
              <path
                d="M28.48 21.64C29.14 21.39 29.72 20.98 30.18 20.52C31.11 19.49 31.72 18.26 31.72 16.82C31.72 15.38 30.59 14.25 29.15 14.25H28.59C27.94 12.92 26.58 12 25 12H19C17.42 12 16.06 12.92 15.41 14.25H14.85C13.41 14.25 12.28 15.38 12.28 16.82C12.28 18.26 12.89 19.49 13.82 20.52C14.28 20.98 14.86 21.39 15.52 21.64C16.56 24.2 19.06 26 22 26C24.94 26 27.44 24.2 28.48 21.64ZM24.84 18.45L24.22 19.21C24.12 19.32 24.05 19.54 24.06 19.69L24.12 20.67C24.16 21.27 23.73 21.58 23.17 21.36L22.26 21C22.12 20.95 21.88 20.95 21.74 21L20.83 21.36C20.27 21.58 19.84 21.27 19.88 20.67L19.94 19.69C19.95 19.54 19.88 19.32 19.78 19.21L19.16 18.45C18.77 17.99 18.94 17.48 19.52 17.33L20.47 17.09C20.62 17.05 20.8 16.91 20.88 16.78L21.41 15.96C21.74 15.45 22.26 15.45 22.59 15.96L23.12 16.78C23.2 16.91 23.38 17.05 23.53 17.09L24.48 17.33C25.06 17.48 25.23 17.99 24.84 18.45Z"
                fill="#E14026"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="ml-4  text-lg/6 align-text-top font-medium ">
              Evaluation Score
            </h1>
            <h2 className="ml-4 text text-text-gray text-xs/4 ">Lorem Ipsum</h2>
          </div>
        </div>

        <div className=" rounded-[16px] border-[1.5px] p-4 bg-white border-gray-border1   ">
          <div className="flex items-end">
            <QuarterSelector />
            <Searchcomponent />
          </div>

          <div className="flex flex-wrap gap-1 sm:gap-x-4 justify-center items-center ">
            <Dropdown text="Auditor" />
            <Dropdown text="Region" />
            <Dropdown text="Type" />
            <Dropdown text="Outlet" />
            <Dropdown text="Status" />

            <div className="ml-auto  max-h-7 mb-4 sm:mb-0  font-inter py-1.5 flex flex-wrap flex-shrink justify-center  items-center  sm:gap-2 ">
              <Pending/>
              <h2 className="text-text-gray text-xs  font-normal">Pending</h2>
              <h2 classname="text-sm font-normaln">12</h2>

             
              <Ongoing/>
              <h2 className="text-text-gray text-xs">Ongoing</h2>
              <h2 classname="text-sm">12</h2>

             <Approval/>

              <h2 className="text-text-gray text-xs">Approval</h2>
              <h2 classname="text-sm">12</h2>

              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M14 25.6667C20.4434 25.6667 25.6667 20.4433 25.6667 14C25.6667 7.55669 20.4434 2.33334 14 2.33334C7.55672 2.33334 2.33337 7.55669 2.33337 14C2.33337 20.4433 7.55672 25.6667 14 25.6667Z"
                  fill="#3F9A26"
                />
                <path
                  d="M12.3433 18.1767C12.11 18.1767 11.8883 18.0833 11.725 17.92L8.42331 14.6183C8.08497 14.28 8.08497 13.72 8.42331 13.3817C8.76164 13.0433 9.32164 13.0433 9.65997 13.3817L12.3433 16.065L18.34 10.0683C18.6783 9.72999 19.2383 9.72999 19.5766 10.0683C19.915 10.4067 19.915 10.9667 19.5766 11.305L12.9616 17.92C12.7983 18.0833 12.5766 18.1767 12.3433 18.1767Z"
                  fill="#3F9A26"
                />
              </svg>

              <h2 className="text-text-gray text-xs">Submitted</h2>
              <h2 classname="">12</h2>
            </div>
          </div>

          {/* table */}

          <div className="mt-4 border-[1.5px] border-gray-border1  rounded-[12px] overflow-hidden">
            <div className="overflow-x-auto   ">
              <table className="w-full text-sm text-left rtl:text-right text-black-table [&_tr>td:nth-child(9)]:shadowborder">
                <thead className="p-3 h-15 ">
                  <tr className="border-b-1 border-gray-border1  bg-[#F6F6F6] text-xs font-inter   ">
                    <th
                      scope="col"
                      className="font-normal px-3 w-auto min-w-67.5 "
                    >
                      <h2 className="flex items-center gap-1">
                        Center Name{" "}
                        <ChevronsUpDown className="text-[#84838A] w-4 h-4" />{" "}
                      </h2>
                    </th>
                    <th scope="col" className="p-3  font-normal min-w-[89px] ">
                      <h2 className="flex items-center gap-2">
                        Auditor{" "}
                        <ChevronsUpDown className="text-[#84838A] w-4 h-4" />
                      </h2>
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 font-normal min-w-[107px] "
                    >
                      <h2 className="flex items-center  gap-2 ">
                        Customer Experience{" "}
                        <ChevronsUpDown className="text-[#84838A] w-4 h-4 flex-none" />
                      </h2>
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 font-normal min-w-[122px]"
                    >
                      <h2 className="flex items-center gap-2">
                        Equipment Management{" "}
                        <ChevronsUpDown className="text-[#84838A] w-4 h-4 flex-none" />
                      </h2>
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 font-normal min-w-[99px]"
                    >
                      <h2 className="flex items-center gap-2">
                        {" "}
                        Battery Bussiness{" "}
                        <ChevronsUpDown className="text-[#84838A] w-4 h-4 flex-none" />
                      </h2>
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 font-normal  border-gray-200 min-w-[121px] "
                    >
                      <h2 className="flex items-center gap-2">
                        {" "}
                        Periodic Maintenance{" "}
                        <ChevronsUpDown className="text-[#84838A] w-4 h-4 flex-none" />
                      </h2>
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 font-normal min-w-[99px] "
                    >
                      <h2 className="flex items-center gap-2">
                        {" "}
                        Tire Bussiness{" "}
                        <ChevronsUpDown className="text-[#84838A] w-4 h-4 flex-none" />
                      </h2>
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3 font-normal  border-gray-200 min-w-[121px]  "
                    >
                      <h2 className="flex items-center gap-2">
                        {" "}
                        Periodic Maintenance{" "}
                        <ChevronsUpDown className="text-[#84838A] w-4 h-4 flex-none" />
                      </h2>
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3 font-normal min-w-15.25 text-center border-l border-gray-border1 drop-shadow-sm    bg-[#F6F6F6]  sticky right-[160px] z-10"
                    >
                      Score
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 font-normal min-w-22.5 text-center  bg-[#F6F6F6] sticky right-[70px] z-10 "
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 font-normal text-center  min-w-19  bg-[#F6F6F6] sticky right-[0px] z-10  "
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="">
                  {items.map((item) => (
                    <tr
                      key={item.id}
                      className=" hover:bg-gray-50   border-b  border-gray-border1"
                    >
                      <Tablecontent
                        id={item.id}
                        name={item.name}
                        value={item.value}
                        className={item.className}
                        btntext={item.btntext}
                        color1={item.color}
                        color2={item.color2}
                        color3={item.color3}
                      />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
