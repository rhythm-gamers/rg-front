import SortDropdownList from "../atoms/SortDropdownList";

const SortDropdown = () => {
  return (
    <ul className="flex flex-col absolute z-10 w-full px-4 bg-white border rounded-md mt-1">
      <SortDropdownList value="클리어 레이트순" />
      <SortDropdownList value="최신순" />
    </ul>
  );
};

export default SortDropdown;
