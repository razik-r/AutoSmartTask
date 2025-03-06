import {ChevronDown} from 'lucide-react'
export default function Term(){
    return(
        <>


<div className="border-[1.5px] border-gray-border rounded-[8px] flex flex-col gap-2 max-h-[56px] py-2.5 pr-3 pl-2.5 font-inter">
    <p className="text-text-gray text-[10px] font-normal ml-[1px] tracking-[-0.5%] leading-3">Select the term</p>
    <div className="flex gap-2 justify-center items-center">
      <h1 className="font-medium text-xs leading-4 tracking-[-0.5%]">2025-Quarter 1</h1>
      <div className="bg-green-200 rounded-[4px] p-1 min-w-[46px] h-[15px] flex justify-center items-center">
        <h2 className='text-[10px] text-white font-normal leading-3'>Running</h2>
      </div>
      <ChevronDown className="w-4 h-4 ml-1" color="#E14026" />
    </div>
</div>
        
        </>
    )
}