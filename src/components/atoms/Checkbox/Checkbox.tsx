import { ChangeEvent, MouseEvent } from "react";

interface ICheckbox {
  value: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: MouseEvent<HTMLLabelElement>) => void;
}

const Checkbox = ({ value, checked, onChange, onClick }: ICheckbox) => {
  return (
    <label className="flex items-center gap-2 cursor-pointer" onClick={onClick}>
      <input
        type="checkbox"
        className="w-4 h-4 border border-gray-300 checked:bg-red-300 appearance-none cursor-pointer"
        onChange={onChange}
        checked={checked}
      />
      {value}
    </label>
  );
};

export default Checkbox;
