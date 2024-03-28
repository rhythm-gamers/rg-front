import useInput from "@/hooks/useInput";
import { useEffect, useState } from "react";

interface IInputWithEditBtn {
  placeholder: string;
}

const InputWithEditBtn = ({ placeholder }: IInputWithEditBtn) => {
  const [value, changeValue, inputRef] = useInput("");
  const [isEditing, setIsEditing] = useState(false);
  const toggleIsEditing = () => setIsEditing((prev) => !prev);

  useEffect(() => {
    inputRef.current?.focus();
  }, [isEditing]);

  return (
    <div className="flex flex-col items-start w-full ml-10 gap-5">
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={changeValue}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            toggleIsEditing();
          }
        }}
        placeholder={placeholder}
        className="w-full border-b-2 p-2 outline-rose-400 disabled:bg-white"
        disabled={!isEditing}
      />
      <div className="flex gap-5">
        <button
          type="button"
          onClick={() => {
            toggleIsEditing();
          }}
          className={`rounded-xl px-4 py-1 transition-colors ${
            isEditing
              ? "border-2 border-blue-400 text-blue-400"
              : "bg-blue-400 text-white"
          }`}
        >
          {isEditing ? "수정 완료" : "수정"}
        </button>
      </div>
    </div>
  );
};

export default InputWithEditBtn;
