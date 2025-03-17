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
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M23.9167 11.8884H20.545C17.78 11.8884 15.5284 9.63671 15.5284 6.87171V3.50004C15.5284 2.85837 15.0034 2.33337 14.3617 2.33337H9.41502C5.82169 2.33337 2.91669 4.66671 2.91669 8.83171V19.1684C2.91669 23.3334 5.82169 25.6667 9.41502 25.6667H18.585C22.1784 25.6667 25.0834 23.3334 25.0834 19.1684V13.055C25.0834 12.4134 24.5584 11.8884 23.9167 11.8884Z"
                fill="#ED8F22"
              />
              <path
                d="M18.4333 2.57828C17.955 2.09995 17.1266 2.42662 17.1266 3.09162V7.16328C17.1266 8.86662 18.5733 10.2783 20.335 10.2783C21.4433 10.29 22.9833 10.29 24.3016 10.29C24.9666 10.29 25.3166 9.50828 24.85 9.04162C23.17 7.34995 20.16 4.30495 18.4333 2.57828Z"
                fill="#ED8F22"
              />
              <path
                d="M15.75 16.0416H8.75C8.27167 16.0416 7.875 15.645 7.875 15.1666C7.875 14.6883 8.27167 14.2916 8.75 14.2916H15.75C16.2283 14.2916 16.625 14.6883 16.625 15.1666C16.625 15.645 16.2283 16.0416 15.75 16.0416Z"
                fill="#ED8F22"
              />
              <path
                d="M13.4167 20.7084H8.75C8.27167 20.7084 7.875 20.3117 7.875 19.8334C7.875 19.355 8.27167 18.9584 8.75 18.9584H13.4167C13.895 18.9584 14.2917 19.355 14.2917 19.8334C14.2917 20.3117 13.895 20.7084 13.4167 20.7084Z"
                fill="#ED8F22"
              />
            </svg>
          </div>
        </td>
      </tr>
    </>
  );
}
