import { IPatternInfo } from "../interfaces";
import { TKeyNum } from "../types";
import create from "./create";
import deleteOne from "./deleteOne";
import getAll from "./getAll";
import getOne from "./getOne";
import update from "./update";

export interface ILevelTestReq {
  title: string;
  level: number;
  goalRate: number;
  keyNum: TKeyNum;
  imgSrc: string;
  noteSrc: string;
  musicSrc: string;
  patternInfo: IPatternInfo;
  [type: string]: string | number | IPatternInfo;
}

export interface ILevelTestReqOptional {
  title?: string;
  level?: number;
  goalRate?: number;
  keyNum?: TKeyNum;
  imgSrc?: string;
  noteSrc?: string;
  musicSrc?: string;
  patternInfo?: IPatternInfo;
  [type: string]: string | number | IPatternInfo | undefined;
}

export interface ILevelTestRes {
  testId: number;
  title: string;
  level: number;
  goalRate: number;
  keyNum: TKeyNum;
  imgSrc: string;
  noteSrc: string;
  musicSrc: string;
  patternInfo: IPatternInfo;
}

const LevelTestAPI = {
  create,
  getAll,
  getOne,
  update,
  deleteOne,
};

export default LevelTestAPI;
