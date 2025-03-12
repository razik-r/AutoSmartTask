

import QuarterSelector from './QuarterSelector'

import CenterSelector from './CenterSelector'

import ActionDropdown from './ActionDropdown'

import SearchComponent from './Searchcomponent'
import ToggleView from './ToggleView'

import ActionCard from './ActionCard'
import ActionCardGrid from './ActionCardGrid'



import React, { useState } from 'react';



import ActionTable from './ActionTable'
import ActionHeader from './ActionHeader'

export default function RequiredAction(){
  


    const [selectedView, setSelectedView] = useState('List');

  // Handle view change from the ToggleView component
  const handleViewChange = (newView) => {
    setSelectedView(newView);
  };


 

    return(

        <>

       <div className='min-h-full bg-[#FCFCFC] px-6 py-4 '>
        
            <ActionHeader/>



            <div className="min-h-[564px]  rounded-[16px] border-[1.5px] p-4 bg-white border-gray-border1   ">



                <div className="flex gap-3 ">

                    <QuarterSelector/>

                    <CenterSelector/>
            
                                      
                </div>


                <div className="flex gap-3  items-end justify-center flex-wrap  ">

                    <ActionDropdown  text="Program"/>
                    <ActionDropdown  text="Location"/>
                    <ActionDropdown  text="Department"/>
                    <ActionDropdown  text="Section"/>


                    <SearchComponent/>

                    <ToggleView onViewChange={handleViewChange} />

                </div>

                {selectedView === 'List' && <ActionTable />}

                {selectedView ==='Grid' && 
                
                
                    <ActionCardGrid/>
               
                
               }

            </div>
        </div>

        
        </>
    )

             


}