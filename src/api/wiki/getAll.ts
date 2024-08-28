import { IWikiRes } from ".";
import fetchExtended from "../fetchExtended";
import { parseJsonWithWrap } from "../utils";

const getAll = async (): Promise<{ data: IWikiRes }> => {
  const res = await fetchExtended("/wiki/metadata", {
    method: "get",
    cache: process.env.NODE_ENV == "development" ? "no-store" : "default",
  });
  const json = await res.json();
  const parsedJson = parseJsonWithWrap(json);
  return parsedJson;
};

export default getAll;
