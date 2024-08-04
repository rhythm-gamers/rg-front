import { TChinghoRank } from "@/types";
import { ReactNode } from "react";

interface IPlateChinghoRankExpl {
  rank: TChinghoRank;
  children: ReactNode;
}

const PlateChinghoRankExpl = ({ rank, children }: IPlateChinghoRankExpl) => {
  return (
    <div className="flex gap-2 items-center">
      <div
        className={`w-5 h-5 ${
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
      ></div>
      <span>: {children}</span>
    </div>
  );
};

export default PlateChinghoRankExpl;
