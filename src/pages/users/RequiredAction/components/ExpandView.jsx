import { useMemo, useState } from "react";
import { motion as Motion } from "framer-motion";
import { CirclePlus } from "lucide-react";
import AnimatedSelect from "../../../../components/ui/AnimatedSelect";
import SearchInput from "../../../../components/ui/SearchInput";
import DetailedPageCard from "./DetailedPageCard";

const columnConfig = [
  { id: "pending", title: "Pending", tint: "from-rose-50 to-orange-50", accent: "bg-[#E14026]" },
  { id: "progress", title: "In Progress", tint: "from-amber-50 to-yellow-50", accent: "bg-[#ED8F22]" },
  { id: "completed", title: "Completed", tint: "from-emerald-50 to-lime-50", accent: "bg-[#3F9A26]" },
];

const initialCards = [
  {
    id: "card-1",
    status: "pending",
    title: "Lexus Facility Standards for customer toilets require dual-area verification.",
    code: "Q12345",
    attachments: 6,
    dueDate: "03 Sep 2024",
    pic: "Ahmed",
    priority: "High",
    center: "Al Naseem",
    term: "2025-Quarter 1",
    auditor: "Sara Ahmed",
  },
  {
    id: "card-2",
    status: "pending",
    title: "Battery section pricing labels are missing on premium SKUs.",
    code: "Q12891",
    attachments: 3,
    dueDate: "05 Sep 2024",
    pic: "Mazen",
    priority: "Medium",
    center: "Dubai 1 - Diera",
    term: "2025-Quarter 1",
    auditor: "Mazen Khaled",
  },
  {
    id: "card-3",
    status: "progress",
    title: "Workshop tool shadow board needs full restoration after audit findings.",
    code: "Q13008",
    attachments: 4,
    dueDate: "07 Sep 2024",
    pic: "Noor",
    priority: "High",
    center: "Ras Al Khaima",
    term: "2025-Quarter 2",
    auditor: "Noor Abbas",
  },
  {
    id: "card-4",
    status: "progress",
    title: "POS printer replacement is under procurement approval.",
    code: "Q13552",
    attachments: 2,
    dueDate: "08 Sep 2024",
    pic: "Ahmed",
    priority: "Low",
    center: "Dubai 1 - Diera",
    term: "2025-Quarter 1",
    auditor: "Sara Ahmed",
  },
  {
    id: "card-5",
    status: "completed",
    title: "Entrance cleanliness recovery action completed and verified by site lead.",
    code: "Q13877",
    attachments: 5,
    dueDate: "01 Sep 2024",
    pic: "Mazen",
    priority: "Low",
    center: "Al Naseem",
    term: "2025-Quarter 1",
    auditor: "Sara Ahmed",
  },
];

