import { useState } from "react";
import WarningIcon from "../assets/WarningIcon";

export default function ActionHeader() {
  return (
    <>
      <div className="  flex items-center  bg-[#FFFFFF] mb-3 border border-gray-border1 rounded-[12px] shadowbox  p-3 ">
        <div className="flex  gap-2">
       <WarningIcon/>
          <div className="flex flex-col gap-1">
            <h1 className="  text-lg/6 align-text-top font-medium ">
              Required Action
            </h1>
            <h2 className=" text text-text-gray text-xs/4 ">Lorem Ipsum</h2>
          </div>
        </div>
      </div>
    </>
  );
}
