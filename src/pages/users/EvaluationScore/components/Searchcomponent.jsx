
import { Search} from 'lucide-react'; 

export default function Searchcomponent(){
    return(

<>
<div className="ml-auto flex justify-end font-inter mt-4">
  <div className="flex flex-col flex-wrap px-2.5 py-3 h-10 w-30 border-[1.5px] gap-2 border-gray-border rounded-[8px] mt-2 justify-start items-center">
    <Search className="w-4 h-4" color="#a62708" /> 
    <input
      type="text"
      placeholder="Search"
      className="text-gray-800 text-xs leading-4   bg-transparent outline-none placeholder-text-gray font-normal "
    />
  </div>
</div>
        </>
    )
}