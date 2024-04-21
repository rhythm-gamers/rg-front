// 이후, 유저 정보에 관한 항목들 추가해야함.

import create from "./create";
import deleteOne from "./deleteOne";
import getAll from "./getAll";
import getOne from "./getOne";
import update from "./update";

export interface IBoardReq {
  title: string;
  description: string;
}

export interface IBoardReqOptional
  extends Partial<Pick<IBoardReq, "description">> {}

export interface IBoardRes {
  id: number;
  title: number;
  description: number;
}

const BoardAPI = {
  create,
  getOne,
  getAll,
  update,
  deleteOne,
};

export default BoardAPI;
