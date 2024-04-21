import { URLSearchParams } from "url";
import { IWiki } from ".";
import fetchExtended from "../fetchExtended";
import { parseJsonWithWrap } from "../utils";

/**
 *
 * @param title wiki title
 * @returns
 */
const getOne = async (title: string): Promise<{ data: IWiki }> => {
  const parsedTitle = new URLSearchParams(title);
  const res = await fetchExtended(`/wiki/spec/${parsedTitle}`, {
    method: "get",
  });
  const json = await res.json();
  const parsedJson = parseJsonWithWrap(json);
  return parsedJson;
};

export default getOne;
