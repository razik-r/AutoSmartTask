import { useState } from 'react'
import SearchComponent from './Searchcomponent'
import Dropdown from './Dropdown'
import Tablecontent from './Tablecontent'
import TermComponent from './TermComponent'
import { Bolt ,CircleAlert,CircleCheck ,ChevronsUpDown,Trophy, CircleEllipsis} from 'lucide-react'; 



const data=[
    { name:"Ebrahim Khalil kano", id:"#C1234" ,value:"12", className:"bg-[#C5E2F1] text-[#138CC9]", btntext:"Pending"},
    { name:"Alolya Jeddah", id:"#C2345" ,value:"12", className:"bg-[#FFECD6] text-[#ED8F22]", btntext:"Ongoing"},
    { name:"Ebrahim Khalil kano", id:"#C1234" ,value:"12", className:"bg-[#EBDEEF] text-[#805EC5]", btntext:"Approval"},
    { name:"Ebrahim Khalil kano", id:"#C1234" ,value:"12", className:"bg-[#D7EECA] text-[#3F9A26]", btntext:"Submitted"},

   ]

 
export default function EvaluationScore(){
    const [items, setItems] = useState(data);
    return(

        <>

        <body className='min-h-full bg-white-200 mx-[16px] my-5 '>
        
                <div className="min-w-full py-5 flex items-center  bg-white-200 mb-5 border border-gray-border1 rounded-[12px]">
                    <div className="p-3 ml-3  bg-[#FCECEA] border-2 border-[#FFCCC5] rounded-[12px]"><Trophy color="#E14026" /></div>
                    <div className="flex flex-col gap-1"><h1 className='ml-4  text-lg/6 align-text-top font-medium tracking-[-0.5%]'>Evaluation Score</h1>
                    <h2 className='ml-4 text text-text-gray text-xs/4 '>Lorem Ipsum</h2></div>
                </div>
                
                  <div className="min-h-[564px]  rounded-[16px] border-[1.5px] p-3 bg-white border-gray-border1   ">
        
                    <div className="flex items-end">
                      <TermComponent/>
                      <SearchComponent/>
                    </div>
        
                    <div className="flex flex-wrap gap-1 sm:gap-x-4 justify-center items-center">
                    <Dropdown text="Auditor" />
                    <Dropdown text="Region" />
                    <Dropdown text="Type" />
                    <Dropdown text="Outlet"/>
                    <Dropdown text="Status" />
        
                            <div className="ml-auto  max-h-7   font-inter py-1.5 flex flex-wrap  justify-center items-center gap-2 ">

                            <CircleAlert className='w-7 h-7'  color="#082fa6" /> 
                              <h2 className="text-text-gray text-xs font-normal">Pending</h2>
                              <h2 classname="text-sm font-normal">12</h2>

                              <Bolt className='w-7 h-7' color="#d45602" />
                              <h2 className="text-text-gray text-xs">Ongoing</h2>
                              <h2 classname="text-sm">12</h2>

                              <CircleEllipsis className='w-7 h-7' color="#292D32" /> 
                              <h2 className="text-text-gray text-xs">Approval</h2>
                              <h2 classname="text-sm">12</h2>

                              <CircleCheck className='w-7 h-7' color="#209608" />
                              <h2 className="text-text-gray text-xs">Submitted</h2>
                              <h2 classname="">12</h2>


                            </div>
                            </div>
        
        
        {/* table */}
        
        
        <div className="mt-4 border-[1.5px] border-gray-border1  rounded-[12px] overflow-hidden">
        <div className="overflow-x-auto ">
            <table className="w-full text-sm text-left rtl:text-right text-black">
                <thead className="p-3 h-15 ">
                    <tr className="border-b-1 border-neutral-300 bg-[#F6F6F6] text-xs font-inter   ">
                        <th scope="col" className=" font-normal px-3 w-auto min-w-67.5 ">
                         <h2 className='flex items-center gap-1'>Center Name    <ChevronsUpDown className="text-[#84838A] w-4 h-4"  /> </h2>
                        </th>
                        <th scope="col" className="p-3  font-normal min-w-[89px] ">
                            <h2 className='flex items-center gap-2'>Auditor   <ChevronsUpDown className="text-[#84838A] w-4 h-4"  /></h2>
                        </th>
                        <th scope="col" className="px-3 py-3 font-normal min-w-[107px]">
                        <h2 className='flex items-center gap-2'>Customer Experience   <ChevronsUpDown className="text-[#84838A] w-4 h-4 flex-none"  /></h2>
                        </th>
                        <th scope="col" className="px-3 py-3 font-normal min-w-[122px]">
                        <h2 className='flex items-center gap-2'>Equipment Management   <ChevronsUpDown className="text-[#84838A] w-4 h-4 flex-none"  /></h2>
                        </th>
                        <th scope="col" className="px-3 py-3 font-normal min-w-[99px]">
                        <h2 className='flex items-center gap-2'>    Battery Bussiness <ChevronsUpDown className="text-[#84838A] w-4 h-4 flex-none"  /></h2>
                        </th>
                        <th scope="col" className="px-3 py-3 font-normal border-r border-gray-200 min-w-[121px] ">
                        <h2 className='flex items-center gap-2'>  Periodic Maintenance   <ChevronsUpDown className="text-[#84838A] w-4 h-4 flex-none"  /></h2>
                        </th>
        
                        <th scope="col" className="px-3 py-3 font-normal min-w-15.25 ">
                           Score
                        </th>
                        <th scope="col" className="px-3 py-3 font-normal min-w-22.5 text-center">
                          Status
                        </th>
                        <th scope="col" className="px-3 py-3 font-normal text-center min-w-19">
                          Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                {items.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50 border-b border-gray-border1  ">
              <Tablecontent
                id={item.id}
                name={item.name}
                value={item.value}
                className={item.className}
                btntext={item.btntext}
              />
            </tr>
          ))}
        
                    <div className="border-r border-gray-300"></div>
                </tbody>
            </table>
        </div>
        
                  </div>
                  </div>
              </body>

              </>
    )
}