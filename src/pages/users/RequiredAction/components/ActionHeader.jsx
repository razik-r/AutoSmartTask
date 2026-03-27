import WarningIcon from "../assets/WarningIcon";
import { BellRing } from "lucide-react";

export default function ActionHeader() {
  return (
    <>
      <div className="mb-4 flex items-center rounded-[28px] border border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.95),rgba(255,247,237,0.88))] p-4 shadow-[0_20px_60px_rgba(249,115,22,0.12)] backdrop-blur-sm">
        <div className="flex gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-[#7C2D12] text-white shadow-[0_18px_35px_rgba(124,45,18,0.18)]">
            <WarningIcon />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-lg/6 align-text-top font-semibold tracking-[-0.03em]">
                Required Action
              </h1>
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-orange-700">
                <BellRing className="h-3.5 w-3.5" />
                Open items
              </span>
            </div>
            <h2 className="text-xs/5 text-slate-500">Pending issues, escalations, and approvals requiring follow-up.</h2>
          </div>
        </div>
      </div>
    </>
  );
}
