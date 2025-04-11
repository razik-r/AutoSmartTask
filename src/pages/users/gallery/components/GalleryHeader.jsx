
import GalleryIcon from "../assets/GalleryIcon";

export default function GalleryHeader() {
  return (
    <>
      <div className="  flex items-center  bg-[#FFFFFF] mb-3 border border-gray-border1 rounded-[12px] shadowbox  p-3 ">
        <div className="flex  gap-2">
       <GalleryIcon/>
          <div className="flex flex-col gap-1">
            <h1 className="  text-lg/6 align-text-top font-medium ">
              Gallery
            </h1>
            <h2 className=" text text-text-gray text-xs/4 ">Lorem Ipsum</h2>
          </div>
        </div>
      </div>
    </>
  );
}
