import { useMemo, useState } from "react";
import { motion as Motion } from "framer-motion";
import AnimatedSelect from "../../../../components/ui/AnimatedSelect";
import SearchInput from "../../../../components/ui/SearchInput";
import ToggleView from "./ToggleView";
import ActionTable from "./ActionTable";
import ActionCardGrid from "./ActionCardGrid";

const actionItems = [
  {
    id: "action-1",
    title: "Fog machine",
    question: "Fog Machine is in good working condition, clean and available?",
    problem: "Fog machine clogs due to residue buildup, reducing output.",
    recommendation: "Clean with a vinegar-water solution and flush after each event.",
    center: "Al Naseem Center (TH)",
    quarter: "2025-Quarter 1",
    program: "Program A",
    location: "Riyadh",
    department: "Operations",
    section: "Safety",
    nextAction: "03 Sep 2024",
  },
  {
    id: "action-2",
    title: "POS station",
    question: "POS station and customer touchpoints are clean and operational?",
    problem: "The receipt printer failed during inspection.",
    recommendation: "Replace the printer head and verify all checkout accessories.",
    center: "Dubai 1 - Diera",
    quarter: "2025-Quarter 1",
    program: "Program B",
    location: "Dubai",
    department: "Customer Service",
    section: "Checkout",
    nextAction: "07 Sep 2024",
  },
  {
    id: "action-3",
    title: "Battery display",
    question: "Battery stock and product labels are visible to customers?",
    problem: "Price labels are missing on multiple premium SKUs.",
    recommendation: "Reprint labels and complete a merchandising check before opening.",
    center: "Ras Al Khaima",
    quarter: "2025-Quarter 2",
    program: "Program A",
    location: "Fujairah",
    department: "Merchandising",
    section: "Battery",
    nextAction: "09 Sep 2024",
  },
  {
    id: "action-4",
    title: "Workshop bay",
    question: "Workshop tools are arranged and stored correctly after each shift?",
    problem: "Missing tool shadow labels created an unsafe handoff between teams.",
    recommendation: "Restore the shadow board and re-audit the workshop checklist.",
    center: "Fujairah",
    quarter: "2025-Quarter 1",
    program: "Program C",
    location: "Fujairah",
    department: "Workshop",
    section: "Equipment",
    nextAction: "11 Sep 2024",
  },
];

export default function ReportPage() {
  const [selectedView, setSelectedView] = useState("List");
  const [quarter, setQuarter] = useState("2025-Quarter 1");
  const [center, setCenter] = useState("All");
  const [program, setProgram] = useState("All");
  const [location, setLocation] = useState("All");
  const [department, setDepartment] = useState("All");
  const [section, setSection] = useState("All");
  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    return actionItems.filter((item) => {
      const matchesQuery =
        !query ||
        `${item.title} ${item.question} ${item.problem}`.toLowerCase().includes(query.toLowerCase());

      return (
        matchesQuery &&
        item.quarter === quarter &&
        (center === "All" || item.center === center) &&
        (program === "All" || item.program === program) &&
        (location === "All" || item.location === location) &&
        (department === "All" || item.department === department) &&
        (section === "All" || item.section === section)
      );
    });
  }, [center, department, location, program, query, quarter, section]);

  return (
    <>
      <div className="grid min-w-0 gap-3 xl:grid-cols-[220px_220px_minmax(0,1fr)_auto]">
        <AnimatedSelect
          label="Quarter"
          value={quarter}
          onChange={setQuarter}
          options={["2025-Quarter 1", "2025-Quarter 2", "2025-Quarter 3"]}
        />
        <AnimatedSelect
          label="Center"
          value={center}
          onChange={setCenter}
          options={["All", "Al Naseem Center (TH)", "Dubai 1 - Diera", "Ras Al Khaima", "Fujairah"]}
          searchable
          searchPlaceholder="Search centers"
        />
        <SearchInput
          value={query}
          onChange={setQuery}
          placeholder="Search question, problem, or recommendation"
        />
        <ToggleView onViewChange={setSelectedView} />
      </div>

      <div className="mt-3 flex min-w-0 flex-wrap gap-3 items-end justify-start">
        <AnimatedSelect
          className="min-w-[170px] flex-1"
          label="Program"
          value={program}
          onChange={setProgram}
          options={["All", "Program A", "Program B", "Program C"]}
        />
        <AnimatedSelect
          className="min-w-[170px] flex-1"
          label="Location"
          value={location}
          onChange={setLocation}
          options={["All", "Riyadh", "Dubai", "Fujairah"]}
        />
        <AnimatedSelect
          className="min-w-[170px] flex-1"
          label="Department"
          value={department}
          onChange={setDepartment}
          options={["All", "Operations", "Customer Service", "Merchandising", "Workshop"]}
        />
        <AnimatedSelect
          className="min-w-[170px] flex-1"
          label="Section"
          value={section}
          onChange={setSection}
          options={["All", "Safety", "Checkout", "Battery", "Equipment"]}
        />
      </div>

      <Motion.div key={selectedView} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }} className="min-w-0">
        {selectedView === "List" ? (
          <ActionTable items={filteredItems} />
        ) : (
          <ActionCardGrid items={filteredItems} />
        )}

        {!filteredItems.length ? (
          <div className="mt-4 rounded-[16px] border border-slate-200 bg-white/80 px-4 py-8 text-center text-sm text-slate-500">
            No action items match the selected filters.
          </div>
        ) : null}
      </Motion.div>
    </>
  );
}
