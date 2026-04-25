import { useMemo, useState } from "react";
import { motion as Motion } from "framer-motion";
import { ChevronsUpDown, Radar } from "lucide-react";
import AnimatedSelect from "../../../components/ui/AnimatedSelect";
import SearchInput from "../../../components/ui/SearchInput";
import Pending from "./assets/Pending";
import Ongoing from "./assets/Ongoing";
import Approval from "./assets/Approval";
import Submitted from "./assets/Submitted";
import Logo from "./assets/Logo";

const rows = [
  {
    id: "#C1234",
    name: "Ebrahim Khalil Kano",
    auditor: "Sara Ahmed",
    region: "West",
    type: "Flagship",
    outlet: "TH",
    quarter: "2025-Quarter 1",
    status: "Pending",
    scores: ["84", "71", "65", "80", "72", "90"],
    badgeClass: "bg-[#C5E2F1] text-[#138CC9]",
  },
  {
    id: "#C2345",
    name: "Al Olaya Jeddah",
    auditor: "Mazen Khaled",
    region: "Central",
    type: "Retail",
    outlet: "SA",
    quarter: "2025-Quarter 1",
    status: "Ongoing",
    scores: ["91", "78", "82", "86", "79", "88"],
    badgeClass: "bg-[#FFECD6] text-[#ED8F22]",
  },
  {
    id: "#C3456",
    name: "Fujairah Express",
    auditor: "Noor Abbas",
    region: "East",
    type: "Express",
    outlet: "AE",
    quarter: "2025-Quarter 2",
    status: "Approval",
    scores: ["93", "81", "84", "88", "90", "91"],
    badgeClass: "bg-[#EBDEEF] text-[#805EC5]",
  },
  {
    id: "#C4567",
    name: "Dubai Deira Hub",
    auditor: "Sara Ahmed",
    region: "North",
    type: "Flagship",
    outlet: "AE",
    quarter: "2025-Quarter 1",
    status: "Submitted",
    scores: ["96", "88", "91", "92", "89", "95"],
    badgeClass: "bg-[#D7EECA] text-[#3F9A26]",
  },
  {
    id: "#C5678",
    name: "Ras Al Khaimah",
    auditor: "Mazen Khaled",
    region: "East",
    type: "Retail",
    outlet: "AE",
    quarter: "2025-Quarter 2",
    status: "Pending",
    scores: ["79", "68", "72", "75", "71", "80"],
    badgeClass: "bg-[#C5E2F1] text-[#138CC9]",
  },
];

const quarterOptions = [
  "2025-Quarter 1",
  "2025-Quarter 2",
  "2025-Quarter 3",
  "2025-Quarter 4",
  "2026-Quarter 1",
];

const scoreHeaders = [
  "Customer Experience",
  "Equipment Management",
  "Battery Business",
  "Periodic Maintenance",
  "Tire Business",
  "Safety",
];

function StatusSummary({ status, count }) {
  const icons = {
    Pending: <Pending />,
    Ongoing: <Ongoing />,
    Approval: <Approval />,
    Submitted: <Submitted />,
  };

  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-3 py-1.5 text-xs text-slate-600">
      {icons[status]}
      <span>{status}</span>
      <strong className="text-slate-900">{count}</strong>
    </span>
  );
}

