import { ChangeEvent, RefObject, useRef, useState } from "react";

const useInput = (
  initText?: string,
): [
  string,
  (e: ChangeEvent<HTMLInputElement>) => void,
  RefObject<HTMLInputElement>,
] => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState(initText || "");
  const changeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return [value, changeInputValue, inputRef];
};

export default useInput;
