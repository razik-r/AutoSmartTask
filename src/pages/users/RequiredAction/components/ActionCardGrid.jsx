import ActionCard from "./ActionCard";

export default function ActionCardGrid() {
  return (
    <div className="grid lg:grid-cols-3 gap-x-4 sm:grid-cols-2 grid-cols-1 justify-items-center ">
      <ActionCard />
      <ActionCard />
      <ActionCard />
      <ActionCard />
      <ActionCard />
      <ActionCard />
    </div>
  );
}
