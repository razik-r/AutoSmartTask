import DocumentIcon from "../assets/DocumentIcon";
import problemImg from "./ProblemImg.png";

export default function ActionTableList({ item, avatar }) {
  return (
    <>
      <tr className="border-b  border-gray-border1 ">
        <th
          scope="row"
          className=" xl:min-w-129  font-inter  text-black-table whitespace-nowrap  "
        >
          <div className="p-3  flex flex-col gap-2">
            <h2 className=" text-sm/4.5 font-medium ">{item.title}</h2>
            <p className=" text-text-gray text-sm/4.5 font-normal text-wrap sm:text-nowrap ">
              {item.question}
            </p>
          </div>
        </th>

        <td className="  whitespace-nowrap ">
          <div className=" flex flex-col gap-2 p-3  ">
            <h2 className="text-[#E14026] text-sm/4.5 font-medium">
              {item.problem}
            </h2>
            <p className="text-text-gray text-sm/4.5 font-normal  text-wrap ">
              {item.recommendation}
            </p>
          </div>
        </td>

        <td className="">
          <div className="flex justify-center items-center">{avatar}</div>
        </td>

        <td>
          <div className="flex items-center justify-start ml-3">
            <h1 className="text-sm/4.5 font-normal text-text-gray">{item.nextAction}</h1>
          </div>
        </td>

        <td>
          <div className="flex justify-center items-center gap-2">
            <img className="size-6" src={problemImg} alt="text" />
           <DocumentIcon/>
          </div>
        </td>
      </tr>
    </>
  );
}
