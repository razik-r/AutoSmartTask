import ChevronUpDown from "../../../../assets/ChevronUpDown";
import ActionTableList from "./ActionTableList";
import Auditor from "./Auditor.png";

export default function ActionTable() {
  const avatar1 = (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="27" height="27" rx="13.5" fill="#F9F9F9" />
      <rect x="0.5" y="0.5" width="27" height="27" rx="13.5" stroke="#F1F1F1" />
      <path
        d="M7.3892 18V9.27273H12.8608V10.4062H8.70596V13.0653H12.5753V14.1946H8.70596V16.8665H12.9119V18H7.3892ZM14.5597 18V9.27273H15.8764V13.4403H15.983L19.6435 9.27273H21.3011L17.7813 13.2017L21.3139 18H19.7287L16.9077 14.1009L15.8764 15.2855V18H14.5597Z"
        fill="#805EC5"
      />
    </svg>
  );

  const avatar2 = <img className="size-6" src={Auditor} />;
  return (
    <>
      <div className="mt-4 border border-gray-border1  rounded-[12px] overflow-hidden">
        <div className="overflow-x-auto   ">
          <table className="w-full text-sm text-left rtl:text-right text-black-table ">
            <thead className="p-3 h-10.5 ">
              <tr className="border-b-1 border-gray-border1  bg-[#F6F6F6] text-xs font-inter   ">
                <th
                  scope="col"
                  className="font-normal px-3 min-w-100 sm:min-w-0 "
                >
                  <h2 className="flex items-center gap-1 ">
                    Question
                   <ChevronUpDown/>
                  </h2>
                </th>
                <th scope="col" className="p-3  font-normal min-w-100 sm:min-w-0  ">
                  <h2 className="flex items-center gap-2">
                    Problem
                    <ChevronUpDown/>
                  </h2>
                </th>

                <th scope="col" className="px-3 py-3 font-normal min-w-17 ">
                  <h2 className="flex items-center gap-2">
                   
                    PIC
                    <ChevronUpDown/>
                  </h2>
                </th>

                <th
                  scope="col"
                  className="px-3 py-3 font-normal min-w-33.5 "
                >
                  <h2 className="flex items-center gap-2">
                    
                    Next Action
                    <ChevronUpDown/>
                  </h2>
                </th>
                <th
                  scope="col"
                  className="px-3 py-3 font-normal min-w-31.5 "
                >
                  <h2 className="flex items-center gap-2">
                  
                    Attachments
                    <ChevronUpDown/>
                  </h2>
                </th>
              </tr>
            </thead>

            <tbody>
              <ActionTableList avatar={avatar1} />
              <ActionTableList avatar={avatar2} />
              <ActionTableList avatar={avatar1} />
              <ActionTableList avatar={avatar2} />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
