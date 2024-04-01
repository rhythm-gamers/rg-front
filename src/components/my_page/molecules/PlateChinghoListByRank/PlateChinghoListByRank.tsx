import { TChinghoRank } from "@/types";
import PlateChinghoBtn from "../../atoms/PlateChinghoBtn/PlateChinghoBtn";
import { ReactNode } from "react";

interface IPlateChinghoList {
  rank: TChinghoRank;
  onClick: (rank: TChinghoRank, children: ReactNode) => void;
}

const rank1Chinghos = [
  "디맥 플레이어",
  "이지투 플레이어",
  "식스타:게이트 플레이어",
  "뮤즈대쉬 플레이어",
  "뮤즈대쉬 플레이어",
  "뮤즈대쉬 플레이어",
  "뮤즈대쉬 플레이어",
];
const rank2Chinghos = [
  "디맥 리게이",
  "이지투 리게이",
  "식스타:게이트 리게이",
  "뮤즈대쉬 리게이",
];
const rank3Chinghos = ["능동적인 디맥 리게이", "능동적인 이지투 리게이"];
const rank4Chinghos = ["사볼 악귀"];
const PlateChinghoListByRank = ({ rank, onClick }: IPlateChinghoList) => {
  return (
    <div className="my-8">
      <div className="flex flex-wrap gap-5">
        {rank === 1
          ? rank1Chinghos.map((chingho, idx) => (
              <PlateChinghoBtn
                key={`${chingho}${idx}`}
                rank={rank}
                onClick={onClick}
              >
                {chingho}
              </PlateChinghoBtn>
            ))
          : rank === 2
          ? rank2Chinghos.map((chingho, idx) => (
              <PlateChinghoBtn
                key={`${chingho}${idx}`}
                rank={rank}
                onClick={onClick}
              >
                {chingho}
              </PlateChinghoBtn>
            ))
          : rank === 3
          ? rank3Chinghos.map((chingho, idx) => (
              <PlateChinghoBtn
                key={`${chingho}${idx}`}
                rank={rank}
                onClick={onClick}
              >
                {chingho}
              </PlateChinghoBtn>
            ))
          : rank === 4
          ? rank4Chinghos.map((chingho, idx) => (
              <PlateChinghoBtn
                key={`${chingho}${idx}`}
                rank={rank}
                onClick={onClick}
              >
                {chingho}
              </PlateChinghoBtn>
            ))
          : null}
      </div>
    </div>
  );
};

export default PlateChinghoListByRank;
