import { motion as Motion } from "framer-motion";

const highlightTransition = {
  type: "spring",
  stiffness: 620,
  damping: 42,
  mass: 0.72,
};

export default function WorkspaceTabs({ sections, activeTab, onChange }) {
  return (
    <div className="tab-bar-shell">
      <div className="tab-bar">
        {sections.map((section, index) => {
          const IconComponent = section.icon;
          const active = section.id === activeTab;

          return (
            <Motion.button
              key={section.id}
              type="button"
              onClick={() => onChange(section.id)}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.982 }}
              className={`tab-trigger ${active ? "is-active" : ""}`}
            >
              {active ? (
                <Motion.span
                  layoutId="tab-highlight"
                  className="tab-highlight"
                  transition={highlightTransition}
                />
              ) : null}

              <span className="tab-trigger-inner">
                <span className="section-icon tab-icon">
                  <IconComponent className="h-5 w-5" />
                </span>
                <span>
                  <span className="section-eyebrow">{section.eyebrow}</span>
                  <strong>{section.title}</strong>
                </span>
                <span className={`tab-index ${active ? "is-active" : ""}`}>
                  {String(index + 1).padStart(2, "0")}
                </span>
              </span>
            </Motion.button>
          );
        })}
      </div>
    </div>
  );
}
