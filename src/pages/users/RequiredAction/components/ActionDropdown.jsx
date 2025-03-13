export default function Dropdown(props) {
  return (
    <button className="font-inter flex w-auto border max-h-10 max-w-35 sm:min-w-35 py-2.5  pr-2.5 pl-3 border-gray-border rounded-[8px] mt-3  gap-2 justify-between items-center hover:bg-neutral-50 hover:shadow">
      <h1 className="text-[#212121] font-normal  text-xs/4">{props.text}</h1>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 7.5L10 12.5L5 7.5"
          stroke="#E14026"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  );
}