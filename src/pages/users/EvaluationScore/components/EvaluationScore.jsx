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

        <body className='min-h-full bg-gray-100 mx-[16px] my-5'>
        
                <div className="min-w-full py-5 flex items-center  bg-white mb-5 border-2 border-gray-200 rounded-[12px]">
                    <div className="p-3 ml-3  bg-orange-200 border-2 border-orange-500 rounded-[12px]"><Trophy color="#b34700" /></div>
                    <h1 className='ml-4  text-2xl align-text-top font-medium'>Evaluation Score</h1>
                </div>
                
                  <div className="min-h-[564px]  rounded-[16px] border-2 p-3 bg-white border-neutral-300   ">
        
                    <div className="flex">
                      <TermComponent/>
                      <SearchComponent/>
                    </div>
        
                    <div className="flex flex-wrap sm:flex-nowrap gap-1 sm:gap-2">
                    <Dropdown text="Audit" />
                    <Dropdown text="Region" />
                    <Dropdown text="Type" />
                    <Dropdown text="Outlet" />
                    <Dropdown text="Status" />
        
                            <div className="ml-auto flex justify-center items-center gap-2">
                            <CircleAlert  color="#082fa6" /> 
                              <h2 className="text-gray-400">Pending</h2>
                              <h2 classname="">12</h2>
                            </div>
        
                        
                            <div className="   flex justify-center items-center gap-2">
                            <Bolt  color="#d45602" />
                              <h2 className="text-gray-400">Ongoing</h2>
                              <h2 classname="">12</h2>
                            </div>
        
                            <div className=" flex justify-center items-center gap-2">
                            <CircleAlert  color="#082fa6" /> 
                              <h2 className="text-gray-400">Approval</h2>
                              <h2 classname="">12</h2>
                            </div>
        
                            <div className=" flex w-auto justify-center items-center gap-2">
                            <CircleCheck size={20} color="#209608" />
                              <h2 className="text-gray-400">Submitted</h2>
                              <h2 classname="">12</h2>
                            </div>
                            </div>
        
        
        {/* table */}
        
        
        <div className="mt-6 mx-2 border-[1.5px] border-neutral-300  rounded-[13px] overflow-hidden">
            <table className="w-full text-sm text-left rtl:text-right text-black">
                <thead className="text-sm ">
                    <tr className="border-b-2 border-neutral-300 bg-neutral-100 ">
                        <th scope="col" className="px-6 flex py-3 font-normal  justify-start mt-2 gap-2 ">
                            Center Name <ChevronsUpDown size={20} />
                        </th>
                        <th scope="col" class="px-6 py-3 font-normal  ">
                            <h2 className='flex'>Auditor <ChevronsUpDown size={20}/></h2>
                        </th>
                        <th scope="col" class="px-6 py-3 font-normal">
                        <h2 className='flex'>Customer Experience <ChevronsUpDown /></h2>
                        </th>
                        <th scope="col" class="px-6 py-3 font-normal">
                            Equipment Management
                        </th>
                        <th scope="col" class="px-6 py-3 font-normal">
                            Battery Bussiness
                        </th>
                        <th scope="col" class="px-6 py-3 font-normal border-r border-gray-200">
                           Periodic Maintenance
                        </th>
        
                        <th scope="col" class="px-6 py-3 font-normal">
                           Score
                        </th>
                        <th scope="col" class="px-6 py-3 font-normal">
                          status
                        </th>
                        <th scope="col" class="px-6 py-3 font-normal">
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
              </body>

              </>
    )
}