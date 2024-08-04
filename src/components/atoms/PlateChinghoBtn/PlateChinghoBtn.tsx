import { IChingho } from "@/interfaces";
import { MdPeople } from "react-icons/md";

const PlateChinghoBtn = ({
  size,
  rank,
  children,
  viewOnly,
  disabled,
  visibleChingho = true,
  visibleChinghoIcon = true,
  onClick,
}: IChingho) => {
  return (
    <>
      {(visibleChingho || visibleChinghoIcon) && (
        <button
          type="button"
          className={`flex justify-center items-center w-fit rounded-3xl shadow-md gap-2 ${
            viewOnly ? "cursor-default" : ""
          } ${disabled ? "opacity-50" : ""} ${
            size === "sm" ? "px-4 py-2" : "px-6 py-3"
          } ${
            rank === 1
              ? "bg-chingho-rank-1"
              : rank === 2
              ? "bg-chingho-rank-2"
              : rank === 3
              ? "bg-chingho-rank-3 text-white"
              : rank === 4
              ? "bg-chingho-rank-4 text-white"
              : ""
          }`}
          disabled={disabled}
          onClick={() => !viewOnly && onClick && onClick(rank, children)}
        >
          {visibleChinghoIcon && <MdPeople />}
          {visibleChingho && children}
        </button>
      )}
    </>
  );
};

export default PlateChinghoBtn;
