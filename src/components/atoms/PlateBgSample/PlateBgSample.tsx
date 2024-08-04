interface IPlateBgSample {
  currBgColor: string;
  color: string;
  fromBgColor: string;
  toBgColor: string;
  onClick: (bgColor: string) => void;
}

const PlateBgSample = ({
  color,
  currBgColor,
  fromBgColor,
  toBgColor,
  onClick,
}: IPlateBgSample) => {
  return (
    <button
      type="button"
      id="red"
      className={`w-32 h-32 bg-gradient-to-b rounded-lg relative shadow-md ${fromBgColor} ${toBgColor}`}
      onClick={() => onClick(color)}
    >
      {currBgColor === color && (
        <div className="flex justify-center items-center absolute left-0 top-0 w-full h-full text-white font-semibold bg-black/[0.3] rounded-lg">
          적용중
        </div>
      )}
    </button>
  );
};

export default PlateBgSample;
