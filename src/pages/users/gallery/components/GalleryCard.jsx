import HashIcon from "../assets/HashIcon";

export default function GalleryCard({ img, selected, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex w-fit h-fit  flex-col items-start gap-2 rounded-lg    bg-white p-2 cursor-pointer transition-all duration-100 ease-in-out ${
        selected
          ? "shadow-[0_0_0_2px_#E14026]   scale-[1.01] "
          : " border border-gray-border1 shadowbox hover:border hover:border-red-300  "
      }  `}
    >
      <div className="  flex order-0 self-stretch hover:scale-102  transition-all ease-in ">
        <div className="  rounded-[4px]  overflow-hidden outline-3 outline-offset-[-3px] outline-white-100/20">
          <img src={img} alt="Display image" className="block " />
        </div>
      </div>
      <div
        className="flex justify-start 
       gap-1 ml-0.5 "
      >
        <div>
          <HashIcon />
        </div>

        <div
          className={`text-xs font-medium leading-4 flex  text-left  whitespace-nowrap text-clip overflow-hidden ${
            selected ? "text-[#E14026]" : "text-text-dark"
          }`}
        >
          Is the fog machine functioning correctly?
        </div>
      </div>
    </div>
  );
}
