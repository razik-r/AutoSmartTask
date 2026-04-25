import React, { useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";

import ActionHeader from "./components/ActionHeader";
import ReportDetailedSwitch from "./components/ReportDetailedSwitch";
import ReportPage from "./components/ReportPage";
import ExpandView from "./components/ExpandView";

export default function RequiredAction() {
  const [selectedTab, setSelectedTab] = useState("Report");

  const handleTabChange = (newTab) => {
    setSelectedTab(newTab);
  };

  return (
    <>
      <div className="min-h-full min-w-full bg-transparent px-1 py-1 pointer-events-auto">
        <ActionHeader />

        <div className="min-w-0 overflow-visible rounded-[30px] border border-white/70 bg-[rgba(255,255,255,0.82)] p-4 shadow-[0_24px_80px_rgba(249,115,22,0.12)] backdrop-blur-sm sm:p-5">
          <div className="mb-8 flex min-w-0 rounded-[24px] border border-orange-100 bg-[linear-gradient(135deg,rgba(255,247,237,0.95),rgba(255,255,255,0.88))] px-3 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
            <ReportDetailedSwitch onTabChange={handleTabChange} />
          </div>

          <AnimatePresence initial={false} mode="wait">
            <Motion.div
              key={selectedTab}
              layout="position"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.16, ease: "easeInOut" }}
              className="min-w-0"
            >
              {selectedTab === "Report" ? <ReportPage /> : <ExpandView />}
            </Motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
