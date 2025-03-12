import ActionHeader from "./ActionHeader"
import CenterSelector from './CenterSelector'

export default function ExpandView(){

    

    return(
        <>

<div className='min-h-full bg-[#FCFCFC] px-6 py-4 '>
        
        <ActionHeader />



        <div className="min-h-[564px]  rounded-[16px] border-[1.5px] p-4 bg-white border-gray-border1   ">



            <div className="flex gap-3 ">

               

                <CenterSelector/>
        
                                  
            </div>


            <div className="flex gap-3  items-end justify-center flex-wrap  ">

                <ActionDropdown  text="Select Terms"/>
                <ActionDropdown  text="Select Auditor"/>
                <ActionDropdown  text="Select PIC"/>
              


                <SearchComponent/>

                

            </div>

          


            





















        </div>





    </div>



        </>
    )
}