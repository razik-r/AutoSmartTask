import Search from "../../../../assets/Search";

export default function Searchcomponent() {
  return (
    <>
      <div className="ml-auto   font-inter   max-w-30">
        <div className="flex flex-col flex-wrap px-2.5 py-3 h-10  border gap-2 border-gray-border rounded-[8px]  justify-start items-center">
          
<Search/>
          <input
            type="text"
            placeholder="Search"
            className="text-gray-600 text-xs leading-4  bg-transparent outline-none placeholder-[#212121] font-normal "
          />
        </div>
      </div>
    </>
  );
}
