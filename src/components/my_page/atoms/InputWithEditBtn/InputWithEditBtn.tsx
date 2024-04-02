import { ChangeEvent, useEffect, useRef, useState } from "react";

interface IInputWithEditBtn {
  value: string;
  changeValue: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  maxLength?: number;
  required?: boolean;
}

const InputWithEditBtn = ({
  value,
  changeValue,
  placeholder,
  maxLength,
  required,
}: IInputWithEditBtn) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isEditing, setIsEditing] = useState(false);
  const toggleIsEditing = () => setIsEditing((prev) => !prev);

  useEffect(() => {
    inputRef.current?.focus();
  }, [isEditing]);

  return (
    <div className="flex flex-col items-start w-full gap-5">
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
        maxLength={maxLength}
        required={required}
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
