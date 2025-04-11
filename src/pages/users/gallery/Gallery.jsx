import CenterSelector from "../helperComponents/CenterSelector";
import Dropdown from "../helperComponents/Dropdown";
import QuarterSelector from "../helperComponents/QuarterSelector";
import Search from "../helperComponents/Search";
import GalleryCard from "./components/GalleryCard";
import GalleryHeader from "./components/GalleryHeader";
import RadioButton from "./components/RadioButton";


import React, { useState } from "react";

import Image1 from "./assets/Image1.png"
import Image2 from "./assets/Image2.png"
import Image3 from "./assets/Image3.png"
import Image4 from "./assets/Image4.png"
import Image5 from "./assets/Image5.png"
import Image6 from "./assets/Image6.png"
import Image7 from "./assets/Image7.png"
import Image8 from "./assets/Image8.png"
import Image9 from "./assets/Image9.png"
import Image10 from "./assets/Image10.png"
import Image11 from "./assets/Image11.png"
import Image12 from "./assets/Image12.png"
import Pagination from "./components/Pagination";

const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    Image11,
    Image12,
  ];





export default function Gallery(){
    const [selected, setSelected] = useState([]);

    const toggleSelect = (img) => {
      setSelected((prev) =>
        prev.includes(img) ? prev.filter((i) => i !== img) : [...prev, img]
      );
    };
    return(


        <>
              <div className="min-h-full bg-[#FCFCFC] px-6 py-4 pointer-events-auto ">

                <GalleryHeader/>



                 <div className=" rounded-2xl border-[1.5px] p-4 bg-white border-[#F1F1F1]   ">

                    <div className="flex gap-3">
                    <QuarterSelector/>
                    <CenterSelector/>
                    </div>

                    <div className=" flex gap-3 items-end  flex-wrap">
                        <Dropdown text="Program"/>
                        <Dropdown text="Location"/>
                        <Dropdown text="Region"/>
                        <Dropdown text="Section"/>

                        <div className="flex ml-auto">
                            <Search/>
                        </div>
                    </div>


                    <div className="flex">
                        <RadioButton/>
                    </div>


                    <div className="grid grid-cols-2 justify-items-center   gap-4 sm:grid-cols-3  md:grid-cols-4 lg:grid-col-5 xl:grid-cols-6 mt-4">
                        {images.map((img,index)=>(
                        <GalleryCard key={index} img={img} selected={selected.includes(img)}   onClick={() => toggleSelect(img)} />
                        ))

    }
                       
                    </div>


                    <div className="flex mt-8"><Pagination/></div>


                 




                


                       

                        </div>




              </div>
        </>
    )
}