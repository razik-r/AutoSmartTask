import { motion as Motion } from "framer-motion";
import { Search, X } from "lucide-react";

export default function SearchInput({
  value,
  onChange,
  placeholder = "Search",
  className = "",
}) {
  return (
    <Motion.div
      whileFocus={{ scale: 1.01 }}
      className={`flex min-h-12 w-full items-center gap-2 rounded-[16px] border border-slate-200/80 bg-white/85 px-3.5 py-2.5 shadow-[0_10px_25px_rgba(15,23,42,0.05)] transition focus-within:border-orange-300 focus-within:shadow-[0_16px_30px_rgba(15,23,42,0.08)] ${className}`}
    >
      <Search className="h-4 w-4 flex-none text-orange-500" />
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
      />
      {value ? (
        <button
          type="button"
          onClick={() => onChange("")}
          className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200"
          aria-label="Clear search"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      ) : null}
    </Motion.div>
  );
}
