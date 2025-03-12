

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
import ReportDetailedSwitch from './ReportDetailedSwitch'
import ReportPage from './ReportPage'
import ExpandView from './ExpandView'

export default function RequiredAction(){


  


//   const [selectedView, setSelectedView] = useState('List');

//   // Handle view change from the ToggleView component
//   const handleViewChange = (newView) => {
//     setSelectedView(newView);
//   };

const [selectedTab, setSelectedTab] = useState('Report');

const handleTabChange =(newTab)=>{
    setSelectedTab(newTab)
}

 

    return(

        <>
       <div className='min-h-full bg-[#FCFCFC] px-6 py-4 '>
            <ActionHeader/>

            <div className="min-h-[564px]  rounded-[16px] border-[1.5px] p-4 bg-white border-[#F1F1F1]   ">
                
                      <div className=" py-2 -ml-[3px] mb-5 px-1 flex   after:content-[''] after:block after:w-full after:h-[1px] after:bg-[#F1F1F1] after:mt-[35px]   ">
                      <ReportDetailedSwitch  onTabChange={handleTabChange}/>  
                      </div>

                      {selectedTab === 'Report' && <ReportPage />}
                     
                      {selectedTab === 'Detailed' && <ExpandView />}
            </div>
        </div>

        
        </>
    )

             


}