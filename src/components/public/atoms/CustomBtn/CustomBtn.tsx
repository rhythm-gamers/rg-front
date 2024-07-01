import { TSize } from "@/types";

type TCustomBtnType = "clear" | "disabled" | "accept" | "deny";

interface ICustomBtn {
  size: TSize;
  type: TCustomBtnType;
  children: string;
  border?: boolean;
  widthFull?: boolean;
  roundedFull?: boolean;
  haveShadow?: boolean;
  className?: string;
  onClick?: () => void;
}

const CustomBtn = ({
  size,
  type,
  children,
  border,
  widthFull,
  roundedFull,
  haveShadow,
  className,
  onClick,
}: ICustomBtn) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={` ${
        size === "xs"
          ? "px-3 py-1 text-xs"
          : size === "sm"
          ? "px-5 py-1.5 text-sm"
          : size === "md"
          ? "px-6 py-3"
          : size === "lg"
          ? "px-8 py-3 text-md"
          : size === "xl"
          ? "px-10 py-5 text-lg"
          : ""
      } ${
        type === "accept"
          ? "bg-blue-400 text-white"
          : type === "deny"
          ? "bg-red-400 text-white"
          : type === "disabled"
          ? "bg-gray-100"
          : ""
      } ${haveShadow ? "shadow-md" : ""} ${border ? "border-2" : ""} ${
        roundedFull ? "rounded-full" : "rounded-lg"
      } ${widthFull ? "!w-full !px-0" : ""} ${
        className ? className : ""
      } w-fit transition-all`}
    >
      {children}
    </button>
  );
};

export default CustomBtn;
