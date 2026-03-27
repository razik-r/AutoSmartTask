import { useMemo, useState } from "react";
import { motion as Motion } from "framer-motion";
import AnimatedSelect from "../../../components/ui/AnimatedSelect";
import SearchInput from "../../../components/ui/SearchInput";
import GalleryCard from "./components/GalleryCard";
import GalleryHeader from "./components/GalleryHeader";

import Image1 from "./assets/Image1.png";
import Image2 from "./assets/Image2.png";
import Image3 from "./assets/Image3.png";
import Image4 from "./assets/Image4.png";
import Image5 from "./assets/Image5.png";
import Image6 from "./assets/Image6.png";
import Image7 from "./assets/Image7.png";
import Image8 from "./assets/Image8.png";
import Image9 from "./assets/Image9.png";
import Image10 from "./assets/Image10.png";
import Image11 from "./assets/Image11.png";
import Image12 from "./assets/Image12.png";

const images = [
  { id: 1, src: Image1, title: "Fog machine condition", program: "Program A", location: "Riyadh", region: "Central", section: "Safety", kind: "problem" },
  { id: 2, src: Image2, title: "Reception display", program: "Program A", location: "Dubai", region: "North", section: "Front Desk", kind: "main" },
  { id: 3, src: Image3, title: "Entrance cleanliness", program: "Program B", location: "Jeddah", region: "West", section: "Entrance", kind: "main" },
  { id: 4, src: Image4, title: "Battery area shelf", program: "Program B", location: "Riyadh", region: "Central", section: "Battery", kind: "problem" },
  { id: 5, src: Image5, title: "Tire wall image", program: "Program C", location: "Fujairah", region: "East", section: "Tire", kind: "main" },
  { id: 6, src: Image6, title: "Storage room leak", program: "Program C", location: "Dubai", region: "North", section: "Backroom", kind: "problem" },
  { id: 7, src: Image7, title: "Waiting area seating", program: "Program A", location: "Kano", region: "West", section: "Customer Area", kind: "main" },
  { id: 8, src: Image8, title: "Equipment tag issue", program: "Program B", location: "Basra", region: "South", section: "Equipment", kind: "problem" },
  { id: 9, src: Image9, title: "Workshop bay", program: "Program A", location: "Dubai", region: "North", section: "Workshop", kind: "main" },
  { id: 10, src: Image10, title: "Oil stain on floor", program: "Program C", location: "Jeddah", region: "West", section: "Safety", kind: "problem" },
  { id: 11, src: Image11, title: "Uniform compliance", program: "Program B", location: "Fujairah", region: "East", section: "Team", kind: "main" },
  { id: 12, src: Image12, title: "POS station image", program: "Program A", location: "Riyadh", region: "Central", section: "Checkout", kind: "main" },
];

const pageSize = 6;

