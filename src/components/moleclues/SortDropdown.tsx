import SortDropdownList from "../atoms/SortDropdownList";

const SortDropdown = () => {
  return (
    <ul className="flex flex-col absolute right-0 z-10 min-w-40 px-4 bg-white border rounded-md mt-1">
      <SortDropdownList value="클리어 레이트순" />
      <SortDropdownList value="레벨순" />
    </ul>
  );
};

export default SortDropdown;
