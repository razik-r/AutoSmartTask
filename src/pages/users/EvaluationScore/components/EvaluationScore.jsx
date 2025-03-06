import { useState } from 'react'
import SearchComponent from './Searchcomponent'
import Dropdown from './Dropdown'
import Tablecontent from './Tablecontent'
import TermComponent from './TermComponent'
import { Bolt ,CircleAlert,CircleCheck ,ChevronsUpDown,Trophy} from 'lucide-react'; 



const data=[
    { name:"Ebrahim Khalil kano", id:"#C1234" ,value:"12", className:"bg-blue-200 text-blue-400", btntext:"Pending"},
    { name:"Alolya Jeddah", id:"#C2345" ,value:"12", className:"bg-orange-200 text-orange-400", btntext:"Ongoing"},
    { name:"Ebrahim Khalil kano", id:"#C1234" ,value:"12", className:"bg-violet-200 text-violet-400", btntext:"Approval"},
    { name:"Ebrahim Khalil kano", id:"#C1234" ,value:"12", className:"bg-green-200 text-green-400", btntext:"Submitted"},

   ]

 
export default function EvaluationScore(){
    const [items, setItems] = useState(data);
    return(

        <>

        <body className='min-h-full bg-white-200 mx-[16px] my-5 '>
        
                <div className="min-w-full py-5 flex items-center  bg-white-200 mb-5 border border-gray-border1 rounded-[12px]">
                    <div className="p-3 ml-3  bg-orange-200 border-2 border-orange-500 rounded-[12px]"><Trophy color="#b34700" /></div>
                    <h1 className='ml-4  text-2xl align-text-top font-medium'>Evaluation Score</h1>
                </div>
                
                  <div className="min-h-[564px]  rounded-[16px] border-[1.5px] p-3 bg-white border-gray-border1   ">
        
                    <div className="flex">
                      <TermComponent/>
                      <SearchComponent/>
                    </div>
        
                    <div className="flex flex-wrap sm:flex-nowrap gap-1 sm:gap-4">
                    <Dropdown text="Auditor" />
                    <Dropdown text="Region" />
                    <Dropdown text="Type" />
                    <Dropdown text="Outlet" />
                    <Dropdown text="Status" />
        
                            <div className="ml-auto px-4  font-inter py-1.5 flex flex-wrap sm: flex-nowrap justify-center items-center gap-1">

                            <CircleAlert className='w-7 h-7'  color="#082fa6" /> 
                              <h2 className="text-text-gray text-xs">Pending</h2>
                              <h2 classname="text-sm">12</h2>

                              <Bolt className='w-7 h-7' color="#d45602" />
                              <h2 className="text-text-gray text-xs">Ongoing</h2>
                              <h2 classname="text-sm">12</h2>

                              <CircleAlert className='w-7 h-7' color="#082fa6" /> 
                              <h2 className="text-text-gray text-xs">Approval</h2>
                              <h2 classname="text-sm">12</h2>

                              <CircleCheck className='w-7 h-7' color="#209608" />
                              <h2 className="text-text-gray text-xs">Submitted</h2>
                              <h2 classname="">12</h2>


                            </div>
        
                        
                           
        
                            
        
                            
                            </div>
        
        
        {/* table */}
        
        
        <div className="mt-6 border-[1.5px] border-gray-border1  rounded-[12px] overflow-hidden">
        <div className="overflow-x-auto ">
            <table className="w-full text-sm text-left rtl:text-right text-black">
                <thead className="p-3">
                    <tr className="border-b-2 border-neutral-300 bg-[#F6F6F6] text-xs font-inter ">
                        <th scope="col" className=" font-normal px-3 ">
                         <h2 className='flex items-center'>Center Name    <ChevronsUpDown className="text-[#84838A] w-4 h-4"  /> </h2>
                        </th>
                        <th scope="col" className="p-3 font-normal  ">
                            <h2 className='flex items-center'>Auditor   <ChevronsUpDown className="text-[#84838A] w-4 h-4"  /></h2>
                        </th>
                        <th scope="col" className="px-6 py-3 font-normal">
                        <h2 className='flex items-center'>Customer Experience   <ChevronsUpDown className="text-[#84838A] w-4 h-4 flex-none"  /></h2>
                        </th>
                        <th scope="col" className="px-6 py-3 font-normal">
                        <h2 className='flex items-center'>Equipment Management   <ChevronsUpDown className="text-[#84838A] w-4 h-4 flex-none"  /></h2>
                        </th>
                        <th scope="col" className="px-6 py-3 font-normal">
                        <h2 className='flex items-center'>    Battery Bussiness <ChevronsUpDown className="text-[#84838A] w-4 h-4 flex-none"  /></h2>
                        </th>
                        <th scope="col" className="px-6 py-3 font-normal border-r border-gray-200">
                        <h2 className='flex items-center'>  Periodic Maintenance   <ChevronsUpDown className="text-[#84838A] w-4 h-4 flex-none"  /></h2>
                        </th>
        
                        <th scope="col" className="px-6 py-3 font-normal">
                           Score
                        </th>
                        <th scope="col" className="px-6 py-3 font-normal">
                          status
                        </th>
                        <th scope="col" className="px-6 py-3 font-normal">
                          Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                {items.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
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