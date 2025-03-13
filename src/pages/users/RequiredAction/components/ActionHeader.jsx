import { useState } from "react";

export default function ActionHeader() {
  return (
    <>
      <div className="min-w-full max-h-17  flex items-center  bg-[#FFFFFF] mb-3 border border-gray-border1 rounded-[12px] shadowbox  p-3 ">
        <div className="flex  gap-2">
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
              d="M31.76 25.92L25.36 14.4C24.5 12.85 23.31 12 22 12C20.69 12 19.5 12.85 18.64 14.4L12.24 25.92C11.43 27.39 11.34 28.8 11.99 29.91C12.64 31.02 13.92 31.63 15.6 31.63H28.4C30.08 31.63 31.36 31.02 32.01 29.91C32.66 28.8 32.57 27.38 31.76 25.92ZM21.25 19C21.25 18.59 21.59 18.25 22 18.25C22.41 18.25 22.75 18.59 22.75 19V24C22.75 24.41 22.41 24.75 22 24.75C21.59 24.75 21.25 24.41 21.25 24V19ZM22.71 27.71C22.66 27.75 22.61 27.79 22.56 27.83C22.5 27.87 22.44 27.9 22.38 27.92C22.32 27.95 22.26 27.97 22.19 27.98C22.13 27.99 22.06 28 22 28C21.94 28 21.87 27.99 21.8 27.98C21.74 27.97 21.68 27.95 21.62 27.92C21.56 27.9 21.5 27.87 21.44 27.83C21.39 27.79 21.34 27.75 21.29 27.71C21.11 27.52 21 27.26 21 27C21 26.74 21.11 26.48 21.29 26.29C21.34 26.25 21.39 26.21 21.44 26.17C21.5 26.13 21.56 26.1 21.62 26.08C21.68 26.05 21.74 26.03 21.8 26.02C21.93 25.99 22.07 25.99 22.19 26.02C22.26 26.03 22.32 26.05 22.38 26.08C22.44 26.1 22.5 26.13 22.56 26.17C22.61 26.21 22.66 26.25 22.71 26.29C22.89 26.48 23 26.74 23 27C23 27.26 22.89 27.52 22.71 27.71Z"
              fill="#E14026"
            />
          </svg>

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
