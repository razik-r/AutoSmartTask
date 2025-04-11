import { useState } from "react";

export default function RadioButton() {
  const [selectedOption, setSelectedOption] = useState("all");

  return (
    <div className="flex items-center gap-4 mt-4">
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="option"
          value="all"
          checked={selectedOption === "all"}
          onChange={() => setSelectedOption("all")}
          className="form-radio cursor-pointer appearance-none size-5 border border-gray-border1 rounded-full checked:accent-white checked:inset-ring-4 checked:inset-ring-[#3F9A26] checked:border-transparent transition-all"
        />
        <span className="text-sm text-text-gray">All images</span>
      </label>

      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="option"
          value="problem"
          checked={selectedOption === "problem"}
          onChange={() => setSelectedOption("problem")}
          className="form-radio cursor-pointer appearance-none size-5 border border-gray-border1 rounded-full checked:accent-white checked:inset-ring-4 checked:inset-ring-[#3F9A26] checked:border-transparent transition-all"
        />
        <span className="text-sm text-text-gray">Problem Images</span>
      </label>

      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="option"
          value="main"
          checked={selectedOption === "main"}
          onChange={() => setSelectedOption("main")}
          className="form-radio cursor-pointer appearance-none size-5 border border-gray-border1 rounded-full checked:accent-white checked:inset-ring-4 checked:inset-ring-[#3F9A26] checked:border-transparent transition-all"
        />
        <span className="text-sm text-text-gray">Main Images</span>
      </label>
    </div>
  );
}
