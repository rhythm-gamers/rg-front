import { IGetOnePost } from ".";
import fetchExtended from "../fetchExtended";
import { parseJsonWithWrap } from "../utils";

/**
 *
 * @param id board id
 * @returns
 */
const getOne = async (id: number): Promise<{ data: IGetOnePost }> => {
  const res = await fetchExtended(`/post/spec/${id}`, {
    method: "get",
    cache: process.env.NODE_ENV == "development" ? "no-store" : "default",
  });
  const json = await res.json();
  const parsedJson = parseJsonWithWrap(json);
  return parsedJson;
};

export default getOne;
