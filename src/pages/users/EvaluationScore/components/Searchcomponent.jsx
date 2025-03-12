
import { Search} from 'lucide-react'; 

export default function Searchcomponent(){
    return(

<>
<div className="ml-auto flex justify-end font-inter  max-h-10">
  <div className="flex flex-col flex-wrap px-2.5 py-3 h-10 w-30 border-[1.5px] gap-2 border-gray-border rounded-[8px]  justify-start items-center">
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.66668 14C11.1645 14 14 11.1645 14 7.66671C14 4.1689 11.1645 1.33337 7.66668 1.33337C4.16887 1.33337 1.33334 4.1689 1.33334 7.66671C1.33334 11.1645 4.16887 14 7.66668 14Z" stroke="#E14026" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.6667 14.6667L13.3333 13.3334" stroke="#E14026" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    <input
      type="text"
      placeholder="Search"
      className="text-gray-600 text-xs leading-4   bg-transparent outline-none placeholder-[#212121] font-normal "
    />
  </div>
</div>
        </>
    )
}