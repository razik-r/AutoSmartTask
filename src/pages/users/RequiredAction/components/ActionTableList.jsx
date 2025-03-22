import DocumentIcon from "../assets/DocumentIcon";
import problemImg from "./ProblemImg.png";

export default function ActionTableList(props) {
  return (
    <>
      <tr className="border-b  border-gray-border1 ">
        <th
          scope="row"
          className=" xl:min-w-129  font-inter  text-black-table whitespace-nowrap  "
        >
          <div className="p-3  flex flex-col gap-2">
            <h2 className=" text-sm/4.5 font-medium ">Fog machine</h2>
            <p className=" text-text-gray text-sm/4.5 font-normal text-wrap sm:text-nowrap ">
              Fog Machine is in good working condition, clean & available?
            </p>
          </div>
        </th>

        <td className="  whitespace-nowrap ">
          <div className=" flex flex-col gap-2 p-3  ">
            <h2 className="text-[#E14026] text-sm/4.5 font-medium">
              Fog machine clogs due to residue buildup, reducing output.
            </h2>
            <p className="text-text-gray text-sm/4.5 font-normal  text-wrap ">
              Regularly clean with a vinegar-water solution to dissolve residue
              and ensure smooth operation
            </p>
          </div>
        </td>

        <td className="">
          <div className="flex justify-center items-center">{props.avatar}</div>
        </td>

        <td>
          <div className="flex items-center justify-start ml-3">
            <h1 className="text-sm/4.5 font-normal text-text-gray">
              03 Sep 2024
            </h1>
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
