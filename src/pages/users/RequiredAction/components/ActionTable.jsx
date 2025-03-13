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
                  className="font-normal px-3 w-auto min-w-[515.5px] "
                >
                  <h2 className="flex items-center gap-1">
                    Question{" "}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.8066 6.47329C11.8691 6.41132 11.9187 6.33758 11.9526 6.25634C11.9864 6.1751 12.0038 6.08797 12.0038 5.99996C12.0038 5.91195 11.9864 5.82481 11.9526 5.74357C11.9187 5.66234 11.8691 5.5886 11.8066 5.52663L8.47331 2.19329C8.41134 2.13081 8.3376 2.08121 8.25636 2.04736C8.17512 2.01352 8.08799 1.99609 7.99998 1.99609C7.91197 1.99609 7.82483 2.01352 7.7436 2.04736C7.66236 2.08121 7.58862 2.13081 7.52665 2.19329L4.19331 5.52663C4.13083 5.5886 4.08123 5.66234 4.04738 5.74357C4.01354 5.82481 3.99611 5.91195 3.99611 5.99996C3.99611 6.08797 4.01354 6.1751 4.04738 6.25634C4.08123 6.33758 4.13083 6.41132 4.19331 6.47329C4.25529 6.53578 4.32902 6.58537 4.41026 6.61922C4.4915 6.65307 4.57864 6.67049 4.66665 6.67049C4.75465 6.67049 4.84179 6.65307 4.92303 6.61922C5.00427 6.58537 5.078 6.53578 5.13998 6.47329L7.99998 3.60663L10.86 6.47329C10.922 6.53578 10.9957 6.58537 11.0769 6.61922C11.1582 6.65307 11.2453 6.67049 11.3333 6.67049C11.4213 6.67049 11.5085 6.65307 11.5897 6.61922C11.6709 6.58537 11.7447 6.53578 11.8066 6.47329ZM8.47331 13.8066L11.8066 10.4733C11.8688 10.4111 11.9181 10.3373 11.9518 10.2561C11.9854 10.1749 12.0027 10.0879 12.0027 9.99996C12.0027 9.82242 11.9322 9.65216 11.8066 9.52663C11.7445 9.46447 11.6707 9.41516 11.5895 9.38152C11.5083 9.34788 11.4212 9.33057 11.3333 9.33057C11.1558 9.33057 10.9855 9.40109 10.86 9.52663L7.99998 12.3933L5.13998 9.52663C5.078 9.46414 5.00427 9.41454 4.92303 9.3807C4.84179 9.34685 4.75465 9.32943 4.66665 9.32943C4.57864 9.32943 4.4915 9.34685 4.41026 9.3807C4.32902 9.41454 4.25529 9.46414 4.19331 9.52663C4.13083 9.5886 4.08123 9.66234 4.04738 9.74357C4.01354 9.82481 3.99611 9.91195 3.99611 9.99996C3.99611 10.088 4.01354 10.1751 4.04738 10.2563C4.08123 10.3376 4.13083 10.4113 4.19331 10.4733L7.52665 13.8066C7.58862 13.8691 7.66235 13.9187 7.74359 13.9526C7.82483 13.9864 7.91197 14.0038 7.99998 14.0038C8.08799 14.0038 8.17512 13.9864 8.25636 13.9526C8.3376 13.9187 8.41134 13.8691 8.47331 13.8066Z"
                        fill="#84838A"
                      />
                    </svg>
                  </h2>
                </th>
                <th scope="col" className="p-3  font-normal min-w-[515.5px] ">
                  <h2 className="flex items-center gap-2">
                    Problem
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.3067 6.47329C12.3692 6.41132 12.4188 6.33758 12.4526 6.25634C12.4864 6.1751 12.5039 6.08797 12.5039 5.99996C12.5039 5.91195 12.4864 5.82481 12.4526 5.74357C12.4188 5.66234 12.3692 5.5886 12.3067 5.52663L8.97334 2.19329C8.91136 2.13081 8.83763 2.08121 8.75639 2.04736C8.67515 2.01352 8.58801 1.99609 8.5 1.99609C8.41199 1.99609 8.32486 2.01352 8.24362 2.04736C8.16238 2.08121 8.08864 2.13081 8.02667 2.19329L4.69334 5.52663C4.63085 5.5886 4.58125 5.66234 4.54741 5.74357C4.51356 5.82481 4.49614 5.91195 4.49614 5.99996C4.49614 6.08797 4.51356 6.1751 4.54741 6.25634C4.58125 6.33758 4.63085 6.41132 4.69334 6.47329C4.75531 6.53578 4.82904 6.58537 4.91028 6.61922C4.99152 6.65307 5.07866 6.67049 5.16667 6.67049C5.25468 6.67049 5.34181 6.65307 5.42305 6.61922C5.50429 6.58537 5.57803 6.53578 5.64 6.47329L8.5 3.60663L11.36 6.47329C11.422 6.53578 11.4957 6.58537 11.577 6.61922C11.6582 6.65307 11.7453 6.67049 11.8333 6.67049C11.9213 6.67049 12.0085 6.65307 12.0897 6.61922C12.171 6.58537 12.2447 6.53578 12.3067 6.47329ZM8.97334 13.8066L12.3067 10.4733C12.3688 10.4111 12.4181 10.3373 12.4518 10.2561C12.4854 10.1749 12.5027 10.0879 12.5027 9.99996C12.5027 9.82242 12.4322 9.65216 12.3067 9.52663C12.2445 9.46447 12.1707 9.41516 12.0895 9.38152C12.0083 9.34788 11.9212 9.33057 11.8333 9.33057C11.6558 9.33057 11.4855 9.40109 11.36 9.52663L8.5 12.3933L5.64 9.52663C5.57803 9.46414 5.50429 9.41454 5.42305 9.3807C5.34181 9.34685 5.25468 9.32943 5.16667 9.32943C5.07866 9.32943 4.99152 9.34685 4.91028 9.3807C4.82904 9.41454 4.75531 9.46414 4.69334 9.52663C4.63085 9.5886 4.58125 9.66234 4.54741 9.74357C4.51356 9.82481 4.49614 9.91195 4.49614 9.99996C4.49614 10.088 4.51356 10.1751 4.54741 10.2563C4.58125 10.3376 4.63085 10.4113 4.69334 10.4733L8.02667 13.8066C8.08864 13.8691 8.16238 13.9187 8.24362 13.9526C8.32486 13.9864 8.41199 14.0038 8.5 14.0038C8.58801 14.0038 8.67515 13.9864 8.75639 13.9526C8.83763 13.9187 8.91136 13.8691 8.97334 13.8066Z"
                        fill="#84838A"
                      />
                    </svg>
                  </h2>
                </th>

                <th scope="col" className="px-3 py-3 font-normal min-w-[68px] ">
                  <h2 className="flex items-center gap-2">
                    {" "}
                    PIC
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.3067 6.47329C12.3692 6.41132 12.4188 6.33758 12.4526 6.25634C12.4864 6.1751 12.5039 6.08797 12.5039 5.99996C12.5039 5.91195 12.4864 5.82481 12.4526 5.74357C12.4188 5.66234 12.3692 5.5886 12.3067 5.52663L8.97334 2.19329C8.91136 2.13081 8.83763 2.08121 8.75639 2.04736C8.67515 2.01352 8.58801 1.99609 8.5 1.99609C8.41199 1.99609 8.32486 2.01352 8.24362 2.04736C8.16238 2.08121 8.08864 2.13081 8.02667 2.19329L4.69334 5.52663C4.63085 5.5886 4.58125 5.66234 4.54741 5.74357C4.51356 5.82481 4.49614 5.91195 4.49614 5.99996C4.49614 6.08797 4.51356 6.1751 4.54741 6.25634C4.58125 6.33758 4.63085 6.41132 4.69334 6.47329C4.75531 6.53578 4.82904 6.58537 4.91028 6.61922C4.99152 6.65307 5.07866 6.67049 5.16667 6.67049C5.25468 6.67049 5.34181 6.65307 5.42305 6.61922C5.50429 6.58537 5.57803 6.53578 5.64 6.47329L8.5 3.60663L11.36 6.47329C11.422 6.53578 11.4957 6.58537 11.577 6.61922C11.6582 6.65307 11.7453 6.67049 11.8333 6.67049C11.9213 6.67049 12.0085 6.65307 12.0897 6.61922C12.171 6.58537 12.2447 6.53578 12.3067 6.47329ZM8.97334 13.8066L12.3067 10.4733C12.3688 10.4111 12.4181 10.3373 12.4518 10.2561C12.4854 10.1749 12.5027 10.0879 12.5027 9.99996C12.5027 9.82242 12.4322 9.65216 12.3067 9.52663C12.2445 9.46447 12.1707 9.41516 12.0895 9.38152C12.0083 9.34788 11.9212 9.33057 11.8333 9.33057C11.6558 9.33057 11.4855 9.40109 11.36 9.52663L8.5 12.3933L5.64 9.52663C5.57803 9.46414 5.50429 9.41454 5.42305 9.3807C5.34181 9.34685 5.25468 9.32943 5.16667 9.32943C5.07866 9.32943 4.99152 9.34685 4.91028 9.3807C4.82904 9.41454 4.75531 9.46414 4.69334 9.52663C4.63085 9.5886 4.58125 9.66234 4.54741 9.74357C4.51356 9.82481 4.49614 9.91195 4.49614 9.99996C4.49614 10.088 4.51356 10.1751 4.54741 10.2563C4.58125 10.3376 4.63085 10.4113 4.69334 10.4733L8.02667 13.8066C8.08864 13.8691 8.16238 13.9187 8.24362 13.9526C8.32486 13.9864 8.41199 14.0038 8.5 14.0038C8.58801 14.0038 8.67515 13.9864 8.75639 13.9526C8.83763 13.9187 8.91136 13.8691 8.97334 13.8066Z"
                        fill="#84838A"
                      />
                    </svg>
                  </h2>
                </th>

                <th
                  scope="col"
                  className="px-3 py-3 font-normal min-w-[134px] "
                >
                  <h2 className="flex items-center gap-2">
                    {" "}
                    Next Action
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.3067 6.47329C12.3692 6.41132 12.4188 6.33758 12.4526 6.25634C12.4864 6.1751 12.5039 6.08797 12.5039 5.99996C12.5039 5.91195 12.4864 5.82481 12.4526 5.74357C12.4188 5.66234 12.3692 5.5886 12.3067 5.52663L8.97334 2.19329C8.91136 2.13081 8.83763 2.08121 8.75639 2.04736C8.67515 2.01352 8.58801 1.99609 8.5 1.99609C8.41199 1.99609 8.32486 2.01352 8.24362 2.04736C8.16238 2.08121 8.08864 2.13081 8.02667 2.19329L4.69334 5.52663C4.63085 5.5886 4.58125 5.66234 4.54741 5.74357C4.51356 5.82481 4.49614 5.91195 4.49614 5.99996C4.49614 6.08797 4.51356 6.1751 4.54741 6.25634C4.58125 6.33758 4.63085 6.41132 4.69334 6.47329C4.75531 6.53578 4.82904 6.58537 4.91028 6.61922C4.99152 6.65307 5.07866 6.67049 5.16667 6.67049C5.25468 6.67049 5.34181 6.65307 5.42305 6.61922C5.50429 6.58537 5.57803 6.53578 5.64 6.47329L8.5 3.60663L11.36 6.47329C11.422 6.53578 11.4957 6.58537 11.577 6.61922C11.6582 6.65307 11.7453 6.67049 11.8333 6.67049C11.9213 6.67049 12.0085 6.65307 12.0897 6.61922C12.171 6.58537 12.2447 6.53578 12.3067 6.47329ZM8.97334 13.8066L12.3067 10.4733C12.3688 10.4111 12.4181 10.3373 12.4518 10.2561C12.4854 10.1749 12.5027 10.0879 12.5027 9.99996C12.5027 9.82242 12.4322 9.65216 12.3067 9.52663C12.2445 9.46447 12.1707 9.41516 12.0895 9.38152C12.0083 9.34788 11.9212 9.33057 11.8333 9.33057C11.6558 9.33057 11.4855 9.40109 11.36 9.52663L8.5 12.3933L5.64 9.52663C5.57803 9.46414 5.50429 9.41454 5.42305 9.3807C5.34181 9.34685 5.25468 9.32943 5.16667 9.32943C5.07866 9.32943 4.99152 9.34685 4.91028 9.3807C4.82904 9.41454 4.75531 9.46414 4.69334 9.52663C4.63085 9.5886 4.58125 9.66234 4.54741 9.74357C4.51356 9.82481 4.49614 9.91195 4.49614 9.99996C4.49614 10.088 4.51356 10.1751 4.54741 10.2563C4.58125 10.3376 4.63085 10.4113 4.69334 10.4733L8.02667 13.8066C8.08864 13.8691 8.16238 13.9187 8.24362 13.9526C8.32486 13.9864 8.41199 14.0038 8.5 14.0038C8.58801 14.0038 8.67515 13.9864 8.75639 13.9526C8.83763 13.9187 8.91136 13.8691 8.97334 13.8066Z"
                        fill="#84838A"
                      />
                    </svg>
                  </h2>
                </th>
                <th
                  scope="col"
                  className="px-3 py-3 font-normal min-w-[127px] "
                >
                  <h2 className="flex items-center gap-2">
                    {" "}
                    Attachments
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.3067 6.47329C12.3692 6.41132 12.4188 6.33758 12.4526 6.25634C12.4864 6.1751 12.5039 6.08797 12.5039 5.99996C12.5039 5.91195 12.4864 5.82481 12.4526 5.74357C12.4188 5.66234 12.3692 5.5886 12.3067 5.52663L8.97334 2.19329C8.91136 2.13081 8.83763 2.08121 8.75639 2.04736C8.67515 2.01352 8.58801 1.99609 8.5 1.99609C8.41199 1.99609 8.32486 2.01352 8.24362 2.04736C8.16238 2.08121 8.08864 2.13081 8.02667 2.19329L4.69334 5.52663C4.63085 5.5886 4.58125 5.66234 4.54741 5.74357C4.51356 5.82481 4.49614 5.91195 4.49614 5.99996C4.49614 6.08797 4.51356 6.1751 4.54741 6.25634C4.58125 6.33758 4.63085 6.41132 4.69334 6.47329C4.75531 6.53578 4.82904 6.58537 4.91028 6.61922C4.99152 6.65307 5.07866 6.67049 5.16667 6.67049C5.25468 6.67049 5.34181 6.65307 5.42305 6.61922C5.50429 6.58537 5.57803 6.53578 5.64 6.47329L8.5 3.60663L11.36 6.47329C11.422 6.53578 11.4957 6.58537 11.577 6.61922C11.6582 6.65307 11.7453 6.67049 11.8333 6.67049C11.9213 6.67049 12.0085 6.65307 12.0897 6.61922C12.171 6.58537 12.2447 6.53578 12.3067 6.47329ZM8.97334 13.8066L12.3067 10.4733C12.3688 10.4111 12.4181 10.3373 12.4518 10.2561C12.4854 10.1749 12.5027 10.0879 12.5027 9.99996C12.5027 9.82242 12.4322 9.65216 12.3067 9.52663C12.2445 9.46447 12.1707 9.41516 12.0895 9.38152C12.0083 9.34788 11.9212 9.33057 11.8333 9.33057C11.6558 9.33057 11.4855 9.40109 11.36 9.52663L8.5 12.3933L5.64 9.52663C5.57803 9.46414 5.50429 9.41454 5.42305 9.3807C5.34181 9.34685 5.25468 9.32943 5.16667 9.32943C5.07866 9.32943 4.99152 9.34685 4.91028 9.3807C4.82904 9.41454 4.75531 9.46414 4.69334 9.52663C4.63085 9.5886 4.58125 9.66234 4.54741 9.74357C4.51356 9.82481 4.49614 9.91195 4.49614 9.99996C4.49614 10.088 4.51356 10.1751 4.54741 10.2563C4.58125 10.3376 4.63085 10.4113 4.69334 10.4733L8.02667 13.8066C8.08864 13.8691 8.16238 13.9187 8.24362 13.9526C8.32486 13.9864 8.41199 14.0038 8.5 14.0038C8.58801 14.0038 8.67515 13.9864 8.75639 13.9526C8.83763 13.9187 8.91136 13.8691 8.97334 13.8066Z"
                        fill="#84838A"
                      />
                    </svg>
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
