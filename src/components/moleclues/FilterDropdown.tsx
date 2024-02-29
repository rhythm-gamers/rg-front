import { useAppSelector } from "@/lib/hooks";
import FilterDropdownList from "../atoms/FilterDropdownList";

const FilterDropdown = () => {
  const { dropdownType } = useAppSelector((state) => state.practice);

  return (
    <ul
      className="flex flex-col absolute z-10 w-full px-4 bg-white border rounded-md mt-1"
      onClick={(e) => e.stopPropagation()}
    >
      {dropdownType === "레벨" && (
        <>
          <FilterDropdownList value="Lv.1" />
          <FilterDropdownList value="Lv.2" />
          <FilterDropdownList value="Lv.3" />
        </>
      )}
      {dropdownType === "패턴" && (
        <>
          <FilterDropdownList value="연타" />
          <FilterDropdownList value="즈레" />
          <FilterDropdownList value="계단" />
          <FilterDropdownList value="폭타" />
          <FilterDropdownList value="동타" />
          <FilterDropdownList value="트릴" />
          <FilterDropdownList value="롱잡" />
        </>
      )}
    </ul>
  );
};

export default FilterDropdown;
