
import { Search} from 'lucide-react'; 

export default function Searchcomponent(){
    return(

<>
  <div className="ml-auto flex w-[13%] min-w-fit">
  <div className="flex p-2 w-26 h-10 border-2 gap-1  border-gray-100 rounded-[12px] mt-2 justify-start items-center">
    <Search className="w-4 h-4" color="#a62708" /> {/* Search Icon */}
    <input
      type="text"
      placeholder="Search"
      className="text-gray-800  w-10 text-sm text-left bg-transparent outline-none placeholder-gray-500 "
    />
  </div>
</div>
        </>
    )
}