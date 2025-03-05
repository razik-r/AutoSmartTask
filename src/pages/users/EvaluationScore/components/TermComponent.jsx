import {ChevronDown} from 'lucide-react'
export default function Term(){
    return(
        <>

<div className=" w-[13%] min-w-fit ">
  <div className="h-16 w-full border-2 border-gray-100 rounded-[10px] flex flex-col gap-2 ml-2 my-2 py-1.5 ">
    <p className="text-neutral-500 text-sm ml-2 ">Select the term</p>
    <div className="flex space-x-3 justify-center ">
      <h1 className="font-semibold text-sm">2025-Quarter 1</h1>
      <h2 className="bg-green-600 text-white text-center rounded-[6px] px-1 text-sm">Running</h2>
      <ChevronDown className="w-4 h-4" color="#a62708" />
    </div>
  </div>


 
</div>
        
        </>
    )
}