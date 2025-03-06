import { Eye,FileText,Trophy } from 'lucide-react';
export default function Tablecontent(props){
    return(
    <>
    <th scope="row" class="pl-3 py-4 flex font-normal font-inter text-xs  text-gray-900 whitespace-nowrap justify-center items-start">
                <div className="bg-gray-100 p-2.5 border-2 border-neutral-200 rounded-[6px] font-normal text-gray-400 flex ">EKK</div>
                <div className="flex flex-col"><p className="ml-2 font-medium">  {props.name}</p>
                <p className="ml-2 text-gray-400 font-normal text-[10px]">{props.id}</p></div>
                   
                </th>
                <td className="px-6 py-4 text-gray-400 text-center">
                    EK
                </td>
                <td class="py-4 px-6 text-gray-400 text-left">
                    {props.value}
                </td>
                <td className="px-6 py-4  text-gray-400 ">
                    {props.value}
                </td>

                <td className="px-6 py-4  text-gray-400 ">
                    {props.value}
                </td>
                <td className="px-6 py-4  text-gray-400 ">
                    {props.value}
                </td>
                <td className="px-6 py-4 flex gap-1 font-medium text-sm/4.5 items-center">
                    70<Trophy size={20} color="#bd0505" />
                </td>
                <td className="px-8 py-4 font-medium text-[10px]/3.5">
                  <h1 className={`py-1 px-1.5  border border-white rounded-[4px] text-center ${props.className}`}>{props.btntext}</h1>
                    
                </td>
                <td className="px-6 py-4 text-right flex space-x-2">
                <button className="hover:drop-shadow-lg" >
                <Eye color="#676565" />
                </button>
                <button >
                <FileText color="#676565" />
                </button>  
                </td>
                </>
    )
}