export default function EvaluationScore() {
  const [query, setQuery] = useState("");
  const [quarter, setQuarter] = useState("2025-Quarter 1");
  const [auditor, setAuditor] = useState("All");
  const [region, setRegion] = useState("All");
  const [type, setType] = useState("All");
  const [outlet, setOutlet] = useState("All");
  const [status, setStatus] = useState("All");

  const filteredRows = useMemo(() => {
    return rows.filter((row) => {
      const searchValue = `${row.name} ${row.id} ${row.auditor}`.toLowerCase();
      const matchesQuery = !query || searchValue.includes(query.toLowerCase());

      return (
        matchesQuery &&
        row.quarter === quarter &&
        (auditor === "All" || row.auditor === auditor) &&
        (region === "All" || row.region === region) &&
        (type === "All" || row.type === type) &&
        (outlet === "All" || row.outlet === outlet) &&
        (status === "All" || row.status === status)
      );
    });
  }, [auditor, outlet, query, quarter, region, status, type]);

  const summary = useMemo(
    () =>
      ["Pending", "Ongoing", "Approval", "Submitted"].map((statusLabel) => ({
        statusLabel,
        count: filteredRows.filter((row) => row.status === statusLabel).length,
      })),
    [filteredRows],
  );

  return (
    <div className="min-h-full min-w-full bg-transparent px-1 py-1">
      <Motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-4 flex min-w-full items-center gap-4 rounded-[28px] border border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.95),rgba(239,246,255,0.88))] px-5 py-4 shadow-[0_20px_60px_rgba(59,130,246,0.12)] backdrop-blur-sm"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-[#0F172A] text-white shadow-[0_18px_35px_rgba(15,23,42,0.18)]">
          <Logo />
        </div>
        <div className="flex flex-1 flex-col gap-1">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-lg/6 align-text-top font-semibold tracking-[-0.03em]">
              Evaluation Score
            </h1>
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-700">
              <Radar className="h-3.5 w-3.5" />
              Active quarter
            </span>
          </div>
          <h2 className="text-xs/5 text-slate-500">Quarter 1 performance summary across audited centers.</h2>
        </div>
      </Motion.div>

      <div className="min-w-0 rounded-[30px] border border-white/70 bg-[rgba(255,255,255,0.82)] p-4 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:p-5">
        <div className="mb-4 flex flex-col gap-4 rounded-[24px] border border-slate-200/70 bg-[linear-gradient(135deg,rgba(248,250,252,0.95),rgba(239,246,255,0.92))] p-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Filters
            </p>
            <h2 className="text-2xl font-semibold tracking-[-0.04em] text-slate-900">
              Center performance
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-600">
            <span className="rounded-full bg-white px-3 py-1.5 shadow-sm">{quarter}</span>
            <span className="rounded-full bg-white px-3 py-1.5 shadow-sm">{filteredRows.length} centers</span>
            <span className="rounded-full bg-white px-3 py-1.5 shadow-sm">
              {filteredRows.reduce((sum, row) => sum + Number(row.scores[0]), 0) || 0} CX total
            </span>
          </div>
        </div>

        <div className="grid min-w-0 gap-3 lg:grid-cols-[220px_minmax(0,1fr)]">
          <AnimatedSelect
            label="Quarter"
            value={quarter}
            onChange={setQuarter}
            options={quarterOptions}
          />
          <SearchInput
            value={query}
            onChange={setQuery}
            placeholder="Search by center, code, or auditor"
          />
        </div>

        <div className="mt-3 flex min-w-0 flex-wrap gap-3 items-end">
          <AnimatedSelect
            className="min-w-[170px] flex-1"
            label="Auditor"
            value={auditor}
            onChange={setAuditor}
            options={["All", "Sara Ahmed", "Mazen Khaled", "Noor Abbas"]}
          />
          <AnimatedSelect
            className="min-w-[170px] flex-1"
            label="Region"
            value={region}
            onChange={setRegion}
            options={["All", "West", "Central", "East", "North"]}
          />
          <AnimatedSelect
            className="min-w-[170px] flex-1"
            label="Type"
            value={type}
            onChange={setType}
            options={["All", "Flagship", "Retail", "Express"]}
          />
          <AnimatedSelect
            className="min-w-[170px] flex-1"
            label="Outlet"
            value={outlet}
            onChange={setOutlet}
            options={["All", "TH", "SA", "AE"]}
          />
          <AnimatedSelect
            className="min-w-[170px] flex-1"
            label="Status"
            value={status}
            onChange={setStatus}
            options={["All", "Pending", "Ongoing", "Approval", "Submitted"]}
          />
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {summary.map(({ statusLabel, count }) => (
            <StatusSummary key={statusLabel} status={statusLabel} count={count} />
          ))}
        </div>

        <div className="mt-4 min-w-0 overflow-hidden rounded-[20px] border border-slate-200/80 bg-white shadow-[0_20px_45px_rgba(148,163,184,0.14)]">
          <div className="max-w-full overflow-x-auto">
            <table className="w-full text-left text-sm text-black-table">
              <thead className="h-15">
                <tr className="border-b border-gray-border1 bg-[linear-gradient(180deg,#F8FAFC_0%,#F1F5F9_100%)] text-xs font-inter">
                  <th className="min-w-[240px] px-3 font-normal">
                    <span className="flex items-center gap-1">
                      Center Name
                      <ChevronsUpDown className="h-4 w-4 text-[#84838A]" />
                    </span>
                  </th>
                  <th className="min-w-[140px] p-3 font-normal">
                    <span className="flex items-center gap-1">
                      Auditor
                      <ChevronsUpDown className="h-4 w-4 text-[#84838A]" />
                    </span>
                  </th>
                  {scoreHeaders.map((header) => (
                    <th key={header} className="min-w-[130px] px-3 py-3 font-normal">
                      <span className="flex items-center gap-1">
                        {header}
                        <ChevronsUpDown className="h-4 w-4 text-[#84838A]" />
                      </span>
                    </th>
                  ))}
                  <th className="sticky right-[160px] z-10 min-w-[90px] border-l border-slate-200 bg-[#F8FAFC] px-3 py-3 text-center font-normal">
                    Score
                  </th>
                  <th className="sticky right-[70px] z-10 min-w-[100px] bg-[#F8FAFC] px-3 py-3 text-center font-normal">
                    Status
                  </th>
                  <th className="sticky right-0 z-10 min-w-[80px] bg-[#F8FAFC] px-3 py-3 text-center font-normal">
                    Outlet
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredRows.length ? (
                  filteredRows.map((row) => {
                    const totalScore = Math.round(
                      row.scores.reduce((sum, value) => sum + Number(value), 0) / row.scores.length,
                    );

                    return (
                      <tr
                        key={row.id}
                        className="border-b border-gray-border1 transition-colors duration-150 hover:bg-sky-50/60"
                      >
                        <td className="px-3 py-4">
                          <div className="flex flex-col gap-1">
                            <span className="font-medium text-slate-900">{row.name}</span>
                            <span className="text-xs text-slate-500">{row.id}</span>
                          </div>
                        </td>
                        <td className="p-3 text-slate-700">{row.auditor}</td>
                        {row.scores.map((score, index) => (
                          <td key={`${row.id}-${scoreHeaders[index]}`} className="px-3 py-3 text-slate-700">
                            {score}
                          </td>
                        ))}
                        <td className="sticky right-[160px] z-10 border-l border-slate-200 bg-white px-3 py-3 text-center font-semibold text-slate-900">
                          {totalScore}
                        </td>
                        <td className="sticky right-[70px] z-10 bg-white px-3 py-3 text-center">
                          <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${row.badgeClass}`}>
                            {row.status}
                          </span>
                        </td>
                        <td className="sticky right-0 z-10 bg-white px-3 py-3 text-center text-slate-600">
                          {row.outlet}
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={11} className="px-4 py-10 text-center text-sm text-slate-500">
                      No centers match the selected filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
