import { notIncludeSpace, notIncludeSpecialChar } from "@/const";
import { ChangeEvent, useState } from "react";

type TNotIncludes = "space" | "specialChar";

interface IUseInput<T> {
  type: "text" | "checkbox" | "file";
  notIncludes?: TNotIncludes[];
  initValue: T;
}

function useInput<T>({
  type,
  notIncludes,
  initValue,
}: IUseInput<T>): [T, (e: ChangeEvent<HTMLInputElement>) => void] {
  const [value, setValue] = useState<T>(initValue);
  const changeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    switch (type) {
      case "text": {
        let currValue = e.target.value;
        notIncludes?.forEach((patternName) => {
          patternName === "space"
            ? (currValue = currValue.replace(notIncludeSpace, ""))
            : patternName === "specialChar"
            ? (currValue = currValue.replace(notIncludeSpecialChar, ""))
            : null;
        });
        setValue(currValue as T);
        break;
      }
      case "checkbox": {
        setValue((prev) => !prev as T);
        break;
      }
      case "file": {
        const fileBlob = e.target.files?.[0];
        if (!fileBlob) return;

        const reader = new FileReader();
        reader.readAsDataURL(fileBlob);
        return new Promise<void>((resolve) => {
          reader.onload = () => {
            if (typeof reader.result === "string") {
              setValue(reader.result as T);
            }
            resolve();
          };
        });
      }
    }
  };

  return [value, changeInputValue];
}

export default useInput;
