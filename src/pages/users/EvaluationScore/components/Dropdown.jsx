
import { ChevronDown } from 'lucide-react';
export default function Dropdown(props){
    return(
        
        <button className="font-inter flex w-auto border-[1.5px] max-h-10 max-w-[91px] py-2.5  pr-2.5 pl-3 border-gray-border rounded-[8px] mt-3  gap-2 justify-center items-center hover:bg-neutral-50 hover:shadow">
        <h1 className="text-text-gray text-xs/4">{props.text}</h1>
        <ChevronDown className=' w-5 h-5' color="#a62708" />
        </button>
        
    )
}