import Avatar from "./Avatar";

import Eye from "../assets/eye";
import Document from "../assets/Document";
import Trophy from "../assets/Trophy";

export default function Tablecontent(props) {
  console.log("Color prop:", props);
  return (
    <>
      <th
        scope="row"
        class=" py-3  flex font-normal font-inter text-xs ml-2.5 text-black-table whitespace-nowrap justify-start items-start gap-2"
      >
        <div className="bg-gray-100 w-10 h-10 border border-gray-border1 rounded-[8px] font-normal text-xs flex justify-center items-center text-text-gray ">
          EKK
        </div>
        <div className="flex flex-col gap-1">
          <p className="ml-2 font-medium"> {props.name}</p>
          <p className="ml-2 text-text-gray font-normal text-[10px]">
            {props.id}
          </p>
        </div>
      </th>
      <td className="p-3  text-text-gray text-center  ">
        <Avatar
          initials="EK"
          color={props.color1}
          color2={props.color2}
          color3={props.color3}
        />
      </td>
      <td class="px-3 py-3 text-xs text-text-gray text-left ">{props.value}</td>
      <td className="px-3 py-3  text-xs text-text-gray ">{props.value}</td>

      <td className="px-3 py-3  text-xs  text-text-gray ">{props.value}</td>
      <td className="px-3 py-3  text-xs text-text-gray ">{props.value}</td>

      <td className="px-3 py-3  text-xs text-text-gray  ">{props.value}</td>
      <td className="px-3 py-3  text-xs text-text-gray ">{props.value}</td>

      <td
        className="px-3 py-4   font-medium text-sm/4.5 items-center border-l  border-gray-border1   bg-[#FFFFFF]  sticky right-[160px] z-10 
                
                drop-shadow-xl
                
                "
      >
        <div className="flex gap-2.5 ">
          {" "}
          70
          <Trophy />
        </div>
      </td>

      <td className="px-3 py-4  font-medium text-[10px]/3.5  bg-[#FFFFFF]     sticky right-[70px] z-10   ">
        <h1
          className={`py-1 px-1.5   rounded-[4px] text-center ${props.className}`}
        >
          {props.btntext}
        </h1>
      </td>

      <td className="px-3 py-4  text-right   bg-[#FFFFFF] sticky right-[0px] z-10 ">
        <div className="flex  gap-2.5 justify-center items-center">
          <div className="group flex text-center">
            <button>
              <Eye />
            </button>
          </div>
          <button>
            <Document />
          </button>
        </div>
      </td>
    </>
  );
}
