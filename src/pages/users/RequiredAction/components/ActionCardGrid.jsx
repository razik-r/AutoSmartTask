import ActionCard from "./ActionCard";

export default function ActionCardGrid({ items }) {
  return (
    <div className="mt-4 grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <ActionCard key={item.id} item={item} />
      ))}
    </div>
  );
}
