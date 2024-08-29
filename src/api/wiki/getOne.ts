import { IWiki } from ".";
import fetchExtended from "../fetchExtended";
import { parseJsonWithWrap } from "../utils";

/**
 *
 * @param title wiki title
 * @returns
 */
const getOne = async (title: string): Promise<{ data: IWiki }> => {
  const res = await fetchExtended(`/wiki/spec/${title}`, {
    method: "get",
    cache: process.env.NODE_ENV == "development" ? "no-store" : "default",
  });
  const json = await res.json();
  const parsedJson = parseJsonWithWrap(json);
  return parsedJson;
};

export default getOne;
