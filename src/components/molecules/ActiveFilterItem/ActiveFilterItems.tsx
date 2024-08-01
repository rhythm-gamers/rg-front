import { MdClose } from "react-icons/md";

interface IActiveFilterItems {
  filterItems: string[];
  onClick: (item: string) => void;
}

const ActiveFilterItems = ({ filterItems, onClick }: IActiveFilterItems) => {
  return (
    <div className="flex w-full gap-2 text-black mt-3 overflow-x-auto min-h-3">
      {filterItems.map((item) => (
        <button
          key={item}
          type="button"
          className="flex items-center gap-3 px-3 py-1 border rounded-lg bg-white text-rose-400"
          onClick={() => onClick(item)}
        >
          {item}
          <MdClose />
        </button>
      ))}
    </div>
  );
};

export default ActiveFilterItems;
