import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";

function normalizeOption(option) {
  if (typeof option === "string") {
    return { label: option, value: option };
  }

  return option;
}

export default function AnimatedSelect({
  label,
  value,
  options,
  onChange,
  placeholder = "Select",
  className = "",
  searchable = false,
  searchPlaceholder = "Search",
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const rootRef = useRef(null);

  const normalizedOptions = useMemo(
    () => options.map(normalizeOption),
    [options],
  );

  const selectedOption = normalizedOptions.find((option) => option.value === value);

  const filteredOptions = normalizedOptions.filter((option) => {
    if (!query) {
      return true;
    }

    const haystack = `${option.label} ${option.description || ""}`.toLowerCase();
    return haystack.includes(query.toLowerCase());
  });

  useEffect(() => {
    function handleOutsideClick(event) {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function handleSelect(nextValue) {
    onChange(nextValue);
    setOpen(false);
    setQuery("");
  }

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex min-h-12 w-full items-center justify-between rounded-[16px] border border-slate-200/80 bg-white/85 px-3.5 py-2.5 text-left shadow-[0_10px_25px_rgba(15,23,42,0.05)] transition hover:border-orange-200 hover:shadow-[0_16px_30px_rgba(15,23,42,0.08)]"
      >
        <div className="min-w-0">
          {label ? (
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
              {label}
            </p>
          ) : null}
          <p className="truncate text-sm font-medium text-slate-900">
            {selectedOption?.label || placeholder}
          </p>
        </div>
        <Motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="h-4 w-4 text-slate-500" />
        </Motion.div>
      </button>

      <AnimatePresence>
        {open ? (
          <Motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="absolute left-0 right-0 z-50 mt-2 overflow-hidden rounded-[20px] border border-slate-200/90 bg-white/96 p-2 shadow-[0_24px_60px_rgba(15,23,42,0.16)] backdrop-blur-md"
          >
            {searchable ? (
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={searchPlaceholder}
                className="mb-2 w-full rounded-[14px] border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-orange-300 focus:bg-white"
              />
            ) : null}

            <div className="max-h-64 overflow-y-auto">
              {filteredOptions.length ? (
                filteredOptions.map((option) => {
                  const active = option.value === value;

                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => handleSelect(option.value)}
                      className={`flex w-full items-center justify-between rounded-[14px] px-3 py-2.5 text-left transition ${
                        active ? "bg-orange-50 text-orange-700" : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium">{option.label}</p>
                        {option.description ? (
                          <p className="truncate text-xs text-slate-500">{option.description}</p>
                        ) : null}
                      </div>
                      {active ? <Check className="h-4 w-4 flex-none" /> : null}
                    </button>
                  );
                })
              ) : (
                <div className="px-3 py-6 text-center text-sm text-slate-500">No matches found</div>
              )}
            </div>
          </Motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
