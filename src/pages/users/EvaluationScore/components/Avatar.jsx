export default function Avatar({ initials, color, color2 ,color3}) {
    // Log the colors for debugging
    console.log("Color 1:", color);
    console.log("Color 2:", color2);
  
    return (
      <div className="flex items-center -space-x-2">
        {/* Render the first avatar */}


        {color && (
            <div className="size-6 rounded-full flex items-center justify-center border border-gray-border1 bg-[#FFFFFF]">
            <span
              className={`font-normal text-[10px] ${color} `}
               // Fallback to black if color is undefined
            >
              {initials}
            </span>
          </div>
        )}
  

      
        {color2 && (
          <div className="size-6 rounded-full flex items-center justify-center border border-gray-border1 bg-[#FFFFFF]">
            <span
              className={`font-normal text-[10px] ${color2} `}
            
            >
              {initials}
            </span>
          </div>
        )}

        {color3 &&(
            <div className="size-6 rounded-full flex items-center justify-center border border-gray-border1 bg-[#FFFFFF]">
                <span
              className={`font-normal text-[10px] ${color3} `}
            
            >
              {initials}
            </span>
            </div>
        )

        }
      </div>
    );
  }