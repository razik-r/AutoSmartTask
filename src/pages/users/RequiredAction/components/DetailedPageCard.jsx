import { motion as Motion } from "framer-motion";
import { GripVertical } from "lucide-react";
import BlueLinkIcon from "../assets/BlueLinkIcon";
import FlashIcon from "../assets/FlashIcon";
import PurpleDocumentIcon from "../assets/PurpleDocumentIcon";
import Auditor from "./Auditor.png";

const priorityStyles = {
  High: "bg-[#FCECEA] text-[#E14026]",
  Medium: "bg-[#FFECD6] text-[#ED8F22]",
  Low: "bg-[#D7EECA] text-[#3F9A26]",
};

export default function DetailedPageCard({
  card,
  isDragging = false,
  onDragStart,
  onDragEnd,
}) {
  return (
    <Motion.div
      layout
      draggable
      onDragStart={(event) => onDragStart(event, card.id)}
      onDragEnd={onDragEnd}
      whileHover={{ y: -2 }}
      className={`flex min-w-0 cursor-grab flex-col gap-3 rounded-[14px] border bg-[#FFFFFF] p-3 shadowbox transition ${
        isDragging
          ? "border-orange-300 opacity-70 shadow-[0_20px_35px_rgba(249,115,22,0.16)]"
          : "border-gray-border1"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <FlashIcon />
        <span className="mt-0.5 text-slate-400">
          <GripVertical className="h-4 w-4" />
        </span>
      </div>

      <div className="flex min-w-0 flex-wrap items-center gap-2">
        <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${priorityStyles[card.priority]}`}>
          {card.priority}
        </span>
        <span className="max-w-full truncate rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold text-slate-600">
          {card.center}
        </span>
      </div>

      <p className="break-words text-sm/5 font-medium text-slate-900">
        {card.title}
      </p>

      <div className="flex min-w-0 flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
        <p className="flex min-w-0 items-center gap-1">
          <span>
            <PurpleDocumentIcon />
          </span>
          <span className="truncate">{card.code}</span>
        </p>

        <p className="flex items-center gap-1">
          <span>
            <BlueLinkIcon />
          </span>
          {card.attachments}
        </p>
      </div>

      <div className="flex min-w-0 flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-2">
        <div className="min-w-0">
          <p className="text-[10px] uppercase tracking-[0.12em] text-slate-400">Due</p>
          <p className="text-xs font-medium text-slate-700">{card.dueDate}</p>
        </div>

        <div className="flex min-w-0 items-center gap-2">
          <div className="min-w-0 text-right">
            <p className="text-[10px] uppercase tracking-[0.12em] text-slate-400">PIC</p>
            <p className="truncate text-xs font-medium text-slate-700">{card.pic}</p>
          </div>
          <img className="size-6 rounded-full" src={Auditor} alt={card.pic} />
        </div>
      </div>
    </Motion.div>
  );
}
