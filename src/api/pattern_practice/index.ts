import { IPatternInfo } from "../interfaces";
import { TKeyNum } from "../types";
import create from "./create";
import deleteOne from "./deleteOne";
import getAll from "./getAll";
import getOne from "./getOne";
import update from "./update";

export interface IPatternPracticeReq {
  title: string;
  level: number;
  keyNum: TKeyNum;
  imgSrc: string;
  noteSrc: string;
  musicSrc: string;
  patternInfo: IPatternInfo;
  [type: string]: string | number | IPatternInfo;
}

export interface IPatternPracticeReqOptional
  extends Partial<IPatternPracticeReq> {}

export interface IPatternPracticeRes {
  id: number;
  title: string;
  level: number;
  keyNum: TKeyNum;
  imgSrc: string;
  noteSrc: string;
  musicSrc: string;
  patternInfo: IPatternInfo;
}

const PatternPracticeAPI = {
  create,
  getAll,
  getOne,
  update,
  deleteOne,
};

export default PatternPracticeAPI;
