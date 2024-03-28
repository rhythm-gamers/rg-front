import { MdStar } from "react-icons/md";

const PlateBack = () => {
  return (
    <div className="w-[27rem] h-[17rem] rounded-lg bg-gradient-to-b from-red-500 to-red-50">
      <div className="flex justify-end px-6 py-3">
        <MdStar className="text-yellow-400" size={40} />
        <MdStar className="text-indigo-400" size={40} />
        <MdStar className="text-purple-400" size={40} />
      </div>
    </div>
  );
};

export default PlateBack;
