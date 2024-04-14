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

export interface IWikiRes {
  id: number;
  mustread: IWiki[];
  [type: string]: number | IWiki[];
}

const PatternPracticeAPI = {
  create,
  getAll,
  getOne,
  update,
  deleteOne,
};

export default PatternPracticeAPI;
