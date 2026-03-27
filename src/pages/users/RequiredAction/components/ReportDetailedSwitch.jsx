import { useState } from "react";
import { motion as Motion } from "framer-motion";

const tabs = [
  {
    id: "Report",
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
        <path
          d="M13.49 1.67H6.51c-3.03 0-4.84 1.81-4.84 4.84v6.98c0 3.03 1.81 4.84 4.84 4.84h6.98c3.03 0 4.84-1.81 4.84-4.84V6.51c0-3.03-1.81-4.84-4.84-4.84ZM8.31 12.42l-1.88 1.87a.6.6 0 0 1-.88 0l-.63-.62a.62.62 0 1 1 .88-.88l.19.18 1.43-1.43a.62.62 0 1 1 .88.88Zm0-5.83L6.43 8.46a.6.6 0 0 1-.88 0l-.63-.62a.62.62 0 1 1 .88-.88l.19.18 1.43-1.43a.62.62 0 1 1 .88.88Zm6.32 7.26h-4.38a.62.62 0 1 1 0-1.25h4.38a.62.62 0 1 1 0 1.25Zm0-5.83h-4.38a.62.62 0 1 1 0-1.25h4.38a.62.62 0 1 1 0 1.25Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    id: "Detailed",
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
        <path d="M11.96 1.67H8.04c-.87 0-1.58.7-1.58 1.56v.79c0 .87.7 1.57 1.57 1.57h3.93c.87 0 1.57-.7 1.57-1.57v-.79c.01-.87-.7-1.56-1.57-1.56Z" fill="currentColor" />
        <path d="M14.37 4.02c0 1.33-1.08 2.41-2.41 2.41H8.04c-1.33 0-2.41-1.08-2.41-2.41 0-.47-.5-.76-.92-.54-1.18.63-1.98 1.87-1.98 3.29v7.84c0 2.05 1.68 3.73 3.73 3.73h7.07c2.05 0 3.73-1.68 3.73-3.73V6.77c0-1.43-.8-2.67-1.98-3.29-.42-.22-.91.07-.91.54Zm-1.58 6.59-3.34 3.33a.62.62 0 0 1-.88 0l-1.25-1.25a.62.62 0 1 1 .88-.88l.81.81 2.89-2.89a.62.62 0 1 1 .88.88Z" fill="currentColor" />
      </svg>
    ),
  },
];

export default function ReportDetailedSwitch({ onTabChange }) {
  const [selectedTab, setSelectedTab] = useState("Report");

  function handleTabChange(newTab) {
    setSelectedTab(newTab);
    onTabChange(newTab);
  }

  return (
    <div className="inline-flex flex-wrap items-center rounded-full border border-slate-200/80 bg-white/70 p-1 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
      {tabs.map((tab, index) => {
        const active = selectedTab === tab.id;

        return (
          <Motion.button
            key={tab.id}
            type="button"
            onClick={() => handleTabChange(tab.id)}
            whileTap={{ scale: 0.99 }}
            className="relative rounded-full px-4 py-2.5 text-sm font-medium"
          >
            {active ? (
              <Motion.span
                layoutId="required-action-tab"
                className="absolute inset-0 rounded-full bg-[#1F2937] shadow-[0_16px_30px_rgba(31,41,55,0.18)]"
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
              />
            ) : null}
            <span className={`relative z-10 flex items-center gap-2 transition-colors duration-200 ${active ? "text-white" : "text-[#7C7C86]"}`}>
              {tab.icon}
              {tab.id === "Detailed" ? "Detailed Page" : tab.id}
              <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold transition-colors duration-200 ${active ? "bg-white/14 text-white/90" : "bg-slate-100 text-slate-500"}`}>
                {index === 0 ? "List" : "Board"}
              </span>
            </span>
          </Motion.button>
        );
      })}
    </div>
  );
}
