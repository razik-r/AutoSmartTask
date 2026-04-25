import { AnimatePresence, motion as Motion } from "framer-motion";

const highlightTransition = {
    type: "spring",
  stiffness: 400,
  damping: 30,
  mass: 0.5, 
};

//  transition={ type: "spring", stiffness: 400, damping: 30 }

export default function WorkspaceTabs({ sections, activeTab, onChange }) {
  return (
    <div className="tab-bar-shell">
      <div className="tab-bar" style={{ position: "relative" }}>
        {sections.map((section) => {
          const IconComponent = section.icon;
          const active = section.id === activeTab;

          return (
            <button
              key={section.id}
              type="button"
              onClick={() => onChange(section.id)}
              className={`tab-trigger ${active ? "is-active" : ""}`}
              data-tone={section.id}
              aria-pressed={active}
              style={{ position: "relative" }}
            >
              {active && (
                <Motion.span
                  layoutId="tab-highlight"
                  className="tab-highlight"
                  transition={highlightTransition}
                  // Critical: isolate this layer so it doesn't repaint siblings
                  style={{ willChange: "transform" }}
                />
              )}
              <span className="tab-trigger-inner">
                <span className="section-icon tab-icon" aria-hidden="true">
                  <IconComponent className="h-5 w-5" />
                </span>
                <span className="tab-copy">
                  <span className="section-eyebrow tab-eyebrow">{section.eyebrow}</span>
                  <span className="tab-title text-nowrap">{section.title}</span>
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}