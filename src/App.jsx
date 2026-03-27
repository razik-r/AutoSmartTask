import { useMemo, useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { Aperture, GalleryVerticalEnd, Radar, Sparkles } from "lucide-react";
import "./App.css";
import WorkspaceTabs from "./components/ui/WorkspaceTabs";
import EvaluationScore from "./pages/users/EvaluationScore/EvaluationScore";
import RequiredAction from "./pages/users/RequiredAction/RequiredAction";
import Gallery from "./pages/users/gallery/Gallery";

const sections = [
  {
    id: "evaluation",
    eyebrow: "Overview",
    title: "Evaluation Score",
    description: "Track audit performance across centers and reporting periods.",
    icon: Radar,
    metrics: [
      { label: "Active Centers", value: "12 centers reporting this quarter" },
      { label: "Open Reviews", value: "48 review items in progress" },
      { label: "Submission Rate", value: "84% completed this cycle" },
    ],
    content: <EvaluationScore />,
  },
  {
    id: "actions",
    eyebrow: "Workflow",
    title: "Required Action",
    description: "Follow up on pending items, escalations, and approvals.",
    icon: Sparkles,
    metrics: [
      { label: "Pending Actions", value: "18 items awaiting closure" },
      { label: "Escalated", value: "4 issues marked urgent" },
      { label: "Due This Week", value: "7 next actions scheduled" },
    ],
    content: <RequiredAction />,
  },
  {
    id: "gallery",
    eyebrow: "Media",
    title: "Gallery",
    description: "Browse submitted images and supporting documentation.",
    icon: GalleryVerticalEnd,
    metrics: [
      { label: "Media Uploads", value: "126 assets received across all programs" },
      { label: "Flagged", value: "9 items marked for review" },
      { label: "Coverage", value: "32 locations submitted evidence" },
    ],
    content: <Gallery />,
  },
];

function App() {
  const [activeTab, setActiveTab] = useState("evaluation");

  const activeSection = useMemo(
    () => sections.find((section) => section.id === activeTab) ?? sections[0],
    [activeTab],
  );
  const ActiveIcon = activeSection.icon;
  const smoothSpring = { type: "spring", stiffness: 420, damping: 42, mass: 0.9 };

  return (
    <div className="app-shell">
      <div className="app-ambient app-ambient-left" />
      <div className="app-ambient app-ambient-right" />

      <header className="hero-panel">
        <div className="hero-copy">
          <div className="hero-kicker">
            <Aperture className="h-4 w-4" />
            AutoSmart Quality Hub
          </div>
          <h1>Operations Overview</h1>
          <p>Centralized monitoring for evaluations, corrective actions, and media evidence.</p>
        </div>

        <div className="hero-metrics">
          {activeSection.metrics.map((metric) => (
            <div key={metric.label} className="hero-metric-card">
              <span className="metric-label">{metric.label}</span>
              <strong>{metric.value}</strong>
            </div>
          ))}
        </div>
      </header>

      <main className="workspace-stack">
        <section className="workspace-section" data-tone={activeSection.id}>
          <div className="tab-shell">
            <WorkspaceTabs
              sections={sections}
              activeTab={activeTab}
              onChange={setActiveTab}
            />

            <Motion.div
              layout
              transition={smoothSpring}
              className="section-intro"
            >
              <div className="section-title-row">
                <div className="section-icon">
                  <ActiveIcon className="h-5 w-5" />
                </div>
                <div>
                  <span className="section-eyebrow">{activeSection.eyebrow}</span>
                  <h2>{activeSection.title}</h2>
                </div>
              </div>

              <p>{activeSection.description}</p>
            </Motion.div>
          </div>

          <Motion.div
            layout="size"
            className="section-stage"
            transition={smoothSpring}
          >
            <AnimatePresence initial={false} mode="wait">
            <Motion.div
              key={activeSection.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18, ease: "easeInOut" }}
              className="section-surface"
            >
              {activeSection.content}
            </Motion.div>
            </AnimatePresence>
          </Motion.div>
        </section>
      </main>
    </div>
  );
}

export default App;
