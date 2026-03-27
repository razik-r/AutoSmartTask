import GalleryIcon from "../assets/GalleryIcon";
import { Images } from "lucide-react";

export default function GalleryHeader() {
  return (
    <>
      <div className="mb-4 flex items-center rounded-[28px] border border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.95),rgba(245,243,255,0.88))] p-4 shadow-[0_20px_60px_rgba(99,102,241,0.12)] backdrop-blur-sm">
        <div className="flex gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-[#312E81] text-white shadow-[0_18px_35px_rgba(49,46,129,0.2)]">
            <GalleryIcon />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-lg/6 align-text-top font-semibold tracking-[-0.03em]">
                Gallery
              </h1>
              <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-violet-700">
                <Images className="h-3.5 w-3.5" />
                Media assets
              </span>
            </div>
            <h2 className="text-xs/5 text-slate-500">Submitted photos and attachments for audit verification.</h2>
          </div>
        </div>
      </div>
    </>
  );
}
