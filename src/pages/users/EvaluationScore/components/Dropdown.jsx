
import { ChevronDown } from 'lucide-react';
export default function Dropdown(props){
    return(
        
        <button className=" flex w-auto border-2  px-[6px]  py-[8px] border-gray-100 rounded-[10px] ml-2 mt-3  gap-2 justify-center items-center hover:bg-gray-100">
        <p classname="text-gray-300">{props.text}</p>
        <ChevronDown className='mt-1 w-6 h-6' color="#a62708" />
        </button>
        
    )
}