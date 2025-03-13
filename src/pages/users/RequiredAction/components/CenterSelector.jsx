
export default function QuarterSelector(){
    return(
        <>


<div className="border max-w-73 sm:min-w-73 border-gray-border1 rounded-[8px] flex   max-h-14 p-2 font-inter   sm:justify-between items-center">

    <div className="flex flex-col gap-1 justify-center items-start">
      <h1 className="font-medium text-xs leading-4 tracking-[-0.5%]">Al Naseem Center (TH)</h1>

     <div className="flex gap-2">
     <div className="bg-[#FCECEA] rounded-[4px] p-1 min-w-15.25 h-[15px] flex justify-center items-center">
        <h2 className='text-[10px] text-[#E14026] font-normal leading-3'>7 problems</h2>
      </div>

      <div className="bg-[#FFECD6] rounded-[4px] p-1 min-w-15.25 h-[15px] flex justify-center items-center">
        <h2 className='text-[10px] text-[#ED8F22] font-normal leading-3'>Not Submitted</h2>
      </div>
     </div>
   
    </div>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 7.5L10 12.5L5 7.5" stroke="#E14026" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</div>
        
        </>
    )
}