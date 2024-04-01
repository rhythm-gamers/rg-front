import { ReactNode } from "react";
import { TChinghoRank, TSize } from "./types";

export interface IChingho {
  rank: TChinghoRank;
  children: ReactNode;
  size?: TSize;
  viewOnly?: boolean;
  disabled?: boolean;
  onClick?: (rank: TChinghoRank, children: ReactNode) => void;
}
