import { ReactNode } from "react";

interface ICategoryWrapper {
  children: ReactNode;
}

const CategoryWrapper = ({ children }: ICategoryWrapper) => {
  return (
    <div className="flex text-black py-2 mt-5 text-lg bg-white border rounded-md">
      {children}
    </div>
  );
};

export default CategoryWrapper;
