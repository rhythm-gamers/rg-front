import { ILevelTestRes } from ".";
import fetchExtended from "../fetchExtended";
import { parseJsonWithWrap } from "../utils";

/**
 *
 * @param id level test id
 * @returns
 */
const getOne = async (id: number): Promise<{ data: ILevelTestRes }> => {
  const res = await fetchExtended(`/level-test?id=${id}`, { method: "get" });
  const json = await res.json();
  const parsedJson = parseJsonWithWrap(json);
  return parsedJson;
};

export default getOne;