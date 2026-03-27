import HashIcon from "../assets/HashIcon";

export default function GalleryCard({ img, selected, onClick, title = "Is the fog machine functioning correctly?" }) {
  return (
    <div
      onClick={onClick}
      className={`flex h-full min-w-0 w-full flex-col items-start gap-2 rounded-[20px] bg-white/90 p-2.5 cursor-pointer transition-all duration-150 ease-in-out ${
        selected
          ? "translate-y-[-2px] shadow-[0_0_0_2px_#7C3AED,0_18px_40px_rgba(124,58,237,0.18)]"
          : "border border-slate-200 shadowbox hover:-translate-y-1 hover:border-violet-300 hover:shadow-[0_18px_40px_rgba(124,58,237,0.12)]"
      }`}
    >
      <div className="flex order-0 self-stretch transition-all ease-in">
        <div className="overflow-hidden rounded-[12px] outline-3 outline-offset-[-3px] outline-white-100/20">
          <img src={img} alt="Display image" className="block" />
        </div>
      </div>
      <div className="ml-0.5 flex min-w-0 justify-start gap-1">
        <div>
          <HashIcon />
        </div>

        <div
          className={`flex min-w-0 overflow-hidden break-words text-left text-xs font-medium leading-4 ${
            selected ? "text-violet-700" : "text-text-dark"
          }`}
        >
          {title}
        </div>
      </div>
    </div>
  );
}
