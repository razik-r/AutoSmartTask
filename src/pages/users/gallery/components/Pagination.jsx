export default function Pagination(){
    return(
        <div className="flex justify-between gap-20 items-center ">
  <div className=" flex justify-start items-start gap-2">
    <div  className="size-8 p-2.5 bg-white rounded-sm outline  outline-offset-[-1px] outline-zinc-100 inline-flex flex-col justify-center items-center gap-2.5">
      <div className="size-4 relative overflow-hidden flex items-center">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.727 12L12.667 11.06L9.61366 8L12.667 4.94L11.727 4L7.72699 8L11.727 12Z" fill="#212121"/>
<path d="M7.33344 12L8.27344 11.06L5.2201 8L8.27344 4.94L7.33344 4L3.33344 8L7.33344 12Z" fill="#212121"/>
</svg>

      </div>
    </div>

    <div  className="size-8 p-2.5 bg-white rounded-sm outline  outline-offset-[-1px] outline-zinc-100 inline-flex flex-col justify-center items-center gap-2.5">
      <div className="size-4  flex items-center">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.727 12L12.667 11.06L9.61366 8L12.667 4.94L11.727 4L7.72699 8L11.727 12Z" fill="#212121"/>
<path d="M7.33344 12L8.27344 11.06L5.2201 8L8.27344 4.94L7.33344 4L3.33344 8L7.33344 12Z" fill="#212121"/>
</svg>

      </div>
    </div>

    <div  className="size-8 p-2.5 bg-rose-100 rounded-sm outline outline-offset-[-1px] outline-red-200 inline-flex flex-col justify-center items-center gap-2.5">
      <div className="justify-start text-red-600 text-xs ">1</div>
    </div>

    <div  className="size-8 p-2.5 bg-white rounded-sm outline  outline-offset-[-1px] outline-zinc-100 inline-flex flex-col justify-center items-center gap-2.5">
      <div className="justify-start text-neutral-800 text-xs ">2</div>
    </div>

    <div  className="size-8 p-2.5 bg-white rounded-sm inline-flex flex-col justify-center items-center gap-2.5">
      <div className="justify-center text-neutral-800 text-xs font-semibold font-['Open_Sans']">...</div>
    </div>

    <div  className="size-8 p-2.5 bg-white rounded-sm outline  outline-offset-[-1px] outline-zinc-100 inline-flex flex-col justify-center items-center gap-2.5">
      <div className="justify-start text-neutral-800 text-xs font-normal font-['Inter'] leading-none">10</div>
    </div>

    <div  className="size-8 p-2.5 bg-white rounded-sm outline  outline-offset-[-1px] outline-zinc-100 inline-flex flex-col justify-center items-center gap-2.5">
      <div className="size-4 relative overflow-hidden flex items-center">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.94 4L6 4.94L9.05333 8L6 11.06L6.94 12L10.94 8L6.94 4Z" fill="#212121"/>
</svg>


      </div>
    </div>
    <div className="size-8 p-2.5 bg-white rounded-sm outline outline-offset-[-1px] outline-zinc-100 inline-flex flex-col justify-center items-center gap-2.5">
      <div className="size-4 relative overflow-hidden flex items-center">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.27301 4L3.33301 4.94L6.38634 8L3.33301 11.06L4.27301 12L8.27301 8L4.27301 4Z" fill="#212121"/>
<path d="M8.66656 4L7.72656 4.94L10.7799 8L7.72656 11.06L8.66656 12L12.6666 8L8.66656 4Z" fill="#212121"/>
</svg>

      </div>
    </div>
  </div>


  <div className=" flex justify-start items-center gap-3 ">
    <div className="justify-start text-neutral-800 text-xs font-normal  ">Showing 1 to 10 of 1253 Center</div>

    <div className="h-10 pl-3 pr-2 bg-white rounded-sm outline outline-offset-[-1px] outline-zinc-100 flex justify-start items-center gap-2">
      <div className="justify-center text-neutral-800 text-sm font-normal font-['Inter'] leading-none">10</div>
     
    </div>
  </div>
</div>
    )
}