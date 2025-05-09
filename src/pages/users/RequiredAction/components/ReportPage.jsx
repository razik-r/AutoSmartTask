import React, { useState } from "react";
import QuarterSelector from "./QuarterSelector";
import CenterSelector from "./CenterSelector";
import ActionDropdown from "./ActionDropdown";
import SearchComponent from "./Searchcomponent";
import ToggleView from "./ToggleView";
import ActionTable from "./ActionTable";
import ActionCardGrid from "./ActionCardGrid";

export default function ReportPage() {
  const [selectedView, setSelectedView] = useState("List");

  // Handle view change from the ToggleView component
  const handleViewChange = (newView) => {
    setSelectedView(newView);
  };

  return (
    <>
      <div className="flex gap-3">
        <QuarterSelector />
        <CenterSelector />
      </div>

      <div className="flex gap-3 items-end justify-center flex-wrap">
        <ActionDropdown text="Program" />
        <ActionDropdown text="Location" />
        <ActionDropdown text="Department" />
        <ActionDropdown text="Section" />
        <SearchComponent />
        <ToggleView onViewChange={handleViewChange} />
      </div>

      {selectedView === "List" && <ActionTable />}
      {selectedView === "Grid" && <ActionCardGrid />}
    </>
  );
}
