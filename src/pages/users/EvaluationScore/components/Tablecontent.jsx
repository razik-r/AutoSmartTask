import { Eye,FileText,Trophy } from 'lucide-react';
import Avatar from './Avatar';
export default function Tablecontent(props){
    console.log("Color prop:", props);
    return(
    <>
    <th scope="row" class=" py-3 h-16 flex font-normal font-inter text-xs ml-2.5 text-black-table whitespace-nowrap justify-start items-start gap-2">
                <div className="bg-gray-100 w-10 h-10 border border-gray-border1 rounded-[8px] font-normal text-xs flex justify-center items-center text-text-gray ">EKK</div>
                <div className="flex flex-col gap-1"><p className="ml-2 font-medium">  {props.name}</p>
                <p className="ml-2 text-text-gray font-normal text-[10px]">{props.id}</p></div>
                   
                </th>
                <td className="p-3 h-16 text-text-gray text-center  ">
                   
                    <Avatar 
                  initials="EK" 
                  color={props.color1}
                  color2={props.color2}
                  color3={props.color3}
                />
                 
                </td>
                <td class="px-3 py-3 h-16 text-xs text-text-gray text-left ">
                    {props.value}
                </td>
                <td className="px-3 py-3 h-16 text-xs text-text-gray ">
                    {props.value}
                </td>

                <td className="px-3 py-3 h-16 text-xs  text-text-gray ">
                    {props.value}
                </td>
                <td className="px-3 py-3 h-16 text-xs text-text-gray ">
                    {props.value}
                </td>

                <td className="px-3 py-3 h-16 text-xs text-text-gray  ">
                    {props.value}
                </td>
                <td className="px-3 py-3 h-16 text-xs text-text-gray ">
                    {props.value}
                </td>

                <td className="px-3 py-4 h-16 w-15.25  font-medium text-sm/4.5 items-center border-l  border-gray-border1   bg-[#FFFFFF] shadow-2xl  sticky right-[160px] z-10    ">
                   <div className='flex gap-2.5 '> 70<Trophy className='w-4 h-4 text-trophy-red mb-[1px]'  color="#bd0505" /></div>
                </td>
               

                <td className="px-3 py-4 h-16 w-22.5 font-medium text-[10px]/3.5  bg-[#FFFFFF]     sticky right-[70px] z-10   ">
                  <h1 className={`py-1 px-1.5   rounded-[4px] text-center ${props.className}`}>{props.btntext}</h1>
                </td>

                <td className="px-3 py-4 h-16 w-19 text-right   bg-[#FFFFFF] sticky right-[0px] z-10 ">
               <div className='flex  gap-2.5 justify-center items-center'>
               <button className="hover:drop-shadow-lg " >
                <Eye className='size-5' color="#B5B5B5" />
                </button>
                <button className=''>
                <FileText className='size-5' color="#B5B5B5" />
                </button> 
                </div> 
                </td>

                </>
    )
}