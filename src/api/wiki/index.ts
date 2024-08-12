import create from "./create";
import deleteOne from "./deleteOne";
import getAll from "./getAll";
import getOne from "./getOne";
import update from "./update";

export interface IWiki {
  wikiId: number;
  title: string;
  content?: string;
  mustRead: boolean;
}

export interface IWikiReq {
  title: string;
  content: string;
  mustRead: boolean;
}

export interface IWikiReqOptional extends Partial<IWikiReq> {}

export type TMenu = "mustread"|"ㄱ"|"ㄴ"|"ㄷ"|"ㄹ"|"ㅁ"|"ㅂ"|"ㅅ"|"ㅇ"|"ㅈ"|"ㅊ"|"ㅋ"|"ㅌ"|"ㅍ"|"ㅎ"|"ㄲ"|"ㄸ"|"ㅃ"|"ㅉ"|"ㅆ";

export type TWikis = {
  [key in TMenu]?: IWiki[];
};

export interface IWikiRes extends TWikis {
  id: number;
}

const WikiAPI = {
  create,
  getAll,
  getOne,
  update,
  deleteOne,
};

export default WikiAPI;