export default function ExpandView() {
  const [center, setCenter] = useState("All");
  const [term, setTerm] = useState("All");
  const [auditor, setAuditor] = useState("All");
  const [pic, setPic] = useState("All");
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("Priority");
  const [cards, setCards] = useState(initialCards);
  const [draggingId, setDraggingId] = useState(null);
  const [dropColumn, setDropColumn] = useState(null);

  const filteredCards = useMemo(() => {
    const visibleCards = cards.filter((card) => {
      const matchesQuery =
        !query ||
        `${card.title} ${card.code} ${card.pic} ${card.center}`.toLowerCase().includes(query.toLowerCase());

      return (
        matchesQuery &&
        (center === "All" || card.center === center) &&
        (term === "All" || card.term === term) &&
        (auditor === "All" || card.auditor === auditor) &&
        (pic === "All" || card.pic === pic)
      );
    });

    return [...visibleCards].sort((left, right) => {
      if (sortBy === "Due date") {
        return new Date(left.dueDate).getTime() - new Date(right.dueDate).getTime();
      }

      if (sortBy === "Recently updated") {
        return right.code.localeCompare(left.code);
      }

      const priorityOrder = { High: 0, Medium: 1, Low: 2 };
      return priorityOrder[left.priority] - priorityOrder[right.priority];
    });
  }, [auditor, cards, center, pic, query, sortBy, term]);

  function handleDragStart(event, cardId) {
    event.dataTransfer.setData("text/plain", cardId);
    event.dataTransfer.effectAllowed = "move";
    setDraggingId(cardId);
  }

  function handleDrop(columnId) {
    if (!draggingId) {
      return;
    }

    setCards((current) =>
      current.map((card) =>
        card.id === draggingId ? { ...card, status: columnId } : card,
      ),
    );
    setDraggingId(null);
    setDropColumn(null);
  }

  return (
    <>
      <div className="grid min-w-0 gap-3 lg:grid-cols-[220px_minmax(0,1fr)]">
        <AnimatedSelect
          label="Center"
          value={center}
          onChange={setCenter}
          options={["All", "Al Naseem", "Dubai 1 - Diera", "Ras Al Khaima"]}
          searchable
          searchPlaceholder="Search centers"
        />
        <SearchInput
          value={query}
          onChange={setQuery}
          placeholder="Search tasks, code, or PIC"
        />
      </div>

      <div className="mt-3 flex min-w-0 flex-wrap gap-3 items-end justify-start">
        <AnimatedSelect
          className="min-w-[170px] flex-1"
          label="Term"
          value={term}
          onChange={setTerm}
          options={["All", "2025-Quarter 1", "2025-Quarter 2"]}
        />
        <AnimatedSelect
          className="min-w-[170px] flex-1"
          label="Auditor"
          value={auditor}
          onChange={setAuditor}
          options={["All", "Sara Ahmed", "Mazen Khaled", "Noor Abbas"]}
        />
        <AnimatedSelect
          className="min-w-[170px] flex-1"
          label="PIC"
          value={pic}
          onChange={setPic}
          options={["All", "Ahmed", "Mazen", "Noor"]}
        />
        <AnimatedSelect
          className="min-w-[170px] flex-1"
          label="Sort"
          value={sortBy}
          onChange={setSortBy}
          options={["Priority", "Due date", "Recently updated"]}
        />
      </div>

      <div className="mt-4 min-w-0 overflow-visible">
        <div className="grid min-w-0 grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2">
        {columnConfig.map((column, index) => {
          const columnCards = filteredCards.filter((card) => card.status === column.id);
          const isDropTarget = dropColumn === column.id;

          return (
            <Motion.div
              key={column.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              onDragOver={(event) => {
                event.preventDefault();
                setDropColumn(column.id);
              }}
              onDragLeave={() => setDropColumn((current) => (current === column.id ? null : current))}
              onDrop={(event) => {
                event.preventDefault();
                handleDrop(column.id);
              }}
              className={`min-w-0 w-full rounded-[18px] border p-3 transition ${
                isDropTarget
                  ? "border-orange-300 bg-orange-50/70 shadow-[0_18px_35px_rgba(249,115,22,0.12)]"
                  : "border-gray-border1 bg-[#F9F9F9]"
              }`}
            >
              <div className={`rounded-[14px] bg-gradient-to-r ${column.tint} p-3`}>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <span className={`h-2.5 w-2.5 rounded-full ${column.accent}`} />
                    <p className="truncate text-[16px]/5 font-medium text-[#212121]">
                      {column.title}
                    </p>
                    <span className="rounded-full bg-white/85 px-2 py-1 text-xs font-medium text-slate-600">
                      {columnCards.length}
                    </span>
                  </div>

                  <button
                    type="button"
                    className="inline-flex items-center gap-1 rounded-full bg-white/80 px-2.5 py-1 text-xs font-medium text-slate-600 transition hover:bg-white"
                  >
                    <CirclePlus className="h-3.5 w-3.5" />
                    Add
                  </button>
                </div>
              </div>

              <div className="mt-3 flex min-h-[320px] min-w-0 flex-col gap-3 rounded-[14px] border border-dashed border-slate-200/80 bg-white/45 p-2">
                {columnCards.length ? (
                  columnCards.map((card) => (
                    <DetailedPageCard
                      key={card.id}
                      card={card}
                      isDragging={draggingId === card.id}
                      onDragStart={handleDragStart}
                      onDragEnd={() => {
                        setDraggingId(null);
                        setDropColumn(null);
                      }}
                    />
                  ))
                ) : (
                  <div className="flex min-h-[240px] items-center justify-center rounded-[12px] border border-dashed border-slate-200 bg-white/60 text-sm text-slate-400">
                    Drop a card here
                  </div>
                )}
              </div>
            </Motion.div>
          );
        })}
        </div>
      </div>
    </>
  );
}
