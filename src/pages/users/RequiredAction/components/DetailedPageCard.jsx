import BlueLinkIcon from "../assets/BlueLinkIcon";
import FlashIcon from "../assets/FlashIcon";
import PurpleDocumentIcon from "../assets/PurpleDocumentIcon";
import Auditor from "./Auditor.png";

export default function Detailedpage() {
  return (
    <>
      <div className="flex flex-col   p-3 bg-[#FFFFFF] border border-gray-border1 gap-3 rounded-[12px] shadowbox">
        <FlashIcon/>

        <p className="text-sm/4 font-medium ">
          Lexus Facility Standards ( Toilets ) If Sales & amp; aftersales have
          different toilet, need to evaluate both areas
        </p>
        <div className="flex justify-between  ">
          <p className="text-xs/4 flex">
            {" "}
            <span>
              <PurpleDocumentIcon/>
            </span>
            Q12345
          </p>

          <p className="text-xs/4 flex">
            {" "}
            <span>
              <BlueLinkIcon/>
            </span>
            6
          </p>

          <p className="text-xs font-normal text-text-gray">03 Sep 2024</p>

          <img className="-mt-[5px] size-6" src={Auditor} />
        </div>
      </div>
    </>
  );
}
