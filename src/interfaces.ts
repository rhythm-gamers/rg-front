import { ReactNode } from "react";
import { TChinghoRank, TSize } from "./types";

export interface IChingho {
  rank: TChinghoRank;
  children: ReactNode;
  size?: TSize;
  viewOnly?: boolean;
  disabled?: boolean;
  visibleChingho?: boolean;
  visibleChinghoIcon?: boolean;
  onClick?: (rank: TChinghoRank, children: ReactNode) => void;
}

export interface IPlateVisible {
  visibleLevel: boolean;
  visibleChingho: boolean;
  visibleChinghoIcon: boolean;
}
