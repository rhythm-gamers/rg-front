export interface INoteRef {
  key: string;
  time: number;
  positionX: number;
  positionY: number;
  width: number;
  color: string;
}

export interface IJudgeResult {
  "100%": number;
  "90%": number;
  "60%": number;
  "30%": number;
  "0%": number;
  total: number;
}

export type JudgeResult = "100%" | "90%" | "60%" | "30%" | "0%";
