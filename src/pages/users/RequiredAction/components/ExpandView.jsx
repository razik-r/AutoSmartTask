// import ActionHeader from "./ActionHeader"
import CenterSelector from "./CenterSelector";
import Searchcomponent from "./Searchcomponent";
import ActionDropdown from "./ActionDropdown";
import DetailedPageCard from "./DetailedPageCard";

export default function ExpandView() {
  return (
    <>
      <div className="flex gap-3 ">
        <CenterSelector />
      </div>

      <div className="flex gap-3  items-end justify-center flex-wrap  ">
        <ActionDropdown text="Select Terms" />
        <ActionDropdown text="Select Auditor" />
        <ActionDropdown text="Select PIC" />

        <Searchcomponent />

        <div className="flex  flex-wrap pl-2.5 py-[8px] pr-[8px] h-10 w-30 border-[1.5px]  border-gray-border1 rounded-[8px]  justify-between items-center">
          <div className="flex">
            <p className="text-xs/4 text-[#212121] ">Sort By</p>
          </div>
          <div className="size-5 text-center flex">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.3758 3.33338L14.2909 3.33908C13.9858 3.38047 13.7508 3.64196 13.7508 3.95838L13.75 14.535L11.0668 11.8537L10.9967 11.7932C10.7519 11.6118 10.4047 11.6321 10.1828 11.854C9.93892 12.0983 9.93909 12.494 10.1833 12.738L13.9364 16.488L14.0065 16.5485C14.2513 16.7299 14.5985 16.7095 14.8203 16.4876L18.5672 12.7376L18.6276 12.6675C18.8091 12.4227 18.7888 12.0755 18.5668 11.8537L18.4967 11.7932C18.2519 11.6118 17.9047 11.6321 17.6828 11.854L15 14.5384L15.0008 3.95838L14.995 3.87357C14.9537 3.5685 14.6922 3.33338 14.3758 3.33338ZM5.17868 3.51645L1.43304 7.26233L1.37253 7.33243C1.19099 7.57711 1.21118 7.92433 1.43308 8.14621L1.50318 8.20673C1.74786 8.38829 2.09508 8.36804 2.31696 8.14618L4.9975 5.4643L4.99805 16.0458L5.00376 16.1306C5.04514 16.4357 5.30664 16.6708 5.62305 16.6708L5.70786 16.6651C6.01293 16.6237 6.24805 16.3622 6.24805 16.0458L6.2475 5.46597L8.93325 8.14668L9.00342 8.20712C9.24825 8.38838 9.59542 8.36788 9.81709 8.14572C10.0609 7.90138 10.0605 7.50564 9.81617 7.26183L6.06209 3.51595L5.99198 3.45555C5.7473 3.27438 5.40039 3.29472 5.17868 3.51645Z"
                fill="#E14026"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-col-2 grid-col-1 gap-4 mt-4">
        <div className="max-w-[442.6px]  min-h-[424px] bg-[#F9F9F9]  border border-gray-border1 p-3 rounded-[12px] flex flex-col gap-2">
          <p className="text-[16px]/5 text-[#212121] font-medium ml-[6px]">
            Pending
            <span className="text-[#84838A] ml-[2px] text-[16px]/5 font-medium">
              4
            </span>{" "}
          </p>
          <DetailedPageCard />
          <DetailedPageCard />
          <DetailedPageCard />
        </div>
        <div className="max-w-[442.6px]  min-h-[424px] bg-[#F9F9F9]  border border-gray-border1 p-3 rounded-[12px] flex flex-col gap-2">
          <p className="text-[16px]/5 text-[#212121] font-medium ml-[6px]">
            In Progress
            <span className="text-[#84838A] ml-[2px] text-[16px]/5 font-medium">
              4
            </span>{" "}
          </p>
          <DetailedPageCard />
        </div>
        <div className="max-w-[442.6px]  min-h-[424px] bg-[#F9F9F9]  border border-gray-border1 p-3 rounded-[12px] flex flex-col gap-2">
          <p className="text-[16px]/5 text-[#212121] font-medium ml-[6px]">
            Completed
            <span className="text-[#84838A] ml-[2px] text-[16px]/5 font-medium">
              4
            </span>{" "}
          </p>
          <DetailedPageCard />
        </div>
      </div>
    </>
  );
}
