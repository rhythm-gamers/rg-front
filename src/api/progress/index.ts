import { ILevelTestRes } from "../level_tests";
import getAllAtLevelTest from "./getAllAtLevelTest";
import getAllAtPractice from "./getAllAtPractice";
import getOneAtLevelTest from "./getOneAtLevelTest";
import getOneAtPractice from "./getOneAtPractice";
import updateAtLevelTest from "./updateAtLevelTest.ts.ts";
import updateAtPractice from "./updateAtPractice.ts";

export interface IProgress {
  currentRate: string;
  updatedAt: string;
  levelTest: Pick<ILevelTestRes, "title" | "level" | "keyNum">;
}

export interface IProgressReq {
  progress: number;
}

export interface IProgressRes {
  "4": IProgress[];
  "5": IProgress[];
  "6": IProgress[];
}

const ProgressAPI = {
  getOneAtLevelTest,
  getOneAtPractice,
  getAllAtLevelTest,
  getAllAtPractice,
  updateAtLevelTest,
  updateAtPractice,
};

export default ProgressAPI;