export default function Gallery() {
  const [selected, setSelected] = useState([]);
  const [query, setQuery] = useState("");
  const [program, setProgram] = useState("All");
  const [location, setLocation] = useState("All");
  const [region, setRegion] = useState("All");
  const [section, setSection] = useState("All");
  const [imageType, setImageType] = useState("all");
  const [page, setPage] = useState(1);

  const filteredImages = useMemo(() => {
    return images.filter((image) => {
      const matchesQuery = !query || image.title.toLowerCase().includes(query.toLowerCase());

      return (
        matchesQuery &&
        (program === "All" || image.program === program) &&
        (location === "All" || image.location === location) &&
        (region === "All" || image.region === region) &&
        (section === "All" || image.section === section) &&
        (imageType === "all" || image.kind === imageType)
      );
    });
  }, [imageType, location, program, query, region, section]);

  const pageCount = Math.max(1, Math.ceil(filteredImages.length / pageSize));
  const safePage = Math.min(page, pageCount);
  const visibleImages = filteredImages.slice((safePage - 1) * pageSize, safePage * pageSize);

  function toggleSelect(id) {
    setSelected((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  }

  return (
    <div className="min-h-full min-w-0 bg-transparent px-1 py-1 pointer-events-auto">
      <GalleryHeader />

      <div className="min-w-0 overflow-visible rounded-[30px] border border-white/70 bg-[rgba(255,255,255,0.82)] p-4 shadow-[0_24px_80px_rgba(99,102,241,0.12)] backdrop-blur-sm sm:p-5">
        <div className="mb-4 flex flex-col gap-4 rounded-[24px] border border-violet-100 bg-[linear-gradient(135deg,rgba(250,245,255,0.95),rgba(255,255,255,0.9))] p-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Library
            </p>
            <h2 className="text-2xl font-semibold tracking-[-0.04em] text-slate-900">
              Uploaded assets
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-600">
            <span className="rounded-full bg-white px-3 py-1.5 shadow-sm">{filteredImages.length} items</span>
            <span className="rounded-full bg-white px-3 py-1.5 shadow-sm">{selected.length} selected</span>
            <span className="rounded-full bg-white px-3 py-1.5 shadow-sm">
              {filteredImages.filter((item) => item.kind === "problem").length} flagged
            </span>
          </div>
        </div>

        <div className="grid min-w-0 gap-3 xl:grid-cols-[220px_220px_minmax(0,1fr)]">
          <AnimatedSelect
            label="Program"
            value={program}
            onChange={(value) => {
              setProgram(value);
              setPage(1);
            }}
            options={["All", "Program A", "Program B", "Program C"]}
          />
          <AnimatedSelect
            label="Location"
            value={location}
            onChange={(value) => {
              setLocation(value);
              setPage(1);
            }}
            options={["All", "Riyadh", "Dubai", "Jeddah", "Fujairah", "Kano", "Basra"]}
          />
          <SearchInput
            value={query}
            onChange={(value) => {
              setQuery(value);
              setPage(1);
            }}
            placeholder="Search image title"
          />
        </div>

        <div className="mt-3 flex min-w-0 flex-wrap gap-3 items-end">
          <AnimatedSelect
            className="min-w-[180px] flex-1"
            label="Region"
            value={region}
            onChange={(value) => {
              setRegion(value);
              setPage(1);
            }}
            options={["All", "Central", "North", "West", "East", "South"]}
          />
          <AnimatedSelect
            className="min-w-[180px] flex-1"
            label="Section"
            value={section}
            onChange={(value) => {
              setSection(value);
              setPage(1);
            }}
            options={["All", "Safety", "Front Desk", "Entrance", "Battery", "Tire", "Backroom", "Customer Area", "Equipment", "Workshop", "Team", "Checkout"]}
          />
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {[
            { id: "all", label: "All images" },
            { id: "problem", label: "Problem images" },
            { id: "main", label: "Main images" },
          ].map((option) => {
            const active = imageType === option.id;

            return (
              <button
                key={option.id}
                type="button"
                onClick={() => {
                  setImageType(option.id);
                  setPage(1);
                }}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  active ? "bg-violet-600 text-white shadow-[0_14px_30px_rgba(124,58,237,0.2)]" : "bg-white text-slate-600 hover:bg-slate-50"
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>

        <div className="mt-4 grid min-w-0 grid-cols-1 gap-4 rounded-[24px] border border-slate-200/80 bg-white/70 p-4 shadow-[0_20px_45px_rgba(148,163,184,0.12)] sm:grid-cols-2 lg:grid-cols-3">
          {visibleImages.length ? (
            visibleImages.map((image, index) => (
              <Motion.div
                key={image.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
                className="min-w-0"
              >
                <GalleryCard
                  img={image.src}
                  title={image.title}
                  selected={selected.includes(image.id)}
                  onClick={() => toggleSelect(image.id)}
                />
              </Motion.div>
            ))
          ) : (
            <div className="col-span-full py-16 text-center text-sm text-slate-500">
              No images match the selected filters.
            </div>
          )}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            Showing {(safePage - 1) * pageSize + (visibleImages.length ? 1 : 0)} to {(safePage - 1) * pageSize + visibleImages.length} of {filteredImages.length} assets
          </p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setPage((current) => Math.max(1, current - 1))}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-50"
            >
              Previous
            </button>
            <span className="rounded-full bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700">
              Page {safePage} of {pageCount}
            </span>
            <button
              type="button"
              onClick={() => setPage((current) => Math.min(pageCount, current + 1))}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
