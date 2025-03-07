import { Eye,FileText,Trophy } from 'lucide-react';
export default function Tablecontent(props){
    return(
    <>
    <th scope="row" class=" py-3  flex font-normal font-inter text-xs ml-2.5 text-black-table whitespace-nowrap justify-start items-start gap-2">
                <div className="bg-gray-100 w-10 h-10 border border-gray-border1 rounded-[8px] font-normal text-xs flex justify-center items-center text-text-gray ">EKK</div>
                <div className="flex flex-col gap-1"><p className="ml-2 font-medium">  {props.name}</p>
                <p className="ml-2 text-gray-400 font-normal text-[10px]">{props.id}</p></div>
                   
                </th>
                <td className="p-3 text-gray-400 text-center">
                    EK
                </td>
                <td class="px-3 py-3 text-gray-400 text-left">
                    {props.value}
                </td>
                <td className="px-3 py-4  text-gray-400 ">
                    {props.value}
                </td>

                <td className="px-3 py-3  text-gray-400 ">
                    {props.value}
                </td>
                <td className="px-3 py-3  text-gray-400 ">
                    {props.value}
                </td>
                <td className="px-3 py-4 flex gap-1 font-medium text-sm/4.5 items-center   ">
                    70<Trophy className='w-4 h-4 text-trophy-red mb-[1px]'  color="#bd0505" />
                </td>
                <td className="px-3 py-4 font-medium text-[10px]/3.5    ">
                  <h1 className={`py-1 px-1.5  border border-white rounded-[4px] text-center ${props.className}`}>{props.btntext}</h1>
                </td>
                <td className="px-3 py-4 text-right flex gap-2  ">
                <button className="hover:drop-shadow-lg " >
                <Eye className='size-5' color="#B5B5B5" />
                </button>
                <button className=''>
                <FileText className='size-5' color="#B5B5B5" />
                </button>  
                </td>
                </>
    )
}