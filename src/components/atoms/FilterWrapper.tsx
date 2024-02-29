import { ReactNode } from "react";

interface IFilterWrapper {
  children: ReactNode;
}

const FilterAndSortWrapper = ({ children }: IFilterWrapper) => {
  return (
    <div className="flex justify-between w-full text-black mt-3">
      {children}
    </div>
  );
};

export default FilterAndSortWrapper;
