import { useState } from "react";
import Searchcomponent from "./components/Searchcomponent";
import Dropdown from "./components/Dropdown";
import Tablecontent from "./components/Tablecontent";
// import TermComponent from './components/TermComponent'
import QuarterSelector from "./components/QuarterSelector";
import Pending from "./assets/Pending";
import Ongoing from "./assets/Ongoing";
import Approval from "./assets/Approval";
import Submitted from "./assets/Submitted";

import Logo from "./assets/Logo"



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

            <Logo/>
            
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

          <div className="flex flex-wrap gap-1 sm:gap-4 justify-center items-center ">
            <Dropdown text="Auditor" />
            <Dropdown text="Region" />
            <Dropdown text="Type" />
            <Dropdown text="Outlet" />
            <Dropdown text="Status" />

            <div className="ml-auto  max-h-7 mb-4 sm:mb-0  font-inter py-1.5 flex flex-wrap flex-shrink justify-center  items-center  sm:gap-2 ">
              <Pending/>
              <h2 className="text-text-gray text-xs  font-normal">Pending</h2>
              <h2 classname="text-sm font-normal">12</h2>
              <Ongoing/>
              <h2 className="text-text-gray text-xs">Ongoing</h2>
              <h2 classname="text-sm">12</h2>
             <Approval/>
              <h2 className="text-text-gray text-xs">Approval</h2>
              <h2 classname="text-sm">12</h2>
             <Submitted/>
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
