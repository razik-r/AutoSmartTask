import { useState } from "react";
import { motion as Motion } from "framer-motion";

const views = ["List", "Grid"];

const icons = {
  List: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M7.95 2.94H6.05c-2.18 0-3.33 1.15-3.33 3.33v1.9c0 2.18 1.15 3.33 3.33 3.33h1.9c2.18 0 3.33-1.15 3.33-3.33v-1.9c0-2.18-1.15-3.33-3.33-3.33Z" fill="currentColor" />
      <path d="M14.28 5.47h7M14.28 8.97h3.5M7.95 12.5h-1.9c-2.18 0-3.33 1.15-3.33 3.33v1.9c0 2.18 1.15 3.33 3.33 3.33h1.9c2.18 0 3.33-1.15 3.33-3.33v-1.9c0-2.18-1.15-3.33-3.33-3.33Z" fill="currentColor" />
      <path d="M14.28 15.03h7M14.28 18.53h3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  Grid: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M7.48 2.5H5.67c-2.08 0-3.17 1.09-3.17 3.16v1.81c0 2.07 1.09 3.16 3.16 3.16h1.81c2.07 0 3.16-1.09 3.16-3.16V5.66C10.64 3.59 9.55 2.5 7.48 2.5ZM18.34 2.5h-1.81c-2.07 0-3.16 1.09-3.16 3.16v1.81c0 2.07 1.09 3.16 3.16 3.16h1.81c2.07 0 3.16-1.09 3.16-3.16V5.66c0-2.07-1.09-3.16-3.16-3.16ZM18.34 13.36h-1.81c-2.07 0-3.16 1.09-3.16 3.16v1.81c0 2.07 1.09 3.16 3.16 3.16h1.81c2.07 0 3.16-1.09 3.16-3.16v-1.81c0-2.07-1.09-3.16-3.16-3.16ZM7.48 13.36H5.67c-2.08 0-3.17 1.09-3.17 3.16v1.81c0 2.08 1.09 3.17 3.16 3.17h1.81c2.07 0 3.16-1.09 3.16-3.16v-1.81c.01-2.08-1.08-3.17-3.15-3.17Z" fill="currentColor" />
    </svg>
  ),
};

export default function ToggleView({ onViewChange }) {
  const [selectedView, setSelectedView] = useState("List");

  function handleViewChange(newView) {
    setSelectedView(newView);
    onViewChange(newView);
  }

  return (
    <div className="flex items-center rounded-[16px] border border-slate-200 bg-slate-50 p-1">
      {views.map((view) => {
        const active = selectedView === view;

        return (
          <button
            key={view}
            type="button"
            onClick={() => handleViewChange(view)}
            className="relative min-w-[96px] rounded-[12px] px-3 py-2 text-sm font-medium"
          >
            {active ? (
              <Motion.span
                layoutId="view-toggle-highlight"
                className="absolute inset-0 rounded-[12px] bg-white shadow-[0_10px_25px_rgba(15,23,42,0.08)]"
              />
            ) : null}
            <span className={`relative z-10 flex items-center justify-center gap-2 ${active ? "text-slate-900" : "text-slate-500"}`}>
              <span className="h-5 w-5">{icons[view]}</span>
              {view}
            </span>
          </button>
        );
      })}
    </div>
  );
}
