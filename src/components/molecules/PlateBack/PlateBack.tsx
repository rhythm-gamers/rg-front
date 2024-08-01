import { MdStar } from "react-icons/md";

interface IPlateBack {
  fromBgColor: string;
  toBgColor: string;
}

const PlateBack = ({ fromBgColor, toBgColor }: IPlateBack) => {
  return (
    <div
      className={`min-w-[31rem] min-h-[17rem] rounded-xl shadow-lg bg-gradient-to-b ${`${fromBgColor} ${toBgColor}`}`}
    >
      <div className="flex justify-end px-6 py-4">
        <MdStar className="text-yellow-400" size={40} />
        <MdStar className="text-indigo-400" size={40} />
        <MdStar className="text-purple-400" size={40} />
      </div>
    </div>
  );
};

export default PlateBack;
